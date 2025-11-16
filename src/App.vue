<script setup>
import { RouterView } from 'vue-router'
import { ref, provide } from 'vue'
import { darkTheme, NConfigProvider } from 'naive-ui'

// Dark mode
const isDark = ref(false)
provide('isDark', isDark)
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : null">

    <div class="layout">

      <!-- Chap Sidebar -->
      <RouterView name="LeftSidebar" />

      <!-- O'ng qism (Navbar + Content) -->
      <div class="right">

        <!-- 🔵 Top Navbar (routerdan keladi) -->
        <router-view name="TopNavbar" />

        <!-- 🔵 Asosiy Content -->
        <div class="content">
          <RouterView />
        </div>

      </div>

    </div>

  </n-config-provider>
</template>

<style scoped>
.layout {
  display: flex;
  width: 100%;
  height: 100vh;
}

.right {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
}
</style>
