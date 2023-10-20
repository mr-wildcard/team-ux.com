const buttons =
  document.querySelectorAll<HTMLButtonElement>("button.copy-text");

const toast = document.querySelector<HTMLDivElement>("#toast");
const toastContent = toast?.querySelector<HTMLSpanElement>("span");

function showToast() {
  toast?.classList.add("show");
}

function hideToast() {
  toast?.classList.add("hide");
}

function onUserScrolls() {
  hideToast();
}

async function copyText(textToCopy: string): Promise<void> {
  if (!navigator.clipboard) {
    return import("./fallback.copyText").then(({ fallbackCopyText }) => {
      return fallbackCopyText(textToCopy);
    });
  } else {
    return navigator.clipboard.writeText(textToCopy);
  }
}

// Hack for Safari not replaying the animation when we click on the button several times.
// Removing classes after the animation allows the toast to appear again.
toast?.addEventListener("animationend", () => {
  toast?.classList.remove("show", "hide");

  window.removeEventListener("scroll", onUserScrolls);
});

buttons.forEach((button) => {
  const { textToCopy, toastCopySuccessText } = button.dataset;

  async function onUserClicksOnCopyButton() {
    if (!textToCopy || !toastContent || !toastCopySuccessText) {
      return;
    }

    button.removeEventListener("click", onUserClicksOnCopyButton);

    toast?.classList.remove("show", "hide");
    toastContent.textContent = toastCopySuccessText;

    try {
      await copyText(textToCopy);

      showToast();
    } catch (err) {
      console.error("Failed to copy text:", textToCopy, err);
    } finally {
      button.addEventListener("click", onUserClicksOnCopyButton);
      window.addEventListener("scroll", onUserScrolls);
    }
  }

  button.addEventListener("click", onUserClicksOnCopyButton);
});

toast?.addEventListener("click", hideToast);
