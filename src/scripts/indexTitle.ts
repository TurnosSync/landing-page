let previousTitle = document.title;

window.addEventListener("blur", () => {
  previousTitle = document.title;
  document.title = "¡Don't Go! ¡Comes Back! 😨 ";
});

window.addEventListener("focus", () => {
  document.title = previousTitle;
});
