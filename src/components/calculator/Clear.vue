<template>
  <Basebutton symbol="C" class="clear" @clicked="handleClear"/>
</template>
<script>
import Basebutton from "./Basebutton.vue";
export default {
  name: "Clear",
  components: {
    Basebutton
  },
  props: {
    calcData: {
      type: Object,
      calcData: {
        result: "0",
        lastOperand: null,
        storedValue: 0
      }
    }
  },
  methods: {
    handleClear() {
      this.calcData.result = "0";
      this.calcData.storedValue = 0;
      this.calcData.lastOperand = null;
      this.$emit("clearHandled", this.calcData);
    }
  }
};
</script>

<style scoped>
.clear {
  margin: 0 0.8px 0 0;
  flex: 2;
}
</style>
