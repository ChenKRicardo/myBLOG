<template>
  <div class="container">
    <global-header :user="user"></global-header>
    <router-view></router-view>
    <!-- <column-list></column-list> -->
    <global-footer></global-footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import GlobalHeader, { UserProps } from './components/Header/index.vue'
import GlobalFooter from './components/Footer/index.vue'
// import ColumnList from './pages/ColumnList/index.vue'

const testUser: UserProps = {
  isLogin: false,
  name: 'Ricardo'
}
export default defineComponent({
  name: 'App',
  components: { GlobalHeader, GlobalFooter },
  setup() {
    const useroute = useRoute()
    return {
      user: testUser,
      useroute
    }
  }
})
</script>

<style></style>
