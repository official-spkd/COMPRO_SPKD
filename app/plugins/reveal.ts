// Directive `v-reveal`: elemen muncul halus (fade-up) saat pertama kali masuk layar.
// Pemakaian: `v-reveal` atau `v-reveal="index"` untuk jeda bertahap pada daftar/kartu.
// Konten tetap terlihat tanpa JS: status tersembunyi hanya dipasang di client.
import type { Directive } from 'vue'

const STAGGER_MS = 80

// Lepas kelas reveal setelah animasi selesai agar tidak menimpa transisi hover elemen.
function cleanupAfterReveal(el: HTMLElement) {
  let done = false
  const finish = () => {
    if (done) return
    done = true
    el.classList.remove('reveal', 'is-visible')
    el.style.removeProperty('--reveal-delay')
  }
  el.addEventListener(
    'transitionend',
    (event) => {
      if (event.target === el && event.propertyName === 'opacity') finish()
    },
  )
  // Cadangan bila transitionend tidak terpicu (mis. tab tidak aktif).
  const delay = Number.parseInt(el.style.getPropertyValue('--reveal-delay')) || 0
  window.setTimeout(finish, 1000 + delay)
}

export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null

  const getObserver = () => {
    observer ??= new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          el.classList.add('is-visible')
          observer?.unobserve(el)
          cleanupAfterReveal(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    return observer
  }

  const reveal: Directive<HTMLElement, number | undefined> = {
    getSSRProps: () => ({}),
    mounted(el, binding) {
      if (!('IntersectionObserver' in window)) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      // Yang sudah terlihat saat halaman dibuka tidak disembunyikan (hindari kedip).
      if (el.getBoundingClientRect().top < window.innerHeight) return

      el.style.setProperty('--reveal-delay', `${(binding.value ?? 0) * STAGGER_MS}ms`)
      el.classList.add('reveal')
      getObserver().observe(el)
    },
    beforeUnmount(el) {
      observer?.unobserve(el)
    },
  }

  nuxtApp.vueApp.directive('reveal', reveal)
})
