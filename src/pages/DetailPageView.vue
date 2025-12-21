
<template>
  <div>
    <h1>Detail Page</h1>
    <p>User ID: {{ id }}</p>
     <n-button quaternary @click="goBack">
  ← Orqaga
</n-button>
  </div>

</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
import {

  NButton
} from 'naive-ui'

const router = useRouter()
const route = useRoute()



const goBack = () =>{
  router.push({
    name: 'healthcare',
  })
}

const id = route.params.id
</script>

