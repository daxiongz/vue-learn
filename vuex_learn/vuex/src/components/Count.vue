<template>
  <div>
    <h2>{{ msg }}</h2>
    <hr>
    <h3>计算属性：{{ $store.state.count }} ---- {{ count }}</h3>
    <p>
      <button @click="$store.commit('add', 10)">add</button>
      <button @click="reduce(12)">reduce</button>
    </p>
    <ol>
      访问状态对象：
      <li>计算属性</li>
      <li>mapState Object</li>
      <li>mapState Array</li>
    </ol>
    <ol>模版中修改状态：
      <li>唤醒 vuex 中的方法， $store.commit('add')</li>
      <li>传参， $store.commit('add', params), 参数可以以对象方式传递</li>
      <li>通过映射函数 mapMutations 将 vuex 的方法映射出来，这样就可以像平常 methods 方法一样使用</li>
    </ol>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
      msg: 'Hello Vuex'
    }
  },
  store,
  // 计算属性
  /* computed: {
    count: function () {
      return this.$store.state.count
    }
  } */
  // mapState 对象
  /* computed: mapState({
    count: state => state.count
  }) */
  // mapState 数组，映射的 state 子节点名称与计算属性名称 相同时
  computed: {
    ...mapState(['count']),
    /* count: function () {
      return this.$store.getters.count
    } */
    ...mapGetters(['count'])
  },
  methods: mapMutations(['add', 'reduce'])
}
</script>
