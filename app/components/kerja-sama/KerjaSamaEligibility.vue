<script setup lang="ts">
const partners = [
  {
    icon: 'lucide:landmark',
    title: 'RS Vertikal Kementerian Kesehatan',
    description: 'Rumah sakit milik pemerintah pusat, termasuk RS rujukan nasional dan RS pendidikan.',
  },
  {
    icon: 'lucide:building-2',
    title: 'RSUD Provinsi & Kabupaten/Kota',
    description: 'Rumah sakit milik pemerintah daerah, baik berstatus BLUD maupun non-BLUD.',
  },
  {
    icon: 'lucide:shield',
    title: 'RS TNI, Polri & BUMN',
    description: 'Rumah sakit di bawah institusi TNI, Polri, maupun badan usaha milik negara.',
  },
  {
    icon: 'lucide:hospital',
    title: 'RS Swasta',
    description: 'Rumah sakit umum maupun khusus yang dikelola yayasan atau badan usaha swasta.',
  },
]

const requirements = [
  'Memiliki izin operasional rumah sakit yang masih berlaku.',
  'Dukungan pimpinan serta tim champion internal untuk mengawal perubahan.',
  'Bersedia mengikuti assessment digital awal sebagai dasar perancangan skema.',
  'Kelas rumah sakit (A–D) dan kondisi sistem saat ini tidak menjadi penghalang.',
]
</script>

<template>
  <section class="partnership-section partnership-eligibility">
    <div v-reveal class="partnership-section-intro">
      <p class="partnership-eyebrow">Siapa yang bisa bekerja sama</p>
      <h2>Terbuka untuk rumah sakit pemerintah maupun swasta.</h2>
      <p>
        Skema KSO / KSM dirancang fleksibel sehingga dapat dimanfaatkan oleh berbagai jenis
        rumah sakit, tanpa memandang kepemilikan, kelas, maupun tingkat kesiapan digital saat
        ini. Struktur kerja sama dan pembiayaan disesuaikan dengan regulasi yang berlaku bagi
        masing-masing institusi.
      </p>
    </div>
    <div class="partnership-eligibility-grid">
      <article v-for="(partner, i) in partners" :key="partner.title" v-reveal="i" class="partnership-eligibility-card">
        <span class="partnership-eligibility-icon">
          <Icon :name="partner.icon" class="size-[22px]" aria-hidden="true" />
        </span>
        <h3>{{ partner.title }}</h3>
        <p>{{ partner.description }}</p>
      </article>
    </div>
    <div v-reveal class="partnership-requirements">
      <h3>Ketentuan umum</h3>
      <ul>
        <li v-for="item in requirements" :key="item">
          <Icon name="lucide:circle-check" class="size-[18px]" aria-hidden="true" />
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
