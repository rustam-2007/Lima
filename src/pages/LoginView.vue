<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <div class="auth-container">
      <!-- Chap taraf -->
      <div class="auth-left">
        <div class="logo">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.2787 6.01237C31.1396 6.01714 30.6812 6.04123 30.2587 6.06747C23.0998 6.52593 15.0704 8.21023 9.14189 12.4707C8.01314 13.2817 6.99531 14.3165 6.4827 15.6084C6.12084 16.5206 6.02686 17.5162 6.00563 18.4973C5.88564 24.0449 7.68659 29.8683 11.1919 34.202C11.8924 35.0681 12.6939 35.8696 13.4978 36.5151C15.2014 37.8852 17.061 38.821 19.5206 39.5481C22.1912 40.34 24.9148 40.8533 27.7751 41.1004C29.3635 41.2371 30.5466 41.2779 32.3943 41.2612C34.2733 41.2421 34.6427 41.2133 35.1635 41.0477C35.9914 40.7863 36.6417 40.3013 37.2151 39.5192C37.6254 38.9577 38.0023 38.1874 38.4534 36.9852C38.6308 36.5101 38.9092 35.7134 38.9092 35.6776C38.9092 35.668 38.8517 35.6704 38.7844 35.68C38.4293 35.7303 37.5271 35.6895 36.9055 35.596C34.3572 35.2096 31.6553 33.8132 28.4592 31.2289C27.2403 30.2452 26.6428 29.7173 23.6122 26.9458C23.0578 26.4393 22.5826 26.0028 22.554 25.9787C22.5037 25.9332 22.5013 25.9356 22.2876 26.1106C20.7254 27.404 18.9521 28.3615 17.3542 28.7694C15.9745 29.1221 14.5058 29.1412 13.3396 28.8268C11.8352 28.4189 10.7937 27.4615 10.4529 26.1753C10.3665 25.8466 10.3424 25.6426 10.3448 25.2154C10.3448 24.7474 10.388 24.486 10.5247 24.0948C11.0573 22.588 12.7106 21.3545 14.5726 21.0761C15.4077 20.9514 16.61 21.0496 17.6729 21.3304C19.1413 21.7168 20.6507 22.4677 22.196 23.5812C22.3639 23.7036 22.5151 23.7971 22.5318 23.7923C22.5631 23.778 23.0237 23.2213 23.434 22.6958C23.782 22.2519 24.8258 20.8674 24.8184 20.86C24.8137 20.8552 24.6818 20.8025 24.5234 20.74C23.4581 20.3202 22.623 19.6673 22.0998 18.8468C21.4735 17.8607 21.2793 16.4545 21.6295 15.4369C21.8766 14.7242 22.3973 14.1459 23.002 13.9131C23.2396 13.822 23.4075 13.8149 23.6043 13.889C23.8178 13.9682 24.0315 14.1817 24.0315 14.3163C24.0315 14.3811 23.9475 14.5658 23.8323 14.753C23.4819 15.3217 23.35 15.7945 23.3476 16.4688C23.3476 16.8383 23.3548 16.9008 23.4149 17.136C23.6668 18.0982 24.2667 18.9334 25.1114 19.4972C25.3225 19.6363 25.5841 19.7828 25.5984 19.7685C25.6032 19.7613 25.9536 19.2766 26.3758 18.6886C28.8979 15.1709 30.0808 13.6496 31.4485 12.1618C33.649 9.76715 35.6382 8.45926 37.613 8.10909C38.2344 7.99865 38.8679 7.98434 39.2446 8.07069C39.9213 8.22431 40.4012 8.70424 40.5668 9.39051C40.6099 9.57036 40.6195 9.67126 40.6171 9.99042C40.6004 12.6682 38.9447 15.5094 36.0532 17.8273C33.8289 19.6101 31.1222 20.8796 28.8187 21.2178C28.4108 21.2803 27.8013 21.3042 27.355 21.2803C27.1317 21.2684 26.94 21.266 26.9328 21.2755C26.9233 21.2851 26.7456 21.5036 26.5392 21.7602C25.805 22.6648 25.2146 23.3272 24.2908 24.2847L23.7894 24.803L24.682 25.578C25.1739 26.0028 25.9104 26.6555 26.321 27.0273C28.2815 28.7982 29.2292 29.6092 30.2346 30.3771C31.5136 31.3536 32.4807 31.9607 33.654 32.5294C35.173 33.266 36.6271 33.6643 38.242 33.7843C38.6499 33.8156 39.449 33.8034 39.4826 33.7676C39.5451 33.7078 40.0992 31.5361 40.3993 30.1946C40.812 28.3421 41.1839 26.1851 41.5944 23.2718C41.7599 22.0985 41.9207 20.1189 41.9832 18.5352C42.0168 17.6331 41.9975 15.7589 41.9472 15.0054C41.7816 12.5962 41.4288 10.8997 40.7905 9.46254C40.3561 8.48121 39.7083 7.60292 39.1253 7.20457C38.1464 6.53261 36.4931 6.14165 34.1342 6.01929C33.7215 5.99758 31.965 5.99281 31.2787 6.01213V6.01237Z"
                fill="#2F6FED"
              />
              <path
                d="M38.0747 8.7214C37.5516 8.81491 36.8629 9.15101 36.2823 9.59015C35.4618 10.2139 34.4275 11.3059 33.3116 12.7216C32.611 13.6119 32.0998 14.3053 30.3891 16.6737C29.7364 17.5782 28.8701 18.759 28.4622 19.3012L27.7256 20.2849L28.0688 20.292C29.0359 20.3137 30.1035 20.0137 31.3897 19.3586C34.8187 17.6119 38.7109 13.499 39.5433 10.7442C39.7401 10.0868 39.7568 9.5756 39.5865 9.24213C39.4665 9.0117 39.1593 8.79344 38.8499 8.71902C38.6724 8.67584 38.3101 8.67823 38.0749 8.7214H38.0747Z"
                fill="#2F6FED"
              />
              <path
                d="M14.9014 21.6575C13.7304 21.8015 12.8545 22.2934 12.3051 23.1163C11.8803 23.7523 11.6692 24.6809 11.746 25.5735C11.7773 25.9141 11.8133 26.0942 11.9163 26.4086C12.2644 27.4644 13.1498 28.1986 14.3518 28.4314C16.2546 28.7961 18.1359 28.1051 20.1804 26.2862C20.4852 26.015 21.4642 25.0432 21.4618 25.012C21.4618 24.9831 20.7588 24.393 20.2164 23.9658C18.4455 22.5644 17.0995 21.8542 15.8853 21.6765C15.6694 21.6453 15.091 21.6334 14.9016 21.6575H14.9014Z"
                fill="#2F6FED"
              />
              <path
                d="M39.1251 7.20481C39.2198 7.26946 39.3159 7.3465 39.4127 7.43476C38.6396 7.27279 37.7296 7.16498 36.6801 7.11059C36.2672 7.08912 34.5108 7.08411 33.8246 7.10343C33.6853 7.10821 33.227 7.1323 32.8046 7.15854C25.6457 7.617 17.6163 9.3013 11.6878 13.5618C10.559 14.373 9.5412 15.4076 9.02858 16.6997C8.66673 17.6116 8.57274 18.6073 8.55151 19.5884C8.43153 25.1362 10.2325 30.9596 13.738 35.2933C14.4386 36.1594 15.24 36.9609 16.0439 37.6064C16.8149 38.2263 17.6173 38.7573 18.4932 39.2201C16.5284 38.5424 14.9559 37.688 13.498 36.5153C12.6942 35.8698 11.8927 35.0684 11.1921 34.2022C7.68659 29.8685 5.88564 24.0452 6.00563 18.4973C6.02686 17.5162 6.12084 16.5206 6.4827 15.6084C6.99531 14.3165 8.01314 13.2817 9.14189 12.4707C15.0707 8.21024 23.0998 6.52594 30.2587 6.06748C30.6811 6.04124 31.1394 6.01714 31.2787 6.01237C31.9649 5.99305 33.7213 5.99782 34.1342 6.01953C36.4928 6.1419 38.1461 6.5331 39.1251 7.20481Z"
                fill="#1E4EAE"
              />
            </svg>

            <h1>LIMA</h1>
          </div>

          <n-select style="width: 140px;" v-model:value="value" size="small" :options="options" />
        </div>

        <div class="auth-card">
          <div class="auth-card__main">
            <h2>Авторизация</h2>
            <p>
              Пожалуйста, введите свои данные<br />
              или обратитесь к администратору
            </p>
            <form class="form">
              <label for="email">Логин</label>
              <n-input
                id="email"
                v-model:value="email"
                placeholder="Введите e-mail"
                type="text"
                size="medium"
              />

              <label for="password">Пароль</label>
              <n-input
                id="password"
                v-model:value="password"
                placeholder="Введите пароль"
                type="password"
                size="medium"
                show-password-on="mousedown"
              />

              <div class="remember" style="margin-top: 4px">
                <n-checkbox v-model:checked="remember">Запомнить данные</n-checkbox>
              </div>

              <n-button round strong type="primary" size="large" block @click.prevent="login">
                Войти
              </n-button>
            </form>
            <div class="forgot">
              Забыли пароль?
              <a href="#">Восстановить</a>
            </div>
          </div>

          <div class="footer">© LIMA NEO TECHNO, 2023</div>
        </div>
      </div>

      <!-- O‘ng taraf -->
      <div class="auth-right"></div>
    </div>
  </n-config-provider>
</template>

<script setup>
import { ref } from 'vue'
import { NInput, NButton, NCheckbox, NConfigProvider, NSelect } from 'naive-ui'

const email = ref('')
const password = ref('')
const remember = ref(false)
const value = ref('Uzbek')
const options = [
  {
    label: "English",
    value: 'eng',
    disabled: false,
  },
    {
    label: "Russki",
    value: 'ru',
    disabled: false,
  },
      {
    label: "Uzbek",
    value: 'uz',
    disabled: false,
  },
]

// Custom primary color (Naive UI qoidasiga asosan)
const themeOverrides = {
  common: {
    primaryColor: '#3D7BF7',
    primaryColorHover: '#2f6bed',
    primaryColorPressed: '#295ad2',
    primaryColorSuppl: '#3D7BF7',
  },
  Button: {
    textColorPrimary: '#fff',
    borderRadius: '12px', // 🟦 button ham yumaloq bo‘lsin
  },
  Checkbox: {
    colorChecked: '#3D7BF7',
    colorCheckedHover: '#2f6bed',
  },
  Input: {
    borderRadius: '12px',
    padding: '10px', // padding qo‘shildi
    lineHeight: '1.2', // caret to‘g‘ri o‘rinda bo‘lishi uchun
    textColor: '#000',
    borderHover: '#3D7BF7',
    borderFocus: '#3D7BF7',
    heightMedium: '44px', // balandligi oshirildi
  },
  Select: {
    color: '#3D7BF7', // asosiy rang (matn, chekkalar)
    colorHover: '#2f6bed', // hover
    colorActive: '#295ad2', // aktiv variant
    borderRadius: '12px', // radius
  },
}

const login = () => {
  console.log('Email:', email.value)
  console.log('Password:', password.value)
  console.log('Remember:', remember.value)
  // bu yerda auth logic yozasiz
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
}

.auth-container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: stretch;
}

/* === Chap panel (Login form) === */
.auth-left {
  flex: 1;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 10px !important;
  background-color: #ffffff;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 110px;
}

.logo img {
  height: 32px;
  margin-right: 8px;
}

.logo h1 {
  font-size: 24px;
  font-weight: 700;
  color: #2563eb;
}

.auth-card {
  width: 380px;
  text-align: center;
}

.auth-card h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
}

.auth-card p {
  color: #6b7280;
  margin-bottom: 24px;
}

form {
  text-align: left;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 4px;
  font-weight: 500;
}

.remember {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 20px;
}

.forgot {
  text-align: center;
  font-size: 13px;
  margin-top: 10px;
}

.forgot a {
  color: #2563eb;
  text-decoration: none;
  margin-left: 5px;
}

.footer {
  font-size: 12px;
  color: #9ca3af;
  margin-top: 60px;
}

/* === O‘ng panel (Fon rasmi) === */
.auth-right {
  flex: 1;
  background: url('../assets/img/auth-main.png') no-repeat center center;
  background-size: cover;
}

/* === RESPONSIVE === */
@media (max-width: 900px) {
  .auth-container {
    flex-direction: column;
  }

  .auth-right {
    display: none;
  }

  .auth-left {
    max-width: 100%;
    padding: 40px 20px;
  }

  .auth-card {
    width: 100%;
    max-width: 340px;
  }
}

/* === Chap panel (Login form) === */
.auth-left {
  flex: 1;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* logo tepada, footer pastda */
  align-items: center;
  padding: 60px;
  background-color: #ffffff;
}

/* Auth-card ichidagi markaziy kontentni o‘rtaga joylash */
.auth-card {
  width: 380px;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* bo‘sh joyni egallaydi */
  justify-content: center; /* vertikal o‘rtada */
  text-align: center;
}

/* Footer pastda chiqsin */
.footer {
  font-size: 12px;
  color: #9ca3af;
  margin-top: auto; /* pastga yopishadi */
  padding-top: 40px;
}
</style>
