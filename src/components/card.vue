<template functional>
  <p class="card">
    {{text}}
  </p>
</template>

<script>
export default {
  props: ['text'],
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
