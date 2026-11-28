const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

// CRC32 table
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
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
  chunk.write(type, 4, 4, "ascii");
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
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const ihdrChunk = createChunk("IHDR", ihdr);

  const stride = width * 4;
  const rawScanlines = Buffer.alloc(height * (stride + 1));
  for (let y = 0; y < height; y++) {
    rawScanlines[y * (stride + 1)] = 0; // None filter
    rgbaBuffer.copy(rawScanlines, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }

  const idatData = zlib.deflateSync(rawScanlines, { level: 9 });
  const idatChunk = createChunk("IDAT", idatData);
  const iendChunk = createChunk("IEND", Buffer.alloc(0));

  return Buffer.concat([header, ihdrChunk, idatChunk, iendChunk]);
}

function decodePNG(buf) {
  let pos = 8,
    w,
    h;
  const idat = [];
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString("ascii", pos + 4, pos + 8);
    if (type === "IHDR") {
      w = buf.readUInt32BE(pos + 8);
      h = buf.readUInt32BE(pos + 12);
    } else if (type === "IDAT") {
      idat.push(buf.slice(pos + 8, pos + 8 + len));
    }
    pos += 12 + len;
  }

  const raw = zlib.inflateSync(Buffer.concat(idat));
  const bpp = 4;
  const stride = w * bpp + 1;
  const rgba = Buffer.alloc(w * h * bpp);
  let prev = Buffer.alloc(w * bpp);
  let curr = Buffer.alloc(w * bpp);

  for (let y = 0; y < h; y++) {
    const filter = raw[y * stride];
    for (let x = 0; x < w * bpp; x++) {
      const rawVal = raw[y * stride + 1 + x];
      const a = x >= bpp ? curr[x - bpp] : 0;
      const b = prev[x];
      const c = x >= bpp ? prev[x - bpp] : 0;
      let val = 0;
      if (filter === 0) val = rawVal;
      else if (filter === 1) val = (rawVal + a) & 0xff;
      else if (filter === 2) val = (rawVal + b) & 0xff;
      else if (filter === 3) val = (rawVal + Math.floor((a + b) / 2)) & 0xff;
      else if (filter === 4) {
        const p = a + b - c;
        const pa = Math.abs(p - a);
        const pb = Math.abs(p - b);
        const pc = Math.abs(p - c);
        let pr = a;
        if (pb < pa && pb <= pc) pr = b;
        else if (pc < pa && pc < pb) pr = c;
        val = (rawVal + pr) & 0xff;
      }
      curr[x] = val;
    }
    curr.copy(rgba, y * w * bpp);
    curr.copy(prev);
  }

  return { width: w, height: h, rgba };
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
        const top =
          srcRgba[(y0 * srcW + x0) * 4 + c] * (1 - xWeight) +
          srcRgba[(y0 * srcW + x1) * 4 + c] * xWeight;
        const bottom =
          srcRgba[(y1 * srcW + x0) * 4 + c] * (1 - xWeight) +
          srcRgba[(y1 * srcW + x1) * 4 + c] * xWeight;
        dst[(y * dstW + x) * 4 + c] = Math.round(top * (1 - yWeight) + bottom * yWeight);
      }
    }
  }
  return dst;
}

// 1. Load user's uploaded logo image
const inputPath =
  "C:/Users/ARUN/.gemini/antigravity/brain/5be94de4-8c2a-45ff-bd75-a2c8f3c447f9/.user_uploaded/media_1795839023405_0640a1b7.png";
const inputBuf = fs.readFileSync(inputPath);
const { width: srcW, height: srcH, rgba: srcRgba } = decodePNG(inputBuf);

console.log(`Loaded logo: ${srcW}x${srcH}`);

// 2. Identify bounding box of logo and transform "VABS" text to WHITE
// The "VABS" text is located at x >= 370
// We create a version where VABS text pixels (x >= 370, alpha > 0) are set to white (255, 255, 255)
const whiteTextRgba = Buffer.from(srcRgba);

for (let y = 0; y < srcH; y++) {
  for (let x = 0; x < srcW; x++) {
    const idx = (y * srcW + x) * 4;
    const a = whiteTextRgba[idx + 3];
    if (a > 0 && x >= 365) {
      // Text pixel: make it pure white, retaining its original anti-aliased alpha!
      whiteTextRgba[idx] = 255;
      whiteTextRgba[idx + 1] = 255;
      whiteTextRgba[idx + 2] = 255;
      // keep alpha as whiteTextRgba[idx + 3]
    }
  }
}

// Tight bounding box for the full logo (icon + white text):
// minX: 93, maxX: 934, minY: 144, maxY: 402
const pad = 12;
const cropX = Math.max(0, 93 - pad);
const cropY = Math.max(0, 144 - pad);
const cropW = Math.min(srcW - cropX, 934 - 93 + 1 + pad * 2);
const cropH = Math.min(srcH - cropY, 402 - 144 + 1 + pad * 2);

console.log(`Cropping logo to: ${cropW}x${cropH}`);

const croppedLogoRgba = Buffer.alloc(cropW * cropH * 4);
for (let y = 0; y < cropH; y++) {
  for (let x = 0; x < cropW; x++) {
    const srcIdx = ((cropY + y) * srcW + (cropX + x)) * 4;
    const dstIdx = (y * cropW + x) * 4;
    croppedLogoRgba[dstIdx] = whiteTextRgba[srcIdx];
    croppedLogoRgba[dstIdx + 1] = whiteTextRgba[srcIdx + 1];
    croppedLogoRgba[dstIdx + 2] = whiteTextRgba[srcIdx + 2];
    croppedLogoRgba[dstIdx + 3] = whiteTextRgba[srcIdx + 3];
  }
}

// Save white-text transparent logo
const logoPng = encodePNG(cropW, cropH, croppedLogoRgba);
fs.writeFileSync("public/vabsgen-logo-white.png", logoPng);
fs.writeFileSync("public/vabsgen-logo.png", logoPng);
console.log("Saved public/vabsgen-logo-white.png and public/vabsgen-logo.png");

// 3. Extract the circular icon mark for Favicon
// Icon bounding box: minX: 93, maxX: 369, minY: 144, maxY: 402 -> 277 x 259
const iconPad = 8;
const iconCropX = Math.max(0, 93 - iconPad);
const iconCropY = Math.max(0, 144 - iconPad);
const iconCropW = 369 - 93 + 1 + iconPad * 2;
const iconCropH = 402 - 144 + 1 + iconPad * 2;

const rawIconRgba = Buffer.alloc(iconCropW * iconCropH * 4);
for (let y = 0; y < iconCropH; y++) {
  for (let x = 0; x < iconCropW; x++) {
    const srcIdx = ((iconCropY + y) * srcW + (iconCropX + x)) * 4;
    const dstIdx = (y * iconCropW + x) * 4;
    rawIconRgba[dstIdx] = srcRgba[srcIdx];
    rawIconRgba[dstIdx + 1] = srcRgba[srcIdx + 1];
    rawIconRgba[dstIdx + 2] = srcRgba[srcIdx + 2];
    rawIconRgba[dstIdx + 3] = srcRgba[srcIdx + 3];
  }
}

// Function to generate a centered square favicon with transparent background
function createFaviconSquare(targetSize) {
  const canvas = Buffer.alloc(targetSize * targetSize * 4); // all 0 = transparent
  // We want the circular icon mark to fill ~86% of the square canvas
  const innerSize = Math.round(targetSize * 0.88);
  const aspect = iconCropW / iconCropH;
  let dstW = innerSize;
  let dstH = Math.round(innerSize / aspect);
  if (dstH > innerSize) {
    dstH = innerSize;
    dstW = Math.round(innerSize * aspect);
  }

  const scaled = resizeBilinear(rawIconRgba, iconCropW, iconCropH, dstW, dstH);
  const offsetX = Math.round((targetSize - dstW) / 2);
  const offsetY = Math.round((targetSize - dstH) / 2);

  for (let y = 0; y < dstH; y++) {
    for (let x = 0; x < dstW; x++) {
      const srcIdx = (y * dstW + x) * 4;
      const dstIdx = ((offsetY + y) * targetSize + (offsetX + x)) * 4;
      canvas[dstIdx] = scaled[srcIdx];
      canvas[dstIdx + 1] = scaled[srcIdx + 1];
      canvas[dstIdx + 2] = scaled[srcIdx + 2];
      canvas[dstIdx + 3] = scaled[srcIdx + 3];
    }
  }

  return canvas;
}

// Generate sizes
const fav512 = createFaviconSquare(512);
fs.writeFileSync("public/favicon.png", encodePNG(512, 512, fav512));

const fav180 = createFaviconSquare(180);
fs.writeFileSync("public/apple-touch-icon.png", encodePNG(180, 180, fav180));

const fav32 = createFaviconSquare(32);
const png32 = encodePNG(32, 32, fav32);
fs.writeFileSync("public/favicon-32x32.png", png32);

const fav16 = createFaviconSquare(16);
const png16 = encodePNG(16, 16, fav16);
fs.writeFileSync("public/favicon-16x16.png", png16);

// Build .ico containing 16x16 and 32x32 PNG entries
function createIco(images) {
  // ICO header: 6 bytes
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // icon type
  header.writeUInt16LE(count, 4);

  let offset = 6 + count * 16;
  const dirEntries = [];
  const buffers = [];

  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry[0] = img.width >= 256 ? 0 : img.width;
    entry[1] = img.height >= 256 ? 0 : img.height;
    entry[2] = 0; // color palette count
    entry[3] = 0; // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(img.data.length, 8);
    entry.writeUInt32LE(offset, 12);
    dirEntries.push(entry);
    buffers.push(img.data);
    offset += img.data.length;
  }

  return Buffer.concat([header, ...dirEntries, ...buffers]);
}

const icoBuf = createIco([
  { width: 16, height: 16, data: png16 },
  { width: 32, height: 32, data: png32 },
]);
fs.writeFileSync("public/favicon.ico", icoBuf);

// Create SVG favicon with modern vector approximation
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <defs>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0066FF" />
      <stop offset="100%" stop-color="#00D2FF" />
    </linearGradient>
    <linearGradient id="tealGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#14B8A6" />
      <stop offset="100%" stop-color="#38BDF8" />
    </linearGradient>
    <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F97316" />
      <stop offset="100%" stop-color="#FB923C" />
    </linearGradient>
  </defs>
  <!-- Outer Ring Elements -->
  <circle cx="50" cy="50" r="42" stroke="url(#blueGrad)" stroke-width="8" stroke-linecap="round" stroke-dasharray="190 70" transform="rotate(-45 50 50)" />
  <circle cx="50" cy="50" r="38" stroke="url(#orangeGrad)" stroke-width="6" stroke-linecap="round" stroke-dasharray="80 180" transform="rotate(75 50 50)" />
  <!-- Center Checkmark / V Icon -->
  <path d="M30 48 L44 64 L72 30" stroke="url(#tealGrad)" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  <path d="M30 48 L44 64 L58 48" stroke="url(#blueGrad)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.9" />
</svg>`;
fs.writeFileSync("public/favicon.svg", svgContent);

console.log("All favicons successfully generated!");
