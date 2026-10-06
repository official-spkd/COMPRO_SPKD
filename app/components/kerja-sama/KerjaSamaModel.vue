<script setup lang="ts">
const metrics = [
  { value: 'No', label: 'CapEx, tanpa belanja modal' },
  { value: 'No', label: 'OpEx, tanpa beban operasional' },
  { value: '5 th', label: 'Kontrak kerja sama' },
  { value: '100%', label: 'Aset menjadi milik rumah sakit' },
]
</script>

<template>
  <section id="model" class="partnership-section partnership-model">
    <div class="partnership-summary">
      <div v-reveal class="partnership-section-intro">
        <p class="partnership-eyebrow">Model berkelanjutan</p>
        <h2>Kapasitas digital sekarang, nilai aset untuk rumah sakit di masa depan.</h2>
        <p>
          Kolaborasi SPKD bersama mitra perbankan memungkinkan percepatan implementasi tanpa
          belanja modal dan tanpa biaya operasional tambahan.
        </p>
      </div>
      <div v-reveal="1" class="partnership-bank-badge">
        <small>Mitra pembiayaan</small>
        <strong>Perbankan</strong>
      </div>
    </div>
    <div class="partnership-metrics">
      <article v-for="(metric, i) in metrics" :key="metric.label" v-reveal="i" class="partnership-metric">
        <strong>{{ metric.value }}</strong>
        <p>{{ metric.label }}</p>
      </article>
    </div>
  </section>
</template>