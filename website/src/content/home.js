import { html } from "../template.js";

export function homePage() {
  return html`
    <section class="vstack p-4" ot-animate="fade-up">
      <br />
      <img
        src="/assets/logo.svg"
        alt="Oat Animate CSS animation library logo"
        width="220"
        height="100"
      />
      <div class="p-4 row gap-2">
        <h1 class="col title mb-2 mt-2">Lightweight CSS Animation Library for Oat</h1>
        <h3 class="col slogan text-light mb-2 mt-2">
          Build faster, smoother web interfaces with simple declarative animations
        </h3>
        <p class="col-9">
          Oat Animate is an ultra-lightweight CSS animation library for Oat. It helps
          teams ship polished micro-interactions without adding framework lock-in,
          heavy dependencies, or complex setup.
        </p>
        <p class="col-9">
          Use a single <code>ot-animate</code> attribute to trigger animations on load,
          on hover, or when an element enters the viewport. This improves engagement,
          keeps interfaces feeling modern, and supports better conversion on key UI actions.
        </p>
        <p class="col-9">
          Perfect for product pages, dashboards, SaaS onboarding flows, and marketing sites
          where performance and perceived quality directly affect leads and retention.
        </p>
        <br />
        <br />
        <div class="col hstack">
          <a href="/usage" class="button">Install and get started</a>
          <a href="/animations" class="button outline">Browse animations</a>
          <a
            href="https://github.com/dharmeshgurnani/oat-animate"
            class="button outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </div>
      </div>
      <br />
      <br />
    </section>
  `;
}
