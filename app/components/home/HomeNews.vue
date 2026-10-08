<script setup lang="ts">
import { formatDate } from '~/utils/format'

type ApiNews = {
  slug: string
  title: string
  excerpt: string | null
  featured_image: string | null
  author: string | null
  reading_time: number | null
  published_at: string | null
  category?: { name: string } | null
}

const {
  public: { apiBase },
} = useRuntimeConfig()

const imageUrl = (path: string | null) => {
  if (!path) return ''

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  return `${apiBase.replace('/api', '')}/storage/${path}`
}

// Terima {data: [...]} maupun {data: {data: [...]}} (paginasi)
const { data: res } = await useFetch<{
  data: ApiNews[] | { data: ApiNews[] }
}>(`${apiBase}/news`, {
  key: 'home-news',
})

// Dibentuk sama seperti data/artikel lama, jadi template tidak berubah
// 3 artikel terbaru
const posts = computed(() => {
  const raw = res.value?.data
  const list = Array.isArray(raw) ? raw : (raw?.data ?? [])

  return [...list]
    .sort((a, b) =>
      (b.published_at ?? '').localeCompare(a.published_at ?? ''),
    )
    .slice(0, 3)
    .map((n) => ({
      slug: n.slug,
      title: n.title,
      excerpt: (n.excerpt ?? '').replace(/<[^>]*>/g, ''),
      date: n.published_at ?? '',
      category: n.category?.name ?? '',
      source: n.author ?? '',
      readMinutes: n.reading_time ?? 1,
      image: {
        src: imageUrl(n.featured_image),
        alt: n.title,
      },
    }))
})
</script>

<template>
  <section class="bg-lavender-pale">
    <div class="mx-auto flex max-w-[1440px] flex-col gap-[54px] px-5 py-14 sm:px-8 lg:px-[45px] lg:py-[90px]">
      <div v-reveal class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div class="flex max-w-[756px] flex-col gap-[9px]">
          <p class="text-[12.375px] font-bold uppercase leading-[15.75px] tracking-[1.24px] text-brand-darker">
            Wawasan &amp; Regulasi
          </p>
          <h2 class="text-[28px] font-bold leading-[1.25] tracking-[-0.9px] text-heading-blue md:text-4xl">
            Berita &amp; Wawasan Kebijakan Kesehatan
          </h2>
          <p class="text-base leading-[1.625] text-graphite md:text-lg">
            Pembaruan regulasi, studi kasus implementasi, dan perkembangan teknologi kesehatan
            digital di Indonesia.
          </p>
        </div>
        <NuxtLink
          to="/berita"
          class="inline-flex w-fit shrink-0 items-center gap-[9px] rounded-[13.5px] bg-lavender px-[22.5px] py-[11.25px] text-[15.75px] font-semibold leading-[22.5px] tracking-[0.16px] text-heading-blue drop-shadow-[0_1.125px_1.125px_rgba(0,0,0,0.05)] transition hover:bg-lavender-dark"
        >
          Lihat Semua Artikel
          <img src="/images/beranda/news-arrow.svg" alt="" aria-hidden="true" width="13.5" height="13.5" />
        </NuxtLink>
      </div>

      <ul class="grid gap-9 md:grid-cols-2 lg:grid-cols-3">
        <li v-for="(p, i) in posts" :key="p.slug" v-reveal="i">
          <NuxtLink
            :to="`/berita/${p.slug}`"
            class="hover-lift group flex h-full flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_1.125px_2.25px_rgba(0,0,0,0.05)]"
          >
            <div class="relative h-[252px] overflow-hidden bg-lavender">
              <img
                :src="p.image.src"
                :alt="p.image.alt"
                width="426"
                height="252"
                loading="lazy"
                class="img-zoom size-full object-cover"
              />
              <span
                v-if="p.category"
                class="absolute left-[18px] top-[19px] rounded-full px-[13.5px] py-[4.5px] text-[12.375px] font-semibold leading-[15.75px] tracking-[0.5px] text-white backdrop-blur-[2.25px]"
                :class="i % 2 ? 'bg-brand-darker/90' : 'bg-heading-blue/90'"
              >
                {{ p.category }}
              </span>
            </div>
            <div class="flex flex-1 flex-col gap-5 p-[31.5px]">
              <div class="flex flex-col gap-[13.5px]">
                <time
                  :datetime="p.date"
                  class="text-[12.375px] font-semibold leading-[15.75px] tracking-[0.5px] text-ash"
                >
                  {{ formatDate(p.date) }}
                </time>
                <h3 class="line-clamp-2 text-lg font-bold leading-[24.75px] text-heading-blue">
                  {{ p.title }}
                </h3>
                <p class="line-clamp-3 text-[13.5px] leading-[21.94px] text-graphite">{{ p.excerpt }}</p>
              </div>
              <div
                class="mt-auto flex items-center justify-between gap-4 border-t-[1.125px] border-lavender pt-[19px] text-[12.375px] font-semibold leading-[15.75px] tracking-[0.5px] text-graphite"
              >
                <span>{{ p.source }} • {{ p.readMinutes }} min read</span>
                <img
                  src="/images/beranda/news-arrow.svg"
                  alt=""
                  aria-hidden="true"
                  width="13.5"
                  height="13.5"
                  class="transition group-hover:translate-x-1"
                />
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
