# Oat Animate

![Oat Animate Logo](https://oat-animate.dharmeshgurnani.com/assets/logo.svg)

![visitors](https://visitor-badge.laobi.icu/badge?page_id=dharmeshgurnani.oat-animate)

Oat Animate is a lightweight animation extension for [Oat](https://github.com/knadh/oat), plus a docs/demo website that showcases how to use it.

This repository currently serves two purposes:
- Animation source: `oat-animate/oat-animate.css` and `oat-animate/oat-animate.js`
- Documentation/demo website: file-based routes under `website/src/pages/*` rendered by Astro

## What It Does

- Adds declarative animations via the `ot-animate` attribute
- Supports three trigger styles: on load (`fade-up`), on hover (`hover:fade-up`), and in view (`view:fade-up`)
- Ships a static demo site for examples and visual testing

## Supported Animations

- `fade-up`
- `fade-down`
- `zoom-in`
- `slide-left`
- `slide-right`
- `pop`
- `bounce`
- `flip-in`
- `pulse`
- `shake`

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Run the demo site locally:

```bash
npm run dev
```

3. Open the URL shown by `serve` (commonly `http://localhost:3000`).

## Usage

Add the assets to your page:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ots-animate@latest/dist/oat-animate.min.css" />
<script src="https://cdn.jsdelivr.net/npm/ots-animate@latest/dist/oat-animate.min.js"></script>
```

Then annotate elements:

```html
<!-- on load -->
<div ot-animate="fade-up">Hello</div>

<!-- on hover -->
<button ot-animate="hover:pop">Hover me</button>

<!-- when entering viewport -->
<section ot-animate="view:slide-left">In view</section>
```

## Customization

You can customize animation durations, delays, and easings using CSS variables, either globally or inline.

```html
<!-- Inline customization -->
<div ot-animate="fade-up" style="--ot-duration: 1.5s; --ot-delay: 0.5s;">
  Slow and delayed!
</div>
```

**Available Variables**:
- `--ot-duration` (default: `0.6s`)
- `--ot-delay` (default: `0s`)
- `--ot-easing` (default: `ease`)

## LLM Metadata

This project includes `llms.txt` metadata (per https://llmstxt.org/):

- Repository file: `./llms.txt`
- Deployed file: `/llms.txt` from `website/static/llms.txt`

## Development

- `npm run dev`: runs the library asset sync and then the Astro docs site via the website package.
- `npm run build`: builds the library bundle and then the Astro site into `website/public/`.
- `npm run build:lib`: builds only the library.
- `npm run build:site`: builds only the website (requires `npm run build:lib` first for latest assets).

## License

MIT. See `LICENSE`.
