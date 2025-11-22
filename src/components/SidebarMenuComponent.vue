<template>
  <n-space vertical>
    <n-layout has-sider style="height: 100vh">
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-menu
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
          :render-label="renderMenuLabel"
          :render-icon="renderMenuIcon"
          :expand-icon="expandIcon"
        />
        <!-- <n-switch v-model:value="collapsed" /> -->
      </n-layout-sider>
      <!-- Card wrapper -->
      <div class="branch-card">
        <!-- Chapdagi ko'k chiziq -->
        <div class="branch-card__bar"></div>

        <!-- Kontent -->
        <div class="branch-card__content">
          <!-- Yuqori qator: ikonka + nom -->
          <div class="branch-card__header">
            <div class="branch-card__company">
              <span class="company-dot"></span>
              <span class="company-name">ООО “Организации”</span>
            </div>

            <button class="edit-btn">✏️</button>
          </div>

          <h2 class="branch-title">Название филиала</h2>

          <!-- INN -->
          <div class="row">
            <span class="label">ИНН</span>
            <span class="value bold">984 921 005</span>
          </div>

          <!-- Gorod + Tel org -->
          <div class="row two-cols">
            <div>
              <div class="label">Город</div>
              <div class="value bold">Ташкент</div>
            </div>
            <div>
              <div class="label">Телефон организации</div>
              <div class="value bold">+998 (99) 576-1256</div>
            </div>
          </div>

          <!-- Address org -->
          <div class="row">
            <div class="label">Адрес организации*</div>
            <div class="value bold">Паркентская улица до 2x строк</div>
          </div>

          <!-- Responsible + phone -->
          <div class="row two-cols">
            <div>
              <div class="label">Ответственный</div>
              <div class="value bold">Миркамол</div>
            </div>
            <div>
              <div class="label">Телефон ответ. лица</div>
              <div class="value bold">+998 (99) 576-1256</div>
            </div>
          </div>

          <!-- Delivery address -->
          <div class="row">
            <div class="label">Адрес доставки</div>
            <div class="value bold">Паркентская улица до 2x строк</div>
          </div>

          <!-- Debt -->
          <div class="row">
            <div class="debt">Задолженность - <span>500 000 UZS</span></div>
          </div>
        </div>
      </div>

      <n-layout> </n-layout>
    </n-layout>
  </n-space>
</template>

<script setup>
import {
  BookmarkOutline,
  HomeOutline,
  CaretDownOutline,
  AccessibilityOutline,
} from '@vicons/ionicons5'
import { NIcon, NLayout, NLayoutSider, NSpace, NMenu } from 'naive-ui'
import { h, ref } from 'vue'

const menuOptions = [
  {
    label: 'Hear the Wind Sing',
    key: 'hear-the-wind-sing',
    href: 'https://en.wikipedia.org/wiki/Hear_the_Wind_Sing',
  },
  {
    label: 'Pinball 1973',
    key: 'pinball-1973',
    disabled: false,
    children: [
      {
        label: 'Rat',
        key: 'rat',
      },
    ],
  },
  {
    label: 'A Wild Sheep Chase',
    key: 'a-wild-sheep-chase',
    disabled: false,
  },
  {
    label: 'Dance Dance Dance',
    key: 'dance',
    children: [
      {
        type: 'group',
        label: 'People',
        key: 'people',
        children: [
          {
            label: 'Narrator',
            key: 'narrator',
          },
          {
            label: 'Sheep Man',
            key: 'sheep-man',
          },
        ],
      },
      {
        label: 'Beverage',
        key: 'beverage',
        children: [
          {
            label: 'Whisky',
            key: 'whisky',
            href: 'https://en.wikipedia.org/wiki/Whisky',
          },
        ],
      },
      {
        label: 'Food',
        key: 'food',
        children: [
          {
            label: 'Sandwich',
            key: 'sandwich',
          },
        ],
      },
      {
        label: 'The past increases. The future recedes.',
        key: 'the-past-increases-the-future-recedes',
      },
      {},
    ],
  },
]

const collapsed = ref(true)

function renderMenuLabel(option) {
  if ('href' in option) {
    return h('a', { href: option.href, target: '_blank' }, [option.label])
  }
  return option.label
}

function renderMenuIcon(option) {
  // Sheep Man icon special case
  if (option.key === 'sheep-man') return true

  // Food iconni umuman ko'rsatmaslik
  if (option.key === 'food') return null

  // Ikkinchi menu (pinball-1973) uchun HomeOutline
  if (option.key === 'pinball-1973') {
    return h(NIcon, null, { default: () => h(HomeOutline) })
  }
  if (option.key === 'dance') {
    return h(NIcon, null, { default: () => h(AccessibilityOutline) })
  }

  // Default icon
  return h(NIcon, null, { default: () => h(BookmarkOutline) })
}

function expandIcon() {
  return h(NIcon, null, { default: () => h(CaretDownOutline) })
}
</script>
