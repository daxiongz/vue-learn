<template>
  <div>
    name: {{name}}
    <br>
    type: {{type}}
    <br>
    list: {{list}}
    <br>
    isVisible: {{isVisible}}
    <button @>change type</button>
  </div>
</template>


<script>
export default {
  name: "PropsDemo",
  // inheritAttrs: false,
  props: {

  }
}
</script>
