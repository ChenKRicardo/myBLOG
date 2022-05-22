<template>
  <div class="dropdown" ref="dropdownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggle">
      {{ title }}</a
    >
    <ul
      class="dropdown-menu"
      aria-labelledby="dropdownMenuButton1"
      :style="{ display: 'block' }"
      v-show="isOpen"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutSide from '@/hooks/useClickOutside'

export default defineComponent({
  name: 'DropDown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false)
    const dropdownRef = ref<HTMLElement | null>(null)
    const toggle = () => {
      isOpen.value = !isOpen.value
    }
    // 当用户点击除下拉菜单之外的区域且菜单为打开状态,设置为false
    const isClickOutsied = useClickOutSide(dropdownRef)
    watch(isClickOutsied, () => {
      if (isClickOutsied.value && isOpen.value) {
        isOpen.value = false
      }
    })
    return {
      isOpen,
      toggle,
      dropdownRef
    }
  }
})
</script>

<style></style>
