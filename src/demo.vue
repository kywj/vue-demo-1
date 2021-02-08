<template>
  <div class="red">
    这是 Demo 内部
    {{message}}
  </div>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style scoped>
  .red{
    color: red;
    border: 1px solid blue;
  }
</style>