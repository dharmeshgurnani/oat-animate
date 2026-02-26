# Oat Animate

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
- `shift-up-2`

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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ots-animate@1.0.0/dist/oat-animate.min.css" />
<script src="https://cdn.jsdelivr.net/npm/ots-animate@1.0.0/dist/oat-animate.min.js"></script>
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

## Development

- `npm run dev`: runs the Astro docs site in development mode
- `npm run build`: builds the library bundle and Astro site into `website/public/`

## License

MIT. See `LICENSE`.
