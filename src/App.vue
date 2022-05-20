<template>
  <div class="container">
    <global-header :user="user"></global-header>
    <column-list :list="list"></column-list>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList/index.vue'
import GlobalHeader, { UserProps } from './components/Header/index.vue'

const testUser: UserProps = {
  isLogin: true,
  name: 'Ricardo'
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
  components: { ColumnList, GlobalHeader },
  setup() {
    return {
      list: testData,
      user: testUser
    }
  }
})
</script>

<style></style>
