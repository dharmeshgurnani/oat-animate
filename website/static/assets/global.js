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

applyTheme(getStoredTheme());
