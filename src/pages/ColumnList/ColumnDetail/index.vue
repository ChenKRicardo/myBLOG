<template>
  <h1>文章详情页{{ routeInfo }}</h1>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'ColumDetail',
  setup() {
    const routeInfo = useRoute()
    onMounted(() => {
      console.log(routeInfo)
    })
    return {
      routeInfo
    }
  }
})
</script>

<style></style>
