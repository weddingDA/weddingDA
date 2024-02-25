import { useState, useMemo, useEffect } from "react";

export function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ioConfiguration = {
    /**
     * This rootMargin creates a horizontal line vertically centered
     * that will help trigger an intersection at that the very point.
     */
    rootMargin: "-10% 0% -10% 0%",

    /**
     * This is the default so you could remove it.
     * I just wanted to leave it here to make it more explicit
     * as this threshold is the only one that works with the above
     * rootMargin
     */
    threshold: 0,
  };
  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => !isIntersecting && setIsIntersecting(entry.isIntersecting),
        ioConfiguration,
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
