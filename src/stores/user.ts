import { useStorage } from '@vueuse/core'

// import createStorage from 'vuex';
import { ref } from 'vue'
export const user = useStorage('user', { id: '1', name: 'wang', role: 'admin' })
// const user = useStorage()
