import { copyFileSync, existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootDir = join(__dirname, "..");
const staticAssetsDir = join(rootDir, "website", "static", "assets");
const nodeModulesDir = join(rootDir, "node_modules");
const libraryDir = join(rootDir, "oat-animate");
const distDir = join(rootDir, "dist");

if (!existsSync(staticAssetsDir)) {
  mkdirSync(staticAssetsDir, { recursive: true });
}

function copyAsset(srcPath, destName) {
  const destPath = join(staticAssetsDir, destName);
  if (existsSync(srcPath)) {
    copyFileSync(srcPath, destPath);
    console.log(`  Copied ${destName}`);
  } else {
    console.warn(`  Missing asset: ${srcPath}`);
  }
}

function runAstroBuild() {
  return new Promise((resolve, reject) => {
    const child = spawn("npx", ["astro", "build", "--root", "website"], {
      cwd: rootDir,
      stdio: "inherit",
      shell: true,
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Astro build failed with code ${code}`));
      }
    });
  });
}

async function buildSite() {
  console.log("Building Astro site into /website/public ...");
  console.log("\nStaging static assets...");

  copyAsset(join(nodeModulesDir, "@knadh", "oat", "oat.min.css"), "oat.min.css");
  copyAsset(join(nodeModulesDir, "@knadh", "oat", "oat.min.js"), "oat.min.js");
  copyAsset(
    join(nodeModulesDir, "highlight.js", "styles", "github-dark.min.css"),
    "github-dark.min.css",
  );

  copyAsset(join(libraryDir, "oat-animate.css"), "oat-animate.css");
  copyAsset(join(libraryDir, "oat-animate.js"), "oat-animate.js");

  copyAsset(join(distDir, "oat-animate.min.css"), "oat-animate.min.css");
  copyAsset(join(distDir, "oat-animate.min.css.gz"), "oat-animate.min.css.gz");
  copyAsset(join(distDir, "oat-animate.min.js"), "oat-animate.min.js");
  copyAsset(join(distDir, "oat-animate.min.js.gz"), "oat-animate.min.js.gz");

  console.log("\nRunning Astro build...");
  await runAstroBuild();
  console.log("Astro site build complete.");
}

buildSite().catch((err) => {
  console.error(err);
  process.exit(1);
});
