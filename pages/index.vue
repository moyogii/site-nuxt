<template>
  <div class="flex flex-col items-center">
    <section class="mt-12">
      <LayoutIntroduction />
    </section>
    <UiMiddleLine />
    <section>
      <LayoutSkills />
    </section>
    <UiMiddleLine />
    <section>
      <LayoutExperience />
    </section>
    <UiMiddleLine />
    <section>
      <LayoutProjects />
    </section>
  </div>
  <footer class="flex flex-col items-center">
    <p class="text-gray-600">
      Copyright &copy; 2024 Moyogii. All rights reserved.
    </p>
    <div>
      <p class="text-gray-600">
        Made using
            <a href="https://vuejs.org/" class="hover:text-green-400">
              <font-awesome :icon="['fab', 'vuejs']" />
            </a>
          | Business Inquiries at 
        <a href="mailto:me@moyogi.dev" class="text-[#3C8BC4]">me@moyogi.dev</a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style>
</style>