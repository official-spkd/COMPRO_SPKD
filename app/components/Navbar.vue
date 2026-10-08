<script setup lang="ts">
import { productPath, products } from '~/data/solusi'

type NavLink = {
  label: string
  to: string
  children?: { label: string; to: string }[]
  // tautan ringkasan di bagian bawah dropdown, mis. "Lihat semua produk"
  allLink?: { label: string; to: string }
}

const open = ref(false)
const submenu = ref<string | null>(null)
const route = useRoute()

const links: NavLink[] = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang kami', to: '/tentang-kami' },
  {
    label: 'Produk',
    to: '/produk',
    children: products.map((p) => ({ label: p.name, to: productPath(p.solutionKey) })),
    allLink: { label: 'Lihat semua produk', to: '/produk' },
  },
  {
    label: 'Kerja sama',
    to: '/kerja-sama',
    // children: [
    //   { label: 'Bidang kerja sama', to: '/kerja-sama#bidang' },
    //   { label: 'Skema kerja sama', to: '/kerja-sama#skema' },
    //   { label: 'Cara bermitra', to: '/kerja-sama#cara-bermitra' },
    // ],
  },
  { label: 'Berita', to: '/berita' },
  { label: 'Kontak', to: '/kontak' },
]

const isActive = (to: string) =>
  to === '/' ? route.path === '/' : route.path.startsWith(to)

const toggleSubmenu = (label: string) =>
  (submenu.value = submenu.value === label ? null : label)

// tutup semua menu tiap pindah halaman
watch(
  () => route.fullPath,
  () => {
    open.value = false
    submenu.value = null
  },
)

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') submenu.value = null
}

// klik di luar dropdown desktop menutupnya
const navRef = ref<HTMLElement>()
const onClickOutside = (e: MouseEvent) => {
  if (navRef.value && !navRef.value.contains(e.target as Node)) submenu.value = null
}

// Halaman dengan hero berlatar terang: navbar langsung putih sejak awal.
// '/berita/*' juga mencakup semua halaman detail artikel.
const lightHeroPages = ['/tentang-kami', '/produk', '/berita', '/berita/*']
const isLightHeroPage = (path: string) =>
  lightHeroPages.some((p) => (p.endsWith('/*') ? path.startsWith(p.slice(0, -1)) : path === p))

// bayangan tipis setelah halaman di-scroll
const scrolledPast = ref(false)
const scrolled = computed(
  () => scrolledPast.value || isLightHeroPage(route.path.replace(/\/$/, '')),
)
const onScroll = () => (scrolledPast.value = window.scrollY > 8)
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onClickOutside)
  document.addEventListener('keydown', onKeydown)
})
// Gelap (navy) di posisi atas, putih semi-transparan setelah di-scroll (atau di halaman berhero terang)
const linkClass = (active: boolean) =>
  scrolled.value
    ? active ? 'font-semibold text-accent' : 'text-heading hover:text-accent'
    : active ? 'font-semibold text-accent-glow' : 'text-white hover:text-accent-glow'

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onClickOutside)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300"
    :class="
      scrolled
        ? 'border-line/70 bg-white/80 shadow-nav backdrop-blur-md'
        : 'border-white/7 bg-midnight'
    "
  >
    <nav
      ref="navRef"
      class="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:h-[72px] sm:px-8 lg:h-24 lg:px-20"
    >
      <!-- Logo putih di atas navy, logo berwarna setelah navbar jadi putih -->
      <NuxtLink to="/" class="group flex items-center gap-3 lg:w-[260px]" aria-label="SPKD — Beranda">
        <img
          :src="scrolled ? '/images/beranda/logo-spkd-nav-light.svg' : '/images/beranda/logo-spkd-nav-dark.svg'"
          alt="Logo SPKD"
          width="51"
          height="45"
          class="h-10 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-[45px]"
        />
        <span class="flex flex-col whitespace-nowrap transition-colors">
          <span
            class="text-2xl"
            :class="scrolled ? 'font-extrabold text-navy-dark' : 'font-black text-white'"
          >
            SPKD
          </span>
          <span
            class="text-[9px] font-semibold"
            :class="scrolled ? 'text-steel' : 'uppercase text-white'"
          >
            Sistem Pelayanan Kesehatan &amp; Data
          </span>
        </span>
      </NuxtLink>

      <!-- Menu desktop -->
      <ul class="hidden items-center gap-6 lg:flex xl:gap-[34px]">
        <li
          v-for="link in links"
          :key="link.label"
          class="relative"
          @mouseenter="link.children && (submenu = link.label)"
          @mouseleave="link.children && (submenu = null)"
        >
          <NuxtLink
            v-if="!link.children"
            :to="link.to"
            class="block whitespace-nowrap py-2 text-sm transition-colors"
            :class="linkClass(isActive(link.to))"
          >
            {{ link.label }}
          </NuxtLink>
          <template v-else>
            <button
              type="button"
              class="flex items-center gap-1 whitespace-nowrap py-2 text-sm transition-colors"
              :class="linkClass(isActive(link.to))"
              aria-haspopup="true"
              :aria-expanded="submenu === link.label"
              @click.stop="submenu = link.label"
            >
              {{ link.label }}
              <Icon
                name="lucide:chevron-down"
                class="size-3.5 transition-transform duration-200"
                :class="{ 'rotate-180': submenu === link.label }"
              />
            </button>
            <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="-translate-y-1 opacity-0"
              leave-active-class="transition duration-100 ease-in"
              leave-to-class="-translate-y-1 opacity-0"
            >
              <div v-if="submenu === link.label" class="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                <ul
                  class="min-w-[260px] overflow-hidden rounded-2xl border p-2"
                  :class="
                    scrolled
                      ? 'border-line bg-white shadow-dropdown'
                      : 'border-white/13 bg-night shadow-[0_24px_60px_rgba(0,18,37,0.35)]'
                  "
                >
                  <li v-for="child in link.children" :key="child.label">
                    <NuxtLink
                      :to="child.to"
                      class="block rounded-xl px-4 py-2.5 text-sm transition-colors"
                      :class="
                        scrolled
                          ? 'text-body hover:bg-tint-aqua hover:text-heading'
                          : 'text-fog hover:bg-white/6 hover:text-white'
                      "
                    >
                      {{ child.label }}
                    </NuxtLink>
                  </li>
                  <li
                    v-if="link.allLink"
                    class="mt-2 border-t pt-2"
                    :class="scrolled ? 'border-line' : 'border-white/13'"
                  >
                    <NuxtLink
                      :to="link.allLink.to"
                      class="flex items-center justify-between gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors"
                      :class="
                        scrolled
                          ? 'text-accent hover:bg-tint-aqua hover:text-heading'
                          : 'text-accent-glow hover:bg-white/6 hover:text-white'
                      "
                    >
                      {{ link.allLink.label }}
                      <Icon name="lucide:arrow-right" class="size-4" />
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </Transition>
          </template>
        </li>
      </ul>

      <NuxtLink
        to="/kontak"
        class="btn-gradient hidden items-center rounded-full px-[22px] py-[17px] text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110 lg:inline-flex"
      >
        Jadwalkan demo&nbsp;&nbsp;&nbsp;↗
      </NuxtLink>

      <!-- Hamburger (mobile & tablet) -->
      <button
        class="rounded-md p-2 transition-colors lg:hidden"
        :class="scrolled ? 'text-heading hover:bg-tint-aqua' : 'text-white hover:bg-white/10'"
        aria-label="Toggle menu"
        :aria-expanded="open"
        @click="open = !open"
      >
        <svg v-if="!open" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </nav>

    <!-- Menu mobile -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div
        v-if="open"
        class="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t px-4 pb-5 pt-2 lg:hidden"
        :class="scrolled ? 'border-line' : 'border-white/7 bg-midnight'"
      >
        <ul>
          <li v-for="link in links" :key="link.label">
            <NuxtLink
              v-if="!link.children"
              :to="link.to"
              class="block rounded-md px-3 py-2.5 text-sm transition-colors"
              :class="linkClass(isActive(link.to))"
            >
              {{ link.label }}
            </NuxtLink>
            <template v-else>
              <button
                type="button"
                class="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm transition-colors"
                :class="linkClass(isActive(link.to))"
                :aria-expanded="submenu === link.label"
                @click="toggleSubmenu(link.label)"
              >
                {{ link.label }}
                <Icon
                  name="lucide:chevron-down"
                  class="size-4 transition-transform duration-200"
                  :class="{ 'rotate-180': submenu === link.label }"
                />
              </button>
              <ul
                v-if="submenu === link.label"
                class="mb-1 ml-3 border-l pl-2"
                :class="scrolled ? 'border-line' : 'border-white/13'"
              >
                <li v-for="child in link.children" :key="child.label">
                  <NuxtLink
                    :to="child.to"
                    class="block rounded-md px-3 py-2 text-sm transition-colors"
                    :class="
                      scrolled
                        ? 'text-body hover:bg-tint-aqua hover:text-heading'
                        : 'text-fog hover:bg-white/6 hover:text-white'
                    "
                  >
                    {{ child.label }}
                  </NuxtLink>
                </li>
                <li v-if="link.allLink">
                  <NuxtLink
                    :to="link.allLink.to"
                    class="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition-colors"
                    :class="scrolled ? 'text-accent hover:bg-tint-aqua' : 'text-accent-glow hover:bg-white/6'"
                  >
                    {{ link.allLink.label }}
                    <Icon name="lucide:arrow-right" class="size-4" />
                  </NuxtLink>
                </li>
              </ul>
            </template>
          </li>
        </ul>
        <NuxtLink
          to="/kontak"
          class="btn-gradient mt-3 flex items-center justify-center rounded-full px-[22px] py-4 text-[15px] font-semibold text-white"
        >
          Jadwalkan demo&nbsp;&nbsp;&nbsp;↗
        </NuxtLink>
      </div>
    </Transition>
  </header>
</template>
