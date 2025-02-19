const allButtons =
  document.querySelectorAll<HTMLButtonElement>("button.nav-item");

allButtons.forEach((button) => {
  const submenu = button.querySelector<HTMLDivElement>(".submenu-container");

  if (!submenu) {
    return;
  }

  let timer: ReturnType<typeof setTimeout>;

  function isSubmenuOpened() {
    return button.classList.contains("opened");
  }

  function openSubmenu() {
    button.classList.add("opened");
    button.setAttribute("aria-expanded", "true");
  }

  function closeSubmenu() {
    button.classList.remove("opened");
    button.setAttribute("aria-expanded", "false");
  }

  function toggleSubmenu() {
    if (isSubmenuOpened()) {
      closeSubmenu();
    } else {
      openSubmenu();
    }
  }

  function onClickOnButton() {
    toggleSubmenu();

    if (isSubmenuOpened()) {
      submenu.addEventListener("mouseenter", onMouseEntersSubmenu);
      window.addEventListener("click", onUserClicksOutside);
    } else {
      submenu.removeEventListener("mouseenter", onMouseEntersSubmenu);
      window.removeEventListener("click", onUserClicksOutside);
    }
  }

  function onMouseEntersSubmenu() {
    clearTimeout(timer);

    submenu.addEventListener("mouseleave", onMouseLeavesSubmenu);
  }

  function onMouseLeavesSubmenu() {
    clearTimeout(timer);

    submenu.removeEventListener("mouseleave", onMouseLeavesSubmenu);

    timer = setTimeout(closeSubmenu, 3000);
  }

  function onUserClicksOutside(event: MouseEvent) {
    const target = event.target as Node;

    if (!button.contains(target) && target !== button) {
      clearTimeout(timer);

      closeSubmenu();
    }
  }

  button.addEventListener("click", onClickOnButton);
});
