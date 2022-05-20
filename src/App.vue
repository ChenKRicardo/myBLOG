<template>
  <div class="container">
    <column-list :list="list"></column-list>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/columnList/index.vue'

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
    avator: './assets/hutao.gif'
  },
  {
    id: 2,
    title: 'test2',
    description: '这是第二个测试'
  },
  {
    id: 2,
    title: 'test2',
    description: '这是第三个测试'
  }
]
export default defineComponent({
  name: 'App',
  components: { ColumnList },
  setup() {
    return {
      list: testData
    }
  }
})
</script>

<style></style>
