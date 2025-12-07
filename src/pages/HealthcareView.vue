<template>
  <div class="px-8 py-8">
    {{ toggle }}
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

    <n-card title="Card" hoverable>
      <template #header-extra>
        <n-icon size="22" style="cursor: pointer">
          <svg v-if="toggle" @click="detailData" viewBox="0 0 512 512">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M184 112l144 144-144 144"
            />
          </svg>

          <svg v-else @click="detailData" viewBox="0 0 512 512" style="transform: rotate(90deg)">
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

      <p v-show="!toggle">
        Amerika Qoʻshma Shtatlari (AQSh; inglizcha: United States of America, USA), Qoʻshma Shtatlar
        (inglizcha: United States) yoki shunchaki Amerika (inglizcha: America) Shimoliy Amerikada
        joylashgan davlat. Poytaxti – Vashington shahri, Birlashgan Millatlar Tashkiloti aʼzosi.
        Amerika Qoʻshma Shtatlari sharqdan Atlantika, gʻarbdan Tinch okeani, janubi-sharqdan Meksika
        qoʻltigʻi bilan oʻralgan. Maʼmuriy jihatdan 50 shtat va bir federal okrugga boʻlinadi.
        Alyaska va Gavayi shtatlari mamlakat asosiy hududidan tashqarida joylashgan. Puerto-Riko
        Hamdoʻstligi, Shimoliy Mariana orollari Hamdoʻstligi, Guam, Virjiniya orollari va Amerika
        Samoasi ham Amerika Qoʻshma Shtatlariga qarashli. Maydoni – 3 796 742 sq milya (9 833 520
        km2). Aholisi – 347 275 807 kishi (2025-yil 8-yanvar) dan oshiq boʻlib, aholi soni boʻyicha
        jahonda 3-oʻrinda turadi. Tarixi
      </p>
    </n-card>
    <n-tabs
      v-model:value="active"
      type="segment"
      :tabs-padding="0"
      size="large"
      :pane-style="{ padding: '0' }"
      class="custom-tabs"
    >
      <n-tab name="aptek">Аптеки</n-tab>
      <n-tab name="boln">Больницы</n-tab>
    </n-tabs>
  </div>
</template>

<script setup>
const toggle = ref(false)
const detailData = () => {
  console.log('clicked')
  toggle.value = !toggle.value
}

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
import { ref } from 'vue'
const activeTab = ref('all')
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
