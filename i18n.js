const lang = document.documentElement.lang || "pl";

const script = document.createElement("script");
script.src = `./i18n/${lang}.js`;
script.onload = () => {
  const translations = window.__i18n__;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[key]) el.textContent = translations[key];
  });
};
script.onerror = () =>
  console.error(`Failed to load translations for lang: ${lang}`);
document.head.appendChild(script);
