<script setup>
import { RouterView } from 'vue-router'
import { ref, provide } from 'vue'
import { darkTheme, NConfigProvider, NSwitch } from 'naive-ui'

// Global dark/light toggle holati
const isDark = ref(false)

// Boshqa componentlar (masalan, LeftSidebar) foydalanishi uchun
provide('isDark', isDark)
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : null">
    <!-- Dark/Light switch global joyda -->
    <div style="padding: 10px">
      <n-switch v-model:value="isDark">
        {{ isDark ? 'Dark Mode' : 'Light Mode' }}
      </n-switch>
    </div>

    <!-- Sidebar RouterView -->
    <RouterView name="LeftSidebar" />
  </n-config-provider>
</template>
