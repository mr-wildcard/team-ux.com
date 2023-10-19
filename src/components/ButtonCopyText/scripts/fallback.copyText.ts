// Everything's fine
export function fallbackCopyText(textToCopy: string): void {
  const textArea = document.createElement("textarea");
  textArea.value = textToCopy;
  document.body.appendChild(textArea);

  if (navigator.userAgent.match(/ipad|iphone/i)) {
    const range = document.createRange();
    range.selectNodeContents(textArea);

    const selection = window.getSelection();

    if (selection === null) {
      throw new Error("window.getSelection() return `null` for iOS");
    }

    selection.removeAllRanges();
    selection.addRange(range);
    textArea.setSelectionRange(0, 999999);
  } else {
    textArea.select();
  }

  const textSucessfullyCopies = document.execCommand("copy");
  document.body.removeChild(textArea);

  if (!textSucessfullyCopies) {
    throw new Error("Copying text isn't supported on this device.");
  }
}
