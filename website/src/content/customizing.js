import { html } from "../template.js";

export function customizingPage() {
  return html`
    <section class="vstack" ot-animate="fade-up">
      <h2>Customizations</h2>
      <p>
        Oat Animate provides a lightweight customization layer using <strong>CSS Variables</strong>. 
        This allows you to override default animation behavior globally, per-component, or inline.
      </p>

      <br />
      <h3>Available Variables</h3>
      <p>
        The following CSS variables are available on <code>[ot-animate]</code> elements, along with their default values:
      </p>
      <ul>
        <li><code>--ot-duration</code>: <code>0.6s</code> (The length of the animation)</li>
        <li><code>--ot-delay</code>: <code>0s</code> (The delay before the animation starts)</li>
        <li><code>--ot-easing</code>: <code>ease</code> (The timing function of the animation)</li>
      </ul>

      <br />
      <h3>Global Customization</h3>
      <p>
        To change the defaults for all animations in your project, simply override the variables in your global CSS:
      </p>
      <pre><code class="language-css">
:root {
  --ot-duration: 0.8s;
  --ot-easing: cubic-bezier(0.4, 0, 0.2, 1);
}
      </code></pre>

      <br />
      <h3>Inline Customization</h3>
      <p>
        You can easily tailor individual animations using inline styles. This is particularly useful for creating staggered animations or custom delays.
      </p>
      
      <div class="ot-demo">
        <ot-tabs>
          <div role="tablist">
            <button role="tab" aria-selected="true" tabindex="0">
              ⧉ Preview
            </button>
            <button role="tab" aria-selected="false" tabindex="-1">
              {} Code
            </button>
          </div>

          <!-- ⧉ Preview Tab -->
          <div role="tabpanel">
            <div class="row">
              <article class="card col-12">
                <header>
                  <h3>Staggered Example</h3>
                </header>
                <div style="display: flex; gap: 1rem; align-items: center; justify-content: center; padding: 2rem;">
                  <button class="demo-btn" ot-animate="slide-right" style="--ot-delay: 0.1s">Item 1</button>
                  <button class="demo-btn" ot-animate="slide-right" style="--ot-delay: 0.2s">Item 2</button>
                  <button class="demo-btn" ot-animate="slide-right" style="--ot-delay: 0.3s">Item 3</button>
                </div>
              </article>
            </div>
            <br />
            <div class="row">
              <article class="card col-12">
                <header>
                  <h3>Slow & Delayed</h3>
                </header>
                <div style="display: flex; gap: 1rem; align-items: center; justify-content: center; padding: 2rem;">
                  <div ot-animate="fade-up" style="--ot-duration: 1.5s; --ot-delay: 0.5s; padding: 1rem; background: var(--surface-2); border-radius: 8px;">
                    I am slow and delayed!
                  </div>
                </div>
              </article>
            </div>
          </div>

          <!-- Code Tab -->
          <div role="tabpanel" hidden="">
            <pre class="giallo"><code>&lt;!-- Staggered Example --&gt;
&lt;button class=&quot;demo-btn&quot; ot-animate=&quot;slide-right&quot; style=&quot;--ot-delay: 0.1s&quot;&gt;Item 1&lt;/button&gt;
&lt;button class=&quot;demo-btn&quot; ot-animate=&quot;slide-right&quot; style=&quot;--ot-delay: 0.2s&quot;&gt;Item 2&lt;/button&gt;
&lt;button class=&quot;demo-btn&quot; ot-animate=&quot;slide-right&quot; style=&quot;--ot-delay: 0.3s&quot;&gt;Item 3&lt;/button&gt;

&lt;!-- Slow &amp; Delayed --&gt;
&lt;div ot-animate=&quot;fade-up&quot; style=&quot;--ot-duration: 1.5s; --ot-delay: 0.5s;&quot;&gt;
  I am slow and delayed!
&lt;/div&gt;</code></pre>
          </div>
        </ot-tabs>
      </div>

      <br />
      <h3>Reduced Motion</h3>
      <p>
        Oat Animate comes with built-in accessibility for users who prefer reduced motion. 
        If a user's operating system is set to <code>prefers-reduced-motion: reduce</code>, 
        all animations and transitions are automatically disabled by the library.
      </p>

    </section>
  `;
}
