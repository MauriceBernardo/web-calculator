<template>
  <Basebutton symbol="<-" class="back" @clicked="handleBack"/>
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
    handleBack() {
      if (this.calcData.result.length === 1) {
        this.calcData.result = "0";
      } else {
        this.calcData.result = this.calcData.result.substring(
          0,
          this.calcData.result.length - 1
        );
      }
      this.$emit("backHandled", this.calcData);
    }
  }
};
</script>
