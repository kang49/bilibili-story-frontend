<template>
    <div class="min-h-screen bg-gradient-to-r from-[#09D4FD] to-[#167BFE]">
        <Navbar />

        <div class="w-screen grid grid-rows-2">
            <div>
                <center>
                    <h1 class="text-white font-bold text-[6vh] mt-[20vh]">Try paste Bilibili link<br>for build your Story
                        Card</h1>
                </center>
            </div> <!--row1-->
            <div>
                <center>
                    <div class="mt-[7vh]">
                        <div class="w-[60vw]">
                            <div class="relative">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                    <i class="fad fa-search"></i>
                                </span>
                                <input class="w-full h-[5vh] rounded-[40px] pl-10" placeholder="Search anime or paste link..."
                                    @keyup.enter="PlaygroundFunc" v-model="searchQuery" />
                            </div>
                        </div>
                    </div>
                </center>
            </div> <!--row2-->
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      searchQuery: '' as string, // Declare searchQuery as a string
    };
  },
  
  methods: {
    async PlaygroundFunc() {
      console.log(this.searchQuery);
      const animeName: string = this.searchQuery;

      if (!animeName || animeName === '') return;

      try {
        const response = await axios.get(`http://g49node0.ddns.net:3000/api?biliLink=${animeName}`);

        console.log(response.data)
      } catch (error) {
        return 'anime not found' as string;
      }
    },
  },
});
</script>