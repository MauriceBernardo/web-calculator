<template>
  <div 
    class="calculator">
    <result :value = "calcData.result"/>
    <div class="first-row">
      <clear 
        :calc-data="calcData"
        @clearHandled = "updateValue"/>
      <back 
        :calc-data="calcData" 
        @backHandled = "updateValue"/>
      <operationButton 
        :calc-data="calcData" 
        symbol="÷" 
        @operationHandled="updateValue"/>
    </div>
    <div class="main-row">
      <numberButton 
        :value="7" 
        :calc-data="calcData"
        @numberHandled="updateValue"/>
      <numberButton 
        :value="8" 
        :calc-data="calcData"
        @numberHandled="updateValue"/>
      <numberButton 
        :value="9" 
        :calc-data="calcData"
        @numberHandled="updateValue"/>
      <operationButton 
        :calc-data="calcData" 
        symbol="x" 
        @operationHandled="updateValue"/>
    </div>
    <div class="main-row">
      <numberButton 
        :value="4" 
        :calc-data="calcData"
        @numberHandled="updateValue"/>
      <numberButton 
        :value="5" 
        :calc-data="calcData"
        @numberHandled="updateValue"/>
      <numberButton 
        :value="6" 
        :calc-data="calcData"
        @numberHandled="updateValue"/>      
      <operationButton 
        :calc-data="calcData" 
        symbol="-" 
        @operationHandled="updateValue"/>
    </div>
    <div class="main-row">
      <numberButton 
        :value="1" 
        :calc-data="calcData"
        @numberHandled="updateValue"/>
      <numberButton 
        :value="2" 
        :calc-data="calcData"
        @numberHandled="updateValue"/>
      <numberButton 
        :value="3" 
        :calc-data="calcData"
        @numberHandled="updateValue"/>
      <operationButton 
        :calc-data="calcData" 
        symbol="+" 
        @operationHandled="updateValue"/>
    </div>
    <div class="bottom-row">
      <numberButton 
        :value="0" 
        :width="3" 
        :calc-data="calcData"
        @numberHandled="updateValue"
      />
      <operationButton 
        :calc-data="calcData" 
        symbol="=" 
        @operationHandled="updateValue"/>
    </div>
  </div>
</template>

<script>
import result from './calculator/Result.vue'
import clear from './calculator/Clear.vue'
import back from './calculator/Back.vue'
import numberButton from './calculator/Numberbutton.vue'
import operationButton from './calculator/Operationbutton.vue'

export default {
  name: 'Calculator',

  components: {
    result,
    clear,
    back,
    operationButton,
    numberButton
  },
  data() {
    return {
      calcData: {
        result: '0',
        lastOperand: null,
        storedValue: 0
      }
    }
  },

  methods: {
    updateValue({ result, storedValue, lastOperand }) {
      this.calcData.result = result
      this.calcData.storedValue = storedValue
      this.calcData.lastOperand = lastOperand
    }
  }
}
</script>

<style scoped>
.calculator {
  background-color: black;
  margin-top: 40px;
  height: 470px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-items: space-evenly;
  font-family: monospace;
  font-size: 32px;
}

.first-row {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1px;
}

.main-row {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-around;
  margin-bottom: 0.8px;
}

.bottom-row {
  flex: 1;
  display: flex;
  flex-direction: row;
}
</style>
