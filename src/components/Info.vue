<template>
  <div class="info">
    <select :value="phoneInfo.areaCode" placeholder="区号" @change="handleAreaCodeChange">
      <option value="+86">+86</option>
      <option value="+60">+60</option>
    </select>
    <input :value="phoneInfo.phone" type="number" placeholder="手机号" @input="handlePhoneChange">
    <input :value="zipCode" type="number" placeholder="邮编" @change="handleZipCodeChange">
    <input type="checkbox" :value="check" @change="handleCheck">
  </div>
</template>
<script>
export default {
  name: "Personalinfo",
  model: {
    prop: "phoneInfo",
    event: "change"
  },
  props: {
    phoneInfo: {
      type: Object
    },
    zipCode: {
      type: String
    },
    checked: {
      type: Number
    }
  },
  data() {
    return {
      check: true
    }
  },
  methods: {
    handleAreaCodeChange(e) {
      this.$emit("change", {
        ...this.phoneInfo,
        areaCode: e.target.value
      });
    },
    handlePhoneChange(e) {
      this.$emit("change", {
        ...this.phoneInfo,
        phone: e.target.value
      });
    },
    handleZipCodeChange(e) {
      this.$emit("update:zipCode", e.target.value);
    },
    handleCheck(e) {
      console.log(typeof(e.target.checked))
      console.log(this.check)
      this.$emit("update:checked", e.target.checked)
    }
  },
  updated() {
    console.log(this.phoneInfo);
    console.log(this.zipCode);
  }
};
</script>
