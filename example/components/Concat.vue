<template>
  <div v-html="md">

  </div>
</template>

<script lang="ts">
  import md from './concat.md'
  import marked from 'marked'
  import hlt from 'highlight.js'
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code) {
      return hlt.highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  });
  export default {
    name: "Concat",
    data: function () {
      return {
        md: marked(md)
      }
    }
  }
</script>

<style scoped>

</style>
