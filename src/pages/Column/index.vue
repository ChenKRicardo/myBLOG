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
          <router-link :to="`/columnDetail/${column.id}`" class="btn btn-outline-primary"
            >进入专栏</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { ColumnProps } from './testData'

export default defineComponent({
  name: 'ColumnPage',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup(props) {
    const columnList = computed(() => {
      return props.list.map((column) => {
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
