<template>
  <baseButton :symbol="value" :style="style" class="NumberButton" @clicked="handleNumber"/>
</template>

<script>
import baseButton from "./Basebutton.vue";
export default {
  name: "NumberButton",
  components: {
    baseButton
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 1
    },
    calcData: {
      type: Object,
      calcData: {
        result: "0",
        lastOperand: null,
        storedValue: 0
      }
    }
  },
  computed: {
    style() {
      return "flex: " + this.width;
    }
  },
  methods: {
    handleNumber() {
      if (this.calcData.result === "0") {
        this.calcData.result = String(this.value);
      } else {
        this.calcData.result += String(this.value);
      }
      this.$emit("numberHandled", this.calcData);
    }
  }
};
</script>
