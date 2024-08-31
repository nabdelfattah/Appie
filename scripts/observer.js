export function initObserver(elements, addedClass, threshold) {
  const observer = new IntersectionObserver(cb, { threshold });
  function cb(entries) {
    entries.forEach((entry) => {
      entry.target.classList.toggle(addedClass, entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  }
  if (elements.length) elements.forEach((el) => observer.observe(el));
  else observer.observe(elements);
}

export function delayedObserver(elements, className, threshold){
  const observer = new IntersectionObserver(cb, { threshold });
  function cb(entries) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add(className)
        }, 300*index);
      }
    });
  }
  elements.forEach((el) => observer.observe(el));
}