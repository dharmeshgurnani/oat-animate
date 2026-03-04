import { defineConfig } from "vite";
import { resolve } from "path";
import { copyFileSync, existsSync, mkdirSync } from "fs";
import compression from "vite-plugin-compression";
import { viteStaticCopy } from "vite-plugin-static-copy";

const websiteAssetsDir = resolve(__dirname, "website/client/assets");

function stageBuiltAssets() {
    return {
        name: "stage-built-assets",
        closeBundle: async () => {
            console.log("Staging built assets for website...");
            if (!existsSync(websiteAssetsDir)) {
                mkdirSync(websiteAssetsDir, { recursive: true });
            }

            const files = [
                "oat-animate.min.js",
                "oat-animate.min.js.gz",
                "oat-animate.min.css",
                "oat-animate.min.css.gz",
            ];

            files.forEach((file) => {
                const src = resolve(__dirname, "dist", file);
                if (existsSync(src)) {
                    copyFileSync(src, resolve(websiteAssetsDir, file));
                    console.log(`  Staged ${file}`);
                }
            });
        },
    };
}

export default defineConfig({
    build: {
        lib: {
            entry: {
                "oat-animate": resolve(__dirname, "oat-animate/oat-animate.js"),
            },
            name: "OATAnimate",
            formats: ["iife"],
            fileName: (format) => `oat-animate.min.js`,
        },
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith(".css"))
                        return "oat-animate.min.css";
                    return assetInfo.name;
                },
                extend: true,
            },
        },
        minify: "terser",
        sourcemap: false,
        outDir: "dist",
        emptyOutDir: true,
    },
    plugins: [
        compression({
            verbose: true,
            disable: false,
            threshold: 0,
            algorithm: "gzip",
            ext: ".gz",
        }),
        viteStaticCopy({
            targets: [
                {
                    src: "oat-animate/oat-animate.js",
                    dest: "../website/client/assets/",
                },
                {
                    src: "oat-animate/oat-animate.css",
                    dest: "../website/client/assets/",
                },
                {
                    src: "node_modules/@knadh/oat/oat.min.css",
                    dest: "../website/client/assets/",
                },
                {
                    src: "node_modules/@knadh/oat/oat.min.js",
                    dest: "../website/client/assets/",
                },
                {
                    src: "node_modules/highlight.js/styles/github-dark.min.css",
                    dest: "../website/client/assets/",
                },
            ],
        }),
        stageBuiltAssets(),
    ],
});
