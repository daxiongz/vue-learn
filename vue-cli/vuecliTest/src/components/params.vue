<template>
  <div>
    <h2>{{ message }}</h2>
    <p>新闻Id: {{ $route.params.newsId }}</p>
    <p>新闻标题: {{ $route.params.newsTitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'params',
  data: function () {
    return {
      message: 'params page'
    }
  },
  // 组件模版中只能使用 beforeRouteEnter 和 beforeRouteLeave 两个函数
  beforeRouteEnter: (to, from, next) => {
    console.log('进入路由前')
    console.log(to)
    console.log(from)
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('离开路由前')
    console.log(to)
    console.log(from)
    next()
  }
}
</script>
