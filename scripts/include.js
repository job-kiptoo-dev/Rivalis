async function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");
  for (const el of elements) {
    const file = el.getAttribute("data-include");
    try {
      const response = await fetch(file);
      const text = await response.text();
      el.innerHTML = text;
    } catch (error) {
      console.error(`Error loading ${file}:`, error);
    }
  }
}

document.addEventListener("DOMContentLoaded", includeHTML);
