import { defineStore } from 'pinia'
import { useArticleStore } from './article'
import { PostProps } from '@/pages/Column/testData'

export interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
  columnId?: number // 识别该用户发表的文章
}
export const useUserStroe = defineStore('user', {
  state: () => {
    return {
      user: { islogin: true, name: 'RicardoChen', columnId: 1 }
    }
  },
  actions: {
    login() {
      this.user = { islogin: true, name: 'RicardoChen', columnId: 1 }
    },
    createArticle(newArticle: PostProps) {
      const articleStore = useArticleStore()
      articleStore.posts.push(newArticle)
    }
  }
})
