<template>
  <pre>{{ vacancy }}</pre>
  <h1>detail {{vacancy}}</h1>
</template>

<script setup>
import { useRoute } from "vue-router"
import { onMounted, ref } from "vue"

const route = useRoute()
const vacancy = ref(null)

onMounted(async () => {
  const res = await fetch(`https://api.hh.ru/vacancies/${route.params.itemId}`)
  vacancy.value = await res.json()
})
</script>

