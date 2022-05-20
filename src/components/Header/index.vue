<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between px-4 mb-4">
    <a class="navbar-brand" href="#">原神</a>
    <ul v-if="!user?.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">登录</a></li>
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <drop-down :title="`你好${user?.name}`"></drop-down>
      </li>
    </ul>
  </nav>
</template>
<!-- 你好 {{ user?.name }} -->
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import DropDown from '../DropDown/index.vue'

export interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
}
export default defineComponent({
  name: 'GlobalHeader',
  components: { DropDown },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      require: true
    }
  }
})
</script>

<style></style>
