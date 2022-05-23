<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            :src="column.avator"
            :alt="column.title"
            class="rounded-cricle border border-light w-25 my-3"
          />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <router-link
            :to="{ name: 'columnDeatil', params: { id: column.id } }"
            class="btn btn-outline-primary"
            >进入专栏</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'

export interface ColumnProps {
  id: number
  title: string
  avator?: string
  description: string
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1',
    description: '这是第一个测试'
  },
  {
    id: 2,
    title: 'test2',
    description: '这是第二个测试',
    avator: '/images/hutao.gif'
  },
  {
    id: 3,
    title: 'test2',
    description: '这是第二个测试'
  },
  {
    id: 4,
    title: 'test2',
    description: '这是第三个测试'
  }
]
export default defineComponent({
  name: 'ColumnList',
  // props: {
  //   list: {
  //     // PropType接收一个泛型,将Array返回一个泛型类型
  //     type: Array as PropType<ColumnProps[]>,
  //     required: true
  //   }
  // },
  setup() {
    const test = reactive(testData)
    const columnList = computed(() => {
      return test.map((column) => {
        if (!column.avator) {
          const newColumn = column
          newColumn.avator = '/images/hutao.gif'
        }
        return column
      })
    })
    return {
      columnList
    }
  }
})
</script>

<style></style>
