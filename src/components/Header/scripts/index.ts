if (!CSS.supports("animation-timeline", "scroll(y root)")) {
  import("./sticky-header.fallback");
}

const header = document.querySelector<HTMLHeadElement>("#header");
const menuButton = document.querySelector<HTMLMenuElement>("#menu-opener");

if (menuButton && header) {
  menuButton.addEventListener("click", () => {
    const { menuOpened } = header.dataset;

    if (menuOpened === "true") {
      header.setAttribute("data-menu-opened", "false");
      menuButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("overflow-hidden");
    } else {
      header.setAttribute("data-menu-opened", "true");
      menuButton.setAttribute("aria-expanded", "true");
      document.body.classList.add("overflow-hidden");
    }
  });
}
