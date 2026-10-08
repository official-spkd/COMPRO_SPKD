<script setup lang="ts">
const rows = [
  {
    cols: 'lg:grid-cols-[667fr_416fr]',
    cards: [
      {
        title: 'Klaim pending dan dikembalikan',
        desc: 'Resume medis atau koding yang kurang lengkap membuat klaim tertahan dan arus kas tersendat.',
        product: 'SIMRS',
        class: 'bg-white rounded-tl-[34px] lg:h-[176px]',
      },
      {
        title: 'Undercoding dan episode merugi',
        desc: 'Biaya pelayanan lebih besar dari tarif INA-CBG, tetapi penyebabnya baru diketahui setelah klaim dibayar.',
        product: 'MedClaim',
        class: 'bg-tint-blue rounded-tr-[34px] lg:h-[176px]',
      },
    ],
  },
  {
    cols: 'lg:grid-cols-[413fr_672fr]',
    cards: [
      {
        title: 'Selisih tarif yang terlewat',
        desc: 'Pasien dengan asuransi kedua punya hak tagih selisih, tetapi prosesnya manual dan mudah melewati batas waktu.',
        product: 'MedPay',
        class: 'bg-tint-blue rounded-bl-[34px] lg:h-[212px]',
      },
      {
        title: 'Mutu dan kredensial sulit dibuktikan',
        desc: 'Kepatuhan clinical pathway dan kesiapan kredensial tersebar di banyak dokumen, sehingga sulit dipantau.',
        product: 'MedPath · MedCredix',
        class: 'bg-white rounded-br-[34px] lg:h-[212px]',
      },
    ],
  },
]
</script>

<template>
  <section class="bg-surface">
    <div
      class="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 pb-14 pt-2 sm:px-8 lg:px-[170px] lg:pb-[88px] lg:pt-[30px]"
    >
      <div v-reveal class="flex flex-col gap-3">
        <p class="text-[13px] font-semibold leading-[1.6] text-accent">Tantangan rumah sakit</p>
        <h2 class="text-[28px] font-bold leading-[1.1] tracking-[-0.8px] text-heading md:text-4xl">
          Klaim tertunda sering berawal dari data yang belum lengkap.
        </h2>
        <p class="mt-1 text-sm leading-[22px] text-body">
          Kami membangun SPKD dari masalah yang dihadapi rumah sakit setiap hari.
        </p>
      </div>

      <div class="flex flex-col gap-3.5">
        <div v-for="row in rows" :key="row.cols" class="grid gap-3.5" :class="row.cols">
          <article
            v-for="(card, i) in row.cards"
            :key="card.title"
            v-reveal="i"
            class="flex flex-col gap-3.5 rounded-[10px] border border-line-blue p-6"
            :class="card.class"
          >
            <div class="flex flex-col gap-1.5">
              <h3 class="text-base font-bold leading-[21px] text-heading-dark">{{ card.title }}</h3>
              <p class="text-sm leading-[22px] text-body-blue">{{ card.desc }}</p>
            </div>
            <p class="text-[13px] font-semibold text-accent">Dijawab oleh {{ card.product }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
