export const fadeInOnScroll = (element: HTMLElement | null, delay: number = 0) => {
  if (!element) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }, delay * 800);
          observer.unobserve(element);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(element);
};