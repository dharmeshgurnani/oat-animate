import { html } from "../template.js";

export function customizingPage() {
  return html`
    <section class="vstack" ot-animate="fade-up">
      <h2>Customisation roadmap</h2>
      <p>
        Oat Animate is intentionally minimal right now – most behaviour is driven
        by sensible defaults so you can drop it into any Oat project and get
        nice micro–interactions without a configuration step.
      </p>
      <p>
        Future updates will introduce a lightweight customisation layer so you
        can:
      </p>
      <ul>
        <li>tune global defaults such as duration, delay and easing</li>
        <li>define your own named animation presets</li>
        <li>opt‑in to reduced‑motion friendly variants</li>
        <li>override settings per‑component via simple data attributes</li>
      </ul>
      <p>
        For now, think of this page as a placeholder. As the API stabilises,
        it will be updated with concrete examples and copy‑paste snippets you
        can use to tailor animations to your design system.
      </p>
    </section>
  `;
}
