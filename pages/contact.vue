<template>
    <MobileNotwork class="hidden"/>

    <div class="min-h-screen bg-gradient-to-r from-[#09D4FD] to-[#167BFE] pt-[100px] lg:pt-0">
        <Navbar />

        <div class="flex flex-col lg:block min-h-[80vh] items-center p-4 lg:p-0 relative">
            <div class="relative lg:absolute w-full lg:w-[600px] flex justify-center lg:block top-0 left-0">
                <img class="w-full max-w-[300px] lg:w-[600px] lg:max-w-none" src="/img/meta_keen_avatar.png">
            </div>
            <div class="mt-10 lg:mt-[90px] lg:ml-[460px] w-full text-center lg:text-left relative">
                <div class="relative inline-block lg:block mt-8 lg:mt-0">
                    <img class="hidden lg:block absolute" src="/img/text_box.png">
                    <h1 class="relative lg:absolute text-white text-lg lg:text-[20px] lg:mt-[50px] lg:ml-[60px] max-w-full lg:max-w-[250px] mb-8 lg:mb-0 bg-white/10 lg:bg-transparent p-4 lg:p-0 rounded-2xl backdrop-blur-sm lg:backdrop-blur-none border border-white/20 lg:border-none shadow-lg lg:shadow-none mx-auto lg:mx-0">
                        Built with passion to solve a shared problem.
                    </h1>
                </div>
                <div class="lg:ml-[500px] mt-10 lg:mt-0">
                    <h1 class="text-[#B5F2FF] font-bold text-5xl lg:text-[100px] drop-shadow-[0_0px_10px_rgba(181,242,255,1)]">Hello!
                    </h1>
                    <h4 class="text-white text-2xl lg:text-[40px] font-bold">I'm Meta_Keen</h4>
                </div>
                <div
                    class="bg-gradient-to-r from-[#09FDEE] to-[#16AAFE] mt-10 lg:mt-[200px] mx-auto lg:ml-[300px] rounded-[36px] w-full lg:max-w-[470px] py-6 px-4 lg:py-2 lg:px-0 shadow-lg lg:shadow-none">
                    <div class="flex flex-wrap justify-center items-center lg:grid lg:grid-cols-5 gap-4 lg:gap-0 lg:ml-[35px] max-w-full lg:max-w-[400px]">
                        <a href="https://github.com/kang49" target="_blank" class="flex justify-center w-[40px] lg:w-[50px] transition-transform hover:scale-110">
                            <img class="w-full rounded-[12px] lg:rounded-[16px]" src="/img/github-logo.png">
                        </a> <!--col1-->
                        <a href="https://discord.com/users/605305608085831681" target="_blank"
                            class="flex justify-center w-[40px] lg:w-[50px] transition-transform hover:scale-110">
                            <img class="w-full rounded-[12px] lg:rounded-[16px]" src="/img/discord-logo.png">
                        </a> <!--col2-->
                        <a href="https://www.linkedin.com/in/kankawee-aramrak-2bab53232/" target="_blank"
                            class="flex justify-center w-[40px] lg:w-[50px] transition-transform hover:scale-110">
                            <img class="w-full rounded-[12px] lg:rounded-[16px]" src="/img/linkedin-logo.png">
                        </a> <!--col3-->
                        <a href="https://www.instagram.com/kan_g49/" target="_blank"
                            class="flex justify-center w-[40px] lg:w-[50px] transition-transform hover:scale-110">
                            <img class="w-full rounded-[12px] lg:rounded-[16px]" src="/img/ig-logo.png">
                        </a> <!--col4-->
                        <div class="flex justify-center items-center w-full lg:w-auto mt-2 lg:mt-0">
                            <a href="https://www.buymeacoffee.com/metakeen" target="_blank">
                                <div
                                    class="rounded-[40px] p-[5px] px-4 py-2 w-fit text-white bg-gradient-to-r from-[#5DE0E6] to-[#004AAD] hover:text-white transition-all duration-200 hover:scale-[105%] shadow-md text-sm lg:text-base lg:shadow-none lg:text-white lg:bg-gradient-to-r lg:from-[#5DE0E6] lg:to-[#004AAD]">
                                    <h4 class="flex items-center font-bold lg:font-normal"><i class="fas fa-gift mr-2 lg:mr-1"></i>Donate</h4>
                                </div>
                            </a>
                        </div> <!--col5-->
                    </div>
                </div>
            </div>
        </div>
    </div>
<Footer /></template>