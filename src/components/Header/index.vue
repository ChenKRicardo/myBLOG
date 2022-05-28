<template>
  <nav class="navbar bg-primary justify-content-between px-4 mb-4">
    <div class="container mx-auto navbar">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/blog.png" alt="" width="50" height="50" />
      </router-link>
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
            <drop-down-item
              ><router-link to="/createArticle" class="dropdown-item"
                >添加文章</router-link
              ></drop-down-item
            >
            <drop-down-item disabled><a href="#" class="dropdown-item">编辑资料</a></drop-down-item>
            <drop-down-item><a href="#" class="dropdown-item">退出登录</a></drop-down-item>
          </drop-down>
        </li>
      </ul>
    </div>
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

<style>
.navbar {
  color: rgba(255, 255, 255, 0.8);
  font-family: sans-serif;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  background: linear-gradient(to top right, rgba(90, 149, 207, 0.5), rgba(58, 76, 99, 0.8));
  box-shadow: 10px -10px 20px rgba(0, 0, 0, 0.2), -10px 10px 20px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  border-radius: 10px;
}
</style>
