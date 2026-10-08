<script setup lang="ts">
const questions = [
  { topic: 'RME', text: 'Apakah semua unit layanan sudah mencatat di rekam medis elektronik?' },
  { topic: 'SATUSEHAT', text: 'Apakah RME rumah sakit sudah terhubung ke SATUSEHAT?' },
  {
    topic: 'Klaim',
    text: 'Apakah klaim diperiksa koding dan kelengkapannya sebelum diajukan ke BPJS?',
  },
  {
    topic: 'Selisih tarif',
    text: 'Apakah selisih tarif pasien dengan asuransi kedua ditagih secara rutin?',
  },
  { topic: 'Clinical pathway', text: 'Apakah kepatuhan clinical pathway diukur secara berkala?' },
]

// Skor: Ya = 2, Sebagian = 1, Belum = 0
const options = [
  { label: 'Ya', score: 2 },
  { label: 'Sebagian', score: 1 },
  { label: 'Belum', score: 0 },
]

// Total 0–4 = A, 5–7 = B, 8–10 = C
const results = [
  {
    min: 0,
    title: 'Saatnya membangun fondasi',
    body: 'Mulailah dari pencatatan. RME yang lengkap adalah dasar klaim yang tepat. Produk yang relevan: SIMRS',
  },
  {
    min: 5,
    title: 'Fondasi sudah ada, saatnya dirapikan',
    body: 'Pencatatan sudah berjalan. Langkah berikutnya: memeriksa klaim sebelum diajukan dan menagih selisih tarif. Produk yang relevan: MedClaim, MedPay.',
  },
  {
    min: 8,
    title: 'Siap dioptimalkan',
    body: 'Data Anda sudah kuat. Gunakan untuk mengukur mutu dan kesiapan kredensial. Produk yang relevan: MedPath, MedCredix.',
  },
]

// Jawaban hanya disimpan di memori halaman, tidak dikirim ke mana pun
const answers = ref<(number | null)[]>(questions.map(() => null))
const current = ref(0)
const finished = ref(false)

const isLast = computed(() => current.value === questions.length - 1)
const answered = computed(() => answers.value[current.value] !== null)

const result = computed(() => {
  const total = answers.value.reduce<number>((sum, a) => sum + (a ?? 0), 0)
  return [...results].reverse().find((r) => total >= r.min)!
})

// Fokus dipindah ke pertanyaan/hasil baru setelah transisinya selesai
const focusTarget = ref<HTMLElement>()
const focusPanel = () => focusTarget.value?.focus()

const prev = () => {
  if (current.value > 0) current.value--
}

const next = () => {
  if (!answered.value) return
  if (isLast.value) finished.value = true
  else current.value++
}

const restart = () => {
  answers.value = questions.map(() => null)
  current.value = 0
  finished.value = false
}
</script>

<template>
  <section id="cek-kesiapan" class="scroll-mt-24 bg-tint-aqua">
    <div
      class="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-14 sm:px-8 lg:px-40 lg:py-[88px]"
    >
      <div v-reveal class="max-w-[940px]">
        <p class="text-[13px] font-semibold leading-[1.6] text-accent">Cek kesiapan</p>
        <h2 class="mt-[1.6em] text-3xl font-semibold leading-[1.2] text-heading md:text-[40px]">
          Seberapa siap rumah sakit Anda untuk No ERM, No Claim?
        </h2>
        <p class="mt-8 text-lg leading-[1.6] text-body md:mt-16">
          Jawab 5 pertanyaan singkat. Kurang dari 1 menit.
        </p>
      </div>

      <div v-reveal class="flex flex-col gap-4">
        <div
          class="rounded-3xl border border-line-teal bg-white p-6 shadow-card md:p-10"
        >
          <!-- Penanda langkah: satu chip per pertanyaan -->
          <ol class="flex flex-wrap gap-3" aria-label="Langkah cek kesiapan">
            <li
              v-for="(q, i) in questions"
              :key="q.topic"
              class="inline-flex items-center gap-1.5 rounded-full border px-3 py-[7px] text-xs font-medium transition-colors"
              :class="
                !finished && i === current
                  ? 'border-brand-deep bg-brand-deep text-white'
                  : 'border-line-teal bg-tint-aqua text-brand-deep'
              "
              :aria-current="!finished && i === current ? 'step' : undefined"
            >
              <Icon v-if="answers[i] !== null && (finished || i !== current)" name="lucide:check" class="size-3.5" />
              {{ q.topic }}
            </li>
          </ol>

          <div>
            <Transition
              mode="out-in"
              @after-enter="focusPanel"
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="translate-y-2 opacity-0"
              leave-active-class="transition duration-150 ease-in"
              leave-to-class="opacity-0"
            >
              <!-- Pertanyaan -->
              <fieldset v-if="!finished" :key="current" class="mt-8">
                <legend
                  ref="focusTarget"
                  tabindex="-1"
                  class="outline-none"
                >
                  <span class="block text-[13px] font-semibold leading-[1.6] text-accent">
                    Pertanyaan {{ current + 1 }}
                    <span class="font-normal text-body">dari {{ questions.length }}</span>
                  </span>
                  <span class="mt-2 block text-xl font-semibold leading-[1.4] text-heading md:text-[23px]">
                    {{ questions[current]!.text }}
                  </span>
                </legend>

                <div class="mt-6 grid gap-3 sm:grid-cols-3">
                  <label
                    v-for="opt in options"
                    :key="opt.label"
                    class="flex cursor-pointer items-center gap-3 rounded-xl border px-5 py-4 text-[15px] font-semibold transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand"
                    :class="
                      answers[current] === opt.score
                        ? 'border-brand-deep bg-tint-aqua text-brand-deep'
                        : 'border-line text-heading hover:border-accent'
                    "
                  >
                    <input
                      v-model="answers[current]"
                      type="radio"
                      :name="`cek-${current}`"
                      :value="opt.score"
                      class="size-4 accent-brand-deep"
                    />
                    {{ opt.label }}
                  </label>
                </div>

                <div class="mt-8 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    class="inline-flex items-center rounded-xl border border-line px-[22px] py-[15px] text-[15px] font-semibold text-heading transition hover:border-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line"
                    :disabled="current === 0"
                    @click="prev"
                  >
                    Sebelumnya
                  </button>
                  <button
                    type="button"
                    class="btn-gradient inline-flex items-center rounded-xl px-[22px] py-4 text-[15px] font-semibold text-white transition enabled:hover:-translate-y-0.5 enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
                    :disabled="!answered"
                    @click="next"
                  >
                    {{ isLast ? 'Lihat hasil' : 'Berikutnya' }}&nbsp;&nbsp;&nbsp;→
                  </button>
                </div>
              </fieldset>

              <!-- Hasil -->
              <div v-else key="hasil" class="mt-8">
                <p class="text-[13px] font-semibold leading-[1.6] text-accent">Hasil cek</p>
                <h3
                  ref="focusTarget"
                  tabindex="-1"
                  class="mt-2 text-2xl font-semibold leading-[1.3] text-heading outline-none md:text-[32px]"
                >
                  {{ result.title }}
                </h3>
                <p class="mt-4 max-w-[720px] text-lg leading-[1.6] text-body">{{ result.body }}</p>
                <div class="mt-8 flex flex-wrap items-center gap-3">
                  <NuxtLink
                    to="/kontak"
                    class="btn-gradient inline-flex items-center rounded-xl px-[22px] py-[17px] text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110"
                  >
                    Diskusikan hasil ini dengan tim kami&nbsp;&nbsp;&nbsp;↗
                  </NuxtLink>
                  <button
                    type="button"
                    class="inline-flex items-center rounded-xl border border-line px-[22px] py-4 text-[15px] font-semibold text-heading transition hover:border-accent"
                    @click="restart"
                  >
                    Ulangi cek
                  </button>
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <p class="text-[13px] leading-[1.6] text-body">
          Hasil ini gambaran awal, bukan penilaian resmi. Jawaban Anda tidak kami simpan.
        </p>
      </div>
    </div>
  </section>
</template>
