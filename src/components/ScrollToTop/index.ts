import {
  ScrollDirection,
  watchScrollDirection,
} from "scripts/helpers/watchScrollDirection";

const scrollToTopButton = document.querySelector<HTMLElement>(
  "#scroll-to-top-button",
);

const breadcrumb = document.querySelector<HTMLElement>("#breadcrumb");

let breadcrumbIsVisible = true;

function onScroll(scrollDirection: ScrollDirection) {
  if (!scrollToTopButton) {
    return;
  }

  const buttonShouldBeVisible =
    !breadcrumbIsVisible && scrollDirection === ScrollDirection.UP;

  const buttonShouldBeHidden =
    window.scrollY === 0 ||
    breadcrumbIsVisible ||
    scrollDirection === ScrollDirection.DOWN;

  if (buttonShouldBeVisible && !scrollToTopButton.classList.contains("show")) {
    scrollToTopButton.classList.add("show");
  } else if (
    buttonShouldBeHidden &&
    scrollToTopButton.classList.contains("show")
  ) {
    scrollToTopButton.classList.remove("show");
  }
}

if (scrollToTopButton) {
  watchScrollDirection(onScroll);

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
    });
  });

  if (breadcrumb) {
    const breadcrumbIO = new IntersectionObserver((entries) => {
      const [breadcrumbElement] = entries;

      breadcrumbIsVisible = breadcrumbElement.isIntersecting;
    });

    breadcrumbIO.observe(breadcrumb);
  }
}
