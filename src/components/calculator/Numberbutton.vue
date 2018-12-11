<template>
  <baseButton 
    :symbol="value" 
    :style="style"
    class="NumberButton"
    @clicked="handleNumber"/>
</template>

<script>
import baseButton from './Basebutton.vue'
export default {
  name: 'NumberButton',
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
    // eslint-disable-next-line vue/require-default-prop
    calcData: {
      type: Object
    }
  },
  computed: {
    style() {
      return 'flex: ' + this.width
    }
  },
  methods: {
    handleNumber() {
      if (this.calcData.result === '0') {
        this.calcData.result = String(this.value)
      } else {
        this.calcData.result += String(this.value)
      }
      this.$emit('numberHandled', this.calcData)
    }
  }
}
</script>
