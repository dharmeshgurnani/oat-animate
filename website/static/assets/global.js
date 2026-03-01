// component theme switcher
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem("theme", theme);
}

function getStoredTheme() {
  var stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") {
    return stored;
  }
  return "light";
}

function toggleTheme() {
  var current = document.documentElement.getAttribute("data-theme") || getStoredTheme();
  var next = current === "dark" ? "light" : "dark";
  applyTheme(next);
}


// component demo model and CTA

function initQuote() {
  document.querySelectorAll(".demo-btn[commandfor=design-dialog]").forEach((btn) => {
    btn.addEventListener("click", () => {
      //  ot-animate="fade-up"
      document.querySelector("#design-dialog").attributes["ot-animate"].value = btn.attributes["ot-animate"].value;
      fetch("/assets/de-quotes.json")
        .then((response) => response.json())
        .then((data) => {
          const randomQuote = data[Math.floor(Math.random() * data.length)];
          document.querySelector("#design-dialog #design-quote").textContent = randomQuote;
        });
    });
  });
}


// init components on load
initQuote();
applyTheme(getStoredTheme());
