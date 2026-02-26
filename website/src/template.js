function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function raw(value) {
  return { __raw: String(value) };
}

export function html(strings, ...values) {
  let out = "";
  for (let i = 0; i < strings.length; i += 1) {
    out += strings[i];
    if (i < values.length) {
      const value = values[i];
      if (value && typeof value === "object" && "__raw" in value) {
        out += value.__raw;
      } else {
        out += escapeHtml(value ?? "");
      }
    }
  }
  return out;
}
