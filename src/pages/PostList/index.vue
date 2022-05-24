<template>
  <div class="post-lits">
    <article v-for="post in list" :key="post.id" class="card mb-3 shadow-sm">
      <div class="card-body">
        <h4>{{ post.title }}</h4>
        <div class="row my-3 align-items-center">
          <div v-if="post.image" class="col-3 w-auto">
            <img :src="post.image" :alt="post.title" class="rounded-lg" />
          </div>
          <p :class="{ 'col-9': post.image }">{{ post.content }}</p>
          <span class="text-muted">{{ post.createAt }}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { PostProps } from '../ColumnList/testData'

export default defineComponent({
  name: 'PostList',
  props: {
    list: {
      require: true,
      type: Array as PropType<PostProps[]>
    }
  }
})
</script>

<style></style>
