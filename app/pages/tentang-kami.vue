<template>
  <div class="w-full min-h-screen bg-surface text-heading-dark">
    <!-- Hero -->
    <section class="flex min-h-hero flex-col justify-center bg-surface">
      <div
        class="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-5 py-14 sm:px-8 md:py-20 lg:flex-row lg:items-center lg:gap-[30px] lg:px-[88px] lg:py-[88px]"
      >
        <div class="hero-enter flex w-full flex-col items-start gap-6 lg:w-[670px] lg:shrink-0">
          <p class="text-[14px] font-bold text-accent">Tentang SPKD</p>
          <!-- Gradasi dipasang di h1 agar mengikuti lebar seluruh judul seperti di Figma -->
          <h1 class="text-gradient w-full pb-[0.12em] text-[40px] font-bold leading-[0.97] sm:text-[52px] lg:text-[64px]">
            <span class="text-heading-dark">Kami membangun teknologi agar data rumah sakit</span>
            bekerja untuk pelayanan
          </h1>
          <p class="text-[17px] leading-[1.65] text-body-alt md:text-[20px]">
            PT Sistem Pelayanan Kesehatan dan Data (SPKD) membantu rumah sakit dan fasilitas kesehatan
            mengubah data pelayanan menjadi keputusan, klaim, dan pendapatan yang tepat.
          </p>
          <NuxtLink
            to="/kontak"
            class="btn-gradient inline-flex h-[54px] items-center rounded-full px-6 text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:brightness-110"
          >
            Jadwalkan demo
          </NuxtLink>
        </div>

        <div class="hero-media group w-full min-w-0 flex-1">
          <div
            class="relative h-[300px] overflow-hidden rounded-tl-[80px] rounded-tr-[24px] rounded-br-[80px] rounded-bl-[24px] sm:h-[400px] lg:h-[486px] lg:rounded-tl-[140px] lg:rounded-tr-[32px] lg:rounded-br-[140px] lg:rounded-bl-[32px]"
          >
            <img
              src="/images/tentang-kami/healthcare-scene.jpg"
              alt="Tenaga kesehatan berdiskusi menggunakan data pasien"
              class="img-zoom absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Cerita kami -->
    <section class="bg-white">
      <div class="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-14 sm:px-8 md:py-20 lg:px-[88px] lg:py-[88px]">
        <div v-reveal class="flex max-w-[1000px] flex-col gap-[18px] font-bold">
          <p class="text-[14px] text-accent">Cerita kami</p>
          <h2 class="text-[30px] leading-[1.18] sm:text-[36px] lg:text-[42px]">
            Ada celah antara data yang dicatat dan pendapatan yang diterima.
          </h2>
        </div>

        <div class="flex flex-col gap-6 text-[16px] leading-[1.75] text-ink-cool md:flex-row md:gap-[34px]">
          <p v-for="(paragraph, i) in story" :key="i" v-reveal="i" class="flex-1">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </section>

    <!-- Visi -->
    <section class="relative overflow-hidden bg-night">
      <img
        src="/images/beranda/produk-mesh-1.svg"
        alt=""
        aria-hidden="true"
        width="752"
        height="668"
        class="pointer-events-none absolute -bottom-[274px] -right-[271px] h-[668px] w-[752px] max-w-none select-none"
      />
      <div class="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:py-20 lg:px-[88px] lg:py-[88px]">
        <div v-reveal class="flex max-w-[1227px] flex-col gap-[18px] font-bold">
          <p class="text-[20px] text-accent-glow">Visi</p>
          <h2 class="text-[28px] leading-[1.18] text-white sm:text-[36px] lg:text-[42px]">
            Menjadi mitra teknologi kesehatan yang memastikan setiap data pelayanan di Indonesia tercatat
            lengkap, aman, dan bermanfaat.
          </h2>
        </div>
      </div>
    </section>

    <!-- Misi -->
    <section class="bg-white">
      <div
        class="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-14 sm:px-8 md:py-20 lg:flex-row lg:gap-14 lg:px-[88px] lg:py-[88px]"
      >
        <h2
          v-reveal
          class="text-gradient [--gradient-angle:95deg] text-[34px] font-bold leading-[1.18] lg:w-[400px] lg:shrink-0 lg:text-[42px]"
        >
          Misi
        </h2>

        <ul class="flex min-w-0 flex-1 flex-col gap-6">
          <li
            v-for="(item, i) in missions"
            :key="item"
            v-reveal="i"
            class="border-b border-line-soft py-[22px] text-[19px] font-bold leading-[1.65] md:text-[23px]"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Prinsip kerja -->
    <section class="bg-surface">
      <div class="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-14 sm:px-8 md:py-20 lg:gap-14 lg:px-[88px] lg:py-[88px]">
        <div v-reveal class="flex flex-col gap-[18px] font-bold">
          <p class="text-[14px] text-brand-strong">Prinsip kerja</p>
          <h2 class="text-[30px] leading-[1.18] sm:text-[36px] lg:text-[42px]">
            Empat hal yang kami pegang di setiap pekerjaan
          </h2>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div
            v-for="(principle, i) in principles"
            :key="principle.title"
            v-reveal="i % 2"
            class="hover-lift rounded-[28px] border border-line-soft p-7"
            :class="principle.highlight ? 'bg-tint-aqua' : 'bg-surface'"
          >
            <h3 class="text-[20px] font-bold leading-[1.65] md:text-[24px]">{{ principle.title }}</h3>
            <p class="text-[16px] leading-[1.65] text-body-alt md:text-[18px]">{{ principle.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tim kami -->
    <section class="bg-white">
      <div
        class="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-14 sm:px-8 md:py-20 lg:flex-row lg:gap-14 lg:px-[88px] lg:py-[88px]"
      >
        <div v-reveal class="flex flex-col gap-[18px] font-bold lg:w-[580px] lg:shrink-0">
          <p class="text-[14px] text-brand-strong">Tim kami</p>
          <h2 class="text-[30px] leading-[1.18] sm:text-[36px] lg:text-[42px]">
            Gabungan pemahaman klinis, casemix, dan teknologi
          </h2>
        </div>
        <p v-reveal="1" class="min-w-0 flex-1 text-[16px] leading-[1.65] text-body-alt md:text-[18px]">
          Tim SPKD terdiri dari [praktisi casemix, tenaga medis, pengembang perangkat lunak, dan analis data]
          dengan pengalaman [x] tahun di lingkungan rumah sakit dan program JKN.
        </p>
      </div>
    </section>

    <!-- Peta produk -->
    <section class="bg-white">
      <div class="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-14 sm:px-8 md:py-20 lg:px-[88px] lg:py-[88px]">
        <div class="flex flex-col gap-6 lg:flex-row lg:gap-14">
          <div v-reveal class="flex flex-col gap-[18px] font-bold lg:w-[580px] lg:shrink-0">
            <p class="text-[14px] text-brand-strong">Peta produk</p>
            <h2 class="text-[30px] leading-[1.18] sm:text-[36px] lg:text-[42px]">
              Lima produk, dibangun bertahap bersama rumah sakit
            </h2>
          </div>
          <p v-reveal="1" class="min-w-0 flex-1 text-[16px] leading-[1.65] text-body-alt md:text-[18px]">
            Kami mengembangkan produk secara bertahap dan menguji setiap tahap bersama rumah sakit mitra. Rumah
            sakit yang ikut uji coba awal ikut menentukan arah produk.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div
            v-for="(product, i) in products"
            :key="product.name"
            v-reveal="i"
            class="hover-lift flex flex-col items-start gap-[18px] rounded-[24px] border border-line-soft bg-surface p-5"
          >
            <h3 class="text-[23px] font-bold leading-[1.65]">{{ product.name }}</h3>
            <span class="rounded-full bg-tint-aqua px-3.5 py-[7px] text-[13px] font-semibold text-night-to">
              ({{ product.category }})
            </span>
          </div>
        </div>

        <div>
          <NuxtLink
            to="/kontak"
            class="btn-gradient inline-flex h-[54px] items-center rounded-full px-6 text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:brightness-110"
          >
            Ikut uji coba awal
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Keamanan data -->
    <section class="btn-gradient [--gradient-angle:91deg]">
      <div
        class="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-14 sm:px-8 md:py-20 lg:flex-row lg:gap-14 lg:px-[88px] lg:py-[88px]"
      >
        <div v-reveal class="flex flex-col gap-[18px] lg:w-[400px] lg:shrink-0">
          <p class="text-[14px] font-bold text-accent-glow">Keamanan data</p>
          <h2 class="text-[30px] font-bold leading-[1.18] text-white sm:text-[36px] lg:text-[42px]">
            Data pasien adalah amanah.
          </h2>
          <p class="text-[16px] leading-[1.65] text-mist md:text-[18px]">
            Prinsip yang kami terapkan di setiap produk:
          </p>
        </div>

        <ul class="flex min-w-0 flex-1 flex-col gap-6">
          <li
            v-for="(item, i) in securityPoints"
            :key="item"
            v-reveal="i"
            class="border-b border-white/13 py-[22px] text-[19px] font-bold leading-[1.65] text-white md:text-[23px]"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Ajakan penutup -->
    <section class="bg-white">
      <div
        class="mx-auto flex max-w-[1440px] flex-col items-center gap-[26px] px-5 py-14 sm:px-8 md:py-20 lg:px-[88px] lg:py-[88px]"
      >
        <div v-reveal class="flex max-w-[1000px] flex-col items-center gap-[22px] text-center">
          <h2
            class="text-gradient [--gradient-angle:100deg] w-full text-[34px] font-bold leading-[1.18] sm:text-[40px] lg:text-[48px]"
          >
            Mari berkenalan lebih dekat
          </h2>
          <p class="text-[17px] leading-[1.65] text-sea md:text-[20px]">
            Ceritakan tantangan rumah sakit Anda. Kami akan tunjukkan bagaimana SPKD bisa membantu.
          </p>
        </div>

        <div v-reveal="1" class="flex flex-col items-center gap-4 sm:flex-row">
          <NuxtLink
            to="/kontak"
            class="btn-gradient inline-flex h-[54px] items-center rounded-full px-6 text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:brightness-110"
          >
            Jadwalkan demo
          </NuxtLink>
          <NuxtLink
            to="/kerja-sama"
            class="inline-flex h-[54px] items-center rounded-full border border-sea px-6 text-[15px] font-bold text-sea-dark transition hover:bg-sea/5"
          >
            Lihat peluang kerja sama
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Tentang Kami',
  description:
    'PT Sistem Pelayanan Kesehatan dan Data (SPKD) membantu rumah sakit dan fasilitas kesehatan mengubah data pelayanan menjadi keputusan, klaim, dan pendapatan yang tepat.',
})

const story = [
  'Rekam medis elektronik kini wajib bagi setiap fasilitas pelayanan kesehatan sesuai Permenkes Nomor 24 Tahun 2022. Banyak rumah sakit sudah memakai sistem, tetapi datanya belum sepenuhnya membantu klaim dan keputusan manajemen.',
  'Koding yang kurang tepat, dokumen yang tidak lengkap, dan selisih tarif yang tidak tertagih membuat pendapatan bocor tanpa terlihat. Mutu layanan juga sulit dibuktikan karena datanya tersebar.',
  'SPKD hadir untuk menutup celah itu: dari pencatatan di SIMRS, pemeriksaan klaim, sampai penagihan dan pemantauan mutu.',
]

const missions = [
  'Membangun sistem yang memudahkan tenaga kesehatan mencatat dengan benar sejak awal.',
  'Membantu rumah sakit mengklaim dan menagih sesuai haknya.',
  'Menyediakan data yang bisa dipakai untuk meningkatkan mutu dan keselamatan pasien.',
  'Bekerja sesuai regulasi dan menjaga data pasien sebagai amanah.',
]

// Kartu disusun selang-seling (hijau muda di kiri atas & kanan bawah) sesuai desain
const principles = [
  { title: 'Berangkat dari masalah nyata', desc: 'Setiap fitur dimulai dari alur kerja yang dijalani tim rumah sakit setiap hari.', highlight: true },
  { title: 'Patuh regulasi sejak desain', desc: 'Standar SATUSEHAT, INA-CBG, dan ketentuan BPJS menjadi dasar rancangan, bukan tambahan.', highlight: false },
  { title: 'Menjaga data sebagai amanah', desc: 'Akses dibatasi sesuai peran, setiap perubahan tercatat, dan data tetap milik rumah sakit.', highlight: false },
  { title: 'Hadir sampai berhasil', desc: 'Kami mendampingi sampai sistem benar-benar dipakai, bukan berhenti saat go-live.', highlight: true },
]

const products = [
  { name: 'SIMRS', category: 'Pelayanan dan Mutu' },
  { name: 'MedClaim', category: 'Klaim dan Pendapatan' },
  { name: 'MedCredix', category: 'Kredensial' },
  { name: 'MedPath', category: 'Pelayanan dan Mutu' },
  { name: 'MedPay', category: 'Klaim dan Pendapatan' },
]

const securityPoints = [
  'Mengikuti Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi.',
  'Hak akses berbasis peran dan jejak audit untuk setiap perubahan data.',
  'Integrasi hanya membaca data yang diperlukan, bila memungkinkan.',
  '[Enkripsi data saat dikirim dan disimpan: konfirmasi tim teknis]',
  'Data tetap milik rumah sakit, termasuk saat kerja sama berakhir.',
]
</script>
