<template>
  <section class="flex justify-center py-5 bg-[#14151d]">
    <div data-aos="fade-u" class="container mx-auto text-center">
      <h3 class="text-[#3C8BC4] font-semibold text-3xl">Skills</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-4">
        <UiSkillCard
        class="py-4"
        v-for="skill in skills"
        :skill="skill.skill"
        :icon="skill.font.icon"
        :icon-set="skill.font.set"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Skill } from '../../helpers/interfaces/skill.interface';

const skills = reactive<Skill[]>([
  {
    skill: 'C++',
    font: {
      set: 'fas',
      icon: 'code',
    }
  },
  {
    skill: 'C#',
    font: {
      set: 'fas',
      icon: 'code',
    }
  },
  {
    skill: 'Lua',
    font: {
      set: 'fas',
      icon: 'code',
    }
  },
  {
    skill: 'Typescript',
    font: {
      set: 'fas',
      icon: 'code',
    }
  },
  {
    skill: 'JavaScript',
    font: {
      set: 'fab',
      icon: 'js',
    }
  },
  {
    skill: 'Python',
    font: {
      set: 'fab',
      icon: 'python',
    }
  },
  {
    skill: 'MySQL',
    font: {
      set: 'fas',
      icon: 'database',
    }
  },
  {
    skill: 'NestJS',
    font: {
      set: 'fas',
      icon: 'code',
    }
  },
  {
    skill: 'Vue.js',
    font: {
      set: 'fab',
      icon: 'vuejs',
    }
  },
  {
    skill: 'Docker',
    font: {
      set: 'fab',
      icon: 'docker',
    }
  }
])
</script>