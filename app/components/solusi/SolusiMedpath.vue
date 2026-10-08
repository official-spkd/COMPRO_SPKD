<script setup lang="ts">
defineProps<{
  solutionKey: string
}>()

const problems = [
  'Pathway berhenti sebagai dokumen dan jarang dipakai di ruang rawat.',
  'Deviasi tidak tercatat beserta alasannya, sehingga sulit dievaluasi.',
  'Lama rawat dan biaya tidak dibandingkan dengan standar dan tarif INA-CBG.',
]

const steps = [
  { title: 'Tetapkan prioritas', desc: 'Pilih diagnosis dengan volume tinggi, biaya tinggi, atau risiko tinggi.' },
  {
    title: 'Susun pathway',
    desc: 'Mulai dari templat PNPK atau PPK, lalu susun per hari rawat: obat, laboratorium, tindakan, gizi, dan target lama rawat.',
  },
  { title: 'Review dan pengesahan', desc: 'Ditinjau KSM dan komite medik, lalu disahkan direktur rumah sakit.' },
  { title: 'Terapkan per pasien', desc: 'Pathway aktif otomatis sesuai diagnosis. PPA mengisi checklist harian.' },
  {
    title: 'Catat varians',
    desc: 'Setiap deviasi obat, laboratorium, tindakan, atau lama rawat dicatat beserta alasan klinisnya.',
  },
  {
    title: 'Analisis kepatuhan',
    desc: 'Kepatuhan per diagnosis, unit, dan DPJP. Lama rawat dibandingkan dengan standar, biaya dengan tarif INA-CBG.',
  },
  { title: 'Evaluasi dan revisi', desc: 'Audit klinis berkala dan revisi pathway berbasis data dengan siklus PDSA.' },
]

const outputs = [
  'Skor kepatuhan per diagnosis, unit, dan DPJP.',
  'Pustaka clinical pathway resmi rumah sakit.',
  'Analisis varians: deviasi terbanyak beserta alasannya.',
  'Lama rawat dan biaya aktual dibandingkan dengan standar dan tarif INA-CBG.',
  'Laporan audit klinis yang siap dibawa ke rapat komite.',
]

const benefits = [
  {
    icon: 'lucide:hospital',
    title: 'Untuk rumah sakit',
    desc: 'Variasi klinis berkurang · Lama rawat dan biaya lebih efisien · Bukti terdokumentasi untuk kebutuhan akreditasi · Keselamatan pasien meningkat · Keputusan mutu berbasis data',
  },
  {
    icon: 'lucide:stethoscope',
    title: 'Untuk klinisi',
    desc: 'Panduan harian yang jelas · Deviasi tercatat beserta alasannya · Evaluasi kinerja DPJP yang objektif · Kolaborasi PPA lebih terstruktur',
  },
]

const faqs = [
  {
    q: 'Apakah kami harus menyusun pathway dari awal?',
    a: 'Tidak. MedPath menyediakan templat berbasis PNPK dan PPK yang dapat disesuaikan dengan kebijakan rumah sakit.',
  },
  {
    q: 'Apakah checklist harian menambah beban PPA?',
    a: 'Checklist dirancang singkat dan terisi dari data RME bila tersedia, sehingga PPA cukup mengonfirmasi.',
  },
]
</script>

<template>
  <div class="w-full bg-white">
    <!-- Hero -->
    <section
      class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-linear-to-r from-navy to-deep px-5 py-14 text-white sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]"
    >
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -bottom-[90px] -right-[220px] h-[420px] w-[540px] bg-[radial-gradient(closest-side,var(--color-gradient-to),transparent)] opacity-60 lg:-bottom-[181px] lg:-right-[413px] lg:h-[839px] lg:w-[1082px]"
      />
      <div class="hero-enter relative mx-auto flex w-full max-w-[1120px] flex-col items-start gap-5 md:gap-6">
        <p class="rounded-full border border-mint/25 bg-mint/10 px-3.5 py-[7px] font-inter text-[11px] font-bold leading-snug text-mint sm:text-[13px]">
          MedPath · Clinical Pathway Intelligence · Pelayanan dan Mutu
        </p>
        <h1 class="text-[36px] font-bold leading-[1.12] sm:text-5xl lg:text-[64px]">
          Clinical pathway yang dijalankan, diukur, dan terus diperbaiki.
        </h1>
        <p class="text-base leading-[1.65] text-white/75 md:text-xl">
          MedPath mengubah clinical pathway dari dokumen menjadi checklist harian di samping pasien. Kepatuhan,
          varians, lama rawat, dan biaya dihitung otomatis untuk komite medik dan komite mutu.
        </p>
        <p class="text-base font-bold leading-[1.65] text-mint md:text-lg">Standar klinis terukur, layanan lebih bermutu.</p>
        <NuxtLink
          :to="{ path: '/kontak', query: { solution_key: solutionKey } }"
          class="bg-gradient-ocean inline-flex h-[54px] items-center rounded-full px-6 text-[15px] font-bold transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gradient-to/35"
        >
          Jadwalkan demo MedPath
        </NuxtLink>
      </div>
    </section>

    <!-- Masalah -->
    <section class="bg-white px-5 py-14 sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-4 md:gap-8 lg:flex-row lg:gap-14">
        <div v-reveal class="flex shrink-0 flex-col gap-[15px] lg:w-[400px]">
          <p class="font-inter text-[13px] font-semibold leading-[1.6] text-gradient-to">Masalah</p>
          <h2 class="text-[30px] font-bold leading-[1.18] text-navy md:text-[42px]">
            Clinical pathway sudah disusun, tetapi kepatuhannya sulit diukur.
          </h2>
        </div>
        <ul v-reveal="1" class="flex min-w-0 flex-1 flex-col md:gap-6">
          <li
            v-for="problem in problems"
            :key="problem"
            class="border-b border-navy/10 py-5 text-lg font-semibold leading-[1.65] text-navy md:py-[22px] md:text-[23px]"
          >
            {{ problem }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Cara kerja -->
    <section
      class="relative overflow-hidden bg-linear-to-r from-navy to-deep px-5 py-14 font-inter sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]"
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
          <div v-reveal class="flex shrink-0 flex-col items-start gap-6 lg:w-[420px]">
            <h2 class="text-[30px] font-semibold leading-[1.2] text-white md:text-[40px]">
              Siklus mutu dalam tujuh langkah
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
            <p class="rounded-full border border-mint/25 bg-mint/10 px-3.5 py-[7px] text-xs font-semibold text-mint md:text-[13px]">
              PDSA · Evaluasi kembali ke prioritas
            </p>
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

    <!-- Hasil di dasbor -->
    <section class="bg-navy/3 px-5 py-14 font-inter sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-10">
        <div v-reveal class="max-w-[940px]">
          <p class="text-[13px] font-semibold leading-[1.6] text-brand">Hasil</p>
          <h2 class="mt-5 text-[30px] font-semibold leading-[1.2] text-navy md:mt-[21px] md:text-[40px]">
            Yang tersedia di dasbor
          </h2>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 md:gap-6">
          <article
            v-for="(item, index) in outputs"
            :key="item"
            v-reveal="index % 2"
            class="hover-lift flex flex-col gap-6 rounded-3xl border border-navy/10 bg-white p-6 shadow-lg shadow-navy/4 md:p-8"
          >
            <Icon name="lucide:layers" class="size-6 text-brand" />
            <h3 class="text-xl font-semibold leading-[1.4] text-navy md:text-[23px]">{{ item }}</h3>
          </article>
        </div>
      </div>
    </section>

    <!-- Manfaat -->
    <section
      class="relative overflow-hidden bg-linear-to-r from-navy to-deep px-5 py-14 font-inter sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]"
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
        <div class="grid gap-4 md:grid-cols-2 md:gap-6">
          <article
            v-for="(item, index) in benefits"
            :key="item.title"
            v-reveal="index"
            class="flex flex-col gap-6 rounded-3xl border border-white/13 bg-white/5 p-6 md:p-8"
          >
            <Icon :name="item.icon" class="size-6 text-mint" />
            <div>
              <h3 class="text-xl font-semibold leading-[1.3] text-white md:text-[23px]">{{ item.title }}</h3>
              <p class="mt-4 text-base leading-[1.6] text-white/75 md:mt-[29px] md:text-lg">{{ item.desc }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Terhubung dengan produk lain -->
    <section class="bg-gradient-ocean px-5 py-14 text-white sm:px-8 md:py-20 lg:p-[88px]">
      <div v-reveal class="mx-auto flex max-w-[1264px] flex-col gap-6 lg:flex-row lg:items-center lg:gap-14">
        <h2 class="text-[30px] font-bold leading-[1.18] md:text-[42px] lg:w-[580px] lg:shrink-0">
          Terhubung dengan
        </h2>
        <p class="min-w-0 flex-1 text-base leading-[1.8] md:text-xl">
          SIMRS dan RME untuk data pasien · MedClaim untuk tarif INA-CBG · MedCredix untuk data kepatuhan dalam
          penilaian kredensial
        </p>
      </div>
    </section>

    <!-- Pertanyaan umum -->
    <section class="bg-white px-5 py-14 sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-4 md:gap-8 lg:flex-row lg:gap-14">
        <h2 v-reveal class="shrink-0 text-[30px] font-bold leading-[1.18] text-navy md:text-[42px] lg:w-[400px]">
          Pertanyaan umum
        </h2>
        <dl v-reveal="1" class="flex min-w-0 flex-1 flex-col md:gap-6">
          <div v-for="faq in faqs" :key="faq.q" class="border-b border-navy/10 py-5 leading-[1.65] md:py-[22px]">
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
        class="mx-auto flex max-w-[1280px] flex-col items-start gap-7 rounded-[24px] bg-linear-to-r from-navy via-deep via-60% to-gradient-to p-8 font-inter md:rounded-[32px] md:p-16"
      >
        <h2 class="text-[30px] font-semibold leading-[1.2] text-white md:text-[44px]">
          Ubah clinical pathway menjadi bukti mutu.
        </h2>
        <NuxtLink
          :to="{ path: '/kontak', query: { solution_key: solutionKey } }"
          class="bg-gradient-ocean inline-flex items-center gap-4 rounded-xl px-[22px] py-[17px] text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gradient-to/35"
        >
          Jadwalkan demo MedPath
          <Icon name="lucide:arrow-up-right" class="size-4" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
