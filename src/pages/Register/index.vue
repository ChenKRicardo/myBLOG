<template>
  <validate-form @form-submit="onFormSubmit">
    <template #input>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <validate-input
          :rules="emailRules"
          placeholder="请输入你的邮箱"
          type="email"
        ></validate-input>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <validate-input
          :rules="passwordRules"
          placeholder="请输入你的密码"
          type="password"
        ></validate-input>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">记住我</label>
      </div>
    </template>
    <template #submit></template>
  </validate-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import validateInput, { RulesProp } from '../../components/ValidateForm/ValidateInput/index.vue'
import validateForm from '../../components/ValidateForm/index.vue'

export default defineComponent({
  name: 'RegisterPage',
  components: { validateInput, validateForm },
  setup() {
    const emailRules: RulesProp = [
      { type: 'required', message: '邮箱不能为空' },
      { type: 'email', message: '邮箱格式不正确' }
    ]
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' },
      { type: 'password', message: '密码必须是6-16位字母和数字组合' }
    ]
    const router = useRouter()
    const onFormSubmit = (result: boolean) => {
      if (result) {
        router.push({ name: 'login' })
      }
    }
    return {
      emailRules,
      passwordRules,
      onFormSubmit
    }
  }
})
</script>

<style></style>
