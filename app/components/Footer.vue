<script setup lang="ts">
const columns = [
  {
    heading: 'Perusahaan',
    links: [
      { label: 'Tentang kami', to: '/tentang-kami' },
      { label: 'Kerja sama', to: '/kerja-sama' },
      { label: 'Berita', to: '/berita' },
      { label: 'Kontak', to: '/kontak' },
    ],
  },
  {
    heading: 'Produk',
    links: ['SIMRS', 'MedClaim', 'MedCredix', 'MedPath', 'MedPay'].map((label) => ({
      label,
      to: '/solusi',
    })),
  },
]

// Isi `href` dengan alamat akun resmi; ikon tanpa href tampil tanpa tautan
const socials = [
  { label: 'Instagram', icon: '/images/beranda/social-instagram.svg', href: 'https://www.instagram.com/spkd.official/' },
  { label: 'LinkedIn', icon: '/images/beranda/social-linkedin.svg', href: 'https://www.linkedin.com/company/pt-spkd/about/' },
  { label: 'Threads', icon: '/images/beranda/social-threads.svg', href: 'https://www.threads.com/@spkd.official' },
  { label: 'X', icon: '/images/beranda/social-x.svg', href: 'https://x.com/SPKD_ID' },
  { label: 'TikTok', icon: '/images/beranda/social-tiktok.svg', href: 'https://www.tiktok.com/@official.spkd' },
]

const legal = [
  { label: 'Privasi', to: '/privasi' },
  { label: 'Ketentuan', to: '/ketentuan' },
  { label: 'Keamanan Informasi', to: '/keamanan-informasi' },
]
</script>

<template>
  <footer class="w-full bg-[#11214b] font-inter">
    <div
      class="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 pb-[34px] pt-12 sm:px-8 md:gap-[54px] lg:px-[72px] lg:pt-[72px]"
    >
      <div class="flex flex-col justify-between gap-10 lg:flex-row">
        <div class="flex flex-col gap-5 lg:w-[420px]">
          <NuxtLink to="/" class="flex items-center gap-[17px]">
            <img
              src="/images/beranda/logo-spkd-footer.svg"
              alt="Logo SPKD"
              width="73.6667"
              height="65"
              class="h-[52px] w-auto shrink-0 md:h-[65px]"
            />
            <span class="flex flex-col whitespace-nowrap text-white">
              <span class="font-dm-sans text-[28px] font-black md:text-[34.667px]">PT SPKD</span>
              <span class="text-[11px] font-semibold uppercase md:text-[13px]">
                Sistem Pelayanan Kesehatan &amp; Data
              </span>
            </span>
          </NuxtLink>
          <p class="text-xl font-medium leading-[1.65] text-[#2dd4bf] md:text-[22px]">No ERM, No Claim.</p>
          <p class="text-sm leading-[1.65] text-[#ddf5f1] md:text-[15px]">
            Kami membangun sistem dan analitik data agar rumah sakit dan fasilitas kesehatan di
            Indonesia bisa mencatat dengan rapi, mengklaim dengan tepat, dan melayani lebih baik.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-[150px_140px_1fr] lg:gap-x-[39px]">
          <nav v-for="col in columns" :key="col.heading" :aria-label="col.heading" class="text-sm leading-[2.3]">
            <p class="font-semibold text-white">{{ col.heading }}</p>
            <NuxtLink
              v-for="link in col.links"
              :key="link.label"
              :to="link.to"
              class="block text-[#bdd1df] transition-colors hover:text-white"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>

          <div class="col-span-2 flex flex-col gap-4 sm:col-span-1 lg:w-[303px]">
            <address class="text-sm not-italic leading-[2.1] text-[#bdd1df]">
              <p class="font-semibold text-white">Hubungi kami</p>
              <a href="mailto:officialspkd@gmail.com" class="block transition-colors hover:text-white"> officialspkd@gmail.com </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" class="block transition-colors hover:text-white">+62 812-3456-7890</a>
              <p>
                Jl. Prof. DR. Soepomo No.323, RT.13/RW.2, Tebet Bar., Kec. Tebet, Kota Jakarta
                Selatan, Daerah Khusus Ibukota Jakarta 12810
              </p>
              <p>Senin – Jumat, 08.00–17.00 WIB</p>
              <!-- <p class="mt-[2.1em] text-xs">Instagram · LinkedIn · Threads · X · TikTok</p> -->
            </address>
            <ul class="flex gap-5">
              <li v-for="s in socials" :key="s.label">
                <component
                  :is="s.href ? 'a' : 'span'"
                  :href="s.href || undefined"
                  :target="s.href ? '_blank' : undefined"
                  :rel="s.href ? 'noopener noreferrer' : undefined"
                  :aria-label="s.href ? s.label : undefined"
                  class="block transition-opacity hover:opacity-80"
                >
                  <img :src="s.icon" :alt="s.href ? '' : s.label" width="18" height="18" />
                </component>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="h-px w-full bg-[#315167]" />

      <div class="flex flex-col justify-between gap-3 text-xs text-[#738893] sm:flex-row">
        <p>© 2026 PT Sistem Pelayanan Kesehatan dan Data. Seluruh hak dilindungi.</p>
        <p class="flex flex-wrap items-center gap-x-2">
          <template v-for="(l, i) in legal" :key="l.to">
            <span v-if="i" aria-hidden="true">·</span>
            <NuxtLink :to="l.to" class="transition-colors hover:text-white">{{ l.label }}</NuxtLink>
          </template>
        </p>
      </div>
    </div>
  </footer>
</template>
