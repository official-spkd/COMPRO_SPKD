<script setup lang="ts">
defineProps<{
  solutionKey: string
}>()

const problems = [
  'Biaya pelayanan melebihi tarif INA-CBG tanpa diketahui penyebabnya.',
  'Koding diagnosis dan prosedur belum mencerminkan pelayanan yang diberikan.',
  'Klaim pending dan dikembalikan karena dokumen kurang lengkap.',
]

const aspects = [
  { icon: 'lucide:wallet', title: 'Finansial', desc: 'Tarif INA-CBG dibandingkan dengan biaya riil rumah sakit.' },
  { icon: 'lucide:stethoscope', title: 'Klinis', desc: 'Kesesuaian diagnosis dan lama rawat.' },
  { icon: 'lucide:scan-line', title: 'Koding', desc: 'Indikasi undercoding dan overcoding.' },
  { icon: 'lucide:chart-line', title: 'Operasional dan DPJP', desc: 'Pola biaya, lama rawat, dan variasi per dokter.' },
]

const steps = [
  { title: 'Pasien pulang', desc: 'Pelayanan JKN selesai, resume medis dan dokumen klinis lengkap.' },
  { title: 'Koding dan grouping', desc: 'Tim casemix mengoding ICD-10 dan ICD-9-CM serta melakukan grouping di aplikasi e-Klaim.' },
  { title: 'Ekspor file', desc: 'Data klaim diekspor dalam format TXT sebelum dikirim ke BPJS.' },
  { title: 'Unggah ke MedClaim', desc: 'Sistem membaca, memvalidasi, dan merapikan data. Status file: Valid atau Perlu perbaikan.' },
  { title: 'Analisis otomatis', desc: 'Setiap episode dianalisis dari empat aspek: finansial, klinis, koding, serta operasional dan DPJP.' },
  { title: 'Hasil per episode', desc: 'Setiap episode diberi label Rugi, Undercoding, atau Aman, lengkap dengan rekomendasi.' },
  { title: 'Perbaiki dan ajukan', desc: 'Tim memperbaiki koding dan dokumen, lalu mengajukan klaim ke BPJS.' },
]

const outputs = [
  { title: 'Episode rugi', desc: 'Daftar episode yang merugi beserta penyebabnya.' },
  { title: 'Temuan koding', desc: 'Indikasi undercoding dan overcoding.' },
  { title: 'Potensi perbaikan', desc: 'Estimasi nilai rupiah yang masih bisa diperbaiki.' },
  { title: 'Kinerja DPJP dan diagnosis', desc: 'Biaya, lama rawat, dan variasi per dokter.' },
  { title: 'Laporan manajemen', desc: 'Ringkasan temuan yang siap dipresentasikan.' },
]

const benefits = [
  {
    icon: 'lucide:chart-line',
    title: 'Untuk manajemen',
    desc: 'Pendapatan lebih optimal · Kebocoran pendapatan terdeteksi lebih awal · Biaya dan lama rawat lebih efisien · Evaluasi kinerja DPJP yang objektif · Keputusan berbasis data',
  },
  {
    icon: 'lucide:clipboard-check',
    title: 'Untuk tim casemix',
    desc: 'Temukan masalah sebelum klaim diajukan · Akurasi koding meningkat · Klaim pending dan dikembalikan berkurang · Telusuri cepat sampai level episode',
  },
]

const faqs = [
  {
    q: 'Apakah MedClaim menggantikan aplikasi e-Klaim?',
    a: 'Tidak. MedClaim membaca file ekspor e-Klaim untuk dianalisis. Klaim tetap diajukan melalui jalur resmi BPJS.',
  },
  {
    q: 'Siapa yang memakai MedClaim?',
    a: 'Tim casemix untuk memperbaiki klaim, serta direksi dan manajemen untuk memantau kinerja klaim dan menetapkan strategi pendapatan.',
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
        class="pointer-events-none absolute -bottom-[90px] -right-[220px] h-[420px] w-[540px] bg-[radial-gradient(closest-side,var(--color-gradient-to),transparent)] opacity-60 lg:-bottom-[181px] lg:-right-[413px] lg:h-[839px] lg:w-[1082px]"
      />
      <div class="hero-enter relative mx-auto flex w-full max-w-[1120px] flex-col items-start gap-5 md:gap-6">
        <p class="rounded-full border border-mint/25 bg-mint/10 px-3.5 py-[7px] text-[11px] font-bold leading-snug text-mint sm:text-[13px]">
          MedClaim · E-Claim Analytics · Klaim dan Pendapatan
        </p>
        <h1 class="text-[36px] font-bold leading-[1.12] sm:text-5xl lg:text-[64px]">
          Temukan klaim berisiko rugi sebelum diajukan ke BPJS.
        </h1>
        <p class="text-base leading-[1.65] text-white/75 md:text-xl">
          MedClaim menganalisis file e-Klaim INA-CBG secara otomatis. Hasilnya: daftar episode yang merugi,
          indikasi undercoding dan overcoding, serta rekomendasi perbaikan sebelum klaim dikirim.
        </p>
        <p class="text-base font-bold leading-[1.65] text-mint md:text-lg">Klaim akurat, pendapatan optimal.</p>
        <NuxtLink
          :to="{ path: '/kontak', query: { solution_key: solutionKey } }"
          class="bg-gradient-ocean inline-flex h-[54px] items-center rounded-full px-6 text-[15px] font-bold transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gradient-to/35"
        >
          Jadwalkan demo MedClaim
        </NuxtLink>
      </div>
    </section>

    <!-- Masalah -->
    <section class="bg-white px-5 py-14 sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-4 md:gap-8 lg:flex-row lg:gap-14">
        <div v-reveal class="flex shrink-0 flex-col gap-[15px] lg:w-[400px]">
          <p class="text-[13px] font-semibold leading-[1.6] text-gradient-to">Masalah</p>
          <h2 class="text-[30px] font-bold leading-[1.18] text-navy md:text-[42px]">
            Kerugian klaim sering baru terlihat setelah terlambat.
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

    <!-- Cara kerja -->
    <section
      class="relative overflow-hidden bg-linear-to-r from-navy to-deep px-5 py-14 sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]"
    >
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -bottom-[110px] -left-[200px] h-[420px] w-[425px] bg-[radial-gradient(closest-side,var(--color-gradient-to),transparent)] opacity-60 lg:-bottom-[220px] lg:left-auto lg:right-[860px] lg:h-[839px] lg:w-[850px]"
      />
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -right-[220px] -top-[230px] h-[420px] w-[425px] bg-[radial-gradient(closest-side,var(--color-gradient-to),transparent)] opacity-60 lg:-right-[454px] lg:-top-[472px] lg:h-[839px] lg:w-[850px]"
      />
      <div class="relative mx-auto flex max-w-[1120px] flex-col gap-10">
        <p class="text-[13px] font-semibold leading-[1.6] text-mint">Cara kerja</p>
        <div class="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <div v-reveal class="flex shrink-0 flex-col gap-6 lg:w-[420px]">
            <h2 class="text-[30px] font-semibold leading-[1.2] text-white md:text-[40px]">
              Dari file e-Klaim ke rekomendasi perbaikan
            </h2>
            <svg
              aria-hidden="true"
              viewBox="0 0 340 105.915"
              fill="none"
              class="h-[70px] w-[240px] text-mint opacity-40 md:h-[100px] md:w-[340px]"
            >
              <path
                d="M0 65.2612H90L115 27.7612L145 102.761L172 2.7612L204 65.2612H340"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
          </div>
          <ol class="flex min-w-0 flex-1 flex-col gap-7 md:gap-10">
            <li v-for="(step, index) in steps" :key="step.title" v-reveal class="leading-[1.6]">
              <p class="text-xl font-semibold text-white md:text-[23px]">
                <span class="mr-3 text-mint">{{ String(index + 1).padStart(2, '0') }}</span>{{ step.title }}
              </p>
              <p class="text-base text-white/75 md:text-lg">{{ step.desc }}</p>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- Empat aspek -->
    <section class="bg-navy/3 px-5 py-14 sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-10">
        <div v-reveal class="max-w-[940px]">
          <p class="text-[13px] font-semibold leading-[1.6] text-brand">Empat aspek</p>
          <h2 class="mt-5 text-[30px] font-semibold leading-[1.2] text-navy md:mt-[21px] md:text-[40px]">
            Empat sudut pandang untuk setiap episode
          </h2>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 md:gap-6">
          <article
            v-for="(item, index) in aspects"
            :key="item.title"
            v-reveal="index % 2"
            class="hover-lift flex flex-col gap-6 rounded-3xl border border-navy/10 bg-white p-6 shadow-lg shadow-navy/4 md:p-8"
          >
            <Icon :name="item.icon" class="size-6 text-brand" />
            <div>
              <h3 class="text-xl font-semibold leading-[1.3] text-navy md:text-[23px]">{{ item.title }}</h3>
              <p class="mt-4 text-base leading-[1.6] text-ink md:mt-[29px] md:text-lg">{{ item.desc }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Yang langsung Anda dapatkan -->
    <section class="bg-white px-5 py-14 sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-4 md:gap-8 lg:flex-row lg:gap-14">
        <div v-reveal class="flex shrink-0 flex-col gap-[18px] lg:w-[400px]">
          <h2 class="text-[30px] font-bold leading-[1.18] text-navy md:text-[42px]">Yang langsung Anda dapatkan</h2>
          <p class="text-base leading-[1.65] text-ink md:text-lg">
            Dasbor terisi otomatis setelah file e-Klaim diunggah, jadi perbaikan bisa dilakukan sebelum klaim
            diajukan.
          </p>
        </div>
        <ul v-reveal="1" class="flex min-w-0 flex-1 flex-col md:gap-6">
          <li
            v-for="item in outputs"
            :key="item.title"
            class="border-b border-navy/10 py-5 md:py-[22px] text-base leading-[1.65] text-ink md:text-lg"
          >
            <strong class="text-lg font-bold text-navy md:text-[23px]">{{ item.title }}</strong>
            · {{ item.desc }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Manfaat -->
    <section class="bg-mint/15 px-5 py-14 sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-10">
        <p class="text-[13px] font-semibold leading-[1.6] text-brand">Manfaat</p>
        <div class="grid gap-6 md:grid-cols-2">
          <article
            v-for="(item, index) in benefits"
            :key="item.title"
            v-reveal="index"
            class="hover-lift flex flex-col gap-6 rounded-3xl border border-navy/10 bg-white p-6 shadow-lg shadow-navy/4 md:p-8"
          >
            <Icon :name="item.icon" class="size-6 text-brand" />
            <div>
              <h3 class="text-xl font-semibold leading-[1.3] text-navy md:text-[23px]">{{ item.title }}</h3>
              <p class="mt-4 text-base leading-[1.6] text-ink md:mt-[29px] md:text-lg">{{ item.desc }}</p>
            </div>
          </article>
        </div>
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
    <section class="bg-navy/3 px-5 py-14 sm:px-8 md:py-20 lg:p-20">
      <div
        v-reveal
        class="mx-auto flex max-w-[1280px] flex-col items-start gap-7 rounded-[24px] bg-linear-to-r from-navy via-deep via-60% to-gradient-to p-8 md:rounded-[32px] md:p-16"
      >
        <h2 class="text-[30px] font-semibold leading-[1.2] text-white md:text-[44px]">
          Periksa klaim Anda sebelum BPJS memeriksanya.
        </h2>
        <p class="max-w-[880px] text-base leading-[1.65] text-white/75 md:text-lg">
          Saat demo, kami tunjukkan analisisnya dengan contoh data. Uji dengan data rumah sakit Anda bisa
          dilakukan di tahap uji coba.
        </p>
        <NuxtLink
          :to="{ path: '/kontak', query: { solution_key: solutionKey } }"
          class="bg-gradient-ocean inline-flex items-center gap-4 rounded-xl px-[22px] py-[17px] text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gradient-to/35"
        >
          Jadwalkan demo MedClaim
          <Icon name="lucide:arrow-up-right" class="size-4" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
