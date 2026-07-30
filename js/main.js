// Small enhancement: smooth scroll for internal links
document.addEventListener("click", function (e) {
  const a = e.target.closest("a");
  if (!a) return;
  const href = a.getAttribute("href");
  if (href && href.startsWith("#")) {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
});
