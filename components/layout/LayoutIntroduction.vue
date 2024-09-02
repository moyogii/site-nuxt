<template>
  <div class="container mx-auto text-center">
    <h1 class="font-bold text-6xl text-white/85" data-aos="fade-up">Moyogi</h1>
    <h2 class="text-3xl p-3 text-[#8ea1a9]" data-aos="fade-up">Software Engineer</h2>
    <div class="flex justify-center">
      <div class="w-full sm:w-full md:w-4/6 lg:w-full">
        <div data-aos="fade-up">
          <UiTextCard
          text="Hello! I began my software development journey in 2009, crafting mods for various video games, which ignited my passion for technology and software development. Over the years, I have built a diverse portfolio by working on a wide range of projects. My experience spans enhancing user engagement with custom Discord bots, creating immersive gaming experiences, developing dynamic websites, building robust backend APIs, and prototyping innovative AI concepts. "/>
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
import UiTextCard from '../ui/UiTextCard.vue';

const socials = ref([
  {
    icon: 'github',
    url: 'https://github.com/moyogii'
  }
])
</script>