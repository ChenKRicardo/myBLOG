<template>
  <div class="container">
    <global-header></global-header>
    <router-view></router-view>
    <!-- <column-list></column-list> -->
    <global-footer></global-footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import GlobalHeader from './components/Header/index.vue'
import GlobalFooter from './components/Footer/index.vue'

export default defineComponent({
  name: 'App',
  components: { GlobalHeader, GlobalFooter }
})
</script>

<style></style>
