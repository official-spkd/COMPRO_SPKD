<script setup lang="ts">
const steps = [
  { title: 'Diskusi kebutuhan', desc: 'Kami memetakan alur, data, dan prioritas rumah sakit Anda.' },
  { title: 'Uji coba terbatas', desc: 'Produk diuji di satu unit atau satu siklus dengan data nyata.' },
  { title: 'Implementasi dan pelatihan', desc: 'Integrasi sistem, migrasi data, dan pelatihan per peran.' },
  { title: 'Pendampingan berkelanjutan', desc: 'Evaluasi rutin dan pembaruan sesuai regulasi.' },
]
</script>

<template>
  <section class="bg-white font-inter">
    <div
      class="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-14 sm:px-8 lg:px-20 lg:py-[88px]"
    >
      <p class="text-[13px] font-semibold leading-[1.6] text-[#087f79]">Cara kerja</p>

      <div class="flex flex-col gap-12 lg:flex-row lg:gap-20">
        <div v-reveal class="flex flex-col items-start gap-10 lg:w-[596px] lg:shrink-0 lg:gap-20">
          <div class="flex flex-col gap-6">
            <h2 class="text-3xl font-semibold leading-[1.2] text-[#102b46] md:text-[40px]">
              Mulai kecil, buktikan hasilnya, lalu kembangkan.
            </h2>
            <p class="text-lg leading-[1.65] text-[#53677b]">
              Kami tahu memilih mitra teknologi baru butuh keyakinan. Karena itu, setiap kerja sama
              dimulai dengan langkah yang terukur.
            </p>
          </div>
          <NuxtLink
            to="/kerja-sama"
            class="btn-gradient inline-flex items-center rounded-xl px-[22px] py-[17px] text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110"
          >
            Pelajari skema kerja sama&nbsp;&nbsp;&nbsp;↗
          </NuxtLink>
        </div>

        <ol class="flex flex-1 flex-col gap-10">
          <li v-for="(step, i) in steps" :key="step.title" v-reveal="i">
            <h3 class="text-[23px] font-semibold leading-[1.6] text-[#102b46]">
              <span class="mr-4 text-[#087f79]">{{ String(i + 1).padStart(2, '0') }}</span>{{ step.title }}
            </h3>
            <p class="text-lg leading-[1.6] text-[#53677b]">{{ step.desc }}</p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
