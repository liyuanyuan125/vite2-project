<template>
  <div></div>
</template>
<script setup lang="ts">
fetch("api/posts/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
</script>
