<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center">
      <div class="col-3 text-center">
        <img :src="column?.avator" :alt="column?.title" class="rounded-circle" />
      </div>
      <div class="col-9">
        <h4>{{ column?.title }}</h4>
        <p class="text-muted">{{ column?.description }}</p>
      </div>
    </div>
    <post-list :list="list"></post-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { testPosts, testData } from '@/pages/Column/testData'
import PostList from '@/pages/PostList/index.vue'

export default defineComponent({
  name: 'ColumDetail',
  components: { PostList },
  setup() {
    const route = useRoute()
    const currentId = +route.params.id
    const column = testData.find((c) => c.id === currentId)
    const list = testPosts.filter((post) => post.columnId === currentId)
    return {
      column,
      list
    }
  }
})
</script>

<style></style>
