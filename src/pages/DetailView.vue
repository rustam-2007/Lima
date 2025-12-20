<template>
  <div>
      <n-breadcrumb separator=">">
      <n-breadcrumb-item @click="goTo('/home')">
        <n-icon><MdCash /></n-icon> Home
      </n-breadcrumb-item>
      <n-breadcrumb-item>
        <n-icon><MdCash /></n-icon> Detail
      </n-breadcrumb-item>
      <!-- <n-breadcrumb-item>
        <n-icon><MdCash /></n-icon> Category
      </n-breadcrumb-item> -->
      </n-breadcrumb>

  <h1>detail page</h1>

  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
const router = useRouter()


const goTo = (path) => {
  router.push(path)
}

</script>
