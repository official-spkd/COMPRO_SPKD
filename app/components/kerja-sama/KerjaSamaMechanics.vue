<script setup lang="ts">
const partners = [
  { number: '01', title: 'Rumah Sakit', description: 'Pemilik kebutuhan & penerima manfaat', tone: 'teal' },
  { number: '02', title: 'PT SPKD', description: 'Teknologi, implementasi & pendampingan', tone: 'coral' },
  { number: '03', title: 'Mitra Perbankan', description: 'Struktur pembiayaan melalui lembaga perbankan', tone: 'white' },
]
</script>

<template>
  <section class="partnership-section partnership-mechanics">
    <div v-reveal class="partnership-mechanics-copy">
      <p class="partnership-eyebrow partnership-eyebrow-light">Cara kerja kemitraan</p>
      <h2>Risiko dibagi. Hasil ditumbuhkan bersama.</h2>
      <p>
        SPKD menyediakan teknologi, implementasi, tenaga ahli, dan pendampingan on-site.
        Rumah sakit memberi arah prioritas, champion, serta komitmen perubahan. Mitra perbankan
        mendukung struktur pembiayaan.
      </p>
    </div>
    <div class="partnership-roles">
      <article v-for="(partner, i) in partners" :key="partner.number" v-reveal="i" class="partnership-role">
        <span :class="['partnership-role-number', `is-${partner.tone}`]">{{ partner.number }}</span>
        <div>
          <h3>{{ partner.title }}</h3>
          <p>{{ partner.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>