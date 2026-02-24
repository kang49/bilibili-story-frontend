<template>
    <div class="fixed lg:relative top-0 left-0 w-full z-50 bg-gradient-to-r from-[#09fdee] to-[#16aafe] shadow-md lg:shadow-none border-b lg:border-none navbar">
        <div class="flex justify-between items-center px-6 lg:px-10 h-[70px] lg:h-[60px]">
            <div class="z-50">
                <NuxtLink to="/" class="text-white drop-shadow-md lg:drop-shadow-none">Bilibili Story Sharing</NuxtLink>
            </div>

            <nav class="hidden lg:flex items-center gap-[30px]">
                <div :class="{'px-0': path == '/', 'px-4': path != '/'}"><NuxtLink :class="{'bg-white/40 px-4 py-1 rounded-full': path == '/'}" to="/">Home</NuxtLink></div>
                <div :class="{'px-0': path == '/playground', 'px-4': path != '/playground'}"><NuxtLink :class="{'bg-white/40 px-4 py-1 rounded-full': path == '/playground'}" to="/playground">Playground</NuxtLink></div>
                <div :class="{'px-0': path == '/contact', 'px-4': path != '/contact'}"><NuxtLink :class="{'bg-white/40 px-4 py-1 rounded-full': path == '/contact'}" to="/contact">Contact</NuxtLink></div>
            </nav>

            <div class="lg:hidden z-50 flex items-center">
                <button @click="hamberBTN" class="relative group w-8 h-6 focus:outline-none flex flex-col justify-between items-center">
                    <div class="bg-white h-[3px] w-7 rounded transform transition-all duration-300 origin-center" 
                         :class="{ 'translate-y-[10.5px] rotate-45': isToggleMenu }"></div>
                    
                    <div class="bg-white h-[3px] w-7 rounded transform transition-all duration-300" 
                         :class="{ 'opacity-0 scale-0': isToggleMenu }"></div>
                         
                    <div class="bg-white h-[3px] w-7 rounded transform transition-all duration-300 origin-center" 
                         :class="{ '-translate-y-[10.5px] -rotate-45': isToggleMenu }"></div>
                </button>
            </div>
        </div>

        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform opacity-0 translate-y-10"
            enter-to-class="transform opacity-100 translate-y-0"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="transform opacity-100 translate-y-0"
            leave-to-class="transform opacity-0 translate-y-10"
        >
            <div v-if="isToggleMenu" class="fixed inset-0 bg-gradient-to-br from-[#09fdee] to-[#16aafe] z-40 flex flex-col justify-center items-center h-screen w-screen lg:hidden">
                <div class="flex flex-col space-y-6 text-center">
                    <NuxtLink to="/" @click="isToggleMenu = false" class="text-3xl text-white font-bold hover:text-gray-100 transition-colors">Home</NuxtLink>
                    <NuxtLink to="/playground" @click="isToggleMenu = false" class="text-3xl text-white font-bold hover:text-gray-100 transition-colors">Playground</NuxtLink>
                    <NuxtLink to="/contact" @click="isToggleMenu = false" class="text-3xl text-white font-bold hover:text-gray-100 transition-colors">Contact</NuxtLink>
                    
                    <div class="w-20 h-1 bg-white/50 rounded-full mx-auto mt-8"></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
const route = useRoute();
const path = computed(() => route.path);
const isToggleMenu = ref(false);

function hamberBTN() {
    isToggleMenu.value = !isToggleMenu.value;
}
</script>