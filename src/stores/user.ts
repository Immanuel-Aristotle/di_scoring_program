import { useStorage } from '@vueuse/core'

import { ref } from 'vue'
export const user = useStorage('user', { id: '1', name: 'wang', role: 'admin' })
