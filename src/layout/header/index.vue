<template>
  <el-header>Header</el-header>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Header'
  })
</script>

<style scoped>
  .el-header {
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
  }
</style>
