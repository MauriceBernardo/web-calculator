<template>
  <baseButton 
    :symbol="symbol" 
    class="operationButton"
    @clicked="handleOperation"/>
</template>

<script>
import baseButton from './Basebutton.vue'
export default {
  name: 'Operationbutton',
  components: {
    baseButton
  },
  props: {
    symbol: {
      type: String,
      default: ''
    },
    // eslint-disable-next-line vue/require-default-prop
    calcData: {
      type: Object
    }
  },
  methods: {
    handleOperation() {
      if (this.symbol === '=') {
        this.handleEqual()
      } else {
        this.handleMath()
      }
      this.$emit('operationHandled', this.calcData)
    },

    handleEqual() {
      if (this.calcData.lastOperand === null) {
        this.calcData.result = '0'
      }
      this.applyMath(this.calcData.lastOperand)
      this.calcData.lastOperand = null
      this.calcData.result = String(this.calcData.storedValue)
      this.calcData.storedValue = 0
    },

    handleMath() {
      if (parseInt(this.calcData.result) === 0) {
        this.calcData.result = '0'
      }
      if (this.calcData.storedValue === 0) {
        this.calcData.storedValue = parseInt(this.calcData.result)
      } else {
        this.calcData.applyMath(this.symbol)
      }

      this.calcData.lastOperand = this.symbol
      this.calcData.result = '0'
    },

    applyMath(operand) {
      switch (operand) {
        case '+':
          this.calcData.storedValue += Number(this.calcData.result)
          break
        case '-':
          this.calcData.storedValue -= Number(this.calcData.result)
          break
        case 'x':
          this.calcData.storedValue *= Number(this.calcData.result)
          break
        case '÷':
          this.calcData.storedValue /= Number(this.calcData.result)
          break
      }
    }
  }
}
</script>

<style scoped>
.operationButton {
  background-color: orange;
  color: white;
  margin: 0;
}

.operationButton:hover {
    background-color: rgb(250, 178, 44);
}

.operationButton:active {
    background-color: rgb(216, 140, 0);
}

</style>
