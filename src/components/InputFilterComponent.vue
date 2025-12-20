<template>
  <n-space vertical size="large">
    <!-- SEARCH INPUT -->
    <n-input
      v-model:value="search"
      type="text"
      placeholder="Search type (python, frontend, java...)"
      @input="onSearch"
      clearable
      date="formatDate"
    />

    <!-- LOADING -->
    <n-spin v-if="loading" />

    <!-- <pre>{{ vacancies }}</pre> -->

    <!-- VACANCIES -->
    <n-grid :cols="3" :x-gap="16" :y-gap="16">
      <n-grid-item v-for="item in vacancies" :key="item.id">
        <n-card :title="item.name" style="cursor: pointer" @click="cardClick(item.id)">
          <p><b>Company:</b> {{ item.employer?.name }}</p>
          <p><b>City:</b> {{ item.area?.name }}</p>
          <p>
            <b>published date:</b>
            {{ formatDate(item.published_at) }}
          </p>

          <p>
            <b>Salary:</b>
            <span v-if="item.salary">
              {{ item.salary.from || "" }} - {{ item.salary.to || "" }} -
            </span>
            <span v-else>Not specified</span>
          </p>
        </n-card>
      </n-grid-item>
    </n-grid>
  </n-space>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { NInput, NSpin, NGrid, NGridItem, NCard } from "naive-ui";
import { useRouter } from "vue-router";

const router = useRouter();

const search = ref("");
const vacancies = ref([]);
const loading = ref(false);

const cardClick = (itemId) => {
  router.push({
    name: "vacancy-detail",
    params: {itemId} ,
  });
};

const fetchVacancies = async (text = "") => {
  loading.value = true;
  try {
    const res = await fetch(
      `https://api.hh.ru/vacancies?text=${encodeURIComponent(text)}&per_page=20`
    );
    const data = await res.json();
    vacancies.value = data.items || [];
  } catch (err) {
    console.error(err);
  } finally {
    loading.value = false;
  }
};

let timeout = null;
const onSearch = () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    fetchVacancies(search.value);
  }, 500); // debounce
};

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);

  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}
          ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(
    2,
    "0"
  )}`;
};

onMounted(() => {
  fetchVacancies();
});
</script>
