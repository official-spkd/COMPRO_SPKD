<script setup lang="ts">
defineProps<{
  solutionKey: string
}>()

const problems = [
  'Dokumen prasyarat seperti izin operasional, PKS BPJS, dan sertifikat akreditasi tersebar dan mudah kedaluwarsa.',
  'Penilaian manual memakan waktu dan sulit dibuktikan objektivitasnya.',
  'Rumah sakit tidak tahu area mana yang perlu diperbaiki lebih dulu.',
]

const steps = [
  { title: 'Registrasi dan akses', desc: 'Akun rumah sakit dibuat oleh tim SPKD saat onboarding.' },
  { title: 'Pemenuhan prasyarat', desc: 'Rumah sakit mengunggah izin operasional, PKS BPJS, dan sertifikat akreditasi.' },
  { title: 'Koneksi dan verifikasi data', desc: 'SIMRS terhubung melalui API FHIR. Data diverifikasi silang dengan SATUSEHAT dan BPJS.' },
  { title: 'Penilaian otomatis', desc: 'Data dinilai dalam empat kelompok penilaian.' },
  { title: 'Analisis dan skor', desc: 'Skor tiap kelompok dibobot dan disesuaikan dengan Trust Score menjadi skor kredensial 0–100.' },
  { title: 'Hasil evaluasi', desc: 'Status Lulus atau Tidak lulus, tahap (stage) 0–7, dan rekomendasi perbaikan.' },
  { title: 'Tindak lanjut dan pemantauan', desc: 'Perbaikan, penilaian ulang berkala, dan sinkronisasi data otomatis.' },
]

// Warna kartu berselang-seling seperti di desain (mint / abu muda)
const groups = [
  { title: 'Kapabilitas klinis dan SDM', tint: true },
  { title: 'Digitalisasi dan sistem informasi', tint: false },
  { title: 'Kinerja JKN', tint: false },
  { title: 'Keselamatan pasien', tint: true },
]

const features = [
  { title: 'Dasbor kredensial', desc: 'Skor, tahap, dan status dalam satu layar.' },
  { title: 'Prasyarat wajib', desc: 'Pantau izin, PKS, dan akreditasi beserta masa berlakunya.' },
  { title: 'Konsistensi klaim', desc: 'Kecocokan klaim BPJS dengan data RME.' },
  { title: 'Clinical pathway', desc: 'Kepatuhan dan deviasi dari MedPath.' },
  { title: 'Jejak audit', desc: 'Trust Score, penanda anomali, dan log API.' },
  { title: 'Laporan kredensial', desc: 'Siap cetak dan diunduh dalam PDF.' },
  { title: 'Panel jejaring', desc: 'Peta dan analitik lintas rumah sakit untuk grup RS atau pemerintah daerah.' },
]

const benefits = [
  {
    icon: 'lucide:hospital',
    title: 'Untuk rumah sakit',
    desc: 'Tahu kesiapan kredensial secara objektif · Persyaratan lebih terarah · Rekomendasi perbaikan berbasis data · Siap diaudit kapan saja · Tanpa input manual untuk skor',
  },
  {
    icon: 'lucide:shield-check',
    title: 'Untuk BPJS dan regulator',
    desc: 'Kredensial yang terstandar · Waktu dan biaya verifikasi lebih efisien · Penilaian objektif dan akuntabel · Deteksi dini anomali klaim · Analitik untuk keputusan strategis',
  },
]

const faqs = [
  {
    q: 'Apakah MedCredix mengubah data di SIMRS kami?',
    a: 'Tidak. MedCredix hanya membaca data melalui API FHIR.',
  },
  {
    q: 'Apakah skor MedCredix sama dengan hasil penilaian resmi?',
    a: 'Tidak. Skor MedCredix adalah alat bantu persiapan. Keputusan kredensial tetap berada di BPJS Kesehatan.',
  },
]
</script>

<template>
  <div class="w-full bg-white">
    <!-- Hero -->
    <section
      class="relative overflow-hidden bg-linear-to-r from-navy to-deep px-5 py-14 text-white sm:px-8 md:py-20 flex min-h-screen flex-col justify-center lg:px-[160px] lg:py-[88px]"
    >
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -bottom-[90px] -right-[220px] h-[420px] w-[540px] bg-[radial-gradient(closest-side,var(--color-gradient-to),transparent)] opacity-60 lg:-bottom-[181px] lg:-right-[413px] lg:h-[839px] lg:w-[1082px]"
      />
      <div class="hero-enter relative mx-auto flex w-full max-w-[1120px] flex-col items-start gap-5 md:gap-6">
        <p class="rounded-full border border-mint/25 bg-mint/10 px-3.5 py-[7px] font-inter text-[11px] font-bold leading-snug text-mint sm:text-[13px]">
          MedCredix · Medical Credentialing Intelligence · Kredensial
        </p>
        <h1 class="text-[36px] font-bold leading-[1.12] sm:text-5xl lg:text-[64px]">
          Ketahui kesiapan kredensial rumah sakit Anda sebelum dinilai.
        </h1>
        <p class="text-base leading-[1.65] text-white/75 md:text-xl">
          MedCredix membaca data operasional SIMRS melalui API FHIR, menghitung skor kredensial dari empat
          kelompok penilaian, lalu memberi status dan rekomendasi perbaikan, tanpa input manual.
        </p>
        <p class="text-base font-bold leading-[1.65] text-mint md:text-lg">From hospital data to action.</p>
        <NuxtLink
          :to="{ path: '/kontak', query: { solution_key: solutionKey } }"
          class="bg-gradient-ocean inline-flex h-[54px] items-center rounded-full px-6 text-[15px] font-bold transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gradient-to/35"
        >
          Jadwalkan demo MedCredix
        </NuxtLink>
      </div>
    </section>

    <!-- Masalah -->
    <section class="bg-white px-5 py-14 sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-4 md:gap-8 lg:flex-row lg:gap-14">
        <div v-reveal class="flex shrink-0 flex-col gap-[15px] lg:w-[400px]">
          <p class="font-inter text-[13px] font-semibold leading-[1.6] text-gradient-to">Masalah</p>
          <h2 class="text-[30px] font-bold leading-[1.18] text-navy md:text-[42px]">
            Status kredensial sering baru diketahui saat penilaian.
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
          <div v-reveal class="flex shrink-0 flex-col gap-6 lg:w-[420px]">
            <h2 class="text-[30px] font-semibold leading-[1.2] text-white md:text-[40px]">
              Tujuh langkah dari data ke keputusan
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

    <!-- Empat kelompok penilaian -->
    <section class="bg-white px-5 py-14 sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-8 md:gap-14">
        <h2 v-reveal class="text-[30px] font-bold leading-[1.18] text-navy md:text-[42px]">
          Empat kelompok penilaian
        </h2>
        <ul class="grid gap-4 sm:grid-cols-2 md:gap-6">
          <li
            v-for="(group, index) in groups"
            :key="group.title"
            v-reveal="index % 2"
            class="rounded-3xl border border-navy/10 px-7 py-6 text-lg font-bold leading-[1.4] text-navy md:py-7 md:text-[23px]"
            :class="group.tint ? 'bg-mint/15' : 'bg-navy/3'"
          >
            {{ group.title }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Fitur -->
    <section class="bg-navy/3 px-5 py-14 font-inter sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-10">
        <div v-reveal class="max-w-[940px]">
          <p class="text-[13px] font-semibold leading-[1.6] text-brand">Fitur</p>
          <h2 class="mt-5 text-[30px] font-semibold leading-[1.2] text-navy md:mt-[21px] md:text-[40px]">Fitur utama</h2>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          <article
            v-for="(item, index) in features"
            :key="item.title"
            v-reveal="index % 3"
            class="hover-lift flex flex-col gap-6 rounded-3xl border border-navy/10 bg-white p-6 shadow-lg shadow-navy/4 md:p-8"
          >
            <Icon name="lucide:layers" class="size-6 text-brand" />
            <div>
              <h3 class="text-xl font-semibold leading-[1.3] text-navy md:text-[23px]">{{ item.title }}</h3>
              <p class="mt-4 text-base leading-[1.6] text-ink md:mt-[29px] md:text-lg">{{ item.desc }}</p>
            </div>
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

    <!-- Terhubung ke sumber data resmi -->
    <section class="bg-navy px-5 py-14 text-white sm:px-8 md:py-20 lg:p-[88px]">
      <div v-reveal class="mx-auto flex max-w-[1264px] flex-col gap-6 lg:flex-row lg:gap-14">
        <h2 class="text-[30px] font-bold leading-[1.18] md:text-[42px] lg:w-[580px] lg:shrink-0">
          Terhubung ke sumber data resmi
        </h2>
        <p class="min-w-0 flex-1 text-base leading-[1.8] text-white/60 md:text-lg">
          SIMRS rumah sakit (FHIR R4, hanya membaca data) · BPJS Kesehatan (VClaim dan PCare) · SATUSEHAT
          Kemenkes (verifikasi silang kunjungan dan pasien) · API terbuka untuk sistem lain
        </p>
      </div>
    </section>

    <!-- Pertanyaan umum -->
    <section class="bg-white px-5 py-14 sm:px-8 md:py-20 lg:p-[88px]">
      <div class="mx-auto flex max-w-[1264px] flex-col gap-4 md:gap-8 lg:flex-row lg:gap-14">
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
        class="mx-auto flex max-w-[1280px] flex-col items-start gap-7 rounded-[24px] bg-linear-to-r from-navy via-deep via-60% to-brand p-8 font-inter md:rounded-[32px] md:p-16"
      >
        <h2 class="text-[30px] font-semibold leading-[1.2] text-white md:text-[44px]">
          Jangan menunggu hasil penilaian untuk tahu posisi Anda.
        </h2>
        <NuxtLink
          :to="{ path: '/kontak', query: { solution_key: solutionKey } }"
          class="bg-gradient-ocean inline-flex items-center gap-4 rounded-xl px-[22px] py-[17px] text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gradient-to/35"
        >
          Jadwalkan demo MedCredix
          <Icon name="lucide:arrow-up-right" class="size-4" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
