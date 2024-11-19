<script lang="ts" setup>
const route = useRoute();

const id = route.params.id;

console.log(`route.query`, route.params);
</script>

<template>
  <div>
    무공 비급 {{ id }}
  </div>
</template>

<style>

</style>
