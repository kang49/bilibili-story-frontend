<template>
  <MobileNotwork />

  <div class="min-h-screen bg-gradient-to-r from-[#09D4FD] to-[#167BFE] hidden lg:block">
    <Navbar />

    <div class="w-screen grid grid-rows-2" :class="{ 'max-h-[55vh]': imageBase64 != '' }">
      <div>
        <center>
          <h1 class="text-white font-bold text-[6vh] mt-[20vh]" :class="{ 'mt-[7vh]': imageBase64 != '' }">Try paste
            Bilibili link<br>for build your Story
            Card</h1>
        </center>
      </div> <!--row1-->
      <div>
        <center>
          <div class="mt-[7vh]" :class="{ 'hidden-element': imageBase64 != '' }">
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
          <div :class="{ 'mt-[0px]': imageBase64 != '', 'hidden-element': imageBase64 == '' }">
            <img class="max-w-[180px] rounded-[15px]" v-if="imageBase64" :src="imageBase64" alt="Image" />
            <h3 v-if="errormsg !== ''" class="text-white text-[18px] mt-[20px]">{{ errormsg }}</h3>
            <!-- Display the image -->
            <a href="/playground"
              class="rounded-full bg-green-500 border-2 border-white my-5 w-12 h-12 flex items-center justify-center text-white">
              <i class="fas fa-redo-alt text-xl"></i>
            </a>
          </div>
        </center>
      </div> <!--row2-->
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
        const url = `https://bilishare.tensormik.com/api/api?biliLink=${animeName}`;
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