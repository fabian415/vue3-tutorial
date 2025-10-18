<template>
  <div class="login-container">
    <h1>Login Page</h1>
    <form class="login-form">
      <label for="username">Username</label>
      <input type="text" id="username" placeholder="Enter your username" />

      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password" />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f0f2f5;
  font-family: Arial, sans-serif;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

.login-form {
  background: #fff;
  padding: 30px 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
}

.login-form label {
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
}

.login-form input {
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border 0.3s;
}

.login-form input:focus {
  border-color: #007bff;
  outline: none;
}

.login-form button {
  padding: 10px;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.login-form button:hover {
  background-color: #0056b3;
}
</style>
