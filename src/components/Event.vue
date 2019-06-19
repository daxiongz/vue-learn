<template>
  <div>
    name: {{ name || "--"}}
    <br>
    <input type="text" :value="name" @change="handleChange">
    <br>
    <!-- <input type="checkbox"
      :checked="checked"
      @change="changes"> -->
    <div @click="handleDivClick">
      <button @click="handleClick">重置成功</button>
      <button @click.stop="handleClick">重置失败</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDemo",
  props: {
    name: String,
    checked: Boolean
  },
  // model: {
  //   prop: "checked",
  //   event: "change"
  // },
  methods: {
    handleChange(e) {
      console.log(this)
      // this.$emit("change", e.target.value);
      // 向外面 emit 事件的时候，采用kebab-case命名，因为在html重的驼峰 会被转换成 kebab-case
      console.log(this.$emit("change", e.target.value))
      console.log(e);
    },
    handleDivClick() {
      this.$emit("change", "");
    },
    handleClick() {
      console.log(222);
    },
    // changes($event) {
    //   console.log($event)
    //   this.$emit("change", $event.target.checked)
    // }
  }
}
</script>