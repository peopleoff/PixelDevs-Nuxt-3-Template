<script setup lang="ts">
defineOgImageComponent("NuxtSeo", {
  title: "Home Page",
  description: "Home Page Description",
  colorMode: "dark",
});
</script>

<template>
  <div class="bg-background">
    <ColorMode />
    <Welcome />
  </div>
</template>

<style>
html {
  font-family: "Roboto";
}
</style>
