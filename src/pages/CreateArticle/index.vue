<template>
  <div class="create-article-page">
    <h4>新建文章</h4>
    <validate-form @form-submit="onFormSubmit">
      <template #input>
        <div class="mb-3">
          <label class="form-label">文章标题:</label>
          <validate-input
            v-model="titleVal"
            :rules="titleRules"
            type="text"
            placeholder="请输入文章标题"
          ></validate-input>
        </div>
        <div class="mb-3">
          <label class="form-label">文章详情:</label>
          <validate-input
            v-model="contentVal"
            rows="10"
            :rules="contentRules"
            type="text"
            tag="textarea"
            placeholder="请输入文章详情"
          ></validate-input>
        </div>
      </template>
      <template #submit>
        <button class="btn btn-primary mb-3">发表文章</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import validateForm from '../../components/ValidateForm/index.vue'
import validateInput, { RulesProp } from '../../components/ValidateForm/ValidateInput/index.vue'
import { useUserStroe } from '@/stroe/user'
import { PostProps } from '@/pages/Column/testData'

export default defineComponent({
  name: 'CreateArticle',
  components: { validateForm, validateInput },
  setup() {
    const titleVal = ref('')
    const contentVal = ref('')
    const userStroe = useUserStroe()
    const router = useRouter()
    const titleRules: RulesProp = [{ type: 'required', message: '文章标题不能为空' }]
    const contentRules: RulesProp = [{ type: 'required', message: '文章详情不能为空' }]
    const onFormSubmit = (result: boolean) => {
      if (result) {
        const { columnId } = userStroe.user
        if (columnId) {
          const newPost: PostProps = {
            id: new Date().getTime(),
            title: titleVal.value,
            content: contentVal.value,
            columnId,
            createAt: `${new Date().toJSON().substring(0, 10)}${new Date()
              .toTimeString()
              .substring(0, 8)}`
          }
          userStroe.createArticle(newPost)
          router.push({ name: 'columnDetail', params: { id: columnId } })
        }
      }
    }
    return {
      titleVal,
      contentVal,
      titleRules,
      contentRules,
      onFormSubmit
    }
  }
})
</script>

<style></style>
