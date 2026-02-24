<template>
  <MobileNotwork class="hidden"/>

  <div class="min-h-screen bg-gradient-to-r from-[#09D4FD] to-[#167BFE] pt-[100px] lg:pt-0 flex flex-col">
    <Navbar />

    <div class="w-full h-full flex flex-col lg:grid lg:grid-rows-2 lg:gap-10 min-h-[600px] flex-grow">
      
      <div class="p-4 lg:p-0 flex items-end justify-center">
        <center>
          <h1 class="text-white font-bold text-3xl lg:text-[6vh] leading-relaxed transition-all duration-300" 
              :class="{ 'mt-[7vh]': imageBase64 != '', 'mt-10 lg:mt-[15vh]': imageBase64 == '' }">
            Try paste Bilibili link<br>for build your Story Card
          </h1>
        </center>
      </div> 
      
      <div class="p-4 lg:p-0 flex items-start justify-center">
        <center>
          <div class="mt-4 lg:mt-[7vh]" v-if="imageBase64 === ''">
            <div class="w-full lg:w-[60vw]">
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  <i class="fad fa-search"></i>
                </span>
                <input class="w-full h-12 lg:h-[5vh] rounded-[40px] pl-10 pr-4" placeholder="Search anime or paste link..."
                  @keyup.enter="PlaygroundFunc" v-model="searchQuery" />
              </div>
            </div>
          </div>
          
          <div v-else class="flex flex-col items-center justify-center transition-all duration-300">
            <img class="max-w-[180px] lg:max-w-[250px] max-h-[40vh] object-contain rounded-[15px]" 
                 v-if="imageBase64" :src="imageBase64" alt="Story Card Image" />
            
            <h3 v-if="errormsg !== ''" class="text-white text-[18px] mt-[20px]">{{ errormsg }}</h3>
            
            <a href="/playground"
              class="rounded-full bg-green-500 border-2 border-white my-5 w-12 h-12 flex items-center justify-center text-white hover:bg-green-600 transition-colors">
              <i class="fas fa-redo-alt text-xl"></i>
            </a>
          </div>
        </center>
      </div>
      
    </div>
  </div>

  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      searchQuery: '' as string, // Declare searchQuery as a string
      imageBase64: '' as string,
      errormsg: '' as string
    };
  },

  methods: {
    async PlaygroundFunc() {
      this.imageBase64 = '/img/loading.gif'
      const animeName: string = this.searchQuery;

      if (!animeName || animeName === '') return;

      try {
        const url = `https://bilishare.kankawee.uk/bili-api/api?biliLink=${encodeURIComponent(animeName)}`;
        const options = {
          method: 'GET',
        }
        const response = await fetch(url, options);
        const responseData = await response.json();
        if (response.status === 200) {
          this.imageBase64 = `data:image/png;base64,${responseData.imageBase64}` as string; //update imageBase64 value
        } else if (response.status === 400) {
          this.imageBase64 = '/img/sadcat.jpg';
          this.errormsg = responseData.error as string;
        }
      } catch (error) {
        return 'anime not found' as string;
      }
    },
  },
});
</script>