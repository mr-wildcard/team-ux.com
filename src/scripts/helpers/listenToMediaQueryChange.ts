type MatchCallback = (matches: boolean) => unknown;

type Options = {
  fireOnInit?: boolean;
};

export function listenToMediaQueryChange(
  mediaQuery: string,
  options?: Options,
) {
  const { fireOnInit = false } = options || {};

  const matchMedia = window.matchMedia(mediaQuery);

  function onMediaQueryChanges(callback: MatchCallback) {
    return function (e: MediaQueryListEvent) {
      callback(e.matches);
    };
  }

  return {
    onMatch(callback: MatchCallback) {
      const innerCallback = onMediaQueryChanges(callback);

      if (matchMedia.addEventListener) {
        matchMedia.addEventListener("change", innerCallback);
      } else {
        matchMedia.addListener(innerCallback);
      }

      if (fireOnInit) {
        callback(matchMedia.matches);
      }
    },
  };
}
