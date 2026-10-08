<script setup lang="ts">
import type { Article } from '~/data/artikel'
import { formatDate } from '~/utils/format'

defineProps<{ article: Article }>()
</script>

<template>
  <header class="bg-white">
    <div class="hero-enter container-x pb-10 pt-12 text-center md:pb-12 md:pt-[72px]">
      <span
        class="inline-block rounded-full bg-tint-teal px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-brand-deep"
      >
        {{ article.category }}
      </span>
      <h1
        class="mx-auto mt-5 max-w-[880px] text-3xl font-normal leading-[1.15] tracking-[-0.5px] text-heading-dark sm:text-4xl lg:text-[52px]"
      >
        {{ article.title }}
      </h1>
      <p
        class="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted md:text-[13px]"
      >
        <time :datetime="article.date" class="text-heading-dark">{{ formatDate(article.date) }}</time>
        <span aria-hidden="true">•</span>
        <span>Sumber: {{ article.source }}</span>
        <span aria-hidden="true">•</span>
        <span>{{ article.readMinutes }} menit baca</span>
      </p>
    </div>

    <div class="hero-media container-x">
      <img
        :src="article.image.src"
        :alt="article.image.alt"
        width="1296"
        height="560"
        fetchpriority="high"
        class="aspect-[16/9] w-full rounded-3xl object-cover lg:aspect-[7/3]"
      />
    </div>
  </header>
</template>
