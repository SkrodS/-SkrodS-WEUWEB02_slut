<script>
import { gsap } from "gsap";

export default {
    mounted() {
    },
}
</script>

<template>
  <div ref="container" id="container" class="relative h-screen w-full flex justify-center content-center overflow-hidden dark:bg-gray-900 bg-slate-200 color-anim">
    <VueWriter :array="['Projects']" :start="5300" :delay="1500" :typeSpeed="100" :iterations="1" :eraseSpeed="50" class="absolute mx-auto z-10 mt-16 text-6xl font-metana font-bold tracking-tighter text-orange-400 text-shadow-sm opacity-90" /><br><br>
    <div class="flex items-center justify-center">
      <div class="w-full h-full pattern-wavy pattern-gray-900 pattern-bg-white pattern-size-32 pattern-opacity-5 absolute color-anim"></div>

        <div class="grid grid-cols-3 ml-[5rem] p-16 gap-6">
          <!-- CARD -->
          <div class="max-w-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 z-50 rounded-xl color-anim">
              <a href="#">
                  <img class="rounded-t-lg aspect-auto" src="src/assets/smartmockups_klawjpjg.jpg" alt="" />
              </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white color-anim font-metana">Share:y</h5>
                </a>
                <p class="mb-3 font-normal text-gray-400 color-anim">This is a project I worked on for school. It's social media platform called Share:y with fully functional back-end + front-end, made by me.</p>
                <a href="https://github.com/SkrodS/Share.y" class="inline-flex items-center py-2 px-3 w-full text-2xl font-medium text-center text-black bg-orange-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-400 dark:hover:bg-blue-800 dark:focus:ring-blue-800 color-anim">
                    <p class="mx-auto font-newake tracking-wider">Visit repo: <i class="fa-brands fa-github"></i></p>
                </a>
            </div>
          </div>

          <!-- CARD -->
          <div class="max-w-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 z-50 rounded-xl color-anim">
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white color-anim font-metana">Bizard: The Bunny-loving Wizard</h5>
                </a>
                <p class="mb-3 font-normal text-gray-400 color-anim">This is a project I worked on for school. It's social media platform called Share:y with fully functional back-end + front-end, made by me.</p>
                <a href="https://github.com/SkrodS/Share.y" class="inline-flex items-center py-2 px-3 w-full text-2xl font-medium text-center text-black bg-orange-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-400 dark:hover:bg-blue-800 dark:focus:ring-blue-800 color-anim">
                    <p class="mx-auto font-newake tracking-wider">Visit repo: <i class="fa-brands fa-github"></i></p>
                </a>
            </div>
            <a href="#">
                <img class="rounded-t-lg aspect-auto" src="src/assets/Screenshot from 2022-05-06 11-20-10.png" alt="" />
            </a>
          </div>

        <!-- CARD -->
          <div class="max-w-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 z-50 rounded-xl color-anim">
              <a href="#">
                  <img class="rounded-t-lg" src="src/assets/smartmockups_klawjpjg.jpg" alt="" />
              </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white color-anim">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p class="mb-3 font-normal text-gray-400 color-anim">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-400 dark:hover:bg-blue-800 dark:focus:ring-blue-800 color-anim">
                    Read more
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
          </div>

      </div>

      <img src="src/assets/wallpapersden.com_cyberpunk-2077-lifepaths_3840x2160.jpg" alt="" class="opacity-80 absolute w-full m-auto dark:grayscale dark:invert-0 grayscale-0">
    </div>
  </div>
</template>

<style scoped>
</style>
