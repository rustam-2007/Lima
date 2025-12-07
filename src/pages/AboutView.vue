<template>
  <div class="display-flex">
    <n-breadcrumb separator=">">
      <n-breadcrumb-item>
        <n-icon><MdCash /></n-icon> Home
      </n-breadcrumb-item>
      <n-breadcrumb-item>
        <n-icon><MdCash /></n-icon> Account
      </n-breadcrumb-item>
      <n-breadcrumb-item>
        <n-icon><MdCash /></n-icon> Category
      </n-breadcrumb-item>
    </n-breadcrumb>

    <div style="width: 50%">
      <n-tabs type="segment" animated size="small">
        <n-tab-pane name="oasis" tab="Oasis">Wonderwall</n-tab-pane>
        <n-tab-pane name="beatles" tab="The Beatles">Hey Jude</n-tab-pane>
        <n-tab-pane name="jaychou" tab="Jay Chou">Qilixiang</n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<script setup>
import { NTabs, NTabPane } from 'naive-ui'
import { NIcon, NBreadcrumb, NBreadcrumbItem } from 'naive-ui'
// import { MdCash } from '@vicons/material' // ✔️ TO‘G‘RI
</script>
