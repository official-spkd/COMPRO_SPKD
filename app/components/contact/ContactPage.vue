<script setup lang="ts">
import { solutionKeys } from '~/data/solusi'

const route = useRoute()
const config = useRuntimeConfig()

// solution_key otomatis dari query (?solution_key=...), divalidasi dulu
const selectedSolutionKey = computed(() => {
  const raw = route.query.solution_key
  const key = String(Array.isArray(raw) ? raw[0] : raw ?? '').trim()
  return solutionKeys.includes(key) ? key : ''
})

const isSubmitting = ref(false)
const errorMessage = ref('')
const turnstileToken = ref('')
const turnstileEl = ref<HTMLElement | null>(null)
let turnstileWidgetId: string | undefined
let turnstileTimer: ReturnType<typeof setInterval> | undefined

useHead({
  script: [
    {
      src: 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit',
      async: true,
      defer: true,
    },
  ],
})

onMounted(() => {
  turnstileTimer = setInterval(() => {
    const turnstile = (window as any).turnstile
    if (!turnstile || !turnstileEl.value) return
    clearInterval(turnstileTimer)
    turnstileWidgetId = turnstile.render(turnstileEl.value, {
      sitekey: config.public.turnstileSiteKey,
      callback: (token: string) => (turnstileToken.value = token),
      'expired-callback': () => (turnstileToken.value = ''),
      'error-callback': () => (turnstileToken.value = ''),
    })
  }, 200)
})

onBeforeUnmount(() => {
  if (turnstileTimer) clearInterval(turnstileTimer)
})

async function handleSubmit(event: Event) {
  if (isSubmitting.value) return

  if (!turnstileToken.value) {
    errorMessage.value = 'Selesaikan verifikasi keamanan terlebih dahulu.'
    return
  }

  const formData = new FormData(event.target as HTMLFormElement)
  const field = (key: string) => String(formData.get(key) ?? '').trim()

  const payload = {
    solution_key: selectedSolutionKey.value,
    name: field('name'),
    email: field('email'),
    phone: field('phone'),
    role: field('role'),
    institution: field('institution'),
    message: field('message'),
    turnstile_token: turnstileToken.value,
  }

  isSubmitting.value = true
  errorMessage.value = ''

  try {
    await $fetch(`${config.public.apiBase}/discussion-requests`, {
      method: 'POST',
      body: payload,
    })
    await navigateTo('/terimakasih')
  } catch (error: any) {
    const errors = error?.data?.errors as Record<string, string[]> | undefined
    console.error('Status:', error?.statusCode, 'Data:', JSON.stringify(error?.data, null, 2))
    errorMessage.value = errors
      ? Object.values(errors).flat().join(' ')
      : error?.data?.message || 'Permohonan gagal dikirim. Silakan coba lagi.'
    turnstileToken.value = ''
    ;(window as any).turnstile?.reset(turnstileWidgetId)
  } finally {
    isSubmitting.value = false
  }
}

function validatePhone(event: Event) {
  
  const input = event.target as HTMLInputElement
  const value = input.value.trim()

  if (!value) {
    input.setCustomValidity('')
    return
  }

  const normalized = value.replace(/[\s().-]/g, '')
  const nationalNumber = normalized.startsWith('+62')
    ? `0${normalized.slice(3)}`
    : normalized.startsWith('62')
      ? `0${normalized.slice(2)}`
      : normalized
  const isValid = /^08[1-9]\d{7,10}$/.test(nationalNumber)

  input.setCustomValidity(
    isValid
      ? ''
      : 'Masukkan nomor ponsel yang valid.',
  )
}
</script>

<template>
  <div class="bg-surface-mint text-navy-dark">
    <section>
      <div
        class="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 pb-10 pt-14 sm:px-8 lg:flex-row lg:items-end lg:gap-[70px] lg:px-[72px] lg:pb-[60px] lg:pt-20"
      >
        <div class="hero-enter flex flex-1 flex-col gap-5 font-bold">
          <p class="text-sm leading-[1.65] text-brand-strong">Jadwalkan demo</p>
          <h1 class="text-4xl leading-[1.18] text-heading-dark md:text-5xl lg:text-[58px]">
            Lihat cara kerja SPKD untuk rumah sakit Anda.
          </h1>
        </div>

        <div class="hero-media flex flex-1 flex-col gap-[18px]">
          <p class="text-lg leading-[1.7] text-ink-cool">
            Ceritakan kebutuhan Anda. Kami siapkan demo yang relevan dan menghubungi Anda untuk
            mengatur jadwal.
          </p>
          <p class="flex items-center gap-2.5 text-[13px] text-success">
            <img src="/images/kontak/indicator.svg" alt="" aria-hidden="true" width="8" height="8" />
            Respons dalam 1×24 jam kerja
          </p>
        </div>
      </div>
    </section>

    <section
      id="kontak"
      class="mx-auto flex max-w-[1440px] flex-col gap-[34px] px-5 pb-16 pt-2 sm:px-8 lg:flex-row lg:items-start lg:px-[72px] lg:pb-24 lg:pt-[25px]"
    >
      <form
        v-reveal
        class="flex flex-1 flex-col gap-[26px] rounded-[28px] bg-white p-6 shadow-[0_16px_40px_rgba(10,41,66,0.08)] md:rounded-[40px] md:p-10"
        @submit.prevent="handleSubmit"
      >
        <div class="flex flex-col gap-[9px]">
          <h2 class="text-[26px] md:text-[31px]">Permohonan diskusi</h2>
          <p class="text-sm text-ink-cool">
            Kolom bertanda <span class="text-brand-alt">*</span> wajib diisi agar kami dapat
            menghubungkan Anda dengan tim yang tepat.
          </p>
        </div>

        <div class="grid gap-[26px] sm:grid-cols-2 sm:gap-[18px]">
          <label class="flex flex-col gap-[9px] text-[13px]">
            <span>Nama Lengkap <b aria-hidden="true" class="font-normal text-brand-alt">*</b></span>
            <input
              name="name"
              type="text"
              placeholder="Nama Anda"
              autocomplete="name"
              required
              class="contact-input"
            />
          </label>
          <label class="flex flex-col gap-[9px] text-[13px]">
            <span>Institusi / RS / Klinik <b aria-hidden="true" class="font-normal text-brand-alt">*</b></span>
            <input
              name="institution"
              type="text"
              placeholder="Nama institusi"
              required
              class="contact-input"
            />
          </label>
        </div>

        <div class="grid gap-[26px] sm:grid-cols-2 sm:gap-[18px]">
          <label class="flex flex-col gap-[9px] text-[13px]">
            <span>Jabatan</span>
            <input
              name="role"
              type="text"
              placeholder="Jabatan Anda"
              autocomplete="organization-title"
              class="contact-input"
            />
          </label>
          <label class="flex flex-col gap-[9px] text-[13px]">
            <span>Email Resmi <b aria-hidden="true" class="font-normal text-brand-alt">*</b></span>
            <input
              name="email"
              type="email"
              placeholder="nama@institusi.go.id"
              autocomplete="email"
              required
              class="contact-input"
            />
          </label>
        </div>

        <label class="flex flex-col gap-[9px] text-[13px]">
          <span>Telepon / WhatsApp <b aria-hidden="true" class="font-normal text-brand-alt">*</b></span>
          <input
            name="phone"
            type="tel"
            placeholder="+62 8xx xxxx xxxx"
            autocomplete="tel"
            required
            class="contact-input"
            @input="validatePhone"
          />
        </label>

        <label class="flex flex-col gap-[9px] text-[13px]">
          <span>Kebutuhan Solusi / Pesan <b aria-hidden="true" class="font-normal text-brand-alt">*</b></span>
          <textarea
            name="message"
            placeholder="Ceritakan tantangan, prioritas, atau solusi yang ingin didiskusikan…"
            rows="5"
            required
            class="contact-input h-[132px] resize-y py-4"
          />
        </label>

        <div ref="turnstileEl" />
        <p v-if="errorMessage" role="alert" class="text-sm text-danger">{{ errorMessage }}</p>

        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p class="max-w-[350px] text-[11px] leading-[1.5] text-steel">
            Dengan mengirim formulir, Anda menyetujui pemrosesan data untuk keperluan tindak lanjut
            permohonan.
          </p>
          <button
            type="submit"
            :disabled="isSubmitting"
            class="bg-gradient-ocean inline-flex h-[54px] shrink-0 items-center justify-center gap-3 rounded-full border border-brand-alt px-6 text-sm text-white transition enabled:hover:-translate-y-0.5 enabled:hover:brightness-110 disabled:cursor-wait disabled:opacity-70"
          >
            {{ isSubmitting ? 'Mengirim...' : 'Kirim Permohonan Diskusi' }}
            <img src="/images/kontak/arrow-up-right.svg" alt="" aria-hidden="true" width="17" height="17" />
          </button>
        </div>
      </form>

      <aside class="flex flex-col gap-5 lg:w-[390px] lg:shrink-0" aria-label="Informasi kontak SPKD">
        <section
          v-reveal="1"
          class="flex flex-col gap-[26px] rounded-[28px] bg-gradient-to-r from-night-from via-night via-[18.27%] to-night-to p-[30px]"
        >
          <div class="flex flex-col gap-2">
            <p class="text-[11px] font-bold uppercase text-brand-alt">PT SPKD</p>
            <h2 class="text-[26px] leading-[1.3] text-white">PT Sistem Pelayanan Kesehatan dan Data</h2>
          </div>
          <hr class="border-0 border-t border-navy-line" />
          <dl class="flex flex-col gap-[18px] text-white">
            <div class="flex flex-col gap-[5px]">
              <dt class="text-[11px] font-bold text-brand-alt">Email</dt>
              <dd class="text-sm leading-[1.5]">
                <a href="mailto:halo@spkd.co.id" class="transition-colors hover:text-mint-pale">halo@spkd.co.id</a>
              </dd>
            </div>
            <div class="flex flex-col gap-[5px]">
              <dt class="text-[11px] font-bold text-brand-alt">Telepon</dt>
              <dd class="text-sm leading-[1.5]">
                <a href="tel:+622150882026" class="transition-colors hover:text-mint-pale">+62 21 5088 2026</a>
              </dd>
            </div>
            <div class="flex flex-col gap-[5px]">
              <dt class="text-[11px] font-bold text-brand-alt">Jam kerja</dt>
              <dd class="text-sm leading-[1.5]">Senin–Jumat, 08.30–17.30 WIB</dd>
            </div>
            <div class="flex flex-col gap-[5px]">
              <dt class="text-[11px] font-bold text-brand-alt">Lokasi</dt>
              <dd class="text-sm leading-[1.5]">Jakarta, Indonesia</dd>
            </div>
          </dl>
        </section>

        <section v-reveal="2" class="flex flex-col gap-4 rounded-[28px] bg-tint-mint p-7">
          <img src="/images/kontak/clock.svg" alt="" aria-hidden="true" width="28" height="28" />
          <h2 class="text-[23px]">Apa yang terjadi setelah Anda mengirim?</h2>
          <p class="text-[13px] leading-[1.65] text-ink-cool">
            Tim kami meninjau kebutuhan, menunjuk spesialis yang relevan, lalu menghubungi Anda
            dalam 1×24 jam kerja untuk mengatur diskusi awal.
          </p>
        </section>
      </aside>
    </section>
  </div>
</template>
