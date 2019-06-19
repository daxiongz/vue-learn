<template>
  <div id="app">
    <div>
      <button @click="show = 1">props</button>
      <button @click="show = 2">event</button>
      <button @click="show = 3">slot</button>
      <button @click="show = 4">big props</button>
      <button @click="show = 5">双向绑定语法糖</button>
      <Props
        v-show="show === 1"
        name="Hello Vue！"
        :type="type"
        :is-visible="false"
        :on-change="handlePropChange"
        title="属性Demo"
        class="test1"
        :class="['test2']"
        :style="{ marginTop: '20px' }"
        style="margin-top: 10px"
      />
      <Events v-show="show === 2" @change="eventChange" :name="name" v-model="checkValue"></Events>
      <div v-show="show === 3">
        <h2>新语法</h2>
        <Slots>
          <p>default</p>
          <template v-slot:title>
            <p>title1.2.3.4</p>
          </template>
          <template v-slot:title>
            <p>titledcasdvc4</p>
          </template>
          <template v-slot:item="props">
            <p>item slot-scope {{ props.value }}</p>
          </template>
        </Slots>
      </div>

      <BigProps
        :name="name"
        :on-change="handleBigChange"
        :slot-default="getDefault()"
        :slot-title="getTitle()"
        :slot-scope-item="getItem"
      ></BigProps>
      <Info v-show="show === 5" 
        :checkedv.sync="checkVal"
        v-model="phoneInfo" 
        :zip-code.sync="zipCode"></Info>
      <info
        v-show="show === 5" 
        :checkedv="checkVal"
        @update:checkedv="val => checkVal = val"
        :phone-info="phoneInfo"
        @change="val => phoneInfo = val"
        :zip-code="zipCode"
        @update:zipCode="val => zipCode = val"
      ></info>
    </div>

    {{ msg }}
    <div>
      <input type="text" v-model="info">
      <button @click="handleClick">添加</button>
    </div>

    <ul>
      <todo-item v-for="(item, index) in list" :key="index">
        <template v-slot:item="data">
          {{data.checked}}
          <span
            :style="{fontSize: '20px', color: data.checked ? 'red' : 'yellow'}"
          >{{ item }}</span>
        </template>
      </todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
import Props from "./components/Prop.vue";
import Events from "./components/Event.vue";
import Slots from "./components/Slot.vue";
import BigProps from "./components/BigProps.vue";
import Info from "./components/Info.vue";

export default {
  name: "app",
  components: {
    TodoItem,
    Props,
    Events,
    Slots,
    BigProps,
    Info
  },
  data() {
    return {
      msg: "daixongz",
      info: 5,
      list: [],
      type: "danger",
      show: 1,
      name: "nnn",
      checkValue: false,
      phoneInfo: {
        areaCode: "086",
        phone: "123"
      },
      zipCode: "300100",
      checkVal: false
    };
  },
  methods: {
    handleClick() {
      this.list.push(this.info);
      this.info = "";
    },
    handlePropChange(val) {
      this.type = val;
    },
    eventChange(val) {
      this.name = val;
    },
    handleBigChange(val) {
      console.log(val);
    },
    getDefault() {
      return [this.$createElement("p", "default slot")];
    },
    getTitle() {
      return [
        this.$createElement("p", "title slot1"),
        this.$createElement("p", "title slot2")
      ];
    },
    getItem(props) {
      return [
        this.$createElement("p", `item slot-scope ${JSON.stringify(props)}`)
      ];
    }
  },
  watch: {
     checkVal: function (newVal, oldVal) {
       console.log('new:', newVal, "<---", oldVal)
     }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
