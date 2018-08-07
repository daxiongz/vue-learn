<template>
  <div class="hi">
    <h1>{{ message }}</h1>

    <router-view class="hiChildren"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  // data () {
  //   return {
  //     msg: 'I am daixongz'
  //   }
  // }
  data: function () {
    return {
      message: 'I am daxiongz'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
