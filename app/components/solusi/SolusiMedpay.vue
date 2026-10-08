<script setup lang="ts">
defineProps<{
  solutionKey: string
}>()

const problems = [
  'Selisih dihitung manual dari banyak komponen biaya.',
  'Dokumen pendukung disusun ulang untuk setiap asuransi.',
  'Tagihan melewati batas waktu 6 bulan dan tidak bisa diajukan lagi.',
]

const steps = [
  { title: 'Pelayanan dan SEP', desc: 'Episode rawat pasien JKN non-PBI yang memiliki polis asuransi aktif.' },
  {
    title: 'Input klaim COB',
    desc: 'Formulir 4 langkah: identitas dan episode, diagnosis ICD-10, dan prosedur ICD-9-CM.',
  },
  {
    title: 'Penetapan tarif INA-CBG',
    desc: 'Tarif diambil dari grouper e-Klaim resmi atau melalui Engine API mitra, termasuk tambahan Special CMG.',
  },
  {
    title: 'Hitung selisih',
    desc: 'Tarif rumah sakit (18 komponen biaya) dikurangi total tarif INA-CBG. Sistem memberi peringatan bila tagihan lebih kecil dari tarif.',
  },
  {
    title: 'Resume medis dan dokumen',
    desc: 'Unggah rincian pelayanan dalam CSV, tinjau per kategori, lalu buat dokumen PDF.',
  },
  {
    title: 'Batch dan pengajuan',
    desc: 'Klaim dikelompokkan per periode, diekspor ke CSV atau PDF, lalu diajukan ke asuransi kedua.',
  },
  {
    title: 'Pembayaran dan pemantauan',
    desc: 'Status Disetujui, Sebagian, atau Ditolak. Tenggat 6 bulan dan tingkat persetujuan per asuransi terpantau.',
  },
]

const outputs = [
  { title: 'Selisih tarif', desc: 'Nilai di luar tanggungan BPJS untuk setiap klaim.' },
  { title: 'Rekap batch', desc: 'Rantai tarif per periode dalam CSV dan PDF.' },
  { title: 'Simulasi KAPJ', desc: 'Pembagian antara BPJS, asuransi, dan pasien sesuai POJK 36/2025.' },
  { title: 'Laporan kinerja', desc: 'Tingkat persetujuan dan performa per penjamin.' },
  { title: 'Dokumen pendukung', desc: 'Resume medis PDF yang siap dikirim ke asuransi.' },
]

const benefits = [
  {
    icon: 'lucide:hospital',
    title: 'Untuk rumah sakit',
    desc: 'Selisih tarif tertagih · Tarif dasar sah dari grouper resmi · Tenggat 6 bulan terpantau · Dokumen rapi dan terverifikasi · Arus kas lebih sehat',
  },
  {
    icon: 'lucide:shield-check',
    title: 'Untuk asuransi dan pasien',
    desc: 'Rantai tarif transparan dan bisa dicek ulang · Pembagian KAPJ sesuai ketentuan · Integrasi aman melalui Engine API · Proses klaim lebih cepat dan terstandar',
  },
]

const roles = [
  {
    icon: 'lucide:clipboard-list',
    title: 'Staf dan admin RS',
    desc: 'Menginput klaim, melengkapi dokumen, membuat batch, dan memantau pembayaran.',
  },
  {
    icon: 'lucide:shield',
    title: 'Asuransi kedua',
    desc: 'Menerima tagihan selisih, memverifikasi dokumen, dan membayar sesuai polis.',
  },
  {
    icon: 'lucide:monitor-cog',
    title: 'Sistem MedPay',
    desc: 'Menetapkan tarif, menghitung selisih dan KAPJ, menyajikan dasbor, serta menyimpan jejak audit.',
  },
]

const faqs = [
  {
    q: 'Pasien seperti apa yang bisa diproses di MedPay?',
    a: 'Pasien JKN non-PBI yang memiliki polis asuransi kedua yang masih aktif.',
  },
  {
    q: 'Apakah MedPay bisa dipakai untuk banyak rumah sakit sekaligus?',
    a: 'Bisa. Data klaim tersimpan terpusat untuk grup rumah sakit, dengan hak akses per rumah sakit.',
  },
]
</script>

<template>
  <div class="w-full bg-white">
    <!-- Hero -->
    <section
      class="relative flex min-h-hero flex-col justify-center overflow-hidden bg-linear-to-r from-navy to-deep px-5 py-14 text-white sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]"
    >
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -bottom-[90px] -right-[220px] h-[420px] w-[540px] bg-[radial-gradient(closest-side,var(--color-gradient-to),transparent)] opacity-60 lg:-bottom-[181px] lg:-right-[413px] lg:h-[839px] lg:w-[1082px]"
      />
      <div class="hero-enter relative mx-auto flex w-full max-w-[1120px] flex-col items-start gap-5 md:gap-6">
        <p class="rounded-full border border-mint/25 bg-mint/10 px-3.5 py-[7px] text-[11px] font-bold leading-snug text-mint sm:text-[13px]">
          MedPay · Coordination of Benefits · Klaim dan Pembayaran
        </p>
        <h1 class="text-[36px] font-bold leading-[1.12] sm:text-5xl lg:text-[64px]">
          Selisih tarif tertagih, bukan terlewat.
        </h1>
        <p class="text-base leading-[1.65] text-white/75 md:text-xl">
          Untuk pasien JKN yang juga punya asuransi kedua, MedPay menghitung selisih tarif rumah sakit dengan tarif
          INA-CBG, menyiapkan dokumen, mengajukan tagihan, dan memantau pembayarannya.
        </p>
        <p class="text-base font-bold leading-[1.65] text-mint md:text-lg">Dari selisih tarif sampai dana masuk.</p>
        <NuxtLink
          :to="{ path: '/kontak', query: { solution_key: solutionKey } }"
          class="bg-gradient-ocean inline-flex h-[54px] items-center rounded-full px-6 text-[15px] font-bold transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gradient-to/35"
        >
          Jadwalkan demo MedPay
        </NuxtLink>
      </div>
    </section>

    <!-- Penjelasan COB -->
    <section class="bg-mint/15 px-5 py-14 sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]">
      <div v-reveal class="mx-auto flex max-w-[1120px] flex-col">
        <p class="text-[13px] font-semibold leading-[1.6] text-brand">Penjelasan COB</p>
        <h2 class="mt-5 text-[30px] font-semibold leading-[1.2] text-navy md:mt-[21px] md:text-[40px]">
          Apa itu koordinasi manfaat (COB)?
        </h2>
        <p class="mt-6 max-w-[940px] text-base leading-[1.65] text-ink md:mt-8 md:text-lg">
          Pasien JKN non-PBI yang memiliki polis asuransi aktif bisa mendapat manfaat dari dua penjamin. Selisih
          antara tarif rumah sakit dan tarif INA-CBG dapat ditagihkan ke asuransi kedua sesuai polis.
        </p>
      </div>
    </section>

    <!-- Masalah -->
    <section class="bg-white px-5 py-14 sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-4 md:gap-8 lg:flex-row lg:gap-14">
        <div v-reveal class="flex shrink-0 flex-col gap-[15px] lg:w-[400px]">
          <p class="text-[13px] font-semibold leading-[1.6] text-gradient-to">Masalah</p>
          <h2 class="text-[30px] font-bold leading-[1.18] text-navy md:text-[42px]">
            Hak tagih ada, tetapi prosesnya mudah terlewat.
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
              Tujuh langkah dari pelayanan sampai pembayaran
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

    <!-- Hasil di dasbor -->
    <section class="bg-navy/3 px-5 py-14 sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]">
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
            :key="item.title"
            v-reveal="index % 2"
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

    <!-- Peran -->
    <section class="bg-navy/3 px-5 py-14 sm:px-8 md:py-20 lg:px-[160px] lg:py-[88px]">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-10">
        <div v-reveal class="max-w-[940px]">
          <p class="text-[13px] font-semibold leading-[1.6] text-brand">Peran</p>
          <h2 class="mt-5 text-[30px] font-semibold leading-[1.2] text-navy md:mt-[21px] md:text-[40px]">
            Siapa melakukan apa
          </h2>
        </div>
        <div class="grid gap-4 md:grid-cols-3 md:gap-6">
          <article
            v-for="(item, index) in roles"
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
    <section class="bg-white px-5 pb-14 sm:px-8 md:pb-20 lg:p-20">
      <div
        v-reveal
        class="mx-auto flex max-w-[1280px] flex-col items-start gap-7 rounded-[24px] bg-linear-to-r from-navy via-deep via-60% to-gradient-to p-8 md:rounded-[32px] md:p-16"
      >
        <h2 class="text-[30px] font-semibold leading-[1.2] text-white md:text-[44px]">
          Pastikan tidak ada selisih tarif yang terlewat.
        </h2>
        <NuxtLink
          :to="{ path: '/kontak', query: { solution_key: solutionKey } }"
          class="bg-gradient-ocean inline-flex items-center gap-4 rounded-xl px-[22px] py-[17px] text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gradient-to/35"
        >
          Jadwalkan demo MedPay
          <Icon name="lucide:arrow-up-right" class="size-4" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
