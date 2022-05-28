<template>
  <div class="home-page container-md">
    <section class="container py-3 text-center">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="@/assets/home.png" alt="" class="rounded mx-auto d-block w-50" />
          <h2 class="text-center text-muted">随心写作,自由表达</h2>
          <p>
            <button class="btn btn-primary" @click="toCreateActricle">开始写文章</button>
          </p>
        </div>
      </div>
    </section>
    <h4 class="fw-bold text-center">发现精彩</h4>
    <column-page :list="list"></column-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useArticleStore } from '@/stroe/article'
import ColumnPage from '@/pages/Column/index.vue'

export default defineComponent({
  name: 'HomePage',
  components: { ColumnPage },
  setup() {
    const article = useArticleStore()
    const router = useRouter()
    const toCreateActricle = () => {
      router.push({ name: 'createArticle' })
    }
    return {
      list: article.columns,
      toCreateActricle
    }
  }
})
</script>

<style></style>
