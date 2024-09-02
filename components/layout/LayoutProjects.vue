<template>
  <section class="flex justify-center py-5 bg-[#14151d]">
    <div data-aos="fade-u" class="container mx-auto text-center">
      <h3 class="text-[#3C8BC4] font-semibold text-3xl">Projects</h3>
      <div class="grid grid-cols-3 sm:grid-cols-2 gap-4 my-4">
        <UiProjectCard
        v-for="project in experience"
        :title="project.title"
        :description="project.description"
        :website="project.website"
        :image="project.image"
        :tags="project.tags"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Project } from '../../helpers/interfaces/project.interface';

const experience = reactive<Project[]>([
  {
    title: 'Monolith',
    description: "Monolith is a online player driven game mod for Garry's Mod that gives the players the power to make a life of their own.",
    website: 'https://www.monolithservers.com/',
    image: 'monolith',
    tags: [
      {
        content: 'Contractor'
      }
    ]
  },
  {
    title: 'Project: Synapse',
    description: "Project: Synapse is a online game mod for Garry's Mod that takes the best from the Half-Life franchise and creates a one of a kind experience for players.",
    website: 'https://www.monolithservers.com/',
    image: 'synapse',
    tags: [
      {
        content: 'Contractor'
      }
    ]
  },
  {
    title: 'Sparrow',
    description: "An open-source AIO, multi-purpose Discord bot, that aims to provide a stable and unique feature set with high uptime and availability.",
    website: 'https://sparrowbot.com/',
    image: 'sparrow',
    tags: [
      {
        content: 'Personal Project',
      }
    ]
  }
])

</script>

<style>

</style>