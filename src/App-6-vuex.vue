<template>
    <h1>Vuex 狀態管理</h1>
    <div>   
        目前計數: {{ count }}
    </div>
    <div>
        <button @click="increment(5)">增加 5 (Mutation)</button>
        <button @click="decrement(2)">減少 2 (Mutation)</button>
        <button @click="random">隨機數字 (模擬 API) (Action)</button>  
    </div>
    <hr>
    <h1>具名模組 user</h1>
    <div>
        <p>Member name: {{ name }}</p>
        <input type="text" @keyup="setName($event.target.value)" :value="name">
    </div>
    <div>
        <p>Member age: {{ age }}</p>
        <button @click="setAge">年紀變更 (模擬 API) (Action)</button>  
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
console.log(store.state.user)
// vuex 狀態取值
const count = computed(() => store.getters.countState);
const name = computed(() => store.getters['user/nameState']);
const age = computed(() => store.getters['user/ageState']);

// vuex 狀態設值 (sync)
const increment = (number) => {
    store.commit('INCREMENT_COUNT', number)
};
const decrement = (number) => {
    store.commit('DECREMENT_COUNT', number)
};
const setName = (value) => {
    store.commit('user/SET_NAME', value)
};

// vuex 狀態設值 (async)
const random = () => {
    store.dispatch('setCount', 'my world!')
}
const setAge = () => {
    store.dispatch('user/setAge', 99)
};

</script>

<style scoped>
</style>