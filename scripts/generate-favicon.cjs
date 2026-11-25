const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

// CRC32 implementation for PNG chunks
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function createChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const typeAndData = chunk.slice(4, 8 + len);
  chunk.writeUInt32BE(crc32(typeAndData), 8 + len);
  return chunk;
}

function encodePNG(width, height, rgbaBuffer) {
  const header = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 6;  // RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const ihdrChunk = createChunk('IHDR', ihdr);

  // Scanlines with filter byte 0
  const stride = width * 4;
  const rawScanlines = Buffer.alloc(height * (stride + 1));
  for (let y = 0; y < height; y++) {
    rawScanlines[y * (stride + 1)] = 0; // None filter
    rgbaBuffer.copy(rawScanlines, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }

  const idatData = zlib.deflateSync(rawScanlines, { level: 9 });
  const idatChunk = createChunk('IDAT', idatData);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([header, ihdrChunk, idatChunk, iendChunk]);
}

function resizeBilinear(srcRgba, srcW, srcH, dstW, dstH) {
  const dst = Buffer.alloc(dstW * dstH * 4);
  for (let y = 0; y < dstH; y++) {
    const srcY = (y + 0.5) * (srcH / dstH) - 0.5;
    const y0 = Math.max(0, Math.floor(srcY));
    const y1 = Math.min(srcH - 1, y0 + 1);
    const yWeight = srcY - y0;

    for (let x = 0; x < dstW; x++) {
      const srcX = (x + 0.5) * (srcW / dstW) - 0.5;
      const x0 = Math.max(0, Math.floor(srcX));
      const x1 = Math.min(srcW - 1, x0 + 1);
      const xWeight = srcX - x0;

      for (let c = 0; c < 4; c++) {
        const top = srcRgba[(y0 * srcW + x0) * 4 + c] * (1 - xWeight) + srcRgba[(y0 * srcW + x1) * 4 + c] * xWeight;
        const bottom = srcRgba[(y1 * srcW + x0) * 4 + c] * (1 - xWeight) + srcRgba[(y1 * srcW + x1) * 4 + c] * xWeight;
        dst[(y * dstW + x) * 4 + c] = Math.round(top * (1 - yWeight) + bottom * yWeight);
      }
    }
  }
  return dst;
}

// Read vabsgen-logo.png
const logoBuf = fs.readFileSync('public/vabsgen-logo.png');
let pos = 8, logoW, logoH;
const idatChunks = [];
while (pos < logoBuf.length) {
  const len = logoBuf.readUInt32BE(pos);
  const type = logoBuf.toString('ascii', pos + 4, pos + 8);
  if (type === 'IHDR') {
    logoW = logoBuf.readUInt32BE(pos + 8);
    logoH = logoBuf.readUInt32BE(pos + 12);
  } else if (type === 'IDAT') {
    idatChunks.push(logoBuf.slice(pos + 8, pos + 8 + len));
  }
  pos += 12 + len;
}

const raw = zlib.inflateSync(Buffer.concat(idatChunks));
const stride = logoW * 4 + 1;
const logoRgba = Buffer.alloc(logoW * logoH * 4);
for (let y = 0; y < logoH; y++) {
  const filterType = raw[y * stride];
  for (let x = 0; x < logoW * 4; x++) {
    const rawVal = raw[y * stride + 1 + x];
    const left = x >= 4 ? logoRgba[y * logoW * 4 + x - 4] : 0;
    const up = y > 0 ? logoRgba[(y - 1) * logoW * 4 + x] : 0;
    const upLeft = (y > 0 && x >= 4) ? logoRgba[(y - 1) * logoW * 4 + x - 4] : 0;
    let val = 0;
    if (filterType === 0) val = rawVal;
    else if (filterType === 1) val = (rawVal + left) & 0xff;
    else if (filterType === 2) val = (rawVal + up) & 0xff;
    else if (filterType === 3) val = (rawVal + Math.floor((left + up) / 2)) & 0xff;
    else if (filterType === 4) {
      const p = left + up - upLeft;
      const pa = Math.abs(p - left);
      const pb = Math.abs(p - up);
      const pc = Math.abs(p - upLeft);
      let pr = upLeft;
      if (pa <= pb && pa <= pc) pr = left;
      else if (pb <= pc) pr = up;
      val = (rawVal + pr) & 0xff;
    }
    logoRgba[y * logoW * 4 + x] = val;
  }
}

// Crop V icon bounds: X in [44, 493], Y in [110, 278]
const cropX = 44, cropY = 110;
const cropW = 493 - 44 + 1; // 450
const cropH = 278 - 110 + 1; // 169

const vIconRgba = Buffer.alloc(cropW * cropH * 4);
for (let y = 0; y < cropH; y++) {
  for (let x = 0; x < cropW; x++) {
    const srcIdx = ((cropY + y) * logoW + (cropX + x)) * 4;
    const dstIdx = (y * cropW + x) * 4;
    vIconRgba[dstIdx] = logoRgba[srcIdx];
    vIconRgba[dstIdx + 1] = logoRgba[srcIdx + 1];
    vIconRgba[dstIdx + 2] = logoRgba[srcIdx + 2];
    vIconRgba[dstIdx + 3] = logoRgba[srcIdx + 3];
  }
}

// Center inside a square canvas (512 x 512)
// With a dark rounded container or transparent background
function createSquareIcon(size, bgDark = true) {
  const canvas = Buffer.alloc(size * size * 4);

  // Background squircle / rounded rect if bgDark
  const r = size * 0.22;
  const padding = size * 0.12;
  const targetW = size - padding * 2;
  const targetH = Math.round(targetW * (cropH / cropW));

  if (bgDark) {
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        // Rounded rectangle check
        let inCorner = false;
        let dist = 0;
        if (x < r && y < r) { dist = Math.hypot(x - r, y - r); inCorner = true; }
        else if (x >= size - r && y < r) { dist = Math.hypot(x - (size - r - 1), y - r); inCorner = true; }
        else if (x < r && y >= size - r) { dist = Math.hypot(x - r, y - (size - r - 1)); inCorner = true; }
        else if (x >= size - r && y >= size - r) { dist = Math.hypot(x - (size - r - 1), y - (size - r - 1)); inCorner = true; }

        if (!inCorner || dist <= r) {
          const idx = (y * size + x) * 4;
          canvas[idx] = 11;     // Dark WhatsApp green tint
          canvas[idx + 1] = 20;
          canvas[idx + 2] = 16;
          canvas[idx + 3] = 255; // opaque
        }
      }
    }
  }

  // Resize V icon
  const scaledV = resizeBilinear(vIconRgba, cropW, cropH, targetW, targetH);
  const startX = Math.round((size - targetW) / 2);
  const startY = Math.round((size - targetH) / 2);

  // Blend scaled V onto canvas
  for (let y = 0; y < targetH; y++) {
    for (let x = 0; x < targetW; x++) {
      const srcIdx = (y * targetW + x) * 4;
      const alpha = scaledV[srcIdx + 3] / 255;
      if (alpha > 0) {
        const dstIdx = ((startY + y) * size + (startX + x)) * 4;
        const bgAlpha = canvas[dstIdx + 3] / 255;
        const outAlpha = alpha + bgAlpha * (1 - alpha);
        if (outAlpha > 0) {
          for (let c = 0; c < 3; c++) {
            canvas[dstIdx + c] = Math.round((scaledV[srcIdx + c] * alpha + canvas[dstIdx + c] * bgAlpha * (1 - alpha)) / outAlpha);
          }
          canvas[dstIdx + 3] = Math.round(outAlpha * 255);
        }
      }
    }
  }

  return canvas;
}

// Generate multiple sizes
console.log('Generating favicon assets...');
const icon512 = createSquareIcon(512);
const icon180 = createSquareIcon(180);
const icon32 = createSquareIcon(32);
const icon16 = createSquareIcon(16);

const png512 = encodePNG(512, 512, icon512);
const png180 = encodePNG(180, 180, icon180);
const png32 = encodePNG(32, 32, icon32);
const png16 = encodePNG(16, 16, icon16);

fs.writeFileSync('public/favicon.png', png512);
fs.writeFileSync('public/favicon-32x32.png', png32);
fs.writeFileSync('public/favicon-16x16.png', png16);
fs.writeFileSync('public/apple-touch-icon.png', png180);

// Build multi-size Windows ICO (with 16, 32, and 48)
// Windows ICO header format:
// 2 bytes: reserved (0)
// 2 bytes: type (1 for ICO)
// 2 bytes: count of images
// Directory entries: 16 bytes each
// Image data
function createIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  let offset = 6 + count * 16;
  const dirEntries = [];
  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry[0] = img.width >= 256 ? 0 : img.width;
    entry[1] = img.height >= 256 ? 0 : img.height;
    entry[2] = 0; // color count
    entry[3] = 0; // reserved
    entry.writeUInt16LE(1, 4);  // planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(img.data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += img.data.length;
    dirEntries.push(entry);
  }

  return Buffer.concat([header, ...dirEntries, ...images.map(img => img.data)]);
}

const icoBuf = createIco([
  { width: 16, height: 16, data: png16 },
  { width: 32, height: 32, data: png32 }
]);
fs.writeFileSync('public/favicon.ico', icoBuf);

console.log('Favicon files written successfully:');
console.log('- public/favicon.ico (' + icoBuf.length + ' bytes)');
console.log('- public/favicon.png (' + png512.length + ' bytes)');
console.log('- public/favicon-32x32.png (' + png32.length + ' bytes)');
console.log('- public/favicon-16x16.png (' + png16.length + ' bytes)');
console.log('- public/apple-touch-icon.png (' + png180.length + ' bytes)');
