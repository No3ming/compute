<template>
  <div class="hljs" v-html="md">

  </div>
</template>

<script lang="ts">
  import md from './concat.md'
  console.log(md)
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
