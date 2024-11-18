<script setup lang="ts">

</script>

<template>
  <div
    fixed
    bottom-0
    left-0
    top-0
    h-full
    flex
    flex-col
    bg="white/4"
    w="240px"
  >
    <NuxtLink
      to="/"
      after:content="[]"
      after:bg="white/50"
      after:w="[calc(100%-1rem)]"
      relative
      flex-grow-0
      font-size-6
      after:absolute
      after:bottom-0
      after:right-2
      after:h-px
    >
      <div p-3>
        BNS NEO
      </div>
    </NuxtLink>
    <nav
      mt-3
      flex-grow-1
    >
      <ul>
        <li
          v-for="i in 6"
          :key="i"
          p-3
        >
          <NuxtLink
            block
            to="/skills"
          >
            무공 비급
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
</style>
