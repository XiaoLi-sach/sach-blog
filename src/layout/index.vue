<template>
  <div class="body">
    <div class="side">
      <side />
    </div>
    <div class="main">
      <div class="header">
        <Header />
      </div>
      <div class="content">
        <Content />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Side from '../layout/side/index.vue'
  import Header from '../layout/header/index.vue'
  import Content from '../layout/content/index.vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Layout',
    components: {
      Side,
      Header,
      Content
    }
  })
</script>

<style scoped></style>
