<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>导航：
      <!-- <router-link to="/">首页</router-link> -->
      <!-- <router-link :to="{ name: 'HelloWorld', params: { username: 'daxiongz', path: 'www'}}">首页</router-link>
      <router-link to="/hi">Hi页</router-link>
      <router-link to="/hi/hi1">Hi1页</router-link>
      <router-link to="/hi/hi2">Hi2页</router-link> -->
      <router-link :to="{ name: 'index' }">首页</router-link> |
      <router-link :to="{ name: 'hi' }">Hi页面</router-link> |
      <router-link to="/params/198/daxiongz-is-good!">params</router-link> |
      <router-link to="/indexPage">indexPage</router-link> |
      <router-link to="/daxiong">daxiongz</router-link>
      <router-link to="cdacs">错误页面</router-link>
    </p>
    <p>
      <button @click="goBack">后退</button>
      <button @click="goNext">前进</button>
      <button @click="goHome">回到首页</button>
    </p>
    <!-- transition 只能作用于单个标签 -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

      <router-view name="left" style="float: left; width: 50%; height: 300px; background-color: #eee;"></router-view>
      <router-view name="right" style="float: right; width: 50%; height: 300px; background-color: #e0e;"></router-view>
<!-- <ol>路由传值：
  <li>通过 route 文件中的 name 属性</li>
  <li>通过 router-link 标签中的 :to 传参</li>
</ol>
<p>{{ $route.name }}</p> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    // 后退
    goBack: function () {
      this.$router.go(-1)
    },
    // 前进
    goNext: function () {
      this.$router.go(1)
    },
    // 跳转到指定路由页面xxx
    // this.$router.push('xxx')
    goHome: function () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity .5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity .5s;
}
</style>
