<script setup lang="ts">
import type { Article } from '~/data/artikel'

defineProps<{ items: Article[] }>()
</script>

<template>
  <section class="bg-surface py-12 md:py-16 lg:py-20">
    <div class="container-x">
      <div v-reveal>
        <p class="text-[11px] font-medium uppercase tracking-wider text-brand-deep">Baca selanjutnya</p>
        <h2 class="mt-3 text-3xl font-normal text-heading-dark md:text-[38px]">Wawasan terkait</h2>
      </div>

      <ul class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <li v-for="(a, i) in items" :key="a.slug" v-reveal="i">
          <NuxtLink
            :to="`/berita/${a.slug}`"
            class="hover-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card"
          >
            <div class="overflow-hidden">
              <img
                :src="a.image.src"
                :alt="a.image.alt"
                width="600"
                height="296"
                loading="lazy"
                class="img-zoom aspect-[2/1] w-full object-cover"
              />
            </div>
            <div class="flex flex-1 flex-col p-5 md:p-6">
              <div class="flex items-center justify-between gap-4 text-[10px] md:text-[11px]">
                <span class="font-medium uppercase tracking-wide text-brand-deep">{{ a.category }}</span>
                <time :datetime="a.date" class="text-muted">{{ formatDate(a.date) }}</time>
              </div>
              <h3 class="mt-3 text-base font-medium leading-snug text-heading-dark md:text-lg">{{ a.title }}</h3>
              <p class="mt-2 line-clamp-2 text-xs leading-relaxed text-body md:text-[13px]">{{ a.excerpt }}</p>
              <span class="mt-auto inline-flex items-center gap-2 pt-4 text-xs font-bold text-brand-deep">
                Baca artikel
                <Icon name="lucide:arrow-right" class="size-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
