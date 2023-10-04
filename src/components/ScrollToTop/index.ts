import {
  ScrollDirection,
  watchScrollDirection,
} from "../../scripts/helpers/watchScrollDirection";

const scrollToTopButton = document.querySelector<HTMLElement>(
  "#scroll-to-top-button",
);

if (scrollToTopButton) {
  const breadcrumb = document.querySelector<HTMLElement>("#breadcrumb");

  let breadcrumbIsVisible = true;

  function onScroll(scrollDirection: ScrollDirection) {
    const buttonShouldBeVisible =
      !breadcrumbIsVisible && scrollDirection === ScrollDirection.UP;

    const buttonShouldBeHidden =
      breadcrumbIsVisible || scrollDirection === ScrollDirection.DOWN;

    if (
      buttonShouldBeVisible &&
      !scrollToTopButton.classList.contains("show")
    ) {
      scrollToTopButton.classList.add("show");
    } else if (
      buttonShouldBeHidden &&
      scrollToTopButton.classList.contains("show")
    ) {
      scrollToTopButton.classList.remove("show");
    }
  }

  if (breadcrumb) {
    const breadcrumbIO = new IntersectionObserver((entries) => {
      const [breadcrumbElement] = entries;

      breadcrumbIsVisible = breadcrumbElement.isIntersecting;
    });

    breadcrumbIO.observe(breadcrumb);
  }

  watchScrollDirection(onScroll);

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
    });
  });
}
