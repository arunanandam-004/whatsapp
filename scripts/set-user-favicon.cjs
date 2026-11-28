const fs = require("fs");
const zlib = require("zlib");

const srcPath =
  "C:/Users/ARUN/.gemini/antigravity/brain/5be94de4-8c2a-45ff-bd75-a2c8f3c447f9/.user_uploaded/media_1795839973554_cd49499a.png";
const rawPng = fs.readFileSync(srcPath);

// 1. Apple touch icon & high-res favicon
fs.writeFileSync("public/apple-touch-icon.png", rawPng);
fs.writeFileSync("public/favicon.png", rawPng);

// CRC32 implementation
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  crcTable[n] = c;
}
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function createChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, "ascii");
  data.copy(chunk, 8);
  chunk.writeUInt32BE(crc32(chunk.slice(4, 8 + len)), 8 + len);
  return chunk;
}
function encodePNG(w, h, rgba) {
  const header = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  const ihdrChunk = createChunk("IHDR", ihdr);
  const raw = Buffer.alloc(h * (w * 4 + 1));
  for (let y = 0; y < h; y++) {
    raw[y * (w * 4 + 1)] = 0;
    rgba.copy(raw, y * (w * 4 + 1) + 1, y * w * 4, (y + 1) * w * 4);
  }
  const idat = createChunk("IDAT", zlib.deflateSync(raw, { level: 9 }));
  const iend = createChunk("IEND", Buffer.alloc(0));
  return Buffer.concat([header, ihdrChunk, idat, iend]);
}

function decodePNG(buf) {
  let pos = 8,
    w,
    h;
  const idats = [];
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString("ascii", pos + 4, pos + 8);
    if (type === "IHDR") {
      w = buf.readUInt32BE(pos + 8);
      h = buf.readUInt32BE(pos + 12);
    } else if (type === "IDAT") {
      idats.push(buf.slice(pos + 8, pos + 8 + len));
    }
    pos += 12 + len;
  }
  const raw = zlib.inflateSync(Buffer.concat(idats));
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
  return { w, h, rgba };
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

const { w: srcW, h: srcH, rgba: srcRgba } = decodePNG(rawPng);

// Generate 32x32 and 16x16 PNGs
const rgba32 = resizeBilinear(srcRgba, srcW, srcH, 32, 32);
const png32 = encodePNG(32, 32, rgba32);
fs.writeFileSync("public/favicon-32x32.png", png32);

const rgba16 = resizeBilinear(srcRgba, srcW, srcH, 16, 16);
const png16 = encodePNG(16, 16, rgba16);
fs.writeFileSync("public/favicon-16x16.png", png16);

// Build SVG embedding this exact image
const b64 = rawPng.toString("base64");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180"><image width="180" height="180" href="data:image/png;base64,${b64}"/></svg>`;
fs.writeFileSync("public/favicon.svg", svg);

// Standard BMP DIB ICO (16x16 and 32x32)
function createDibIco(images) {
  const num = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // icon
  header.writeUInt16LE(num, 4);

  let offset = 6 + num * 16;
  const dirList = [];
  const dibList = [];

  for (const img of images) {
    const { size, rgba } = img;
    // DIB header (40 bytes)
    const dibHeader = Buffer.alloc(40);
    dibHeader.writeUInt32LE(40, 0); // biSize
    dibHeader.writeInt32LE(size, 4); // biWidth
    dibHeader.writeInt32LE(size * 2, 8); // biHeight (XOR + AND mask height)
    dibHeader.writeUInt16LE(1, 12); // biPlanes
    dibHeader.writeUInt16LE(32, 14); // biBitCount (32-bit RGBA)
    dibHeader.writeUInt32LE(0, 16); // biCompression (BI_RGB)
    dibHeader.writeUInt32LE(size * size * 4, 20); // biSizeImage

    // Pixel data: bottom-to-top BGRA
    const pixels = Buffer.alloc(size * size * 4);
    for (let y = 0; y < size; y++) {
      const srcY = size - 1 - y; // bottom-up
      for (let x = 0; x < size; x++) {
        const srcIdx = (srcY * size + x) * 4;
        const dstIdx = (y * size + x) * 4;
        pixels[dstIdx] = rgba[srcIdx + 2]; // B
        pixels[dstIdx + 1] = rgba[srcIdx + 1]; // G
        pixels[dstIdx + 2] = rgba[srcIdx]; // R
        pixels[dstIdx + 3] = rgba[srcIdx + 3]; // A
      }
    }

    // 1-bit AND mask: all 0
    const andMaskRowBytes = Math.ceil(size / 32) * 4;
    const andMask = Buffer.alloc(andMaskRowBytes * size, 0);

    const dibData = Buffer.concat([dibHeader, pixels, andMask]);

    const dir = Buffer.alloc(16);
    dir[0] = size >= 256 ? 0 : size;
    dir[1] = size >= 256 ? 0 : size;
    dir[2] = 0; // color count
    dir[3] = 0; // reserved
    dir.writeUInt16LE(1, 4); // planes
    dir.writeUInt16LE(32, 6); // bpp
    dir.writeUInt32LE(dibData.length, 8); // size
    dir.writeUInt32LE(offset, 12); // offset

    dirList.push(dir);
    dibList.push(dibData);
    offset += dibData.length;
  }

  return Buffer.concat([header, ...dirList, ...dibList]);
}

const dibIco = createDibIco([
  { size: 16, rgba: rgba16 },
  { size: 32, rgba: rgba32 },
]);
fs.writeFileSync("public/favicon.ico", dibIco);

console.log("Successfully set user's uploaded image as favicon across all formats!");
