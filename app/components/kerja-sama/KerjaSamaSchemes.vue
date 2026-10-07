<script setup lang="ts">
const schemes = [
  {
    title: 'Lisensi',
    desc: 'Biaya tahunan atau per siklus penggunaan. Cocok untuk fasilitas yang ingin memulai dari satu produk.',
  },
  {
    title: 'Kerja sama operasional (KSO)',
    desc: 'Investasi awal dibiayai melalui skema bersama mitra perbankan, sehingga anggaran rumah sakit tidak terbebani di awal.*',
  },
  {
    title: 'Paket jejaring',
    desc: 'Satu kerja sama untuk grup rumah sakit, dinas kesehatan, atau satu wilayah, termasuk panel pemantauan.',
  },
  {
    title: 'Program uji coba',
    desc: 'Mulai dari satu unit atau satu siklus untuk membuktikan hasil sebelum diperluas.',
  },
]
</script>

<template>
  <section id="skema" class="scroll-mt-24 bg-[#f8fafc] font-inter">
    <div class="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-14 sm:px-8 lg:px-40 lg:py-[88px]">
      <div v-reveal class="max-w-[940px]">
        <p class="text-[13px] font-semibold leading-[1.6] text-[#087f79]">Skema kerja sama</p>
        <h2 class="mt-[1.6em] text-3xl font-semibold leading-[1.2] text-[#102b46] md:text-[40px]">
          Pilih skema yang sesuai dengan kondisi Anda
        </h2>
      </div>

      <ul class="grid gap-6 md:grid-cols-2">
        <li
          v-for="(s, i) in schemes"
          :key="s.title"
          v-reveal="i % 2"
          class="hover-lift flex flex-col items-start gap-6 rounded-3xl border border-[#dce7ed] bg-white p-8 shadow-[0_10px_32px_rgba(11,31,58,0.04)]"
        >
          <img src="/images/kerja-sama/layers.svg" alt="" aria-hidden="true" width="24" height="24" />
          <div>
            <h3 class="text-[23px] font-semibold leading-[1.3] text-[#102b46]">{{ s.title }}</h3>
            <p class="mt-[1.6em] text-lg leading-[1.6] text-[#53677b]">{{ s.desc }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
