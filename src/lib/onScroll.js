export function revealOnScroll(node, options = {}) {
  const { rootMargin = '0px 0px -10% 0px', threshold = 0.1 } = options;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        node.classList.add("revealed");
      }
    });
  }, { rootMargin, threshold });

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    }
  };
}
