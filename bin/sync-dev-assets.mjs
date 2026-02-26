import { copyFileSync, existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootDir = join(__dirname, "..");
const nodeModulesDir = join(rootDir, "node_modules");
const libraryDir = join(rootDir, "oat-animate");
const staticAssetsDir = join(rootDir, "website", "static", "assets");

if (!existsSync(staticAssetsDir)) {
  mkdirSync(staticAssetsDir, { recursive: true });
}

function copyAsset(srcPath, destName) {
  if (!existsSync(srcPath)) {
    throw new Error(`Missing asset: ${srcPath}`);
  }
  copyFileSync(srcPath, join(staticAssetsDir, destName));
  console.log(`  Copied ${destName}`);
}

function syncDevAssets() {
  console.log("Syncing dev assets into /website/static/assets ...");

  copyAsset(join(nodeModulesDir, "@knadh", "oat", "oat.min.css"), "oat.min.css");
  copyAsset(join(nodeModulesDir, "@knadh", "oat", "oat.min.js"), "oat.min.js");
  copyAsset(
    join(nodeModulesDir, "highlight.js", "styles", "github-dark.min.css"),
    "github-dark.min.css",
  );

  // Dev mode must always use source library files.
  copyAsset(join(libraryDir, "oat-animate.css"), "oat-animate.css");
  copyAsset(join(libraryDir, "oat-animate.js"), "oat-animate.js");
}

try {
  syncDevAssets();
} catch (err) {
  console.error(err);
  process.exit(1);
}

