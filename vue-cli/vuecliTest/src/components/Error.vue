<template>
  <div class="hi">
    <h1>{{ message }}</h1>
    <h2>无此页面！</h2>
  </div>
</template>

<script>
export default {
  name: 'Error',
  // data () {
  //   return {
  //     msg: 'I am daixongz'
  //   }
  // }
  data: function () {
    return {
      message: 'Error: 404'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
