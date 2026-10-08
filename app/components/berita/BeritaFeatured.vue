<script setup lang="ts">
import type { Article } from '~/data/artikel'
import { formatDate } from '~/utils/format'

defineProps<{ article: Article }>()
</script>

<template>
  <article class="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
    <NuxtLink
      :to="`/berita/${article.slug}`"
      class="group block overflow-hidden rounded-[28px]"
      tabindex="-1"
    >
      <img
        :src="article.image.src"
        :alt="article.image.alt"
        width="760"
        height="514"
        fetchpriority="high"
        class="img-zoom aspect-[4/3] w-full object-cover lg:aspect-[3/2]"
      />
    </NuxtLink>

    <div>
      <div class="flex items-center justify-between gap-4 text-[11px] md:text-xs">
        <span class="font-bold uppercase tracking-wide text-brand-deep">{{ article.category }}</span>
        <time :datetime="article.date" class="text-muted">{{ formatDate(article.date) }}</time>
      </div>
      <h2
        class="mt-5 text-3xl font-normal leading-[1.2] tracking-[-0.5px] text-heading-dark md:text-4xl lg:text-[40px]"
      >
        {{ article.title }}
      </h2>
      <p class="mt-5 text-[15px] leading-[1.7] text-body">
        {{ article.excerpt }}
      </p>
      <NuxtLink
        :to="`/berita/${article.slug}`"
        class="mt-7 inline-flex items-center gap-3 rounded-full border border-brand-deep px-5 py-3 text-sm font-medium text-brand-dark transition hover:bg-brand-deep hover:text-white"
      >
        Baca artikel
        <Icon name="lucide:arrow-up-right" class="size-4" />
      </NuxtLink>
    </div>
  </article>
</template>
