import { defineStore } from 'pinia'
import { testData, testPosts, ColumnProps, PostProps } from '@/pages/Column/testData'

export interface GlobalDataProps {
  columns: ColumnProps
  posts: PostProps
}
export const useArticleStore = defineStore('article', {
  state: () => {
    return {
      columns: testData,
      posts: testPosts
    }
  },
  getters: {
    getColumnById: (state) => (id: number) => {
      return state.columns.find((column) => column.id === id)
    },
    getPostsById: (state) => (cid: number) => {
      return state.posts.filter((post) => post.columnId === cid)
    }
  }
})
