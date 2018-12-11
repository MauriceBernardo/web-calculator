<template>
  <Basebutton 
    :symbol="symbol" 
    class="clear"
    @clicked="handleClear"
  />
</template>
<script>
import Basebutton from './Basebutton.vue'
export default {
  name: 'Clear',
  components: {
    Basebutton
  },
  props: {
    symbol: {
      type: String,
      default: 'C'
    },
    // eslint-disable-next-line vue/require-default-prop
    calcData: {
      type: Object
    }
  },
  methods: {
    handleClear() {
      this.calcData.result = '0'
      this.calcData.storedValue = 0
      this.$emit('clearHandled', this.calcData)
    }
  }
}
</script>

<style scoped>
.clear {
  margin: 0 0.8px 0 0;
  flex: 2;
}
</style>
