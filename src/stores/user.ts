// import { useStorage } from '@vueuse/core'
// import { ref } from 'vue'
// export const user = useStorage('user', { id: '1', name: 'wang', role: 'admin' })

// stores/userStore.js
import { defineStore } from 'pinia'

export interface User {
  id: number
  role: string
  username: string
  email: string
  password: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null
  }),

  actions: {
    storeUser(user: User | null) {
      this.user = user ?? null
    },
    clearUser() {
      this.user = null
    }
  }
})

// Previous code for reference.
// export const useUserStore = defineStore('user', {
//   state: () => ({
//     user: null as User | null,
//   }),

//   actions: {
//     // Fetch the authenticated user from Supabase
//     async fetchUser() {
//       const { data: { user }, error } = await supabase.auth.getUser();
//       if (error) {
//         console.error('Error fetching user:', error.message);
//       }
//       this.user = user ?? null; // Set user or null if no user found
//     },

//     // Set user manually (useful during sign-in)
//     setUser(user: User | null) {
//       this.user = user;
//     },

//     // Sign out and clear user state
//     async signOut() {
//       const { error } = await supabase.auth.signOut();
//       if (error) {
//         console.error('Error signing out:', error.message);
//       }
//       this.user = null;
//     },
//   },

//   getters: {
//     // Return if the user is authenticated
//     isAuthenticated: (state) => state.user !== null,
//   },
// });
