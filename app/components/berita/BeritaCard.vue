<script setup lang="ts">
import type { Article } from '~/data/artikel'
import { formatDate } from '~/utils/format'

defineProps<{ article: Article }>()
</script>

<template>
  <NuxtLink :to="`/berita/${article.slug}`" class="group block">
    <div class="overflow-hidden rounded-3xl">
      <img
        :src="article.image.src"
        :alt="article.image.alt"
        width="636"
        height="330"
        loading="lazy"
        class="img-zoom aspect-[16/10] w-full object-cover md:aspect-[27/14]"
      />
    </div>
    <div class="mt-5 flex items-center justify-between gap-4 text-[11px] md:text-xs">
      <span class="font-bold text-brand-deep">{{ article.category }}</span>
      <time :datetime="article.date" class="text-muted">{{ formatDate(article.date) }}</time>
    </div>
    <h3
      class="mt-4 text-2xl font-normal leading-[1.3] text-heading-dark transition group-hover:text-brand-deep md:text-[28px]"
    >
      {{ article.title }}
    </h3>
    <p class="mt-4 line-clamp-2 text-[13px] leading-[1.7] text-body">
      {{ article.excerpt }}
    </p>
    <span class="mt-4 inline-flex items-center gap-2 text-xs font-bold text-brand-deep">
      Baca selengkapnya
      <Icon name="lucide:arrow-right" class="size-4 transition group-hover:translate-x-1" />
    </span>
  </NuxtLink>
</template>
