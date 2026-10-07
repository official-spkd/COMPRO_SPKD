<script setup lang="ts">
import { solutions } from '~/data/solusi'

type NavLink = {
  label: string
  to: string
  children?: { label: string; to: string }[]
}

const open = ref(false)
const submenu = ref<string | null>(null)
const route = useRoute()

const links: NavLink[] = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang kami', to: '/tentang-kami' },
  {
    label: 'Produk',
    to: '/solusi',
    children: [
      ...solutions.map((s) => ({ label: s.name, to: `/solusi/${s.slug}` })),
      { label: 'Lihat semua produk', to: '/solusi' },
    ],
  },
  {
    label: 'Kerja sama',
    to: '/kerja-sama',
    children: [
      { label: 'Skema kerja sama', to: '/kerja-sama' },
      { label: 'Model kemitraan', to: '/kerja-sama#model' },
    ],
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

// bayangan tipis setelah halaman di-scroll
const scrolled = ref(false)
const onScroll = () => (scrolled.value = window.scrollY > 8)
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onClickOutside)
  document.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onClickOutside)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-white/7 bg-[#11214b] font-inter transition-shadow duration-300"
    :class="{ 'shadow-[0_8px_30px_rgba(0,18,37,0.35)]': scrolled }"
  >
    <nav
      ref="navRef"
      class="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:h-[72px] sm:px-8 lg:h-24 lg:px-20"
    >
      <NuxtLink to="/" class="font-bold text-white lg:w-[260px]" aria-label="SPKD — Beranda">
        <span class="block text-2xl leading-[1.1] lg:text-[30px]">SPKD</span>
        <span class="block text-[10px] font-normal leading-[1.1] text-[#bdd1df]">
          Sistem Pelayanan Kesehatan &amp; Data
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
            :class="isActive(link.to) ? 'font-semibold text-[#34d8eb]' : 'text-white hover:text-[#34d8eb]'"
          >
            {{ link.label }}
          </NuxtLink>
          <template v-else>
            <button
              type="button"
              class="flex items-center gap-1 whitespace-nowrap py-2 text-sm transition-colors"
              :class="isActive(link.to) ? 'font-semibold text-[#34d8eb]' : 'text-white hover:text-[#34d8eb]'"
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
                  class="min-w-[260px] overflow-hidden rounded-2xl border border-white/13 bg-[#14285c] p-2 shadow-[0_24px_60px_rgba(0,18,37,0.35)]"
                >
                  <li v-for="child in link.children" :key="child.label">
                    <NuxtLink
                      :to="child.to"
                      class="block rounded-xl px-4 py-2.5 text-sm text-[#bdd1df] transition-colors hover:bg-white/6 hover:text-white"
                      :class="{ 'text-white': route.fullPath === child.to }"
                    >
                      {{ child.label }}
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
        class="btn-gradient hidden items-center rounded-xl px-[22px] py-[17px] text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110 lg:inline-flex"
      >
        Jadwalkan demo&nbsp;&nbsp;&nbsp;↗
      </NuxtLink>

      <!-- Hamburger (mobile & tablet) -->
      <button
        class="rounded-md p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
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
      <div v-if="open" class="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/7 bg-[#11214b] px-4 pb-5 pt-2 lg:hidden">
        <ul>
          <li v-for="link in links" :key="link.label">
            <NuxtLink
              v-if="!link.children"
              :to="link.to"
              class="block rounded-md px-3 py-2.5 text-sm transition-colors"
              :class="isActive(link.to) ? 'bg-white/6 font-semibold text-[#34d8eb]' : 'text-white hover:bg-white/6'"
            >
              {{ link.label }}
            </NuxtLink>
            <template v-else>
              <button
                type="button"
                class="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm transition-colors"
                :class="isActive(link.to) ? 'font-semibold text-[#34d8eb]' : 'text-white hover:bg-white/6'"
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
              <ul v-if="submenu === link.label" class="mb-1 ml-3 border-l border-white/13 pl-2">
                <li v-for="child in link.children" :key="child.label">
                  <NuxtLink
                    :to="child.to"
                    class="block rounded-md px-3 py-2 text-sm text-[#bdd1df] transition-colors hover:bg-white/6 hover:text-white"
                  >
                    {{ child.label }}
                  </NuxtLink>
                </li>
              </ul>
            </template>
          </li>
        </ul>
        <NuxtLink
          to="/kontak"
          class="btn-gradient mt-3 flex items-center justify-center rounded-xl px-[22px] py-4 text-[15px] font-semibold text-white"
        >
          Jadwalkan demo&nbsp;&nbsp;&nbsp;↗
        </NuxtLink>
      </div>
    </Transition>
  </header>
</template>
