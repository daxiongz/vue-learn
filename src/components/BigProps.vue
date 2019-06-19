<template>
  <div>
    {{ name }}
    <br>
    <button @click="handleChange">change name</button>
    <br>
    <!-- {{ slotDefault }} -->
    <VNodes :VNodes="slotDefault"></VNodes>
    <br>
    <VNodes :VNodes="slotTitle"></VNodes>
    <br>
    <VNodes :VNodes="slotScopeItem({ value: 'vue' })"></VNodes>
  </div>
</template>

<script>
export default {
  name: "BigProps",
  components: {
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes
    }
  },
  props: {
    name: String,
    onChange: {
      type: Function,
      default: () => {}
    },
    slotDefault: Array,
    slotTitle: Array,
    slotScopeItem: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    handleChange() {
      this.onChange("Hello vue");
    }
  }
}
</script>

