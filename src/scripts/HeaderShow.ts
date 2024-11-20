document.addEventListener("astro:page-load", () => {
  const button = document.getElementById("burger") as HTMLInputElement;
  const header = document.getElementById("headerMobile") as HTMLElement;

  button.addEventListener("click", activate);

  function activate(): void {
    if (button.checked) {
      header.style.display = "flex";
      header.style.justifyContent = "space-between";

      header.style.animation = "fade-in .3s forwards";
    } else {
      header.style.animation = "fade-out .3s forwards";
      setTimeout(() => {
        header.style.display = "none";
      }, 300);
    }
  }

  document.querySelector("main")?.addEventListener("click", () => {
    header.style.animation = "fade-out .3s forwards";
    setTimeout(() => {
      header.style.display = "none";
    }, 300);
    button.checked = false;
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 764) {
      header.style.display = "none";
      button.checked = false;
    }
  });
});
