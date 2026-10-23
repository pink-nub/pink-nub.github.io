const PREFERS_REDUCED = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

let observer

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.04 },
    )
  }
  return observer
}

export const reveal = {
  mounted(el, binding) {
    if (PREFERS_REDUCED()) return
    el.classList.add('reveal')
    const delay = Number(binding.value) || 0
    if (delay) el.style.transitionDelay = `${delay}ms`
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
