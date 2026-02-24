<template>
    <MobileNotwork class="hidden"/>

    <div class="min-h-screen bg-gradient-to-r from-[#09D4FD] to-[#167BFE] pt-[80px] lg:pt-0">
        <Navbar />

        <div>
            <div class="max-w-6xl mx-auto text-white">
                <!-- Hero Section -->
                <div id="sub1" class="flex flex-col-reverse lg:flex-row justify-center lg:justify-between text-black items-center min-h-[calc(100vh-140px)] lg:min-h-[95vh] px-6 lg:px-0 pt-8 lg:pt-0">
                    <div class="w-full text-white p-4 lg:p-6 text-center lg:text-left mt-4 lg:mt-0">
                        <h1 class="text-3xl lg:text-7xl leading-tight lg:leading-normal mb-4 lg:mb-0">
                            Share loving anime to your <b>Story</b>
                        </h1>
                        <div class="flex flex-col lg:flex-row items-center mt-4 lg:mt-5 justify-center lg:justify-start gap-3 lg:gap-0">
                            <a href="#sub2" class="w-full lg:w-auto">
                                <div
                                    class="bg-gradient-to-r from-[#FFF7AD] to-[#FFA9F9] rounded-[40px] p-2 px-5 w-fit text-black hover:text-white transition-all duration-200 hover:scale-[102%] shadow-lg lg:shadow-none text-center mx-auto lg:mx-0">
                                    <h4>Get Started</h4>
                                </div>
                            </a>
                            <div class="flex gap-3 lg:gap-0 w-full lg:w-auto justify-center lg:justify-start items-center lg:ml-2">
                                <a href="https://github.com/kang49/bilibili-story-sharing" target="_blank">
                                    <div
                                        class="bg-white/20 lg:bg-white/40 backdrop-blur-sm lg:backdrop-blur-none rounded-[40px] p-[5px] px-5 w-fit text-white lg:text-black hover:text-white transition-all duration-200 hover:scale-[102%] flex items-center justify-center text-sm lg:text-base ml-0 lg:ml-0">
                                        <h4 class="flex items-center"><i class="fab fa-github text-xl lg:text-2xl mr-2 lg:mr-1"></i> Github</h4>
                                    </div>
                                </a>
                                <a href="https://rapidapi.com/kang49/api/bilibili-story-builder2" target="_blank">
                                    <div
                                        class="bg-white/20 lg:bg-white/40 backdrop-blur-sm lg:backdrop-blur-none rounded-[40px] p-[5px] px-5 w-fit text-white lg:text-black hover:text-white transition-all duration-200 hover:scale-[102%] flex items-center justify-center text-sm lg:text-base ml-0 lg:ml-2">
                                        <h4 class="flex items-center"><i class="fad fa-code text-xl lg:text-2xl mr-2 lg:mr-1"></i> API</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-full p-2 lg:p-0 flex justify-center mb-4 lg:mb-0">
                        <div class="bg-white/30 lg:bg-white/40 backdrop-blur-md lg:backdrop-blur-none rounded-[30px] lg:rounded-[60px] p-3 lg:p-5 shadow-xl lg:shadow-none w-full max-w-[320px] lg:max-w-none">
                            <img class="w-full h-auto rounded-[20px] lg:rounded-none"
                                src="https://user-images.githubusercontent.com/81503963/273407994-24652417-4352-4dd6-9281-284f3d87ad3c.gif">
                        </div>
                    </div>
                </div>

                <!-- Step 1 -->
                <div id="sub2" class="px-6 lg:px-50 py-16 lg:py-0 lg:min-h-screen flex lg:block items-center">
                    <div class="flex flex-col lg:flex-row mt-5 w-full items-center lg:items-start">
                        <div class="mt-0 lg:mt-[70px] text-center lg:text-left z-10 w-full lg:w-auto">
                            <h1 class="text-white text-3xl lg:text-[42px] font-[700] mb-4 lg:mb-0">Get Started</h1>
                            <div class="flex flex-col lg:flex-row items-center gap-2 lg:gap-0 lg:space-x-5 mt-4 lg:mt-0 lg:items-center">
                                <h4 class="text-white text-xl lg:text-[21px] font-bold bg-white/20 lg:bg-transparent px-4 py-1 lg:p-0 rounded-full lg:pb-8">Step 1:</h4>
                                <h4 class="text-white text-lg lg:text-[21px] max-w-full lg:max-w-[300px]">Download the Bilibili Story
                                    Builder Shortcut</h4>
                            </div>
                            <a href="https://github.com/kang49/bilibili-story-sharing/releases/latest/download/Bilibili.Story.Builder.shortcut">
                                <div
                                    class="mx-auto lg:ml-[90px] mt-6 lg:mt-[30px] rounded-[40px] p-[5px] px-5 w-fit text-black bg-gradient-to-r from-[#FFF7AD] to-[#FFA9F9] hover:text-white transition-all duration-200 hover:scale-[102%]">
                                    <h4 class="flex items-center">Download</h4>
                                </div>
                            </a>
                        </div>
                        
                        <div class="w-full lg:w-auto mt-12 lg:mt-0 flex justify-center lg:block relative">
                            <div class="lg:hidden relative w-[260px] mx-auto">
                                <img class="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none" src="/img/iPhone13-Frame.png">
                                <img class="relative w-[92%] ml-[4%] mt-[4%] rounded-[24px] shadow-2xl" src="/img/step1-Gif.gif">
                            </div>

                            <div class="hidden lg:block">
                                <div class="absolute mt-[70px]">
                                    <img class="object-cover h-[550px] ml-[170px] pt-[100px]" src="/img/bili-shortcut.png">
                                </div>
                                <div class="mt-[70px] relative">
                                    <img class="absolute object-cover h-[550px] ml-[400px] " src="/img/iPhone13-Frame.png">
                                    <img class="object-cover h-[539px] ml-[415px] pt-[10px] rounded-[30px]"
                                        src="/img/step1-Gif.gif">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden lg:block items-end mt-[30px]">
                         <div class="text-white min-h-[50px]">
                            <a href="#sub3">
                                <div
                                    class="mt-[30px] rounded-[40px] p-[5px] px-5 w-fit text-white bg-gradient-to-r from-[#94B9FF] to-[#FFA9F9] hover:text-white transition-all duration-200 hover:scale-[102%]">
                                    <h4 class="flex items-center">Next<i class="fas fa-angle-double-down text-2xl mx-2"></i>
                                    </h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Step 2 -->
                <div id="sub3" class="px-6 lg:px-50 py-16 lg:py-0 lg:min-h-screen flex lg:block items-center">
                    <div class="flex flex-col lg:flex-row mt-5 w-full">
                        <div class="mt-0 lg:mt-[70px] w-full lg:w-auto order-2 lg:order-1">
                             <div class="flex flex-col lg:flex-row items-center gap-2 lg:gap-0 lg:space-x-5 text-center lg:text-left">
                                <h4 class="text-white text-xl lg:text-[21px] font-bold bg-white/20 lg:bg-transparent px-4 py-1 lg:p-0 rounded-full lg:pb-8">Step 2:</h4>
                                <h4 class="text-white text-lg lg:text-[21px] max-w-full lg:max-w-[300px]">Install Bilibili Story Builder Shortcut
                                </h4>
                            </div>
                            <div class="bg-white/10 lg:bg-white/20 backdrop-blur-md lg:backdrop-blur-none rounded-[30px] lg:rounded-[60px] p-6 lg:p-5 mx-auto lg:ml-[90px] mt-6 lg:mt-[20px] max-w-full lg:max-w-[500px]">
                                <h4 class="flex items-center leading-[30px] lg:leading-[50px] text-sm lg:text-base">• Open the <img
                                        class="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] mx-[5px] lg:mx-[10px] my-auto items-center" src="/img/files-icon.png">
                                    Files app on your iOS device.</h4>
                                <h4 class="leading-[30px] lg:leading-[50px] text-sm lg:text-base">• In the Files app, navigate to the location where you downloaded
                                    the Bilibili Story Builder shortcut. Typically, it can be
                                    found in the Downloads folder.<br>• Tap on the shortcut file to select it.<br>• Tap the
                                    Add Shortcut button.<br>• Confirm your selection by tapping Done.</h4>
                            </div>
                            <a href="https://github.com/kang49/bilibili-story-sharing" target="_blank">

                            </a>
                        </div>

                        <div class="w-full lg:w-auto order-1 lg:order-2 flex justify-center lg:block relative mb-8 lg:mb-0">
                             <div class="lg:hidden relative w-[260px] mx-auto">
                                <img class="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none" src="/img/iPhone13-Frame.png">
                                <img class="relative w-[92%] ml-[4%] mt-[4%] rounded-[24px] shadow-2xl" src="/img/step2-Gif.gif">
                            </div>

                            <div class="hidden lg:block">
                                <div class="mt-[70px] relative">
                                    <img class="absolute object-cover h-[550px] ml-[200px] " src="/img/iPhone13-Frame.png">
                                    <img class="object-cover h-[539px] ml-[215px] pt-[10px] rounded-[30px]"
                                        src="/img/step2-Gif.gif">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden lg:block items-end mt-[30px]">
                        <div class="text-white min-h-[50px]">
                            <a href="#sub4">
                                <div
                                    class="mt-[30px] rounded-[40px] p-[5px] px-5 w-fit text-white bg-gradient-to-r from-[#94B9FF] to-[#FFA9F9] hover:text-white transition-all duration-200 hover:scale-[102%]">
                                    <h4 class="flex items-center">Next<i class="fas fa-angle-double-down text-2xl mx-2"></i>
                                    </h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Step 3 -->
                <div id="sub4" class="px-6 lg:px-50 py-16 lg:py-0 lg:min-h-screen flex lg:block items-center">
                     <div class="flex flex-col-reverse lg:flex-row mt-5 w-full">
                        <div class="w-full lg:w-auto flex justify-center lg:block relative mt-8 lg:mt-0">
                             <div class="lg:hidden relative w-[260px] mx-auto">
                                <img class="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none" src="/img/iPhone13-Frame.png">
                                <img class="relative w-[92%] ml-[4%] mt-[4%] rounded-[24px] shadow-2xl" src="/img/step3-Gif.gif">
                            </div>

                            <div class="hidden lg:block">
                                <div class="mt-[70px] relative">
                                    <img class="absolute object-cover h-[550px] ml-[100px]" src="/img/iPhone13-Frame.png">
                                    <img class="object-cover h-[539px] ml-[115px] pt-[10px] rounded-[30px]"
                                        src="/img/step3-Gif.gif">
                                </div>
                            </div>
                        </div>
                        <div class="mt-0 lg:mt-[70px] w-full lg:w-auto">
                            <div class="flex flex-col lg:flex-row items-center gap-2 lg:gap-0 lg:space-x-5 text-center lg:text-left">
                                <h4 class="text-white text-xl lg:text-[21px] lg:ml-[110px] font-bold bg-white/20 lg:bg-transparent px-4 py-1 lg:p-0 rounded-full lg:pb-8">Step 3:</h4>
                                <h4 class="text-white text-lg lg:text-[21px] lg:ml-[110px] max-w-full lg:max-w-[300px]">Run Bilibili Story Builder
                                    Shortcut</h4>
                            </div>
                            <div class="bg-white/10 lg:bg-white/20 backdrop-blur-md lg:backdrop-blur-none rounded-[30px] lg:rounded-[60px] p-6 lg:p-5 mx-auto lg:ml-[200px] mt-6 lg:mt-[20px] max-w-full lg:max-w-[500px]">
                                <h4 class="leading-[30px] lg:leading-[50px] text-sm lg:text-base">• Open the anime or content that you want to share on
                                    Bilibili.<br>• Look for the share button (usually represented by an arrow or box with an
                                    arrow) on the screen and tap it.<br>• From the list of sharing options, select
                                    Bilibili.Story.Builder.
                                    <br>• If you are prompted with any permission requests, be sure to answer with Always
                                    Allow to ensure seamless sharing.
                                    <br>• Finally, choose your target social media platform within the shortcut.
                                </h4>
                            </div>
                            <a href="https://github.com/kang49/bilibili-story-sharing" target="_blank">

                            </a>
                        </div>
                    </div>
                    <div class="hidden lg:block items-end mt-[30px]">
                        <div class="text-white min-h-[50px]">
                            <a href="#sub5">
                                <div
                                    class="mt-[30px] rounded-[40px] p-[5px] px-5 w-fit text-white bg-gradient-to-r from-[#94B9FF] to-[#FFA9F9] hover:text-white transition-all duration-200 hover:scale-[102%]">
                                    <h4 class="flex items-center">Next<i class="fas fa-angle-double-down text-2xl mx-2"></i>
                                    </h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Final Section -->
                <div id="sub5" class="px-6 lg:px-50 py-16 lg:py-0 lg:min-h-screen flex lg:block items-center justify-center">
                    <div class="flex flex-col lg:flex-row mt-5 w-full">
                        <div class="mt-0 lg:mt-[70px] w-full lg:w-auto text-center lg:text-left">
                            <h1 class="text-white text-3xl lg:text-[42px] font-[700] mb-6 lg:mb-0">Good Job !</h1>
                            <div class="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-5 mt-4 lg:mt-0">
                                <h4 class="text-white text-lg lg:text-[21px] max-w-full lg:max-w-[700px] leading-[30px] lg:leading-[40px] pb-8">Now, the Bilibili Story
                                    Builder shortcut will handle the rest, and your anime will be shared to your story on
                                    Bilibili without hassle.</h4>
                            </div>
                        </div>
                        <div class="w-full lg:w-auto mt-10 lg:mt-0">
                            <div class="lg:hidden text-center">
                                 <h4 class="text-xl font-bold text-white mb-6">Encountered an issue?</h4>
                                 <a href="https://github.com/kang49/bilibili-story-sharing/issues" target="_blank">
                                    <div class="inline-block bg-white text-black font-bold rounded-full p-4 px-8 hover:bg-green-400 hover:text-white transition-all duration-300 shadow-xl">
                                        <h4 class="flex items-center"><i class="fas fa-bug mr-2"></i> Report Issue</h4>
                                    </div>
                                </a>
                            </div>

                            <div class="hidden lg:block">
                                <div class="absolute mt-[400px]">
                                    <h4 class="text-[42px] font-[700] max-w-[500px]">If you have an issue, please report it here
                                    </h4>
                                    <a href="https://github.com/kang49/bilibili-story-sharing/issues" target="_blank">
                                        <div class="flex justify-end mr-[70px]">
                                            <div
                                                class="mt-[30px] rounded-[40px] p-[5px] px-5 w-fit text-black bg-white hover:text-green-500 transition-all duration-200 hover:scale-[102%]">
                                                <h4 class="flex items-center">Report Issue</h4>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <Footer/>
</template>