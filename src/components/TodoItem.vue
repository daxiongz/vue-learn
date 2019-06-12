<template>
  <li class="item">
    <input type="checkbox" v-model="check">

    <slot name="item" :checked="check"></slot>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      default: ""
    }
  },
  data() {
      return {
          check: false
      }
  }
};
</script>

<style>
.item {
  color: red;
}
</style>


