<template>
  <Basebutton 
    :symbol="symbol"
    class="back" 
    @clicked="handleBack"/>
</template>

<script>
import Basebutton from './Basebutton.vue'
export default {
  name: 'Clear',
  components: {
    Basebutton
  },
  props: {
    width: {
      type: Number,
      default: 1
    },
    symbol: {
      type: String,
      default: '<-'
    },
    // eslint-disable-next-line vue/require-default-prop
    calcData: {
      type: Object
    }
  },
  methods: {
    handleBack() {
      if (this.calcData.result.length === 1) {
        this.calcData.result = '0'
      } else {
        this.calcData.result = this.calcData.result.substring(
          0,
          this.calcData.result.length - 1
        )
      }
      this.$emit('backHandled', this.calcData)
    }
  }
}
</script>
