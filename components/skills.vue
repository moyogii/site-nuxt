<template>
  <section class="flex justify-center py-5 bg-[#14151d]">
    <div data-aos="fade-u" class="container mx-auto text-center">
      <h3 class="text-[#3C8BC4] font-semibold text-3xl">Skills</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-4">
        <SkillCard
        class="py-4"
        v-for="skill in skills"
        :skill="skill.skill"
        :icon="skill.font.icon"
        :icon-size="skill.font.size"
        :icon-set="skill.font.set"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface FontAwesome {
  set: string;
  icon: string;
  size: number;
}

interface Skill {
  skill: string;
  font: FontAwesome;
}

const skills = reactive<Skill[]>([
  {
    skill: 'C++',
    font: {
      set: 'fas',
      icon: 'code',
      size: 2
    }
  },
  {
    skill: 'C#',
    font: {
      set: 'fas',
      icon: 'code',
      size: 2
    }
  },
  {
    skill: 'Lua',
    font: {
      set: 'fas',
      icon: 'code',
      size: 2
    }
  },
  {
    skill: 'Typescript',
    font: {
      set: 'fas',
      icon: 'code',
      size: 2
    }
  },
  {
    skill: 'JavaScript',
    font: {
      set: 'fab',
      icon: 'js',
      size: 1
    }
  },
  {
    skill: 'Python',
    font: {
      set: 'fab',
      icon: 'python',
      size: 2
    }
  },
  {
    skill: 'MySQL',
    font: {
      set: 'fas',
      icon: 'database',
      size: 2
    }
  },
  {
    skill: 'NestJS',
    font: {
      set: 'fas',
      icon: 'code',
      size: 2
    }
  },
  {
    skill: 'Vue.js',
    font: {
      set: 'fab',
      icon: 'vuejs',
      size: 2
    }
  },
  {
    skill: 'Docker',
    font: {
      set: 'fab',
      icon: 'docker',
      size: 2
    }
  }
])


</script>