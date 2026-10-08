<script setup lang="ts">
type Partner = {
  key: string
  label: string
  as: string // dipakai di tombol: "Ajukan kerja sama sebagai …"
  work: string
  relevantLabel: string
  relevant: string
}

const partners: Partner[] = [
  {
    key: 'rumah-sakit',
    label: 'Rumah sakit',
    as: 'rumah sakit',
    work: 'Digitalisasi pelayanan, optimalisasi klaim, mutu, dan kredensial.',
    relevantLabel: 'Produk yang relevan',
    relevant: 'Semua produk',
  },
  {
    key: 'puskesmas',
    label: 'Puskesmas',
    as: 'puskesmas',
    work: 'Pencatatan RME dan pengiriman data ke SATUSEHAT.',
    relevantLabel: 'Produk yang relevan',
    relevant: 'SIMRS [konfirmasi versi puskesmas]',
  },
  {
    key: 'klinik',
    label: 'Klinik',
    as: 'klinik',
    work: 'Pencatatan RME dan klaim BPJS yang rapi.',
    relevantLabel: 'Produk yang relevan',
    relevant: 'SIMRS, MedClaim',
  },
  {
    key: 'dinas-kesehatan',
    label: 'Dinas kesehatan',
    as: 'dinas kesehatan',
    work: 'Program digitalisasi faskes satu wilayah dan pemantauan lintas fasilitas.',
    relevantLabel: 'Produk yang relevan',
    relevant: 'Paket jejaring, panel MedCredix',
  },
  {
    key: 'perbankan',
    label: 'Perbankan',
    as: 'mitra perbankan',
    work: 'Struktur pembiayaan untuk transformasi digital fasilitas kesehatan.',
    relevantLabel: 'Produk yang relevan',
    relevant: 'Skema KSO',
  },
  {
    key: 'asuransi',
    label: 'Asuransi',
    as: 'perusahaan asuransi',
    work: 'Penagihan selisih tarif yang transparan dan terstandar untuk peserta JKN.',
    relevantLabel: 'Produk yang relevan',
    relevant: 'MedPay',
  },
  {
    key: 'mitra-teknologi',
    label: 'Mitra teknologi',
    as: 'mitra teknologi',
    work: 'Integrasi data agar fasilitas kesehatan bisa memakai produk analitik SPKD.',
    relevantLabel: 'Produk yang relevan',
    relevant: 'MedClaim, MedCredix, MedPath',
  },
]

const activeIndex = ref(partners.findIndex((p) => p.key === 'puskesmas'))
const active = computed(() => partners[activeIndex.value]!)

// Navigasi tab dengan panah kiri/kanan, Home, End
const tabRefs = ref<HTMLButtonElement[]>([])
const onKeydown = (e: KeyboardEvent) => {
  const last = partners.length - 1
  const next =
    e.key === 'ArrowRight' ? (activeIndex.value === last ? 0 : activeIndex.value + 1)
    : e.key === 'ArrowLeft' ? (activeIndex.value === 0 ? last : activeIndex.value - 1)
    : e.key === 'Home' ? 0
    : e.key === 'End' ? last
    : null
  if (next === null) return
  e.preventDefault()
  activeIndex.value = next
  tabRefs.value[next]?.focus()
}
</script>

<template>
  <section class="bg-white">
    <div class="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-14 sm:px-8 lg:px-40 lg:py-[68px]">
      <h2 v-reveal class="text-3xl font-bold leading-[1.25] text-heading-dark md:text-[39px]">
        Siapa yang bisa bermitra
      </h2>

      <div
        role="tablist"
        aria-label="Kategori mitra"
        class="flex flex-wrap gap-2.5 pb-6 pt-[15px]"
        @keydown="onKeydown"
      >
        <button
          v-for="(p, i) in partners"
          :id="`mitra-tab-${p.key}`"
          :key="p.key"
          ref="tabRefs"
          type="button"
          role="tab"
          :aria-selected="i === activeIndex"
          aria-controls="mitra-panel"
          :tabindex="i === activeIndex ? 0 : -1"
          class="rounded-full px-[17px] py-[8.5px] text-[14.7px] font-bold leading-[22px] transition"
          :class="
            i === activeIndex
              ? 'bg-gradient-ocean border border-transparent text-white'
              : 'border border-line bg-white text-heading-dark hover:border-accent'
          "
          @click="activeIndex = i"
        >
          {{ p.label }}
        </button>
      </div>

      <div
        id="mitra-panel"
        role="tabpanel"
        :aria-labelledby="`mitra-tab-${active.key}`"
        class="w-full max-w-[744px] rounded-[39px] rounded-bl-xl rounded-tr-xl border border-line bg-white p-7 text-[15.9px] leading-[24.5px] text-heading-dark md:p-[39px]"
      >
        <Transition
          mode="out-in"
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-1 opacity-0"
          leave-active-class="transition duration-100 ease-in"
          leave-to-class="opacity-0"
        >
          <div :key="active.key" class="flex flex-col items-start gap-6">
            <p><strong class="font-bold">Yang bisa kita kerjakan:</strong> {{ active.work }}</p>
            <p><strong class="font-bold">{{ active.relevantLabel }}:</strong> {{ active.relevant }}</p>
            <NuxtLink
              to="/kontak"
              class="bg-gradient-ocean inline-flex rounded-full px-[22px] py-[10px] text-[14.7px] font-bold leading-[22px] text-white transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Ajukan kerja sama sebagai {{ active.as }}
            </NuxtLink>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>
