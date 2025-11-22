<template>
  <n-space vertical>
    <n-breadcrumb separator=">">
      <div style="display: flex; justify-content: space-between">
        <n-breadcrumb-item>
          <n-icon><MdCash /></n-icon> Home
        </n-breadcrumb-item>
        <n-button
          strong
          size="large"
          secondary
          type="primary"
          style="
            background-color: #3d7bf7;
            color: #fff;
            border-radius: 6px;
            font-size: 16px;
          "
        >
          Foydalanuvchi qo'shish
        </n-button>
      </div>

      <!-- <n-breadcrumb-item>
        <n-icon><MdCash /></n-icon> Detail
      </n-breadcrumb-item> -->
      <!-- <n-breadcrumb-item>
        <n-icon><MdCash /></n-icon> Category
      </n-breadcrumb-item> -->
    </n-breadcrumb>

    <n-tabs @update:value="tabChange" style="width:50%" type="segment" animated default-value="active">
      <n-tab-pane name="active" tab="Faol foydalanuvchilar"> </n-tab-pane>
      <n-tab-pane name="inactive" tab="Oddiy foydalanuvchilar"></n-tab-pane>
    </n-tabs>

    {{ tabValue }}

    <div class="search-input" style="width: 100%">
      <div class="search-input__unique">
        <n-input
          v-model:value="value"
          type="text"
          placeholder="Basic Input"
          style="flex: 1; margin-right: 10px"
        />

        <n-button
          quaternary
          style="
            width: 50px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <n-icon size="25">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.75 1.99976C19.1642 1.99976 19.5 2.33554 19.5 2.74976C19.5 3.12945 19.2178 3.44325 18.8518 3.49291L18.75 3.49976H15.75C15.3358 3.49976 15 3.16397 15 2.74976C15 2.37006 15.2822 2.05626 15.6482 2.0066L15.75 1.99976H18.75Z"
                fill="#1D2433"
              />
              <path
                d="M8.75 1.99976C9.16421 1.99976 9.5 2.33554 9.5 2.74976C9.5 3.12945 9.21785 3.44325 8.85177 3.49291L8.75 3.49976H0.75C0.335786 3.49976 0 3.16397 0 2.74976C0 2.37006 0.282154 2.05626 0.648229 2.0066L0.75 1.99976H8.75Z"
                fill="#1D2433"
              />
              <path
                d="M18.75 8.99976C19.1642 8.99976 19.5 9.33554 19.5 9.74976C19.5 10.1295 19.2178 10.4432 18.8518 10.4929L18.75 10.4998H10.75C10.3358 10.4998 10 10.164 10 9.74976C10 9.37006 10.2822 9.05626 10.6482 9.0066L10.75 8.99976H18.75Z"
                fill="#1D2433"
              />
              <path
                d="M3.75 8.99976C4.16421 8.99976 4.5 9.33554 4.5 9.74976C4.5 10.1295 4.21785 10.4432 3.85177 10.4929L3.75 10.4998H0.75C0.335786 10.4998 0 10.164 0 9.74976C0 9.37006 0.282154 9.05626 0.648229 9.0066L0.75 8.99976H3.75Z"
                fill="#1D2433"
              />
              <path
                d="M18.75 15.9998C19.1642 15.9998 19.5 16.3355 19.5 16.7498C19.5 17.1295 19.2178 17.4432 18.8518 17.4929L18.75 17.4998H15.75C15.3358 17.4998 15 17.164 15 16.7498C15 16.3701 15.2822 16.0563 15.6482 16.0066L15.75 15.9998H18.75Z"
                fill="#1D2433"
              />
              <path
                d="M8.75 15.9998C9.16421 15.9998 9.5 16.3355 9.5 16.7498C9.5 17.1295 9.21785 17.4432 8.85177 17.4929L8.75 17.4998H0.75C0.335786 17.4998 0 17.164 0 16.7498C0 16.3701 0.282154 16.0563 0.648229 16.0066L0.75 15.9998H8.75Z"
                fill="#1D2433"
              />
              <path
                d="M11.8054 0.80542C12.8793 -0.268473 14.6202 -0.268473 15.6941 0.80542C16.768 1.87931 16.768 3.62019 15.6941 4.69408C14.6202 5.76797 12.8793 5.76797 11.8054 4.69408C10.7315 3.62019 10.7315 1.87931 11.8054 0.80542Z"
                fill="#1D2433"
              />
              <path
                d="M3.80542 7.80542C4.87931 6.73153 6.62019 6.73153 7.69408 7.80542C8.76797 8.87931 8.76797 10.6202 7.69408 11.6941C6.62019 12.768 4.87931 12.768 3.80542 11.6941C2.73153 10.6202 2.73153 8.87931 3.80542 7.80542Z"
                fill="#1D2433"
              />
              <path
                d="M11.8054 14.8054C12.8793 13.7315 14.6202 13.7315 15.6941 14.8054C16.768 15.8793 16.768 17.6202 15.6941 18.6941C14.6202 19.768 12.8793 19.768 11.8054 18.6941C10.7315 17.6202 10.7315 15.8793 11.8054 14.8054Z"
                fill="#1D2433"
              />
            </svg>
          </n-icon>
        </n-button>
      </div>

      <div class="search-input__child">
        <n-button
          style="margin-right: 5px"
          @click="handleClick(true)"
          :type="toggleBtn ? 'info' : 'tertiary'"
        >
          <n-icon size="25" :component="GridOutline" />
        </n-button>

        <n-button @click="handleClick(false)" :type="toggleBtn ? 'tertiary' : 'info'">
          <n-icon size="30" :component="ListOutline" />
        </n-button>
      </div>
    </div>
    <!-- <pre>
      {{  usersStore.users }}
    </pre> -->

    <n-grid :style="!toggleBtn && { display: 'none' }" :cols="3" :x-gap="16" :y-gap="16">
      <n-grid-item v-for="user in usersStore.users" :key="user.id">
        <n-card style="width: 100%" @click="$router.push('/detail')">
          <template #header>
            <n-skeleton v-if="loading" text style="width: 90%; --n-text-width: 90%" />
          </template>

          <n-skeleton
            v-if="loading"
            text
            :repeat="6"
            style="width: 90%; --n-text-width: 90%"
          />

          <template v-else>
            <div style="display: flex; align-items: start; flex-direction: column">
              <div style="display: flex">
                <span style="display: flex">
                  <img src="../assets/icons/pill.svg" alt="" />
                  <h3 style="margin-left: 4px">
                    {{ user.firstName + " " + user.lastName }}
                  </h3>
                </span>
              </div>

              <div>
                <p><strong>Email:</strong>{{ user.email }}</p>
                <p><strong>city:</strong>{{ user.address.city }}</p>
                <p><strong>address:</strong>{{ user.address.address }}</p>
                <p><strong>weight:</strong>{{ user.weight }}</p>
                <p><strong>phone:</strong>{{ user.phone }}</p>
              </div>
            </div>
          </template>
        </n-card>
      </n-grid-item>
    </n-grid>

    <div :style="toggleBtn && { display: 'none' }">
      <n-table :bordered="false" :single-line="false">
        <thead>
          <tr>
            <th>Abandon</th>
            <th>Abnormal</th>
            <th>Abolish</th>
            <th>...</th>
            <th>It's hard to learn words</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>放弃</td>
            <td>反常的</td>
            <td>彻底废除</td>
            <td>...</td>
            <td>Damn it! I can't remember those words.</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
        </tbody>
      </n-table>
    </div>
  </n-space>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  NSpace,
  NCard,
  NButton,
  NSkeleton,
  NGrid,
  NTable,
  NGridItem,
  NIcon,
  NInput,
  NTabs,
} from "naive-ui";
import { GridOutline, ListOutline } from "@vicons/ionicons5";
import { useUsersStore } from "@/stores/usersStore.js";

const usersStore = useUsersStore();

const tabValue = ref("active")

const toggleBtn = ref(true);
const loading = ref(false);
const value = ref("");
const switchFunc = ref("");
const handleClick = (v) => {
  toggleBtn.value = v;
};

const tabChange = (e) => {
  tabValue.value = e
}

onMounted(() => {
  loading.value = true;
  usersStore.fetchUsers();
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
</script>

<style scoped>
.search-input {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-input__unique {
  width: 100%;
  display: flex;
}

.search-input__child {
  display: flex;
  margin-left: 20px;
}

/* ACTIVE tab — oq matn */
/* ACTIVE — oq */
::v-deep .n-tabs .n-tabs-tab[aria-selected="true"] .n-tabs-tab__label {
  color: #fff !important;
}

/* INACTIVE — qora */
::v-deep .n-tabs .n-tabs-tab:not([aria-selected="true"]) .n-tabs-tab__label {
  color: #000 !important;
}
</style>
