<template>
  <div :style="toggleBtn && { display: 'none' }">
    <h2>umumiy soni malumotlarni: {{ mainData?.found }}</h2>
    <!-- input-section -->
    <InputFilterComponent
      v-model:searchText="searchText"
      v-model:schedule="schedule"
      v-model:area="area"
    />
    <n-table :bordered="false" :single-line="false">
      <thead>
        <tr>
          <th>Work name</th>
          <th>Adress</th>
          <th>salary from</th>
          <th>foydalanuvchi nomi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vacancy in vacancies" :key="vacancy.id">
          <td>{{ vacancy.name }}</td>
          <td>{{ vacancy.area?.name }}</td>
          <td>
            {{
              vacancy.salary?.from
                ? vacancy.salary.from + " " + vacancy.salary.currency
                : "Kelishiladi"
            }}
          </td>
          <td>
            {{
              vacancy.username?.from
                ? vacancy.username.from + " " + vacancy.username.currency
                : "foydalanuvchi nomi"
            }}
          </td>
          <td>{{ vacancy.schedule?.name }}</td>
        </tr>
      </tbody>
    </n-table>
    {{ mainData?.page }} - {{ mainData.page }}
    <n-pagination v-model:page="mainData.page" :page-count="mainData.page" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import { NTable, NPagination, NInput } from "naive-ui";
import InputFilterComponent from "@/components/InputFilterComponent.vue";
const vacancies = ref([]);
const loading = ref(false);
const error = ref(null);

const searchText = ref("frontend");
const schedule = ref("fullDay");
const area = ref(97);
const mainData = ref({
  found: 0,
  page: 0,
  pages: 0,
});

const fetchVacancies = async () => {
  loading.value = true;
  error.value = null;

  try {
    const res = await axios.get("https://api.hh.ru/vacancies", {
      params: {
        text: searchText.value,
        area: area.value,
        schedule: schedule.value,
        employment: "full",
        per_page: 20,
      },
    });

    vacancies.value = res.data.items;
  } catch (err) {
    console.error(err);
    error.value = "Ma'lumotlarni yuklashda xatolik";
  } finally {
    loading.value = false;
  }
};

watch([searchText, schedule, area], () => {
  fetchVacancies();
});

onMounted(async () => {
  loading.value = true;
  error.value = null;

  try {
    const res = await axios.get("https://api.hh.ru/vacancies", {
      params: {
        text: "frontend",
        area: 97,
        schedule: "fullDay",
        employment: "full",
        per_page: 50,
      },
    });

    vacancies.value = res.data.items;
    mainData.value = res.data;

    console.log("Vacancies:", vacancies.value);
  } catch (err) {
    console.error("API error:", err);
    error.value = "Ma'lumotlarni olishda xatolik";
  } finally {
    loading.value = false;
  }
});
</script>
