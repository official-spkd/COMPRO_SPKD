<script setup lang="ts">
// Tahap disorot bergantian, tiap tahap 1,2 detik (lihat .home-flow-label di main.css)
const flow = ['Pasien', 'RME', 'Klaim', 'Dana masuk']
const STEP = 1.2
const CYCLE = STEP * flow.length
</script>

<template>
  <section
    class="relative flex min-h-hero flex-col justify-center overflow-hidden bg-gradient-to-r from-night-from via-night via-[18.27%] to-night-to"
  >
    <img
      src="/images/beranda/hero-mesh.svg"
      alt=""
      aria-hidden="true"
      width="752"
      height="668"
      class="pointer-events-none absolute -bottom-[180px] -right-[180px] h-[668px] w-[752px] max-w-none select-none"
    />

    <div
      class="relative mx-auto flex w-full max-w-[1440px] flex-col items-start gap-14 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-center lg:px-20 lg:py-20"
    >
      <div class="hero-enter flex w-full max-w-[580px] flex-col items-start gap-7">
        <p
          class="rounded-full border border-accent-glow/25 bg-accent-glow/9 px-3.5 py-[7px] text-[13px] font-medium text-accent-glow"
        >
          Teknologi data untuk rumah sakit Indonesia
        </p>
        <h1 class="text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[80px]">
          No ERM, No Claim.
        </h1>
        <p class="text-base leading-[1.7] text-fog md:text-[17px]">
          Rekam medis elektronik yang lengkap adalah syarat klaim. SPKD membantu rumah sakit
          mencatat dengan rapi, mengklaim dengan tepat, dan menagih tanpa ada yang terlewat.
        </p>
        <div class="flex flex-wrap gap-3">
          <NuxtLink
            to="/kontak"
            class="btn-gradient inline-flex items-center rounded-full px-6 py-4 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110"
          >
            Jadwalkan demo gratis ↗
          </NuxtLink>
          <NuxtLink
            to="/produk"
            class="inline-flex items-center rounded-full border border-white/31 bg-white/5 px-6 py-4 text-[15px] font-semibold text-white transition hover:bg-white/10"
          >
            Lihat produk kami ↗
          </NuxtLink>
        </div>
      </div>

      <ol
        class="hero-media w-full overflow-hidden rounded-[20px] border border-white/13 bg-white/6 shadow-[0_24px_60px_rgba(0,18,37,0.25)] sm:w-[340px] lg:shrink-0"
        aria-label="Alur dari pasien sampai dana masuk"
      >
        <li
          v-for="(step, i) in flow"
          :key="step"
          class="border-b border-white/7 px-8 py-7 last:border-b-0"
        >
          <span
            class="home-flow-label block text-lg font-semibold text-white"
            :style="{ animationDelay: i ? `-${CYCLE - i * STEP}s` : undefined }"
          >
            {{ step }}
          </span>
        </li>
      </ol>
    </div>
  </section>
</template>
