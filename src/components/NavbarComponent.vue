<script setup>
import { inject, ref } from 'vue'
import { NInput, NIcon, NSwitch, NDropdown, NAvatar } from 'naive-ui'
import { Search } from '@vicons/ionicons5'

// Global dark mode holatini App.vue dan olish
const isDark = inject('isDark')

// Profile dropdown menyusi
const options = [
  { label: 'Profil', key: 'profile' },
  { label: 'Sozlamalar', key: 'settings' },
  { label: 'Chiqish', key: 'logout' }
]

const handleSelect = (key) => {
  console.log('Dropdown tanlandi:', key)
}
</script>

<template>
  <div class="navbar">

    <!-- Logo yoki Title -->
    <div class="logo">
      <span>MyApp</span>
    </div>

    <!-- Qidiruv -->
    <div class="search">
      <n-input placeholder="Qidiruv..." clearable>
        <template #prefix>
          <n-icon size="18">
            <Search />
          </n-icon>
        </template>
      </n-input>
    </div>

    <!-- O'ng panel (switch + avatar) -->
    <div class="actions">
      <!-- Dark/Light Switch -->
      <n-switch v-model:value="isDark" />

    

    </div>

  </div>
</template>

<style scoped>
.navbar {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color, #e0e0e0);
}

.logo {
  font-size: 20px;
  font-weight: 600;
}

.search {
  width: 40%;
}

.actions {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
