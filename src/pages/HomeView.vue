<template>
  <n-space vertical>
    <n-switch v-model:value="loading" />

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
                d="M18.75 1.99951C19.1642 1.99951 19.5 2.3353 19.5 2.74951C19.5 3.12921 19.2178 3.443 18.8518 3.49267L18.75 3.49951H15.75C15.3358 3.49951 15 3.16373 15 2.74951C15 2.36982 15.2822 2.05602 15.6482 2.00636L15.75 1.99951H18.75Z"
                fill="#1D2433"
              />
              <path
                d="M8.75 1.99951C9.16421 1.99951 9.5 2.3353 9.5 2.74951C9.5 3.12921 9.21785 3.443 8.85177 3.49267L8.75 3.49951H0.75C0.335786 3.49951 0 3.16373 0 2.74951C0 2.36982 0.282154 2.05602 0.648229 2.00636L0.75 1.99951H8.75Z"
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

    <n-grid :style="!toggleBtn && { display: 'none' }" :cols="3" :x-gap="16" :y-gap="16">
      <n-grid-item v-for="item in 9" :key="item">
        <n-card style="width: 100%">
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
                  <h3 style="margin-left: 4px">Название филиала</h3>
                </span>
              </div>

              <div>
                <p>OOO 'Название компании'</p>
                <span style="display: flex; justify-content: center; align-content: center">
                  <p style="margin-right: 10px">
                    500м
                    <img src="../assets/icons/dot.svg" alt="" style="margin-left: 10px" />
                    10.07.2023, 10:40
                  </p>
                </span>
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
import { ref } from "vue";
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
} from "naive-ui";
import { GridOutline, ListOutline } from "@vicons/ionicons5";

const toggleBtn = ref(true);
const loading = ref(false);
const value = ref("");

const handleClick = (v) => {
  toggleBtn.value = v;
};
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
</style>
