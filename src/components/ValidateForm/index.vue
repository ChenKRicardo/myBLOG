<template>
  <form class="validate-form-container">
    <slot name="input"></slot>
    <div class="sumit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">注册</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import emitter from '@/utils/eventBus'

export default defineComponent({
  name: 'validateForm',
  emits: ['form-submit'],
  setup(props, { emit }) {
    const submitForm = () => {
      emit('form-submit', true)
    }
    emitter.on('form-item-created', (test: string) => {
      console.log(test)
    })
    onUnmounted(() => {
      emitter.off('form-item-created')
    })
    return {
      submitForm
    }
  }
})
</script>

<style></style>
