<template>
  <section class="bg-white">
    <div class="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-14 sm:px-8 lg:p-[88px]">
      <div class="flex flex-col gap-6 lg:flex-row lg:gap-14">
        <div v-reveal class="flex flex-col gap-[18px] font-bold lg:w-[580px] lg:shrink-0">
          <p class="text-sm text-[#078b80]">Pendampingan di lokasi</p>
          <h2 class="text-3xl leading-[1.18] text-[#0b1f3a] md:text-[42px]">
            Transformasi tidak berhenti saat sistem go-live.
          </h2>
        </div>
        <p v-reveal="1" class="flex-1 text-lg leading-[1.65] text-[#566b7a]">
          Tim kami hadir bersama pengguna untuk membantu adaptasi alur kerja, mengukur penggunaan,
          dan menutup kendala operasional sampai sistem benar-benar menjadi kebiasaan baru.
        </p>
      </div>

      <img
        v-reveal
        src="/images/kerja-sama/pendampingan.jpg"
        alt="Pendamping SPKD membantu staf rumah sakit menggunakan sistem di laptop"
        width="1584"
        height="672"
        loading="lazy"
        class="h-[240px] w-full rounded-[32px] rounded-br-[80px] rounded-tl-[80px] object-cover md:h-[380px] md:rounded-br-[140px] md:rounded-tl-[140px]"
      />
    </div>
  </section>
</template>
