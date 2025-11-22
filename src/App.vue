<script setup>
import { RouterView } from 'vue-router'
import { ref, provide } from 'vue'
import { darkTheme, NConfigProvider } from 'naive-ui'

const isDark = ref(false)
provide('isDark', isDark)

const darkThemeOverrides = {
  common: {
    backgroundColor: '#1f2937', // тёмный фон
    textColor1: '#ffffff',
  },
}

// Глобальные кастомные стили для Input и Tabs
const themeOverrides = {
  Input: {
    borderHover: '1px solid #4f46e5',
    borderActive: '1px solid #22c55e',
    boxShadowActive: '0 0 0 2px rgba(34,197,94,0.3)',
    caretColor: '#22c55e',
    colorFocus: '#22c55e',
  },
  Tabs: {
    tabTextColor: '#000',
    tabTextColorActive: '#22c55e',
    tabBorder: '1px solid #e5e7eb',
    tabBorderActive: '1px solid #22c55e',
  },
}
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : null" :theme-overrides="themeOverrides">
    <n-layout>
      <div class="layout">
        <!-- Левый Sidebar -->
        <RouterView name="LeftSidebar" />

        <div class="right">
          <!-- Navbar -->
          <RouterView name="TopNavbar" />

          <!-- Основной контент -->
          <div class="content">
            <RouterView />
          </div>
        </div>
      </div>
    </n-layout>
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
