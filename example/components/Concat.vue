<template>
  <div v-html="md"></div>
</template>

<script lang="ts">
  import md from './concat.md'
  export default {
    name: "Concat",
    data: function () {
      return {
        md: md
      }
    }
  }
</script>

<style scoped>

</style>
