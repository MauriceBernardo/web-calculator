<template>
  <div class="calculator" v-on:click="handleClick">
    <div class="result">{{result}}</div>
    <div class="first-row">
      <button class="clear">C</button>
      <button class="back-arrow">←</button>
      <button class="operation">÷</button>
    </div>
    <div class="main-row">
      <button class="main-number">7</button>
      <button class="main-number middle">8</button>
      <button class="main-number middle">9</button>
      <button class="operation">x</button>
    </div>
    <div class="main-row">
      <button class="main-number">4</button>
      <button class="main-number middle">5</button>
      <button class="main-number middle">6</button>
      <button class="operation">-</button>
    </div>
    <div class="main-row">
      <button class="main-number">1</button>
      <button class="main-number middle">2</button>
      <button class="main-number middle">3</button>
      <button class="operation">+</button>
    </div>
    <div class="bottom-row">
      <button class="zero">0</button>
      <button class="operation">=</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      result: 0,
      lastOperand: null,
      storedValue: 0
    }
  },
  methods: {
    handleClick (e) {
      if (isNaN(parseInt(e.target.innerText))) {
        this.handleSymbol(e.target.innerText)
      } else {
        this.handleNumber(e.target.innerText)
      }
    },

    handleSymbol (symbol) {
      switch (symbol) {
        case 'C':
          this.result = 0
          this.storedValue = 0
          break

        case '←':
          if (this.result.length === 1) {
            this.result = 0
          } else {
            this.result = this.result.substring(0, this.result.length - 1)
          }
          break

        case '=':
          if (this.lastOperand === null) {
            this.result = 0
          }
          this.applyMath(this.lastOperand)
          this.lastOperand = null
          this.result = this.storedValue.toString()
          this.storedValue = 0
          break

        default:
          this.handleMath(symbol)
          break
      }
    },

    handleNumber (number) {
      if (this.result === 0) {
        this.result = number
      } else {
        this.result += number
      }
    },

    handleMath (operand) {
      if (parseInt(this.result) === 0) {
        this.result = 0
      }
      if (this.storedValue === 0) {
        this.storedValue = parseInt(this.result)
      } else {
        this.applyMath(operand)
      }

      this.lastOperand = operand
      this.result = 0
    },

    applyMath (operand) {
      switch (operand) {
        case '+':
          this.storedValue += parseInt(this.result)
          break
        case '-':
          this.storedValue -= parseInt(this.result)
          break
        case 'x':
          this.storedValue *= parseInt(this.result)
          break
        case '÷':
          this.storedValue /= parseInt(this.result)
          break
      }
    }
  }
}
</script>

<style scoped>
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #222;
}

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

.result {
  color: white;
  flex: 1;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 10px;
}

.first-row {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1px;
  color: black;
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

.bottom-row :first-child {
  flex: 3;
}

button {
  border: none;
  padding: 0;
  flex: 1;
  background-color: #999;
  color: black;
}

button:hover {
  background-color: #aaa;
}

button:active {
  background-color: #888;
}

.operation {
  background-color: orange;
  color: white;
}

.operation:hover {
  background-color: rgb(250, 178, 44);
}

.operation:action {
  background-color: orangered;
}

.main-number {
  margin: 0 0.8px 0 0;
}

.main-number.middle {
  margin: 0 0.8px 0 0;
}

.back-arrow {
  margin: 0 0.8px 0 0;
}

.clear {
  margin: 0 0.8px 0 0;
}

.zero {
  margin: 0 0.8px 0 0;
}

.clear {
  flex: 2;
}
</style>
