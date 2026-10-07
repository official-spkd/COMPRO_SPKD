<script setup lang="ts">
const roles = [
  { title: 'Fasilitas kesehatan', desc: 'Pemilik kebutuhan dan penerima manfaat.' },
  { title: 'PT SPKD', desc: 'Teknologi, implementasi, dan pendampingan.' },
  { title: 'Mitra perbankan', desc: 'Struktur pembiayaan.' },
  {
    title: 'Dinas kesehatan dan pemerintah daerah',
    desc: 'Koordinasi program dan kebijakan di wilayahnya.',
  },
]
</script>

<template>
  <section
    class="relative overflow-hidden bg-gradient-to-r from-[#101f47] via-[#14285c] via-[18.27%] to-[#0e3b5c]"
  >
    <img
      src="/images/kerja-sama/cahaya-teal.svg"
      alt=""
      aria-hidden="true"
      width="720"
      height="670"
      class="pointer-events-none absolute -top-[330px] left-[1020px] h-[670px] w-[720px] max-w-none select-none max-lg:-right-[360px] max-lg:left-auto"
    />

    <div
      class="relative mx-auto flex max-w-[1440px] flex-col gap-12 px-5 py-14 sm:px-8 lg:flex-row lg:gap-[60px] lg:px-40 lg:pb-[100px] lg:pt-20"
    >
      <div v-reveal class="flex flex-col gap-4 lg:w-[560px] lg:shrink-0">
        <h2 class="text-3xl font-bold leading-[1.15] text-white md:text-[40px]">
          Risiko dibagi. Hasil ditumbuhkan bersama.
        </h2>
        <p class="text-lg leading-[30px] text-[#b7cdd7]">
          Setiap pihak membawa perannya masing-masing. SPKD menyediakan teknologi, implementasi,
          tenaga ahli, dan pendampingan. Fasilitas kesehatan menetapkan prioritas dan komitmen
          perubahan. Mitra perbankan mendukung struktur pembiayaan.
        </p>
      </div>

      <!-- Garis vertikal dengan penanda tiap peran -->
      <div v-reveal="1" class="relative lg:w-[500px]">
        <span
          aria-hidden="true"
          class="absolute bottom-0 left-[7px] top-2 w-px bg-[#8cb8cf]/35"
        />
        <ul>
          <li
            v-for="r in roles"
            :key="r.title"
            class="relative pb-[19px] pl-9 text-lg leading-7"
          >
            <img
              src="/images/kerja-sama/penanda-peran.svg"
              alt=""
              aria-hidden="true"
              width="12"
              height="12"
              class="absolute left-px top-2"
            />
            <p class="font-bold text-white">{{ r.title }}</p>
            <p class="text-[#b7cdd7]">{{ r.desc }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
