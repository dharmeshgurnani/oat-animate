import {
  readFileSync,
  writeFileSync,
  statSync,
  createReadStream,
  createWriteStream,
  existsSync,
  mkdirSync,
  copyFileSync,
} from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");
const distDir = join(rootDir, "dist");
const libraryDir = join(rootDir, "oat-animate");
const websiteAssetsDir = join(rootDir, "website", "static", "assets");

function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,])\s*/g, "$1")
    .replace(/;\s}/g, "}")
    .trim();
}

function minifyJS(js) {
  return js
    .replace(/\/\/.*$/gm, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .trim();
}

async function gzipFile(inputPath, outputPath) {
  const gzip = createGzip({ level: 9 });
  const source = createReadStream(inputPath);
  const destination = createWriteStream(outputPath);
  await pipeline(source, gzip, destination);
}

function getFileSize(filePath) {
  const stats = statSync(filePath);
  return stats.size;
}

if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

if (!existsSync(websiteAssetsDir)) {
  mkdirSync(websiteAssetsDir, { recursive: true });
}

async function build() {
  console.log("Starting library build...");

  const cssInput = join(libraryDir, "oat-animate.css");
  const jsInput = join(libraryDir, "oat-animate.js");
  const cssMinOutput = join(distDir, "oat-animate.min.css");
  const jsMinOutput = join(distDir, "oat-animate.min.js");
  const cssGzipOutput = join(distDir, "oat-animate.min.css.gz");
  const jsGzipOutput = join(distDir, "oat-animate.min.js.gz");

  console.log("Reading source files...");
  const cssContent = readFileSync(cssInput, "utf8");
  const jsContent = readFileSync(jsInput, "utf8");

  console.log("Minifying CSS...");
  const minifiedCSS = minifyCSS(cssContent);
  writeFileSync(cssMinOutput, minifiedCSS);
  const cssOriginalSize = getFileSize(cssInput);
  const cssMinSize = getFileSize(cssMinOutput);

  console.log("Minifying JavaScript...");
  const minifiedJS = minifyJS(jsContent);
  writeFileSync(jsMinOutput, minifiedJS);
  const jsOriginalSize = getFileSize(jsInput);
  const jsMinSize = getFileSize(jsMinOutput);

  console.log("Gzipping CSS...");
  await gzipFile(cssMinOutput, cssGzipOutput);
  const cssGzipSize = getFileSize(cssGzipOutput);

  console.log("Gzipping JavaScript...");
  await gzipFile(jsMinOutput, jsGzipOutput);
  const jsGzipSize = getFileSize(jsGzipOutput);

  copyFileSync(cssMinOutput, join(websiteAssetsDir, "oat-animate.min.css"));
  copyFileSync(cssGzipOutput, join(websiteAssetsDir, "oat-animate.min.css.gz"));
  copyFileSync(jsMinOutput, join(websiteAssetsDir, "oat-animate.min.js"));
  copyFileSync(jsGzipOutput, join(websiteAssetsDir, "oat-animate.min.js.gz"));

  console.log("Library build complete.");
  console.log(`CSS: ${cssOriginalSize} -> ${cssMinSize} bytes, gzip ${cssGzipSize} bytes`);
  console.log(`JS: ${jsOriginalSize} -> ${jsMinSize} bytes, gzip ${jsGzipSize} bytes`);
  console.log("Copied minified library assets into /website/static/assets.");
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
