<template>
<MouseTracker v-slot="key">
    <!-- slot content START -->
  	Mouse is at: 
    <table>
        <thead>
            <tr><td>X</td><td>Y</td></tr>
        </thead>
        <tbody>
            <tr><td>{{ key.x }}</td><td>{{ key.y }}</td></tr>
        </tbody>
    </table>
    <!-- slot content END -->
</MouseTracker>
</template>

<script setup>
import MouseTracker from './components/MouseTracker.vue'
</script>

<style scoped>
table {
    border-collapse: collapse;
    border-spacing: 0;
}
tr, td {
   border: 1px solid black; 
   text-align: center;
}
td {
    min-width: 40px;
}
</style>