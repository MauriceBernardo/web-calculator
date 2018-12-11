<template>
  <button 
    class="baseButton" 
    @click="handleClick">{{ symbol }}</button>
</template>

<script>
export default {
  name: 'Basebutton',
  props: {
    // eslint-disable-next-line vue/require-prop-types
    symbol: {
      default: ''
    }
  },
  methods: {
    handleClick() {
      this.$emit('clicked')
    }
  }
}
</script>

<style scoped>
.baseButton {
  border: none;
  padding: 0;
  flex: 1;
  background-color: #999;
  color: black;
  margin: 0 0.8px 0 0;
}

.baseButton:hover {
    background-color: #aaa;
}

.baseButton:active {
    background-color: #888;
}

</style>
