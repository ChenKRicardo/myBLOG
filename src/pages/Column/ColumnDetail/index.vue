<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center">
      <div class="col-4 text-center">
        <img :src="column?.avator" :alt="column?.title" class="rounded-circle" />
      </div>
      <div class="col-8">
        <h4>{{ column?.title }}</h4>
        <p class="text-muted">{{ column?.description }}</p>
      </div>
    </div>
    <post-list :postsList="list"></post-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import PostList from '@/pages/PostList/index.vue'
import { useArticleStore } from '@/stroe/article'

export default defineComponent({
  name: 'ColumDetail',
  components: { PostList },
  setup() {
    const route = useRoute()
    const currentId = +route.params.id
    const article = useArticleStore()
    const column = article.getColumnById(currentId)
    const list = article.getPostsById(currentId)
    return {
      column,
      list
    }
  }
})
</script>

<style></style>
