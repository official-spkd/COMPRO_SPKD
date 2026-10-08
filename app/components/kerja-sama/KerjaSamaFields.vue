<script setup lang="ts">
const fields = [
  {
    title: 'Implementasi produk',
    desc: 'Penerapan SIMRS, MedClaim, MedCredix, MedPath, atau MedPay di fasilitas kesehatan Anda.',
  },
  {
    title: 'Integrasi sistem',
    desc: 'Menghubungkan sistem yang sudah ada dengan produk SPKD, SATUSEHAT, dan BPJS.',
  },
  {
    title: 'Pembiayaan transformasi digital',
    desc: 'Skema pembiayaan bersama mitra perbankan agar rumah sakit tidak terbebani investasi awal yang besar.',
  },
  {
    title: 'Uji coba dan pengembangan bersama',
    desc: 'Menguji produk di fasilitas Anda dan ikut menentukan fitur berikutnya.',
  },
  {
    title: 'Pelatihan dan pendampingan',
    desc: 'Pelatihan casemix, RME, dan penggunaan sistem untuk tim Anda.',
  },
  {
    title: 'Program jejaring wilayah',
    desc: 'Penerapan serentak untuk beberapa fasilitas dalam satu grup atau satu wilayah.',
  },
]

// Pola papan catur seperti di desain: kiri-kanan bergantian tiap baris
const tinted = (i: number) => (Math.floor(i / 2) + i) % 2 === 0
</script>

<template>
  <section id="bidang" class="scroll-mt-24 bg-white">
    <div class="mx-auto flex max-w-[1440px] flex-col gap-14 px-5 py-14 sm:px-8 lg:px-40 lg:py-[88px]">
      <div v-reveal class="flex flex-col gap-[18px] font-bold">
        <p class="text-sm text-brand-strong">Bidang kerja sama</p>
        <h2 class="text-3xl leading-[1.18] text-heading-dark md:text-[42px]">
          Apa yang bisa kita kerjakan bersama
        </h2>
      </div>

      <ul class="grid items-start gap-6 md:grid-cols-2">
        <li
          v-for="(f, i) in fields"
          :key="f.title"
          v-reveal="i % 2"
          class="rounded-[28px] border border-line-soft p-7 text-lg leading-[1.65] text-body-alt"
          :class="tinted(i) ? 'bg-tint-blue/65' : 'bg-surface'"
        >
          <strong class="text-xl font-bold text-heading-dark md:text-2xl">{{ f.title }}</strong>
          · {{ f.desc }}
        </li>
      </ul>
    </div>
  </section>
</template>
