<template>
  <div class = "result">
    {{ value }}
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: {
    value: {
      type: String,
      default: '0'
    }
  }
}
</script>

<style scoped>
.result {
  color: white;
  flex: 1;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 10px;
}
</style>
