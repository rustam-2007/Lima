<template>
  <n-space vertical>
    <n-switch v-model:value="loading" />
    <n-input
      v-model:value="value"
      type="text"
      placeholder="Basic Input"
      style="width: 902px; height: 40px; border: 1px; border-radius: 10%"
    />
    <n-grid :cols="3" :x-gap="16" :y-gap="16">
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
                <p>OOO "Название компании"</p>

                <span
                  style="display: flex; justify-content: center; align-content: center"
                >
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
  </n-space>
</template>

<script setup>
import { ref } from "vue";
import { NSpace, NCard, NSkeleton, NGrid, NGridItem, NIcon, NInput } from "naive-ui";

const loading = ref(false);
const value = ref("");
</script>
