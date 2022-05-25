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
  }
})
