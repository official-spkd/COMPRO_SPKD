<script setup lang="ts">
useSeoMeta({
  title: 'Berita & Wawasan',
  description:
    'Perspektif praktis mengenai teknologi, kebijakan, interoperabilitas, dan perubahan layanan kesehatan Indonesia.',
  ogTitle: 'Pusat Informasi & Publikasi Digital Kesehatan | SPKD',
  ogDescription:
    'Perspektif praktis mengenai teknologi, kebijakan, interoperabilitas, dan perubahan layanan kesehatan Indonesia.',
  twitterCard: 'summary_large_image',
})

const { articles } = await useNewsList()
const topics = computed(() => [
  { label: 'Semua', value: 'semua' },
  ...[...new Set(articles.value.map((a) => a.topic as string).filter(Boolean))].map((t) => ({
    label: t,
    value: t,
  })),
])

const active = ref('semua')

// terbaru di atas
const sorted = computed(() => [...articles.value].sort((a, b) => b.date.localeCompare(a.date)))
const featured = computed(() => sorted.value.find((a) => a.featured) ?? sorted.value[0])

const list = computed(() =>
  sorted.value.filter(
    (a) =>
      a.slug !== featured.value?.slug &&
      (active.value === 'semua' || a.topic === active.value),
  ),
)
</script>

<template>
  <div>
    <section class="bg-surface-mint">
      <div class="container-x py-12 md:py-16 lg:pb-24 lg:pt-[72px]">
        <div class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div class="hero-enter">
            <p class="text-[11px] font-bold uppercase tracking-wide text-brand-deep md:text-xs">
              Wawasan &amp; regulasi
            </p>
            <h1
              class="mt-5 max-w-[860px] text-4xl font-bold leading-[1.12] text-heading-dark md:text-5xl lg:text-[64px]"
            >
              Berita &amp; Wawasan Kebijakan Kesehatan
            </h1>
          </div>
          <p class="hero-media max-w-[330px] text-[15px] leading-[1.7] text-body lg:pb-2">
            Pembaruan regulasi, studi kasus implementasi, dan perkembangan teknologi kesehatan digital
            di Indonesia.
          </p>
        </div>

        <BeritaFeatured v-if="featured" :article="featured" class="hero-media mt-10 md:mt-14" />
      </div>
    </section>

    <section class="bg-white py-12 md:py-16 lg:py-[100px]">
      <div class="container-x">
        <div v-reveal class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 class="text-[28px] font-normal text-heading-dark md:text-[38px]">
            Terbaru dari lapangan
          </h2>

          <div role="group" aria-label="Filter topik" class="flex flex-wrap gap-2">
            <button
              v-for="t in topics"
              :key="t.value"
              type="button"
              :aria-pressed="active === t.value"
              class="rounded-full px-4 py-2 text-xs font-semibold transition"
              :class="
                active === t.value
                  ? 'bg-navy text-white'
                  : 'bg-surface-gray text-heading-dark hover:bg-surface-gray-strong'
              "
              @click="active = t.value"
            >
              {{ t.label }}
            </button>
          </div>
        </div>

        <ul v-if="list.length" class="mt-8 grid gap-x-6 gap-y-12 md:mt-10 md:grid-cols-2">
          <li v-for="(a, i) in list" :key="a.slug" v-reveal="i % 2">
            <BeritaCard :article="a" />
          </li>
        </ul>
        <p v-else class="mt-10 text-sm text-muted">Belum ada artikel di topik ini.</p>
      </div>
    </section>
  </div>
</template>