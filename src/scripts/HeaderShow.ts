const button = document.getElementById("burger") as HTMLInputElement;
const header = document.getElementById("headerMobile") as HTMLElement;
const navItems = document.getElementById("navMobile") as HTMLElement;

button.addEventListener("click", activate);

function activate(): void {
  if (button.checked === true) {
    header.style.display = "flex";
    header.style.justifyContent = "flex-end";
    navItems.style.display = "flex";
    header.style.animation = "fade-in .5s forwards";
  } else {
    navItems.style.display = "none";
    header.style.animation = "fade-out .5s forwards";
    setTimeout(() => {
      header.style.display = "none";
    }, 300);
  }
}

document.querySelector("main")?.addEventListener("click", () => {
  navItems.style.display = "none";
  header.style.animation = "fade-out .5s forwards";
  setTimeout(() => {
    header.style.display = "none";
  }, 300);
  button.checked = false;
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 764) {
    navItems.style.display = "none";
    header.style.display = "none";
    button.checked = false;
  }
});
