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
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export interface ColumnProps {
  id: number
  title: string
  avator?: string
  description: string
}
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      // PropType接收一个泛型,将Array返回一个泛型类型
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup(props) {
    const columnList = computed(() => {
      return props.list.map((column) => {
        if (!column.avator) {
          const newColumn = column
          newColumn.avator = '@/assets/logo.png'
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
