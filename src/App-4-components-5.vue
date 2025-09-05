<template>
  <Children />
</template>

<script setup>
import { provide, reactive, readonly } from "vue";
import Children from './components/Children.vue';

const states = reactive({
    name: "James",
    old: 75
});
const handleAfterBirthday = () => {
    states.old = states.old + 1
};
provide("grandpaStates", readonly(states));
provide("grandpaDispatch", { handleAfterBirthday });
</script>

<style scoped></style>
