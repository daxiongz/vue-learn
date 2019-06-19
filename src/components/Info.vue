<template>
  <div class="info">
    <select :value="phoneInfo.areaCode" placeholder="区号" @change="handleAreaCodeChange">
      <option value="+86">+86</option>
      <option value="+60">+60</option>
    </select>
    <input :value="phoneInfo.phone" type="number" placeholder="手机号" @input="handlePhoneChange">
    <input :value="zipCode" type="number" placeholder="邮编" @change="handleZipCodeChange">
    <input type="checkbox" :checked="checkedv" @change="handleCheck">
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
    checkedv: {
      type: Boolean
    }
  },
  data() {
    return {
      // check: this.checked
      
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
      this.$emit("update:checkedv", e.target.checked)
      console.log('indo:', e.target.checked)
    }
  }
};
</script>
