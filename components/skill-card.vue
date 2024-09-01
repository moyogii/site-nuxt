<template>
  <div data-aos="fade-up" class="relative flex max-w-full max-h-20 text-white/75 bg-[#1b1c27] rounded-md mt-5 mp-4 shadow-lg overflow-hidden">
    <div class="w-full">
      <font-awesome
        class="rotate-[20deg] text-[#3C8BC4] opacity-25 text-9xl scale-125 -translate-y-5"
        :icon="[iconSet, icon]"
        size="{{ iconSize }}x"
      />
      <div class="absolute inset-0 flex justify-center items-center">
        <p class="text-xl font-bold text-center">{{ skill }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps(['skill', 'icon', 'iconSize', 'iconSet'])
</script>

<style>

</style>