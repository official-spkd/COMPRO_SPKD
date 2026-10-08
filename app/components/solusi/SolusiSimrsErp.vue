<script setup lang="ts">
defineProps<{
  solutionKey: string
}>()

const problems = [
  'Data pasien diketik ulang di banyak sistem dan sering tidak sinkron.',
  'Resume medis belum lengkap saat klaim harus diajukan.',
  'Laporan manajemen dan pengiriman data SATUSEHAT masih dikerjakan manual.',
]

const modules = [
  { title: 'Pendaftaran dan antrean', desc: 'Pendaftaran pasien dan antrean online yang terhubung dengan BPJS.' },
  { title: 'Rawat jalan, rawat inap, dan IGD', desc: 'Satu rekam medis untuk seluruh perjalanan pasien.' },
  { title: 'Rekam medis elektronik', desc: 'Asesmen, CPPT, dan resume medis yang lengkap sejak awal.' },
  { title: 'Farmasi dan logistik', desc: 'Resep elektronik, stok, dan tanggal kedaluwarsa obat.' },
  { title: 'Laboratorium dan radiologi', desc: 'Permintaan dan hasil pemeriksaan langsung masuk RME.' },
  { title: 'Kasir dan billing', desc: 'Rincian biaya per pasien yang siap untuk klaim.' },
  { title: 'Bridging BPJS dan SATUSEHAT', desc: 'VClaim, antrean, dan pengiriman data FHIR.' },
  { title: 'Dasbor manajemen', desc: 'Kunjungan, BOR, LOS, dan pendapatan dalam satu tampilan.' },
]

const benefits = [
  { icon: 'lucide:stethoscope', title: 'Tenaga kesehatan', desc: 'Mencatat sekali, datanya dipakai di semua unit.' },
  { icon: 'lucide:clipboard-list', title: 'Tim casemix', desc: 'Resume medis dan rincian biaya lengkap sebelum klaim disusun.' },
  { icon: 'lucide:chart-line', title: 'Manajemen', desc: 'Kondisi pelayanan dan pendapatan terlihat setiap hari.' },
]

const faqs = [
  {
    q: 'Apakah SIMRS SPKD bisa menggantikan sistem yang sudah ada?',
    a: 'Bisa diterapkan penuh atau per modul. Kami akan memetakan sistem yang ada dan menyiapkan rencana migrasi data.',
  },
  {
    q: 'Apakah produk SPKD lain bisa dipakai tanpa SIMRS SPKD?',
    a: 'Bisa. Produk lain dapat membaca data dari SIMRS yang sudah Anda pakai melalui integrasi.',
  },
]
</script>

<template>
  <div class="w-full bg-white">
    <!-- Hero -->
    <section
      class="relative overflow-hidden bg-linear-to-r from-navy to-deep px-5 py-14 text-white sm:px-8 md:py-20 flex min-h-hero flex-col justify-center lg:px-[160px] lg:py-[88px]"
    >
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -bottom-10 -right-[220px] h-[420px] w-[540px] bg-[radial-gradient(closest-side,var(--color-gradient-to),transparent)] opacity-60 lg:-right-[413px] lg:h-[839px] lg:w-[1082px]"
      />
      <div class="relative mx-auto flex w-full max-w-[1120px] flex-col gap-10 md:gap-12">
        <div class="hero-enter flex flex-col items-start gap-6">
          <p class="rounded-full border border-mint/25 bg-mint/10 px-3.5 py-[7px] text-[13px] font-bold text-mint">
            SIMRS · Pelayanan dan Mutu
          </p>
          <h1 class="text-[36px] font-bold leading-[1.12] sm:text-5xl lg:text-[64px]">
            Satu sistem untuk seluruh pelayanan rumah sakit, dengan RME yang siap diklaim.
          </h1>
          <p class="text-base leading-[1.65] md:text-xl">
            SIMRS SPKD mencatat pelayanan dari pendaftaran sampai pasien pulang dalam satu rekam medis
            elektronik. Datanya siap dikirim ke SATUSEHAT dan menjadi dasar klaim BPJS.
          </p>
          <NuxtLink
            :to="{ path: '/kontak', query: { solution_key: solutionKey } }"
            class="bg-gradient-ocean inline-flex h-[54px] items-center rounded-full px-6 text-[15px] font-bold transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gradient-to/35"
          >
            Jadwalkan demo SIMRS
          </NuxtLink>
        </div>
        <svg
          aria-hidden="true"
          viewBox="0 0 1120.05 64.9969"
          preserveAspectRatio="none"
          fill="none"
          class="h-8 w-full text-mint opacity-35 md:h-16"
        >
          <path
            d="M0 63.5021C159.494 63.5021 168.354 -2.36689 318.987 23.4079C469.62 49.1827 487.342 95.0046 620.253 34.8634C753.165 -25.2778 912.658 23.4079 1120 0.496975"
            stroke="currentColor"
            vector-effect="non-scaling-stroke"
          />
        </svg>
      </div>
    </section>

    <!-- Masalah -->
    <section class="bg-white px-5 py-14 sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-4 md:gap-8 lg:flex-row lg:gap-[70px]">
        <div v-reveal class="flex shrink-0 flex-col gap-[15px] lg:w-[349px]">
          <p class="text-[13px] font-semibold leading-[1.6] text-gradient-to">Masalah</p>
          <h2 class="text-[30px] font-bold leading-[1.18] text-navy md:text-[42px]">
            Pencatatan ganda membuat data tidak pernah benar-benar lengkap.
          </h2>
        </div>
        <ul v-reveal="1" class="flex min-w-0 flex-1 flex-col md:gap-6">
          <li
            v-for="problem in problems"
            :key="problem"
            class="border-b border-navy/10 py-5 md:py-[22px] text-lg font-semibold leading-[1.65] text-navy md:text-[23px]"
          >
            {{ problem }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Modul -->
    <section class="bg-navy/3 px-5 py-14 sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-10">
        <div v-reveal class="max-w-[940px]">
          <p class="text-[13px] font-semibold leading-[1.6] text-gradient-to">Modul</p>
          <h2 class="mt-5 text-[30px] font-semibold leading-[1.2] text-navy md:mt-[21px] md:text-[40px]">
            Modul yang kami siapkan
          </h2>
          <p class="mt-6 text-base leading-[1.6] text-ink md:mt-16 md:text-lg">
            Diterapkan bertahap sesuai prioritas rumah sakit Anda.
          </p>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <article
            v-for="(item, index) in modules"
            :key="item.title"
            v-reveal="index % 2"
            class="hover-lift flex flex-col gap-6 rounded-3xl border border-navy/10 bg-white p-6 shadow-lg shadow-navy/4 md:p-8"
          >
            <Icon name="lucide:layers" class="size-6 text-gradient-to" />
            <div>
              <h3 class="text-xl font-semibold leading-[1.3] text-navy md:text-[23px]">{{ item.title }}</h3>
              <p class="mt-[29px] text-base leading-[1.6] text-ink md:text-lg">{{ item.desc }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Manfaat -->
    <section
      class="relative overflow-hidden bg-linear-to-r from-navy to-deep px-5 py-14 sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]"
    >
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -right-[200px] -top-[230px] h-[420px] w-[425px] bg-[radial-gradient(closest-side,var(--color-gradient-to),transparent)] opacity-60 lg:-top-[514px] lg:-right-[324px] lg:h-[839px] lg:w-[850px]"
      />
      <div class="relative mx-auto flex max-w-[1120px] flex-col gap-10">
        <div v-reveal class="max-w-[940px]">
          <p class="text-[13px] font-semibold leading-[1.6] text-mint">Manfaat</p>
          <h2 class="mt-5 text-[30px] font-semibold leading-[1.2] text-white md:mt-[21px] md:text-[40px]">
            Manfaat untuk setiap peran
          </h2>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="(item, index) in benefits"
            :key="item.title"
            v-reveal="index"
            class="flex flex-col gap-6 rounded-3xl border border-white/13 bg-white/5 p-6 md:p-8"
          >
            <Icon :name="item.icon" class="size-6 text-mint" />
            <div>
              <h3 class="text-xl font-semibold leading-[1.3] text-white md:text-[23px]">{{ item.title }}</h3>
              <p class="mt-[29px] text-base leading-[1.6] text-white/75 md:text-lg">{{ item.desc }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Terhubung dengan produk lain -->
    <section class="bg-gradient-ocean px-5 py-14 text-white sm:px-8 md:py-20 lg:p-[88px]">
      <div v-reveal class="mx-auto flex max-w-[1264px] flex-col gap-6 lg:flex-row lg:items-end lg:gap-14">
        <h2 class="text-[30px] font-bold leading-[1.18] md:text-[42px] lg:w-[580px] lg:shrink-0">
          Terhubung dengan produk SPKD lainnya
        </h2>
        <p class="min-w-0 flex-1 text-base leading-[1.8] md:text-xl">
          Data SIMRS dibaca oleh MedPath, MedClaim, MedCredix, dan MedPay melalui standar FHIR. Tidak perlu
          input ulang.
        </p>
      </div>
    </section>

    <!-- Pertanyaan umum -->
    <section class="bg-white px-5 py-14 sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-4 md:gap-8 lg:flex-row lg:gap-14">
        <h2 v-reveal class="shrink-0 text-[30px] font-bold leading-[1.18] text-navy md:text-[42px] lg:w-[392px]">
          Pertanyaan umum
        </h2>
        <dl v-reveal="1" class="flex min-w-0 flex-1 flex-col md:gap-6">
          <div v-for="faq in faqs" :key="faq.q" class="border-b border-navy/10 py-5 md:py-[22px] leading-[1.65]">
            <dt class="text-lg font-bold text-navy md:text-[23px]">{{ faq.q }}</dt>
            <dd class="text-base text-ink md:text-lg">{{ faq.a }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Ajakan penutup -->
    <section class="bg-white px-5 pb-14 sm:px-8 md:pb-20 lg:p-20">
      <div
        v-reveal
        class="mx-auto flex max-w-[1280px] flex-col items-start gap-7 rounded-[24px] bg-linear-to-r from-navy via-deep via-60% to-gradient-to p-8 md:rounded-[32px] md:p-16"
      >
        <h2 class="text-[30px] font-semibold leading-[1.2] text-white md:text-[44px]">
          Siapkan fondasi RME rumah sakit Anda.
        </h2>
        <NuxtLink
          :to="{ path: '/kontak', query: { solution_key: solutionKey } }"
          class="bg-gradient-ocean inline-flex items-center gap-4 rounded-[15px] px-[27.5px] py-[21.25px] text-base font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gradient-to/35 md:text-[18.75px]"
        >
          Jadwalkan demo SIMRS
          <Icon name="lucide:arrow-up-right" class="size-[18px]" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
