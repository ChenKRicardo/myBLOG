import { defineStore } from 'pinia'

export interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
}
export const useUserStroe = defineStore('user', {
  state: () => {
    return {
      user: { islogin: false, name: '' }
    }
  },
  actions: {
    login() {
      this.user = { islogin: true, name: 'RicardoChen' }
    }
  }
})
