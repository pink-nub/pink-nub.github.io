import { ref } from 'vue'

export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const activeSection = ref('home')

export function scrollToSection(id, { smooth = true, tries = 20 } = {}) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' })
    return
  }
  if (tries > 0) requestAnimationFrame(() => scrollToSection(id, { smooth, tries: tries - 1 }))
}

export function scrollToSectionOnLoad(id) {
  let cancelled = false
  const cancel = () => {
    cancelled = true
    for (const type of ['wheel', 'touchstart', 'keydown']) {
      window.removeEventListener(type, cancel)
    }
  }
  for (const type of ['wheel', 'touchstart', 'keydown']) {
    window.addEventListener(type, cancel, { once: true, passive: true })
  }

  const settle = () => {
    if (cancelled) return
    scrollToSection(id, { smooth: false })
  }

  scrollToSection(id, { smooth: false })
  document.fonts?.ready.then(settle)
  if (document.readyState === 'complete') requestAnimationFrame(settle)
  else window.addEventListener('load', () => requestAnimationFrame(settle), { once: true })
  setTimeout(() => {
    settle()
    cancel()
  }, 1200)
}
