<script setup lang="ts">
import { getSolution } from '~/data/solusi'

const route = useRoute()
const solution = getSolution(route.params.slug as string)

if (!solution) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Solusi tidak ditemukan',
    fatal: true,
  })
}
useSeoMeta({
  title: solution.name,
  description: solution.hero.desc,
  ogTitle: solution.name,
  ogDescription: solution.hero.desc,
  ogImage: solution.hero.image.src,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <SolusiSimrsErp v-if="solution?.slug === 'simrs-erp'" :solution-key="solution.solutionKey" />
  <SolusiMedclaim v-else-if="solution?.solutionKey === 'DEMOFORMEDCLAIM'" :solution-key="solution.solutionKey" />
  <SolusiMedcredix v-else-if="solution?.solutionKey === 'DEMOFORMEDCREDIX'" :solution-key="solution.solutionKey" />
  <div v-else-if="solution">
    <SolusiHero :data="solution.hero" :solution-key="solution.solutionKey" />
    <SolusiIntro :data="solution.intro" />
    <SolusiFeature :data="solution.features" />
    <SolusiImpact :data="solution.impact" />
    <SolusiFlow :data="solution.flow" />
    <SolusiCta :data="solution.cta" :solution-key="solution.solutionKey" />  </div>
</template>