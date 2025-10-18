<template>
    <h1>UserID: {{ userId }}</h1>
    <h3>Params: {{ route.params }}</h3>
    <h3>Query: {{ route.query }}</h3>
    <h3>User Information: </h3>
    <pre>{{ userInfo }}</pre>
</template>
<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
// 使用 useRoute 取得當前路由
const route = useRoute();
const userInfo = ref("");
// 從 route.params 中獲取 userId
const userId = computed(() => route.params.userId);
watch(userId, async (id, oldId) => {
    userInfo.value = await fetchUserInfo(id);
});

const fetchUserInfo = async (id) => {
    return await fetch("https://jsonplaceholder.typicode.com/users/" + id).then(res => res.json());
}
onMounted(async () => {
    userInfo.value = await fetchUserInfo(userId.value);
});
</script>
<style scoped>
</style>