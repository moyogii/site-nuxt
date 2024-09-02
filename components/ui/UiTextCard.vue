<script setup>
defineProps(['text'])
</script>

<template>
    <div class="border-none text-white/75 bg-[#1b1c27] rounded-md p-4 mt-5 shadow-lg break-words max-w-2xl">
        <p>
            {{ text }}
        </p>
    </div>
</template>