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

    <!-- 🟦 Kartochkalar ostida -->
    <div class="cards-container">
      <NCard class="square-card" v-for="value in 12" :key="value">
        <div class="card-row">
          <div class="text-block">
            <h3>About Us</h3>
            <p>
              Название медикамента % Страна производства <br></br>
              Серия, номер партии и срок годности На складе: 500 Стоимость:120 000UZS
            </p>
          </div>
          <NIcon class="card-icon">
            <BookmarkOutline />
          </NIcon>
        </div>
      </NCard>
    </div>

  </div>
</template>


<script setup>
import { NCard, NIcon,NBreadcrumb, NBreadcrumbItem,MdCash } from 'naive-ui'
import { BookmarkOutline } from '@vicons/ionicons5'


</script>

<style scoped>
.square-card {
  width: 300px;
  height: 300px;
  background-color: #554e4e;
  color: white;
  border: 1px solid black;
  border-radius: 12px;
}

/* iconni o‘ngga olib o‘tish uchun */
.card-row {
  display: flex;
  justify-content: space-between; /* ↙️ icon o‘ngga chiqadi */
  align-items: flex-start;
  gap: 12px;
}

.text-block {
  flex: 1;
}

.card-icon {
  font-size: 28px;
  color: white;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
</style>
