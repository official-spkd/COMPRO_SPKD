<script setup lang="ts">
import { productPathByName } from '~/data/solusi'

const workflow = [
  'Mencatat · SIMRS',
  'Menjaga mutu · MedPath',
  'Mengklaim · MedClaim',
  'Membuktikan kesiapan · MedCredix',
  'Menagih selisih · MedPay',
]

const products = [
  {
    name: 'SIMRS',
    icon: '/images/beranda/hospital.svg',
    tag: 'Pelayanan dan Mutu',
    desc: 'Sistem informasi rumah sakit dengan RME yang siap terhubung ke SATUSEHAT dan BPJS.',
  },
  {
    name: 'MedPath',
    icon: '/images/beranda/activity.svg',
    tag: 'Pelayanan dan Mutu',
    desc: 'Clinical pathway digital untuk mengukur kepatuhan, varians, lama rawat, dan biaya.',
  },
  {
    name: 'MedClaim',
    icon: '/images/beranda/chart-line.svg',
    tag: 'Klaim dan Pendapatan',
    desc: 'Temukan episode rugi dan salah koding sebelum klaim diajukan ke BPJS.',
  },
  {
    name: 'MedCredix',
    icon: '/images/beranda/shield-check-cyan.svg',
    tag: 'Kredensial',
    desc: 'Pantau kesiapan kredensial rumah sakit secara otomatis dari data SIMRS.',
  },
  {
    name: 'MedPay',
    icon: '/images/beranda/wallet.svg',
    tag: 'Klaim dan Pendapatan',
    desc: 'Hitung dan tagih selisih tarif ke asuransi kedua, lalu pantau sampai dana masuk.',
  },
]
</script>

<template>
  <section class="relative overflow-hidden bg-night">
    <img
      src="/images/beranda/produk-mesh-2.svg"
      alt=""
      aria-hidden="true"
      width="544"
      height="536"
      class="pointer-events-none absolute -left-[382px] -top-[71px] h-[536px] w-[544px] max-w-none select-none"
    />
    <img
      src="/images/beranda/produk-mesh-1.svg"
      alt=""
      aria-hidden="true"
      width="752"
      height="668"
      class="pointer-events-none absolute -bottom-[154px] -right-[209px] h-[668px] w-[752px] max-w-none select-none"
    />

    <div
      class="relative mx-auto flex max-w-[1440px] flex-col items-start gap-10 px-5 py-14 sm:px-8 lg:px-[162px] lg:py-[88px]"
    >
      <div v-reveal class="max-w-[940px]">
        <p class="text-[13px] font-semibold leading-[1.6] text-accent-glow">Produk</p>
        <h2 class="mt-[1.6em] text-3xl font-semibold leading-[1.2] text-white md:text-[40px]">
          Lima produk, satu alur: dari pencatatan sampai dana masuk.
        </h2>
        <p class="mt-8 text-lg leading-[1.6] text-fog md:mt-16">
          Setiap produk bisa dipakai sendiri, dan saling terhubung saat digunakan bersama.
        </p>
      </div>

      <ol class="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <li
          v-for="(step, i) in workflow"
          :key="step"
          v-reveal="i"
          class="flex min-h-[117px] flex-col gap-3 rounded-2xl bg-white/5 p-5"
        >
          <span class="text-sm text-accent-glow">{{ String(i + 1).padStart(2, '0') }} →</span>
          <span class="text-base leading-[1.5] text-white">{{ step }}</span>
        </li>
      </ol>

      <ul class="grid w-full gap-x-5 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
        <li v-for="(p, i) in products" :key="p.name" v-reveal="i % 3">
          <NuxtLink
            :to="productPathByName(p.name)"
            class="group flex h-full flex-col items-start gap-6 rounded-3xl border border-white/13 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-accent-glow/50 hover:bg-white/8"
          >
            <img :src="p.icon" alt="" aria-hidden="true" width="24" height="24" />
            <span
              class="rounded-full border border-accent-glow/19 bg-accent-glow/9 px-3 py-[7px] text-xs font-medium text-accent-glow"
            >
              {{ p.tag }}
            </span>
            <div>
              <h3 class="text-[23px] font-semibold leading-[1.3] text-white">{{ p.name }}</h3>
              <p class="mt-[1.6em] text-lg leading-[1.6] text-fog">{{ p.desc }}</p>
              <p class="mt-[1.6em] text-sm font-semibold leading-[1.6] text-accent-glow">
                Lihat detail {{ p.name }} ↗
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <NuxtLink
        to="/produk"
        class="inline-flex items-center rounded-xl border border-white/25 bg-white/3 px-[22px] py-[17px] text-[15px] font-semibold text-white transition hover:bg-white/10"
      >
        Lihat semua produk&nbsp;&nbsp;&nbsp;↗
      </NuxtLink>
    </div>
  </section>
</template>
