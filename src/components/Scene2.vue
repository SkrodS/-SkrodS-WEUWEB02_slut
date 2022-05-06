<script>
import { gsap } from "gsap";

export default {
    mounted() {
    },
}
</script>

<template>
  <div ref="container" id="container" class="relative h-screen w-full flex justify-center content-center overflow-hidden dark:bg-gray-900 bg-slate-200 color-anim">
    <VueWriter :array="['Projects']" :start="5300" :delay="1500" :typeSpeed="100" :iterations="1" :eraseSpeed="50" class="absolute mx-auto z-10 mt-16 text-6xl font-metana font-bold tracking-tighter text-orange-400 text-shadow-sm opacity-90" />
    <div class="flex items-center justify-center">
      <div class="w-full pattern-wavy pattern-gray-900 pattern-bg-white pattern-size-32 pattern-opacity-5 absolute color-anim"></div>

        <div class="grid lg:grid-cols-4 ml-[5rem] p-16 gap-6 grid-cols-1">
          
          <!-- CARD -->
          <div class="relative max-w-xl overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-xl z-50 bg-opacity-60 border border-gray-200 rounded-xl color-anim">
            <a href="src/assets/Screenshot from 2022-05-06 11-20-10.png" target="_blank">
              <img class="h-80 w-full object-cover hover:blur-sm transition-all" src="src/assets/Screenshot from 2022-05-06 11-20-10.png" alt="" />
            </a>
            <div class="p-5 mb-12">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white color-anim font-metana">Bizard: The Bunny-loving Wizard</h5>
              </a>
              <p class="mb-3 font-normal text-gray-400 color-anim">Bizard is a rouge-like shooter game I made for a programming class in my second year of Upper secondary school. You play as the charachter Bizard who's main goal is to turn living tree trunks into cute rabbits.</p>
              <p class="mb-3 font-normal text-gray-400 color-anim">The game was created in python using pygame. Check out the code below!</p>

              <div class="absolute bottom-0 h-16 inset-x-0">
                <a href="https://github.com/SkrodS/bizard-game" class="inline-flex items-center py-2 px-3 w-full text-2xl font-medium text-center text-black bg-orange-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-400 dark:hover:bg-blue-800 dark:focus:ring-blue-800 color-anim">
                  <p class="mx-auto font-newake tracking-wider">Visit repo: <i class="fa-brands fa-github"></i></p>
                </a>
              </div>
            </div>
          </div>

          <!-- CARD -->
          <div class="relative max-w-xl overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-xl z-50 bg-opacity-60 border border-gray-200 rounded-xl color-anim">
            <a href="src/assets/smartmockups_klawjpjg.jpg" target="_blank">
              <img class="h-80 w-full object-cover hover:blur-sm transition-all" src="src/assets/smartmockups_klawjpjg.jpg" alt="" />
            </a>
            <div class="p-5 mb-12">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white color-anim font-metana">Share:y</h5>
                </a>
                <p class="mb-3 font-normal text-gray-400 color-anim">This is a project I worked on for school. It's social media platform called Share:y with fully functional back-end + front-end, made by me.</p>
                <p class="mb-3 font-normal text-gray-400 color-anim">The back-end enables the users to create accounts, make posts, visit other peoples profiles.</p>

                <div class="absolute bottom-0 h-16 inset-x-0">
                  <a href="https://github.com/SkrodS/bizard-game" class="inline-flex items-center py-2 px-3 w-full text-2xl font-medium text-center text-black bg-orange-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-400 dark:hover:bg-blue-800 dark:focus:ring-blue-800 color-anim">
                    <p class="mx-auto font-newake tracking-wider">Visit repo: <i class="fa-brands fa-github"></i></p>
                  </a>
              </div>
            </div>
          </div>

          <!-- CARD -->
          <div class="relative max-w-xl overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-xl z-50 bg-opacity-60 border border-gray-200 rounded-xl color-anim">
            <a href="src\assets\Skärmbild 2022-05-06 200821.png" target="_blank">
              <img class="h-80 w-full object-cover hover:blur-sm transition-all" src="src\assets\Skärmbild 2022-05-06 200821.png" alt="" />
            </a>
            <div class="p-5 mb-12">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white color-anim font-metana">REV</h5>
                </a>
                <p class="mb-3 font-normal text-gray-400 color-anim">{REV} is another social media platform I made for school. This one does however only feature a front end made by me. </p>
                <p class="mb-3 font-normal text-gray-400 color-anim">This project was a normal message board type social media platform with an integrated news feed. The news were served using RSS.</p>
                
                <div class="absolute bottom-0 h-16 inset-x-0">
                <a href="https://github.com/SkrodS/-rev--social-media" class="inline-flex items-center py-2 px-3 w-full text-2xl font-medium text-center text-black bg-orange-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-400 dark:hover:bg-blue-800 dark:focus:ring-blue-800 color-anim">
                  <p class="mx-auto font-newake tracking-wider">Visit repo: <i class="fa-brands fa-github"></i></p>
                </a>
              </div>
            </div>
          </div>

          <!-- CARD -->
          <div class="relative max-w-xl overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-xl z-50 bg-opacity-60 border border-gray-200 rounded-xl color-anim">
            <a href="src/assets/smartmockups_klawjpjg.jpg" target="_blank">
              <img class="h-80 w-full object-cover hover:blur-sm transition-all" src="src/assets/smartmockups_klawjpjg.jpg" alt="" />
            </a>
            <div class="p-5 mb-12">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white color-anim font-metana">Share:y</h5>
                </a>
                <p class="mb-3 font-normal text-gray-400 color-anim">This is a project I worked on for school. It's social media platform called Share:y with fully functional back-end + front-end, made by me.</p>
                <p class="mb-3 font-normal text-gray-400 color-anim">The back-end enables the users to create accounts, make posts, visit other peoples profiles.</p>

                <div class="absolute bottom-0 h-16 inset-x-0">
                  <a href="https://github.com/SkrodS/bizard-game" class="inline-flex items-center py-2 px-3 w-full text-2xl font-medium text-center text-black bg-orange-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-400 dark:hover:bg-blue-800 dark:focus:ring-blue-800 color-anim">
                    <p class="mx-auto font-newake tracking-wider">Visit repo: <i class="fa-brands fa-github"></i></p>
                  </a>
              </div>
            </div>
          </div>

      </div>

      <img src="src/assets/wallpapersden.com_cyberpunk-2077-lifepaths_3840x2160.jpg" alt="" class="opacity-80 absolute w-full m-auto dark:grayscale dark:invert-0 grayscale-0">
    </div>
  </div>
</template>

<style scoped>
</style>
