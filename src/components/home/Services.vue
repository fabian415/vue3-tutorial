<template>
  <div class="services-page">
    <h1>Our Services</h1>
    <section class="service-list">
      <div class="service-item">
        <h2>Web Development</h2>
        <p>
          We offer top-notch web development services, from front-end design to back-end implementation, ensuring that your website performs flawlessly.
        </p>
      </div>
      <div class="service-item">
        <h2>Mobile App Development</h2>
        <p>
          Our mobile app development services cater to both iOS and Android platforms, creating seamless experiences for users across devices.
        </p>
      </div>
      <div class="service-item">
        <h2>SEO Optimization</h2>
        <p>
          With our SEO expertise, we help improve your website's visibility on search engines, ensuring higher traffic and better rankings.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
// 可以加入更多的邏輯或數據
</script>

<style scoped>
.services-page {
  padding: 20px;
  background-color: #f9f9f9;
  font-family: 'Arial', sans-serif;
}

h1 {
  text-align: center;
  color: #333;
}

.service-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.service-item {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #007bff;
}

p {
  color: #555;
  line-height: 1.6;
}
</style>
