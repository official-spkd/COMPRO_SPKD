<script setup lang="ts">
import type { Article } from '~/data/artikel'

defineProps<{ article: Article }>()
</script>

<template>
  <section class="bg-white py-12 md:py-16 lg:pb-[72px]">
    <div
      class="container-x grid gap-10 lg:grid-cols-[64px_minmax(0,1fr)_220px] lg:gap-12 xl:gap-16"
    >
      <!-- Share (desktop) -->
      <aside class="hidden lg:block">
        <div class="sticky top-28">
          <ArtikelShare :title="article.title" vertical />
        </div>
      </aside>

      <!-- Isi artikel -->
      <div class="mx-auto w-full max-w-[740px] min-w-0">
        <div class="rounded-2xl bg-tint-teal px-5 py-5 md:px-6">
          <p class="text-[10px] font-semibold uppercase tracking-wider text-brand-deep">Ringkasan</p>
          <p class="mt-2 text-sm font-semibold leading-[1.6] text-heading-dark md:text-[15px]">
            {{ article.summary }}
          </p>
        </div>

        <div class="mt-8 space-y-6">
          <template v-for="(block, i) in article.blocks" :key="i">
            <!-- Paragraf pertama tampil lebih besar sebagai pembuka -->
            <p
              v-if="block.type === 'p'"
              :class="
                i === 0
                  ? 'text-base leading-[1.7] text-heading-dark md:text-lg'
                  : 'text-sm leading-[1.8] text-heading-dark/85 md:text-[15px]'
              "
            >
              {{ block.text }}
            </p>

            <h2
              v-else-if="block.type === 'h2'"
              :id="block.id"
              class="scroll-mt-28 pt-4 text-2xl font-normal leading-tight text-heading-dark md:text-[30px]"
            >
              {{ block.text }}
            </h2>

            <ul v-else-if="block.type === 'cards'" class="space-y-3">
              <li
                v-for="(card, n) in block.items"
                :id="card.id"
                :key="card.id"
                class="scroll-mt-28 flex gap-4 rounded-xl border border-line px-5 py-4"
              >
                <span class="pt-0.5 text-xs text-brand-deep">
                  {{ String(n + 1).padStart(2, '0') }}
                </span>
                <div>
                  <h3 class="text-[15px] font-semibold text-heading-dark">{{ card.title }}</h3>
                  <p class="mt-1 text-xs text-muted md:text-[13px]">{{ card.desc }}</p>
                </div>
              </li>
            </ul>

            <blockquote
              v-else-if="block.type === 'quote'"
              class="border-l-4 border-brand-deep py-1 pl-5 text-lg italic leading-normal text-heading-dark md:text-[22px]"
            >
              “{{ block.text }}”
            </blockquote>
          </template>
        </div>

        <!-- Share (mobile) -->
        <div class="mt-10 border-t border-line pt-6 lg:hidden">
          <ArtikelShare :title="article.title" />
        </div>
      </div>

      <!-- Daftar isi (desktop) -->
      <aside v-if="article.toc.length" class="hidden lg:block">
        <div class="sticky top-28">
          <ArtikelToc :items="article.toc" />
        </div>
      </aside>
    </div>
  </section>
</template>
