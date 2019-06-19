<template>
  <div>
    name: {{name}}
    <br>
    type: {{type}}
    <br>
    list: {{list}}
    <br>
    isVisible: {{isVisible}}
    <button @click="handleClick">change type</button>
  </div>
</template>


<script>
export default {
  name: "Props",
  inheritAttrs: false,
  props: {
    // props 验证会在组件实例创建值之前进行验证，所以实例属性在验证操作中无法使用
    // null 和 undefined 会通过任何类型验证
    name: String,
    type: {
      // 自定义验证函数
      validator: function(val) {
        return ["success", "warning", "danger"].includes(val);
      }
    },
    list: {
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: () => []
    },
    isVisible: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    handleClick() {
      this.onChange(this.type === "success" ? "warning" : "success");
    }
  }
}
</script>
