<template>
  <h1>Table of Content</h1>
  <p v-for="route in $router.options.routes" :key="route.path">
    <router-link v-if="route.path !== '/'" :to="route.path">{{ route.path }}</router-link>
  </p>

  <teleport to="#endofbody">
    放在body末尾(TOC)
  </teleport>
</template>

<script>
export default {
  
}
</script>

<style>

</style>