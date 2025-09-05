<template>
  <p>first name：<input type="text" v-model="firstName" /></p>
  <p>last name：<input type="text" v-model="lastName" /></p>
  <p>full name：<input type="text" v-model="fullName" /></p>
</template>

<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
</script>

<style scoped></style>
