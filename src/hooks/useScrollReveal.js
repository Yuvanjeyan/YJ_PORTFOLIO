import { useLayoutEffect } from 'react';

function useScrollReveal() {
  useLayoutEffect(() => {
    const revealedElements = document.querySelectorAll('[data-reveal]');

    if (!revealedElements.length) {
      return undefined;
    }

    // Create Intersection Observer to detect when elements come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Keep observing for reverse reveal on scroll up
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    revealedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}

export default useScrollReveal;
