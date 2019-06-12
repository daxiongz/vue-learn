<template>
  <div id="app">
    <div>
      <button>props</button>
      <Prop></Prop>
    </div>
    {{ msg }}

    <div>
      <input type="text" v-model="info">
      <button @click="handleClick">添加</button>
    </div>

    <ul>
      <todo-item v-for="(item, index) in list"
      :key="index">
        <template v-slot:item="data">
          {{data.checked}}
          <span :style="{fontSize: '20px', color: data.checked ? 'red' : 'yellow'}">{{ item }}</span>
        </template>
      </todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'

export default {
  name: 'app',
  components: {
    TodoItem
  },
  data() {
    return {
      msg: "daixongz",
      info: 5,
      list: []
    }
  },
  methods: {
    handleClick() {
      this.list.push(this.info);
      this.info = "";
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
</style>
