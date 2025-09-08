<template>
  <BaseLayout>
    <template v-slot:header>
        <!-- slot content START -->
        <h1>Here might be a page title</h1>
        <!-- slot content END -->
    </template>

    <template #default>
        <!-- slot content START -->
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
        <!-- slot content END -->
    </template>

    <template #footer>
        <!-- slot content START -->
        <p>Here's some contact info</p>
        <!-- slot content END -->
    </template>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from './components/BaseLayout.vue'
</script>

<style scoped></style>