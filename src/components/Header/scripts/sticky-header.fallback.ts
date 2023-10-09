import { listenToMediaQueryChange } from "../../../scripts/helpers/listenToMediaQueryChange.ts";

const header = document.querySelector<HTMLElement>("#header .outer");

function onMediaQueryMatches(isDesktop: boolean) {
  let headerHasBackground = false;

  function showHeaderBackground(header: HTMLElement) {
    header.style.backgroundColor = "white";

    if (isDesktop) {
      header.style.boxShadow = "0 2px 4px 0 rgba(8, 18, 79, 0.25)";
    } else {
      header.style.boxShadow = "0px 2px 4px 0px rgba(8, 18, 79, 0.25)";
    }

    headerHasBackground = true;
  }

  function hideHeaderBackground(header: HTMLElement) {
    header.style.backgroundColor = "";
    header.style.boxShadow = "";

    headerHasBackground = false;
  }

  function onUserScrolls() {
    if (!header) {
      return;
    }

    if (window.scrollY > 0 && !headerHasBackground) {
      showHeaderBackground(header);

      headerHasBackground = true;
    } else if (window.scrollY === 0 && headerHasBackground) {
      hideHeaderBackground(header);

      headerHasBackground = false;
    }
  }

  window.addEventListener("scroll", onUserScrolls);
}

listenToMediaQueryChange("(min-width: 1024px)", { fireOnInit: true }).onMatch(
  onMediaQueryMatches,
);
