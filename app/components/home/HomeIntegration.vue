<script setup lang="ts">
const integrations = [
  {
    name: 'SATUSEHAT · Kementerian Kesehatan',
    status: '[Terhubung / Dalam proses]',
    desc: 'Pengiriman data RME dengan standar HL7 FHIR R4.',
  },
  {
    name: 'BPJS Kesehatan',
    status: '[Terhubung / Dalam proses]',
    desc: 'VClaim, PCare, dan e-Klaim INA-CBG.',
  },
  {
    name: 'Penyelenggara Sistem Elektronik · Komdigi',
    status: '[Terdaftar / Dalam proses]',
    desc: 'Terdaftar sebagai PSE Lingkup Privat dengan nomor [nomor TDPSE].',
  },
]
</script>

<template>
  <section class="relative overflow-hidden bg-night font-inter">
    <img
      src="/images/beranda/cahaya-teal.svg"
      alt=""
      aria-hidden="true"
      width="720"
      height="670"
      class="pointer-events-none absolute -top-[330px] left-[1020px] h-[670px] w-[720px] max-w-none select-none max-lg:left-auto max-lg:-right-[360px]"
    />

    <div
      class="relative mx-auto flex max-w-[1440px] flex-col gap-12 px-5 py-14 sm:px-8 lg:flex-row lg:gap-[60px] lg:py-16 lg:pl-40 lg:pr-[84px]"
    >
      <div v-reveal class="flex flex-col gap-[17px] lg:w-[578px] lg:shrink-0">
        <p class="text-[13.6px] font-bold leading-[20.4px] text-aqua">Terintegrasi &amp; terdaftar</p>
        <h2
          class="max-w-[460px] text-[30px] font-semibold leading-[1.24] tracking-[-1.13px] text-frost md:text-[36.25px]"
        >
          Dibangun untuk terhubung dengan sistem kesehatan nasional.
        </h2>
        <p class="max-w-[560px] text-[14.7px] leading-[24.9px] text-haze">
          Kami mengikuti standar data dan jalur integrasi resmi agar data rumah sakit Anda bisa
          dipakai di mana pun dibutuhkan.
        </p>
      </div>

      <div v-reveal="1" class="flex flex-col gap-[21px] lg:w-[541px]">
        <div class="relative pl-[28.6px]">
          <img
            src="/images/beranda/garis-integrasi.svg"
            alt=""
            aria-hidden="true"
            width="11.3291"
            height="357.303"
            class="absolute left-0 top-[5.3px] h-[357.3px] w-[11.33px]"
          />
          <ul class="flex flex-col gap-[21px]">
            <li v-for="item in integrations" :key="item.name" class="flex flex-col gap-1">
              <h3 class="text-[14.7px] font-bold leading-[22.7px] text-frost">{{ item.name }}</h3>
              <span
                class="w-fit rounded-[11.3px] bg-accent/30 px-[9px] py-[3.4px] text-[11.3px] font-medium leading-[15.9px] text-haze"
              >
                {{ item.status }}
              </span>
              <p class="max-w-[370px] text-[14.7px] leading-[24.9px] text-haze">{{ item.desc }}</p>
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-1 pl-[28.6px] text-[14.7px]">
          <h3 class="font-bold leading-[22.7px] text-frost">Standar data yang kami pakai</h3>
          <p class="leading-[24.9px] text-haze">HL7 FHIR R4 · ICD-10 · ICD-9-CM · INA-CBG</p>
        </div>
      </div>
    </div>
  </section>
</template>
