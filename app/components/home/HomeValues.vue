<script setup lang="ts">
const values = [
  {
    icon: '/images/beranda/chart-no-axes-combined.svg',
    title: 'Data klinis jadi pendapatan',
    desc: 'Pencatatan yang lengkap membuat klaim lebih akurat dan selisih tarif tertagih.',
  },
  {
    icon: '/images/beranda/shield-check-teal.svg',
    title: 'Siap mengikuti regulasi',
    desc: 'Dirancang mengikuti standar SATUSEHAT, INA-CBG, dan ketentuan BPJS Kesehatan.',
  },
  {
    icon: '/images/beranda/handshake.svg',
    title: 'Didampingi sejak hari pertama',
    desc: 'Tim kami hadir dari analisis kebutuhan, implementasi, sampai tim Anda mahir.',
  },
]
</script>

<template>
  <section class="bg-[#f8fafc] font-inter">
    <ul
      class="mx-auto grid max-w-[1440px] gap-6 px-5 py-14 sm:px-8 md:grid-cols-3 lg:px-20 lg:py-[88px]"
    >
      <li
        v-for="(v, i) in values"
        :key="v.title"
        v-reveal="i"
        class="hover-lift flex flex-col items-start gap-6 rounded-3xl border border-[#dce7ed] bg-white p-8 shadow-[0_10px_32px_rgba(11,31,58,0.04)]"
      >
        <img :src="v.icon" alt="" aria-hidden="true" width="24" height="24" />
        <div>
          <h2 class="text-[23px] font-semibold leading-[1.3] text-[#102b46]">{{ v.title }}</h2>
          <p class="mt-[1.6em] text-lg leading-[1.6] text-[#53677b]">{{ v.desc }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
