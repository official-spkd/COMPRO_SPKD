<script setup lang="ts">
const steps = [
  { title: 'Kirim permintaan', desc: 'Isi formulir atau hubungi tim kemitraan kami.' },
  { title: 'Diskusi awal', desc: 'Kami memahami kebutuhan, sistem yang ada, dan prioritas Anda.' },
  {
    title: 'Asesmen kesiapan digital',
    desc: 'Pemetaan proses, data, infrastruktur, risiko, dan prioritas.',
  },
  {
    title: 'Proposal dan perjanjian',
    desc: 'Ruang lingkup, skema, jadwal, dan target disepakati bersama.',
  },
  {
    title: 'Implementasi dan pendampingan',
    desc: 'Konfigurasi, migrasi data, pelatihan per peran, go-live bertahap, dan dukungan berkelanjutan.',
  },
]
</script>

<template>
  <section id="cara-bermitra" class="scroll-mt-24 bg-white">
    <div class="mx-auto flex max-w-[1440px] flex-col gap-14 px-5 py-14 sm:px-8 lg:p-[88px]">
      <div v-reveal class="flex flex-col gap-[18px]">
        <p class="text-sm font-bold text-brand-strong">Cara bermitra</p>
        <h2 class="text-3xl font-bold leading-[1.18] text-heading-dark md:text-[42px]">
          Lima langkah dari perkenalan sampai sistem berjalan
        </h2>
        <p class="text-lg leading-[1.65] text-body-alt">
          Setiap tahap punya hasil yang jelas dan keputusan lanjut yang transparan.
        </p>
      </div>

      <ol>
        <li
          v-for="(s, i) in steps"
          :key="s.title"
          v-reveal="i"
          class="flex items-start gap-4 border-b border-line-soft py-[22px] md:gap-6"
        >
          <span class="w-10 shrink-0 text-2xl font-bold leading-[1.6] text-brand-strong md:w-[54px]">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <p class="text-lg leading-[1.65] text-body-alt">
            <strong class="text-xl font-bold text-heading-dark md:text-[23px]">{{ s.title }}</strong>
            · {{ s.desc }}
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>
