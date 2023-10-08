const letters = document.querySelector<HTMLDivElement>("#letters-nav");
const stickyLetters = document.querySelector<HTMLDivElement>(
  "#sticky-letters-nav",
);
const letterSections =
  document.querySelectorAll<HTMLDivElement>(".letter-section");

const letterSectionsLetterAnchors = new Map();

const lettersObserver = new IntersectionObserver(
  ([{ intersectionRatio }]) => {
    if (!stickyLetters) {
      return;
    }

    if (intersectionRatio === 0 && stickyLetters.classList.contains("hidden")) {
      stickyLetters.classList.remove("hidden");
    } else if (
      intersectionRatio === 1 &&
      !stickyLetters.classList.contains("hidden")
    ) {
      stickyLetters.classList.add("hidden");
    }
  },
  {
    rootMargin: "-90px 0px 0px 0px",
    threshold: [0, 1],
  },
);

const letterSectionsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      const stickyLetter = letterSectionsLetterAnchors.get(target);

      if (!isIntersecting && stickyLetter.classList.contains("active")) {
        stickyLetter.classList.remove("active");
      } else if (isIntersecting && !stickyLetter.classList.contains("active")) {
        stickyLetter.classList.add("active");
      }
    });
  },
  {
    threshold: 0,
    // 172: height of sticky header + sticky letters
    // 100: space between two letters section
    // Adding those values, makes theorically impossible for the intersection observer to detect two letter sections intersecting.
    rootMargin: `-172px 0px -${window.innerHeight - (172 + 100)}px 0px`,
  },
);

if (letters && stickyLetters) {
  lettersObserver.observe(letters);

  for (const letterSection of letterSections) {
    const stickyLetter = stickyLetters.querySelector(
      `li[data-letter=${letterSection.dataset.letterSection}]`,
    );

    if (stickyLetter) {
      letterSectionsLetterAnchors.set(letterSection, stickyLetter);

      letterSectionsObserver.observe(letterSection);
    }
  }
}

if (window.matchMedia("(min-width: 1280px)").matches) {
  const firstDefinition = document.querySelector(".letter-section details");

  if (firstDefinition) {
    firstDefinition.setAttribute("open", "");
  }
}
