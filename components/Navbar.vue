<template>
    <div
        class="flex navbar justify-between min-h-[60px] items-center px-10 bg-gradient-to-r from-[#09fdee] to-[#16aafe] border-1">
        <div>
            <NuxtLink to="/">Bilibili Story Builder</NuxtLink>
        </div>
        <nav class="flex items-center gap-[30px]">
            <div :class="{'px-0': path == '/contact', 'px-4': path != '/contact'}"><NuxtLink :class="{'bg-white/40 px-4 py-1 rounded-full': path == '/contact'}" to="/contact">Contact</NuxtLink></div>
            <div :class="{'px-0': path == '/playground', 'px-4': path != '/playground'}"><NuxtLink :class="{'bg-white/40 px-4 py-1 rounded-full': path == '/playground'}" to="/playground">Playground</NuxtLink></div>
            <div :class="{'px-0': path == '/', 'px-4': path != '/'}"><NuxtLink :class="{'bg-white/40 px-4 py-1 rounded-full': path == '/'}" to="/">Home</NuxtLink></div>
        </nav>
    </div>
</template>

<script setup>
    const path = ref(useRoute().path);
</script>