import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsersStore = defineStore('users', () => {
  const users = ref()
  const error = ref()

  const loading =ref(false)


  const fetchUsers = async () => {
    loading.value = true
    try {
      const res = await axios.get('https://dummyjson.com/users')
      users.value = res.data.users // API ichida users massiv bo‘ladi
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { fetchUsers, users }
})
