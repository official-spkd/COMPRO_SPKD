<script setup lang="ts">
defineProps<{ items: { id: string; label: string }[] }>()
</script>

<template>
  <nav aria-label="Dalam artikel ini" class="rounded-2xl bg-surface-gray p-5">
    <p class="text-xs font-semibold text-heading-dark">Dalam artikel ini</p>
    <ul class="mt-3 space-y-2.5">
      <li v-for="item in items" :key="item.id">
        <a :href="`#${item.id}`" class="text-xs text-body transition hover:text-brand-deep">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>