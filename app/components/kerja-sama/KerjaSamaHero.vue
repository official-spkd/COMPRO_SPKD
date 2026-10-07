<script setup lang="ts">
const products = ['SIMRS', 'MedClaim', 'MedCredix', 'MedPath', 'MedPay']
</script>

<template>
  <section
    class="relative overflow-hidden bg-gradient-to-r from-[#101f47] via-[#14285c] via-[18.27%] to-[#0e3b5c]"
  >
    <img
      src="/images/kerja-sama/hero-mesh.svg"
      alt=""
      aria-hidden="true"
      width="752"
      height="668"
      class="pointer-events-none absolute -bottom-[59px] -right-[180px] h-[668px] w-[752px] max-w-none select-none"
    />

    <div
      class="relative mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-5 py-14 sm:px-8 lg:flex-row lg:gap-5 lg:px-[150px] lg:py-[88px]"
    >
      <div class="hero-enter flex w-full flex-col items-start gap-6 lg:w-[620px] lg:shrink-0">
        <p class="text-sm font-bold text-[#2dd4bf]">Kerja sama</p>
        <h1 class="text-4xl font-bold leading-[1.12] text-white md:text-5xl lg:text-[64px]">
          Bangun layanan kesehatan berbasis data bersama SPKD.
        </h1>
        <p class="text-lg leading-[1.65] text-[#b7cdd7] md:text-xl">
          Kami terbuka bekerja sama dengan rumah sakit, puskesmas, klinik, pemerintah daerah,
          lembaga keuangan, dan mitra teknologi. Temukan bentuk kerja sama yang paling sesuai.
        </p>
        <div class="flex flex-wrap gap-3.5">
          <NuxtLink
            to="/kontak"
            class="bg-gradient-ocean inline-flex h-[54px] items-center rounded-full px-6 text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:brightness-110"
          >
            Ajukan kerja sama
          </NuxtLink>
          <a
            href="#skema"
            class="inline-flex h-[54px] items-center rounded-full border border-[#b7cdd7] px-6 text-[15px] font-bold text-white transition hover:bg-white/10"
          >
            Lihat skema kerja sama
          </a>
        </div>
      </div>

      <div
        class="hero-media flex w-full flex-1 flex-col items-center justify-center gap-7 overflow-hidden rounded-[32px] border border-white/13 bg-white/5 px-6 py-10 font-inter lg:h-[420px] lg:p-9"
      >
        <img
          src="/images/kerja-sama/care-pulse.svg"
          alt=""
          aria-hidden="true"
          width="450"
          height="105.645"
          class="h-auto w-full max-w-[450px]"
        />
        <p class="text-5xl font-bold text-white md:text-[68px]">SPKD</p>
        <ul class="flex flex-wrap justify-center gap-3" aria-label="Produk SPKD">
          <li
            v-for="p in products"
            :key="p"
            class="rounded-full border border-[#2dd4bf]/19 bg-[#2dd4bf]/9 px-3 py-[7px] text-xs font-medium text-[#2dd4bf]"
          >
            {{ p }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
