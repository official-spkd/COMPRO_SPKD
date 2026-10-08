<script setup lang="ts">
const perks = [
  'Tersedia pendampingan on-site',
  'Integrasi uji coba sandbox-ready',
  'Layanan teknis 24/7 SLA terjamin',
]
</script>

<template>
  <section class="bg-lavender font-inter">
    <div class="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-[45px] lg:py-[90px]">
      <div
        v-reveal
        class="relative overflow-hidden rounded-[27px] bg-[linear-gradient(160.73deg,#14285c_0%,#0f4c81_50%,#14285c_100%)] px-6 py-12 shadow-[0_28px_56px_-13.5px_rgba(0,0,0,0.25)] md:px-12 lg:px-[243px] lg:py-[72px]"
      >
        <div
          aria-hidden="true"
          class="pointer-events-none absolute -right-[90px] -top-[90px] size-[432px] rounded-full bg-mint-light/20 blur-[36px]"
        />
        <div
          aria-hidden="true"
          class="pointer-events-none absolute bottom-0 left-1/3 right-[40%] h-[360px] rounded-full bg-brand-darker/15 blur-[22.5px]"
        />

        <div class="relative mx-auto flex max-w-[864px] flex-col items-center gap-9 text-center">
          <div class="flex flex-col items-center gap-[18px]">
            <h2
              class="font-jakarta text-3xl font-bold leading-[1.2] tracking-[-1.125px] text-white md:text-[45px]"
            >
              Siap Bertransformasi Digital?
            </h2>
            <p class="max-w-[758px] text-lg leading-[1.65] text-fog md:text-2xl">
              Tim kami akan memperagakan alur produk dengan contoh data, lalu berdiskusi soal
              kebutuhan rumah sakit Anda.
            </p>
          </div>

          <NuxtLink
            to="/kontak"
            class="inline-flex items-center gap-[11.25px] rounded-[13.5px] bg-accent-bright px-6 py-[18px] text-[15.75px] font-bold leading-[22.5px] tracking-[0.16px] text-brand-ink drop-shadow-glow-mint transition hover:-translate-y-0.5 hover:brightness-105 md:px-9"
          >
            <img
              src="/images/beranda/cta-icon.svg"
              alt=""
              aria-hidden="true"
              width="18.7938"
              height="18.8162"
              class="shrink-0"
            />
            Diskusikan Kebutuhan Rumah Sakit Anda Sekarang
          </NuxtLink>

          <ul
            class="flex flex-col items-center gap-3 border-t-[1.125px] border-white/10 pt-7 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-[27px]"
          >
            <li
              v-for="perk in perks"
              :key="perk"
              class="inline-flex items-center gap-[9px] text-[12.375px] font-semibold leading-[15.75px] tracking-[0.5px] text-periwinkle"
            >
              <img
                src="/images/beranda/cta-check.svg"
                alt=""
                aria-hidden="true"
                width="16.875"
                height="16.875"
              />
              {{ perk }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
