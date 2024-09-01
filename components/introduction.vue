<template>
  <div class="container mx-auto text-center">
    <h1 class="font-bold text-6xl text-white/85" data-aos="fade-up">Moyogi</h1>
    <h2 class="text-3xl p-3 text-[#8ea1a9]" data-aos="fade-up">Software Engineer</h2>
    <div class="flex justify-center">
      <div class="w-full sm:w-full md:w-4/6 lg:w-full">
        <div data-aos="fade-up">
          <text-card
          text="Hi! I am a Software Engineer and I started my career in 2009 by making mods for various video games, marking the start of my journey in software development. Over the years, I have worked on many projects to create a diverse portfolio. From enhancing user engagement with custom Discord bots, to creating immersive games, developing websites, building robust backend APIs and prototyping AI concepts."/>
          
          <div class="pt-4 pb-4">
            <a
            class="text-[#3C8BC4]"
            v-for="social in socials"
            :href="social.url">
            <font-awesome :icon="['fab', social.icon]" size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hero {
  background: linear-gradient(to bottom, rgba(20, 21, 29,1) 0%, rgba(20, 21, 29,1) 83%, rgba(20, 21, 29,0) 100%);
}
</style>

<script lang="ts" setup>
const socials = ref([
  {
    icon: 'github',
    url: 'https://google.com'
  }
])
</script>