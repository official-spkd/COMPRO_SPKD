<script setup lang="ts">
import { productCategories, productPath, products, type ProductCategory } from '~/data/solusi'

useSeoMeta({
  title: 'Produk',
  description:
    'Lima produk SPKD untuk mencatat, mengklaim, dan menagih dengan tepat: SIMRS, MedPath, MedClaim, MedPay, dan MedCredix.',
})

const filters = ['Semua', ...productCategories] as const
const active = ref<'Semua' | ProductCategory>('Semua')

const visibleProducts = computed(() =>
  active.value === 'Semua' ? products : products.filter((p) => p.category === active.value),
)
</script>

<template>
  <div class="w-full bg-white">
    <!-- Hero -->
    <section class="flex min-h-hero flex-col justify-center overflow-hidden bg-surface">
      <div class="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 md:py-20 lg:px-[88px] lg:py-24">
        <div class="hero-enter flex max-w-[1080px] flex-col items-start gap-5 md:gap-6">
          <p class="text-[13px] font-semibold text-accent">Produk SPKD</p>
          <h1 class="text-[36px] font-bold leading-[1.12] text-heading-dark sm:text-5xl lg:text-[64px]">
            Lima produk untuk mencatat, mengklaim, dan menagih dengan tepat.
          </h1>
          <p class="max-w-[1000px] text-base leading-[1.65] text-body md:text-xl">
            Mulai dari satu produk sesuai kebutuhan paling mendesak, lalu kembangkan. Setiap produk bisa berdiri
            sendiri dan saling terhubung saat dipakai bersama.
          </p>
          <NuxtLink
            to="/kontak"
            class="btn-gradient inline-flex h-[54px] items-center rounded-full px-6 text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:brightness-110"
          >
            Jadwalkan demo
          </NuxtLink>
        </div>
        <svg
          aria-hidden="true"
          viewBox="0 0 1264 80"
          fill="none"
          preserveAspectRatio="none"
          class="mt-8 h-14 w-full text-turquoise/40 md:mt-10 md:h-20"
        >
          <path
            d="M0 64C120 58 220 20 330 18C440 16 520 66 620 64C720 62 760 18 880 14C1000 10 1120 16 1264 8"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </div>
    </section>

    <!-- Daftar produk -->
    <section class="px-5 py-14 sm:px-8 md:py-20 lg:px-[160px] lg:py-[100px]">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-6">
        <div role="group" aria-label="Filter kategori produk" class="flex flex-wrap gap-3">
          <button
            v-for="filter in filters"
            :key="filter"
            type="button"
            class="h-[52px] rounded-full px-5 text-sm font-semibold transition"
            :class="
              active === filter
                ? 'bg-gradient-ocean text-white'
                : 'border border-line bg-white text-heading-dark hover:border-accent'
            "
            :aria-pressed="active === filter"
            @click="active = filter"
          >
            {{ filter }}
          </button>
        </div>

        <TransitionGroup
          tag="ul"
          class="grid gap-4 md:grid-cols-2 md:gap-6"
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="translate-y-2 opacity-0"
        >
          <li v-for="p in visibleProducts" :key="p.solutionKey">
            <NuxtLink
              :to="productPath(p.solutionKey)"
              class="hover-lift group flex h-full flex-col items-start gap-6 rounded-3xl border border-line bg-white p-6 shadow-card md:p-8"
            >
              <Icon :name="p.icon" class="size-6 text-accent" />
              <span class="rounded-full border border-line-teal bg-tint-aqua px-2.5 py-1 text-xs text-brand-deep">
                {{ p.stage }}
              </span>
              <div>
                <h2 class="text-xl font-semibold leading-[1.3] text-heading md:text-[23px]">{{ p.name }}</h2>
                <p class="mt-4 text-base leading-[1.6] text-body md:mt-6 md:text-lg">
                  {{ p.category }} · {{ p.tagline }}
                </p>
                <p class="mt-4 flex items-center gap-1 text-sm font-semibold text-accent md:mt-6">
                  Lihat detail {{ p.name }}
                  <Icon name="lucide:arrow-up-right" class="size-3.5" />
                </p>
              </div>
            </NuxtLink>
          </li>
        </TransitionGroup>
      </div>
    </section>
  </div>
</template>
