<script setup>
import { inject, ref } from 'vue'
import { NInput, NSwitch } from 'naive-ui'



const isDark = inject('isDark') // ref
const value = ref('')
</script>

<template>
  <nav class="navbar">
    <div class="logo">MyApp</div>

    <div class="search">
      <n-input v-model:value="value" placeholder="Поиск..." />
    </div>

    <div class="actions">
      <n-switch v-model:value="isDark" />
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 16px;
  border-bottom: 1px solid var(--border-color, #e0e0e0);
}

.logo {
  font-size: 20px;
  font-weight: 600;
}

.search {
  width: 25%;
}

.actions {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
