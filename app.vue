<template>
  <NuxtPage />
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Moyogi's Portfolio",
  ogTitle: "Moyogi's Portfolio",
  description: "A portfolio website showcasing Moyogi's projects and experience.",
  ogDescription: "A portfolio website showcasing Moyogi's projects and experience.",
  ogImage: 'https://moyogi.dev/img/social_card.png',
  twitterCard: 'summary_large_image',
})
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Quicksand:400,600,700&display=swap');
  body {
    font-family: 'Quicksand', sans-serif !important;
    background: #14151d;
    overflow-x: hidden;
  }
</style>
