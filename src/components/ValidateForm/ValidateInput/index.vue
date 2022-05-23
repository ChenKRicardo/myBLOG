<template>
  <div class="validate-input-conatiner pb-3">
    <input
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      v-model="inputRef.val"
      @blur="validateInput"
      v-bind="$attrs"
    />
    <div class="form-text" :class="{ 'invalid-feedback': inputRef.error }" v-if="inputRef.error">
      {{ inputRef.message }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, onMounted } from 'vue'
import emitter from '@/utils/eventBus'

interface RuleProp {
  type: 'required' | 'email' | 'password'
  message: string
}
export type RulesProp = RuleProp[]
export default defineComponent({
  name: 'validateInput',
  props: {
    rules: Array as PropType<RulesProp>
  },
  inheritAttrs: false,
  setup(props) {
    const emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
    const passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
    const inputRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every((rule) => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            case 'password':
              passed = passwordReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
      }
    }
    onMounted(() => {
      emitter.emit('form-item-created', '11tyr')
    })
    return {
      inputRef,
      validateInput
    }
  }
})
</script>

<style></style>
