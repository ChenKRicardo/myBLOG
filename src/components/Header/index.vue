<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between px-4 mb-4">
    <a class="navbar-brand" href="#">原神</a>
    <ul v-if="!userInfo?.islogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <router-link to="/login" class="btn btn-outline-light my-2">登录</router-link>
      </li>
      <li class="list-inline-item">
        <router-link to="/register" class="btn btn-outline-light my-2">注册</router-link>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <drop-down :title="`你好${userInfo?.name}`">
          <drop-down-item><a href="#" class="dropdown-item">添加文章</a></drop-down-item>
          <drop-down-item disabled><a href="#" class="dropdown-item">编辑资料</a></drop-down-item>
          <drop-down-item><a href="#" class="dropdown-item">退出登录</a></drop-down-item>
        </drop-down>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import DropDownItem from '../DropDown/DropdownItem/index.vue'
import DropDown from '../DropDown/index.vue'
import { useUserStroe } from '@/stroe/user'

export interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
}
export default defineComponent({
  name: 'GlobalHeader',
  components: { DropDown, DropDownItem },
  setup() {
    const userStore = useUserStroe()
    // 为了保持从store提取的数据是响应式需要computed
    const userInfo = computed(() => userStore.user)
    return {
      userInfo
    }
  }
})
</script>

<style></style>
