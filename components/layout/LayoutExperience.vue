<template>
  <section class="flex justify-center py-5 bg-[#14151d]">
    <div data-aos="fade-u" class="container mx-auto text-center">
      <h3 class="text-[#3C8BC4] font-semibold text-3xl">Professional Experience</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <UiProjectCard
        v-for="project in experience"
        :title="project.title"
        :description="project.description"
        :website="project.website"
        :image="project.image"
        :imageSize="project.imageSize"
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
    title: 'Thriving Ventures AB',
    description: 'A software company focused on creating innovative games and experiences on creator platforms.',
    website: 'https://www.thrivingventures.com/',
    image: 'thrivingventures',
    imageSize: 'lg',
    tags: [
      {
        content: 'Software Engineer'
      },
      {
        content: '08/01/2017 - 07/04/2022'
      }
    ]
  },
  {
    title: 'Spectre Systems LLC',
    description: 'Play with your friends, or find friends. Join our casual-competitive community today, primarily focused on CS2 and gaming. Spectre has a little bit of everything for your next adventure.',
    website: 'https://spectre.gg/',
    image: 'spectresystems',
    imageSize: 'lg',
    tags: [
      {
        content: 'Software Engineer',
      },
      {
        content: '07/05/2022 - Present'
      }
    ]
  }
])

</script>

<style>

</style>