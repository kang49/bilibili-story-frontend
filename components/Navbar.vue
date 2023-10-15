<template>
    <div
        class="flex navbar justify-between min-h-[60px] items-center px-10 bg-gradient-to-r from-[#09fdee] to-[#16aafe] border-1">
        <div>
            <NuxtLink to="/">Bilibili Story Builder</NuxtLink>
        </div>
        <nav class="flex items-center gap-[50px]">
            <NuxtLink :class="{'bg-white/40 px-4 py-1 rounded-full': path == '/'}" to="/">Home</NuxtLink>
            <NuxtLink :class="{'bg-white/40 px-4 py-1 rounded-full': path == '/playground'}" to="/playgroud">Playgroud</NuxtLink>
            <NuxtLink :class="{'bg-white/40 px-4 py-1 rounded-full': path == '/contact'}" to="/contact">Contact</NuxtLink>
        </nav>
    </div>
</template>

<script setup>
    const path = ref(useRoute().path);
</script>