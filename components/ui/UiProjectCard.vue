<template>
  <div data-aos="fade-up" class="relative flex rounded-md overflow-hidden no-underline shadow-lg h-full">
    <div class="bg-[#1b1c27] h-full">
      <a v-if="resolvedImage" :href="website">
        <img :class="resolvedImageClass" :src="resolvedImage" :alt="title + ' image'">
      </a>
      <div class="text-left p-6">
        <a :href="website">
          <h3 class="text-2xl font-semibold text-[#3C8BC4]">{{ title }}</h3>
        </a>
        <p class="mb-4 text-white text-opacity-50">{{ description }}</p>
        <p
          class="text-white text-opacity-50 bg-white bg-opacity-5 px-2 py-1 inline-block mr-2 mb-2"
          v-for="tag in tags">
          {{ tag.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectTag } from '../../helpers/interfaces/project.interface';
import { computed } from 'vue'
import { filename } from 'pathe/utils'

const props = defineProps<{
  title: string
  description: string
  website: string
  image?: string
  imageSize?: string
  tags?: ProjectTag[]
}>()

const glob = import.meta.glob('@/assets/images/companies/*', { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), (value as any).default])
);

const resolvedImage = computed(() => {
  return props.image ? images[props.image] : undefined;
});

function imageSizeToComponentSize(sizeName: string) {
  switch(sizeName) {
    case 'lg':
      return 'w-full lg:h-2/3 sm:h-1/2';
    case 'md':
      return 'w-full lg:h-1/2 sm:1/4';
    case 'sm':
      return 'w-full h-1/4';
    default:
      return 'w-full h-1/2';
  }
}

const resolvedImageClass = computed(() => {
  return imageSizeToComponentSize(props.imageSize || 'medium');
});

</script>

<style>

</style>