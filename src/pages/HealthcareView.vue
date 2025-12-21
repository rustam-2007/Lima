<template>
  <div class="px-8 py-8">
    <n-breadcrumb separator=">">
      <n-breadcrumb-item>
        <n-icon><MdCash /></n-icon> Home
      </n-breadcrumb-item>
      <n-breadcrumb-item>
        <n-icon><MdCash /></n-icon> Account
        <template #separator> ~ </template>
      </n-breadcrumb-item>
      <n-breadcrumb-item>
        <n-icon><MdCash /></n-icon> Category
      </n-breadcrumb-item>
    </n-breadcrumb>



    <n-form ref="formRef" :model="formValue">
      <n-form-item>
        <n-input v-model:value="formValue.user.name" placeholder="search" />
      </n-form-item>
    </n-form>

    <n-card
      v-for="user in usersStore.users"
      :key="user.id"
      :title="user.firstName + ' ' + user.lastName"
      hoverable
      class="mb-4"
      @click="goToDetail(user.id)"
    >
      <template #header-extra>
        <n-icon
          size="22"
          style="cursor: pointer"
          @click.stop="toggleCard(user.id)"
        >
          <svg
            viewBox="0 0 512 512"
            :style="{ transform: isOpen(user.id) ? 'rotate(90deg)' : 'rotate(0deg)' }"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M184 112l144 144-144 144"
            />
          </svg>
        </n-icon>
      </template>

      <div v-show="isOpen(user.id)" class="user-details flex flex-col gap-2">
        <div><span>First name:</span> {{ user.firstName }}</div>
        <div><span>Last name:</span> {{ user.lastName }}</div>
        <div><span>Email:</span> {{ user.email }}</div>
        <div><span>Phone:</span> {{ user.phone }}</div>
        <div><span>Height:</span> {{ user.height }}</div>
        <div><span>Weight:</span> {{ user.weight }}</div>
      </div>
    </n-card>
  </div>
</template>

<script setup>


import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUsersStore } from '@/stores/usersStore.js'


import {
  NForm,
  NFormItem,
  NInput,
  NBreadcrumb,
  NBreadcrumbItem,
  NCard,
  NIcon,
  NButton
} from 'naive-ui'


/* store */
const usersStore = useUsersStore()

/* router */
const router = useRouter()
const goToDetail = (id) => {
  router.push({
    name: 'detailpage',
    params: { id }
  })
}

/* card toggle */
const openIds = ref([])
const toggleCard = (id) => {
  if (openIds.value.includes(id)) {
    openIds.value = openIds.value.filter(i => i !== id)
  } else {
    openIds.value.push(id)
  }
}
const isOpen = (id) => openIds.value.includes(id)

/* form */
const formRef = ref(null)
const formValue = ref({
  user: { name: '' }
})

onMounted(() => {
  usersStore.fetchUsers()
})
</script>

<style scoped>
/* === SENING STYLE'LARING — O‘ZGARTIRILMAGAN === */

.n-breadcrumb {
  margin-bottom: 16px;
}

.n-form {
  max-width: 300px;
}

.n-card {
  width: 300px;
  border-radius: 12px;
  transition: all 0.25s ease;
  cursor: pointer;
}

.n-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

:deep(.n-card-header__main) {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
}

svg {
  transition: transform 0.25s ease;
}

.user-details {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #e5e7eb;
}

.user-details div {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  line-height: 1.6;
  color: #374151;
}

.user-details span {
  font-weight: 500;
  color: #6b7280;
}

.px-8 {
  display: block;
}

.n-card {
  width: 280px;
  margin: 12px;
  display: inline-block;
  vertical-align: top;
}

.n-card {
  max-width: 300px;
  margin-bottom: 20px;
}
</style>
