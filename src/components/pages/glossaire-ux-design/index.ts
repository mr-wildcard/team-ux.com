const letters = document.querySelector<HTMLDivElement>(".letters");
const stickyLetters = document.querySelector<HTMLDivElement>(".sticky-letters");

const stickyLettersObserver = new IntersectionObserver(
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
    rootMargin: "0px",
    threshold: [0, 1],
  },
);

const letterSections =
  document.querySelectorAll<HTMLDivElement>(".letter-section");

const letterSectionsLetterAnchors = new Map();

const letterSectionsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(({ intersectionRatio, target }) => {
      const stickyLetter = letterSectionsLetterAnchors.get(target);

      if (
        intersectionRatio === 0 &&
        stickyLetter.classList.contains("active")
      ) {
        stickyLetter.classList.remove("active");
      } else if (
        intersectionRatio > 0 &&
        !stickyLetter.classList.contains("active")
      ) {
        stickyLetter.classList.add("active");
      }
    });
  },
  {
    threshold: [0, 1],
  },
);

if (letters) {
  stickyLettersObserver.observe(letters);
}

letterSections.forEach((section) => {
  const letterAnchor = document.querySelector(
    `.sticky-letters li[data-letter=${section.dataset.letterSection}]`,
  );

  letterSectionsLetterAnchors.set(section, letterAnchor);

  letterSectionsObserver.observe(section);
});
