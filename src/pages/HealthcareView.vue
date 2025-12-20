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
    <n-form ref="formRef" :model="formValue" :rules="rules" :validate-messages="messages">
      <n-form-item label="" path="user.name">
        <n-input v-model:value="formValue.user.name" placeholder="Input Name" />
      </n-form-item>
      <n-form-item> </n-form-item>
    </n-form>

    <n-card
      :title="user.firstName + ' ' + user.lastName"
      hoverable
      v-for="user in usersStore.users"
      :key="user.id"
      class="mb-4 flex justify-content-wrap"
    >
      <template #header-extra>
        <n-icon size="22" style="cursor: pointer" @click="toggleCard(user.id)">
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

      <div v-show="isOpen(user.id)" class="user-details">
        <div><span>First name:</span> {{ user.firstName }}</div>
        <div><span>Last name:</span> {{ user.lastName }}</div>
        <div><span>Email:</span> {{ user.email }}</div>
        <div><span>Phone:</span> {{ user.phone }}</div>
        <div><span>Height:</span> {{ user.height }}</div>
        <div><span>Weight:</span> {{ user.weight }}</div>
        <div><span>Blood group:</span> {{ user.bloodGroup }}</div>

        <div><span>Address:</span> {{ user.address.address }}</div>
        <div><span>City:</span> {{ user.address.city }}</div>
        <div><span>State:</span> {{ user.address.state }}</div>
        <div><span>Postal code:</span> {{ user.address.postalCode }}</div>

        <div><span>Company:</span> {{ user.company.name }}</div>
        <div><span>Department:</span> {{ user.company.department }}</div>
        <div><span>Title:</span> {{ user.company.title }}</div>
        <div><span>Company address:</span> {{ user.company.address }}</div>
        <div><span>maiden Name:</span>{{ user.maidenName }}</div>
        <div><span>age:</span> {{ user.age }}</div>
        <div><span>gender:</span> {{ user.gender }}</div>
        <div><span>username:</span> {{ user.username }}</div>
        <div><span>birthDate:</span> {{ user.birthDate }}</div>
        <div><span>domain:</span> {{ user.domain }}</div>
        <div><span>ip:</span> {{ user.ip }}</div>
        <div><span>macAddress:</span> {{ user.macAddress }}</div>
        <div><span>university:</span> {{ user.university }}</div>
        <div><span>ein:</span> {{ user.ein }}</div>
        <div><span>ssn:</span> {{ user.ssn }}</div>
      </div>
    </n-card>
  </div>
</template>

<script setup>
const openIds = ref([])

const toggleCard = (id) => {
  if (openIds.value.includes(id)) {
    openIds.value = openIds.value.filter((i) => i !== id)
  } else {
    openIds.value.push(id)
  }
}

const isOpen = (id) => openIds.value.includes(id)

const active = ref('boln') // default tanlangan tab
const tab = ref('all')

import { NFormItem, NForm, NInput, NBreadcrumb, NCard, NIcon } from 'naive-ui'

const formRef = ref(null)
const formValue = ref({
  user: {
    name: '',
  },
})

const messages = {
  required: '%s is really really required',
}

const rules = {
  user: {
    name: {
      required: true,
      trigger: 'blur',
    },
  },
}

function handleValidateClick(e) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success('Valid')
    } else {
      console.log(errors)
      message.error('Invalid')
    }
  })
}
import { onMounted, ref } from 'vue'
import { useUsersStore } from '@/stores/usersStore.js'
const usersStore = useUsersStore()

const activeTab = ref('all')

onMounted(() => {
  usersStore.fetchUsers()
})
</script>
<style scoped>
.n-card {
  max-width: 300px;
  margin-bottom: 20px;
}
.custom-segment-tabs {
  display: inline-block;
  border: 2px dashed #1d7af3; /* tashqi punktir ramka */
  border-radius: 10px;
  padding: 0;
}

/* Naive UI ichki nav marginini olib tashlaymiz */
.custom-segment-tabs :deep(.n-tabs-nav) {
  margin: 0;
}

/* Segment fonini shaffof qilamiz */
.custom-segment-tabs :deep(.n-tabs-rail) {
  background-color: transparent;
}

/* Tablar eni va tekislash */
.custom-segment-tabs :deep(.n-tabs-tab) {
  min-width: 130px;
  justify-content: center;
  background: #ffffff;
}

/* Aktiv tab — ko‘k fon, oq matn */
.custom-segment-tabs :deep(.n-tabs-tab.n-tabs-tab--active) {
  background-color: #1d7af3;
  color: #ffffff;
}

.custom-segment-tabs :deep(.n-tabs-tab.n-tabs-tab--active .n-tabs-tab__label) {
  color: #ffffff;
}
.custom-tabs {
  border-radius: 30px;
  background: #fff;
  overflow: hidden;
  border: 1px solid #e5e7eb;
}

/* Passiv tab - qora matn + oq fon */
.custom-tabs :deep(.n-tabs-tab) {
  background: #ffffff;
  color: #111827;
  font-size: 18px;
  padding: 10px 30px;
}

/* Aktiv tab - ko‘k fon + oq matn */
.custom-tabs :deep(.n-tabs-tab.n-tabs-tab--active) {
  background: #3b82f6;
  color: white;
}

/* Segment borderini yo‘qotish */
.custom-tabs :deep(.n-tabs-rail) {
  border: none;
}
</style>
