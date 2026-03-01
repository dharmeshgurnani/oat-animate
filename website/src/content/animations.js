import { html } from "../template.js";

export function animationsPage() {
  return html`
    <!-- ON LOAD ANIMATIONS -->
    <section id="onload" class="demo-section">
      <h1>On Load Animations</h1>
      <p>Animations that play when the page loads.</p>

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
              <article class="card col-4" ot-animate="fade-up">
                <header>
                  <h3>fade-up</h3>
                </header>
                <p>Fades in while moving upward from below.</p>
                <button
                  class="demo-btn"
                  commandfor="design-dialog"
                  command="show-modal"
                  ot-animate="fade-up"
                >
                  Sample Button
                </button>
              </article>
              <article class="card col-4" ot-animate="fade-down">
                <header>
                  <h3>fade-down</h3>
                </header>
                <p>Fades in while moving downward from above.</p>
                <button
                  class="demo-btn"
                  commandfor="design-dialog"
                  command="show-modal"
                  ot-animate="fade-up"
                >
                  Sample Button
                </button>
              </article>
              <article class="card col-4" ot-animate="slide-left">
                <header>
                  <h3>slide-left</h3>
                </header>
                <p>Slides in from the right side.</p>
                <button
                  class="demo-btn"
                  commandfor="design-dialog"
                  command="show-modal"
                  ot-animate="slide-left"
                >
                  Sample Button
                </button>
              </article>
              <article class="card col-4" ot-animate="slide-right">
                <header>
                  <h3>slide-right</h3>
                </header>
                <p>Slides in from the left side.</p>
                <button
                  class="demo-btn"
                  commandfor="design-dialog"
                  command="show-modal"
                  ot-animate="slide-right"
                >
                  Sample Button
                </button>
              </article>
              <article class="card col-4" ot-animate="zoom-in">
                <header>
                  <h3>zoom-in</h3>
                </header>
                <p>Scales up from smaller to normal size.</p>
                <button
                  class="demo-btn"
                  commandfor="design-dialog"
                  command="show-modal"
                  ot-animate="zoom-in"
                >
                  Sample Button
                </button>
              </article>
              <article class="card col-4" ot-animate="pop">
                <header>
                  <h3>pop</h3>
                </header>
                <p>Quick scale bounce effect on load.</p>
                <button
                  class="demo-btn"
                  commandfor="design-dialog"
                  command="show-modal"
                  ot-animate="pop"
                >
                  Sample Button
                </button>
              </article>
            </div>
          </div>

          <!-- Code Tab -->
          <div role="tabpanel" hidden="">
            <pre
              class="giallo"
            ><code>&lt;div ot-animate=&quot;fade-up&quot;&gt;Content&lt;/div&gt;
&lt;div ot-animate=&quot;fade-down&quot;&gt;Content&lt;/div&gt;
&lt;div ot-animate=&quot;slide-left&quot;&gt;Content&lt;/div&gt;
&lt;div ot-animate=&quot;slide-right&quot;&gt;Content&lt;/div&gt;
&lt;div ot-animate=&quot;zoom-in&quot;&gt;Content&lt;/div&gt;
&lt;div ot-animate=&quot;pop&quot;&gt;Content&lt;/div&gt;</code></pre>
          </div>
        </ot-tabs>
      </div>
    </section>
    <!-- ON HOVER ANIMATIONS -->
    <hr />
    <section id="onhover" class="demo-section">
      <h1>On Hover Animations</h1>
      <p>Animations that play on mouse hover.</p>

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
              <article class="card col-4" ot-animate="hover:fade-up">
                <header>
                  <h3>hover:fade-up</h3>
                </header>
                <p>Fades in while moving upward on hover.</p>
                <button class="demo-btn">Hover Me</button>
              </article>
              <article class="card col-4" ot-animate="hover:fade-down">
                <header>
                  <h3>hover:fade-down</h3>
                </header>
                <p>Fades in while moving downward on hover.</p>
                <button class="demo-btn">Hover Me</button>
              </article>
              <article class="card col-4" ot-animate="hover:slide-left">
                <header>
                  <h3>hover:slide-left</h3>
                </header>
                <p>Slides left on hover from right.</p>
                <button class="demo-btn">Hover Me</button>
              </article>
              <article class="card col-4" ot-animate="hover:slide-right">
                <header>
                  <h3>hover:slide-right</h3>
                </header>
                <p>Slides right on hover from left.</p>
                <button class="demo-btn">Hover Me</button>
              </article>
              <article class="card col-4" ot-animate="hover:zoom-in">
                <header>
                  <h3>hover:zoom-in</h3>
                </header>
                <p>Scales up on hover for zoom effect.</p>
                <button class="demo-btn">Hover Me</button>
              </article>
              <article class="card col-4" ot-animate="hover:pop">
                <header>
                  <h3>hover:pop</h3>
                </header>
                <p>Quick bounce scale effect on hover.</p>
                <button class="demo-btn">Hover Me</button>
              </article>
            </div>
          </div>

          <!-- Code Tab -->
          <div role="tabpanel" hidden="">
            <pre
              class="giallo"
            ><code>&lt;div ot-animate=&quot;hover:fade-up&quot;&gt;Content&lt;/div&gt;
&lt;div ot-animate=&quot;hover:fade-down&quot;&gt;Content&lt;/div&gt;
&lt;div ot-animate=&quot;hover:slide-left&quot;&gt;Content&lt;/div&gt;
&lt;div ot-animate=&quot;hover:slide-right&quot;&gt;Content&lt;/div&gt;
&lt;div ot-animate=&quot;hover:zoom-in&quot;&gt;Content&lt;/div&gt;
&lt;div ot-animate=&quot;hover:pop&quot;&gt;Content&lt;/div&gt;</code></pre>
          </div>
        </ot-tabs>
      </div>
    </section>

    <!-- IN VIEW ANIMATIONS -->
    <hr />
    <section id="inview" class="demo-section">
      <h1>In View Animations</h1>
      <p>Animations that play when element scrolls into viewport.</p>

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
          <div role="tabpanel" class="align-items-center">
            <div class="row">
              <article class="card col-6" ot-animate="view:fade-up">
                <header>
                  <h3>view:fade-up</h3>
                </header>
                <p>Triggers when scrolled into view from below.</p>
                <button class="demo-btn">Scroll to See</button>
              </article>
            </div>
            <br />
            <div class="row">
              <article class="card col-6" ot-animate="view:fade-down">
                <header>
                  <h3>view:fade-down</h3>
                </header>
                <p>Triggers when scrolled into view from above.</p>
                <button class="demo-btn">Scroll to See</button>
              </article>
            </div>
            <br />
            <div class="row">
              <article class="card col-6" ot-animate="view:slide-left">
                <header>
                  <h3>view:slide-left</h3>
                </header>
                <p>Triggers slide in from right on scroll.</p>
                <button class="demo-btn">Scroll to See</button>
              </article>
            </div>
            <br />
            <div class="row">
              <article class="card col-6" ot-animate="view:slide-right">
                <header>
                  <h3>view:slide-right</h3>
                </header>
                <p>Triggers slide in from left on scroll.</p>
                <button class="demo-btn">Scroll to See</button>
              </article>
            </div>
            <br />
            <div class="row">
              <article class="card col-6" ot-animate="view:zoom-in">
                <header>
                  <h3>view:zoom-in</h3>
                </header>
                <p>Triggers scale up effect when in viewport.</p>
                <button class="demo-btn">Scroll to See</button>
              </article>
            </div>
            <br />
            <div class="row">
              <article class="card col-6" ot-animate="view:pop">
                <header>
                  <h3>view:pop</h3>
                </header>
                <p>Triggers bounce effect when in viewport.</p>
                <button class="demo-btn">Scroll to See</button>
              </article>
            </div>
          </div>

          <!-- Code Tab -->
          <div role="tabpanel" hidden="">
            <pre
              class="giallo"
            ><code>&lt;div ot-animate=&quot;view:fade-up&quot;&gt;Content&lt;/div&gt;
&lt;div ot-animate=&quot;view:fade-down&quot;&gt;Content&lt;/div&gt;
&lt;div ot-animate=&quot;view:slide-left&quot;&gt;Content&lt;/div&gt;
&lt;div ot-animate=&quot;view:slide-right&quot;&gt;Content&lt;/div&gt;
&lt;div ot-animate=&quot;view:zoom-in&quot;&gt;Content&lt;/div&gt;
&lt;div ot-animate=&quot;view:pop&quot;&gt;Content&lt;/div&gt;</code></pre>
          </div>
        </ot-tabs>
      </div>

      <dialog id="design-dialog" closedby="any" ot-animate="pop">
        <form method="dialog">
          <div>
            <header>
              <h3>Design Wisdom</h3>
            </header>
            <div>
              <p id="design-quote"></p>
              <br/>
            </div>
            <footer>
              <button type="button" commandfor="design-dialog" command="close" class="outline">Close</button>
            </footer>
          </div>
        </form>
      </dialog>
    </section>
  `;
}
