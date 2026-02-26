import { html, raw } from "../template.js";

export function showcasePage() {
  return html`
    <!-- Finance Dashboard Showcase -->
    <section id="dashboard" class="demo-section w-100">
      <h1 ot-animate="fade-up">Finance Dashboard</h1>
      <p ot-animate="fade-up" class="mb-4">A sample finance dashboard built with OAT animations.</p>

      <!-- Stats Cards Row -->
      <div class="row mb-4">
        <div class="col-3">
          <article class="card p-4" ot-animate="fade-up" style="animation-delay: 0.1s">
            <small class="text-muted">Total Revenue</small>
            <h2 class="m-0">$124,563</h2>
            <small class="text-success">+12.5%</small>
          </article>
        </div>
        <div class="col-3">
          <article class="card p-4" ot-animate="fade-up" style="animation-delay: 0.2s">
            <small class="text-muted">Expenses</small>
            <h2 class="m-0">$45,231</h2>
            <small class="text-danger">+3.2%</small>
          </article>
        </div>
        <div class="col-3">
          <article class="card p-4" ot-animate="fade-up" style="animation-delay: 0.3s">
            <small class="text-muted">Net Profit</small>
            <h2 class="m-0">$79,332</h2>
            <small class="text-success">+18.7%</small>
          </article>
        </div>
        <div class="col-3">
          <article class="card p-4" ot-animate="fade-up" style="animation-delay: 0.4s">
            <small class="text-muted">Savings Rate</small>
            <h2 class="m-0">23.4%</h2>
            <small class="text-success">+2.1%</small>
          </article>
        </div>
      </div>

      <!-- Charts Row -->
      <div class="row mb-4">
        <div class="col-8">
          <article class="card p-4" ot-animate="slide-left" style="animation-delay: 0.5s">
            <header class="mb-4">
              <h3>Revenue Trend</h3>
            </header>
            <div class="chart-placeholder h-4 bg-light rounded">
              <div class="row align-items-end h-100 p-2">
                <div class="col" style="height: 40%"><div class="bg-primary h-100 rounded"></div></div>
                <div class="col" style="height: 60%"><div class="bg-primary h-100 rounded"></div></div>
                <div class="col" style="height: 45%"><div class="bg-primary h-100 rounded"></div></div>
                <div class="col" style="height: 80%"><div class="bg-primary h-100 rounded"></div></div>
                <div class="col" style="height: 70%"><div class="bg-primary h-100 rounded"></div></div>
                <div class="col" style="height: 90%"><div class="bg-primary h-100 rounded"></div></div>
                <div class="col" style="height: 75%"><div class="bg-primary h-100 rounded"></div></div>
                <div class="col" style="height: 85%"><div class="bg-primary h-100 rounded"></div></div>
                <div class="col" style="height: 65%"><div class="bg-primary h-100 rounded"></div></div>
                <div class="col" style="height: 95%"><div class="bg-primary h-100 rounded"></div></div>
                <div class="col" style="height: 88%"><div class="bg-primary h-100 rounded"></div></div>
                <div class="col" style="height: 100%"><div class="bg-primary h-100 rounded"></div></div>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-6"><small class="text-muted">Jan - Jun 2024</small></div>
              <div class="col-6 text-end"><small class="text-muted">$92,450 Total</small></div>
            </div>
          </article>
        </div>
        <div class="col-4">
          <article class="card p-4" ot-animate="slide-right" style="animation-delay: 0.6s">
            <header class="mb-4">
              <h3>Expense Breakdown</h3>
            </header>
            <div class="text-center mb-4">
              <div class="donut-chart" style="width: 120px; height: 120px; border-radius: 50%; background: conic-gradient(var(--primary) 0deg 140deg, var(--success) 140deg 220deg, var(--warning) 220deg 280deg, var(--danger) 280deg 360deg); margin: 0 auto;"></div>
              <div class="mt-2"><small class="text-muted">$45,231 Total</small></div>
            </div>
            <div class="vstack gap-2">
              <div class="hstack justify-content-between">
                <span class="dot bg-primary"></span><small>Operations</small><small class="text-muted">38%</small>
              </div>
              <div class="hstack justify-content-between">
                <span class="dot bg-success"></span><small>Marketing</small><small class="text-muted">22%</small>
              </div>
              <div class="hstack justify-content-between">
                <span class="dot bg-warning"></span><small>R&D</small><small class="text-muted">17%</small>
              </div>
              <div class="hstack justify-content-between">
                <span class="dot bg-danger"></span><small>Admin</small><small class="text-muted">23%</small>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- Transactions Table -->
      <div class="row">
        <div class="col-12">
          <article class="card p-4" ot-animate="fade-up" style="animation-delay: 0.7s">
            <header class="mb-4">
              <h3>Recent Transactions</h3>
            </header>
            <table class="w-100">
              <thead>
                <tr class="border-bottom">
                  <th class="p-2 text-start">Date</th>
                  <th class="p-2 text-start">Description</th>
                  <th class="p-2 text-start">Category</th>
                  <th class="p-2 text-end">Amount</th>
                  <th class="p-2 text-end">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-bottom" ot-animate="slide-left" style="animation-delay: 0.8s">
                  <td class="p-2"><small>Dec 15, 2024</small></td>
                  <td class="p-2">Enterprise License - Q1</td>
                  <td class="p-2"><span class="badge bg-primary">Software</span></td>
                  <td class="p-2 text-end text-success">+$12,500</td>
                  <td class="p-2 text-end"><span class="badge bg-success">Completed</span></td>
                </tr>
                <tr class="border-bottom" ot-animate="slide-left" style="animation-delay: 0.85s">
                  <td class="p-2"><small>Dec 14, 2024</small></td>
                  <td class="p-2">Cloud Hosting - AWS</td>
                  <td class="p-2"><span class="badge bg-warning">Infrastructure</span></td>
                  <td class="p-2 text-end text-danger">-$2,340</td>
                  <td class="p-2 text-end"><span class="badge bg-success">Completed</span></td>
                </tr>
                <tr class="border-bottom" ot-animate="slide-left" style="animation-delay: 0.9s">
                  <td class="p-2"><small>Dec 13, 2024</small></td>
                  <td class="p-2">Consulting Services</td>
                  <td class="p-2"><span class="badge bg-info">Professional</span></td>
                  <td class="p-2 text-end text-success">+$8,500</td>
                  <td class="p-2 text-end"><span class="badge bg-success">Completed</span></td>
                </tr>
                <tr class="border-bottom" ot-animate="slide-left" style="animation-delay: 0.95s">
                  <td class="p-2"><small>Dec 12, 2024</small></td>
                  <td class="p-2">Office Supplies</td>
                  <td class="p-2"><span class="badge bg-secondary">Operations</span></td>
                  <td class="p-2 text-end text-danger">-$456</td>
                  <td class="p-2 text-end"><span class="badge bg-warning">Pending</span></td>
                </tr>
                <tr ot-animate="slide-left" style="animation-delay: 1s">
                  <td class="p-2"><small>Dec 11, 2024</small></td>
                  <td class="p-2">Marketing Campaign</td>
                  <td class="p-2"><span class="badge bg-danger">Marketing</span></td>
                  <td class="p-2 text-end text-danger">-$3,200</td>
                  <td class="p-2 text-end"><span class="badge bg-success">Completed</span></td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="row mt-4">
        <div class="col-12">
          <div class="hstack gap-2" ot-animate="zoom-in" style="animation-delay: 1.1s">
            <button class="demo-btn primary">Export Report</button>
            <button class="demo-btn outline">Add Transaction</button>
            <button class="demo-btn outline">Generate Invoice</button>
            <button class="demo-btn outline">Schedule Payment</button>
          </div>
        </div>
      </div>
    </section>

    <style>
      .text-muted { color: var(--muted-color, #6c757d); }
      .text-success { color: var(--success-color, #28a745); }
      .text-danger { color: var(--danger-color, #dc3545); }
      .bg-primary { background: var(--primary-color, #0d6efd); }
      .bg-success { background: var(--success-color, #28a745); }
      .bg-warning { background: var(--warning-color, #ffc107); }
      .bg-danger { background: var(--danger-color, #dc3545); }
      .bg-info { background: var(--info-color, #17a2b8); }
      .bg-light { background: var(--bg-secondary, #f8f9fa); }
      .bg-secondary { background: #6c757d; }
      .text-start { text-align: left; }
      .text-end { text-align: right; }
      .border-bottom { border-bottom: 1px solid var(--border-color, #dee2e6); }
      .rounded { border-radius: 4px; }
      .dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 8px; }
      .badge { padding: 4px 8px; border-radius: 4px; font-size: 12px; color: white; }
      .donut-chart { position: relative; }
      .donut-chart::after { content: ''; position: absolute; top: 20%; left: 20%; width: 60%; height: 60%; background: var(--bg-color, white); border-radius: 50%; }
      .h-100 { height: 100%; }
      .h-4 { height: 200px; }
      .align-items-end { align-items: flex-end; }
      .justify-content-between { justify-content: space-between; }
    </style>
  `;
}
