<template>
  <div>
    <!-- 父级模版里的所有内容都是在父级作用域中编译的；子模版里的所有内容都是在子作用域中编译的 -->
    <slot></slot>
    <slot name="title"></slot>
    <slot name="item" v-bind="{ value: 'vue'}"></slot>
    <slot name="title"></slot>

  </div>
</template>

<script>
export default {
  name: "SlotDemo"
}
</script>

