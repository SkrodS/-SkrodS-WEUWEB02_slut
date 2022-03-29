<script>
import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";

gsap.registerPlugin(ExpoScaleEase, RoughEase, SlowMo);

export default {
  mounted () {
    const navbarIcon = document.querySelectorAll('.navbar-icon');
    navbarIcon.forEach(i => {
      let hover = gsap.to(i, {borderRadius: '25%', ease: 'power4.out', duration: 0.2, paused: true});
      i.addEventListener('mouseenter', () => hover.play());
      i.addEventListener('mouseleave', () => hover.reverse());
    });
  },
  methods: {
    toggleDark() {
      localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';

      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
        console.log(localStorage.theme);
    }
  }
}
</script>

<template>
  <div class="fixed top-0 left-0 h-screen w-20
              flex flex-col
              text-white shadow-lg color-anim dark:bg-gray-900 bg-slate-100">
    <a href="/"><i class="navbar-icon color-anim"><i class="fa-solid fa-compass"></i></i></a>
    <a href="#page2"><i class="navbar-icon color-anim"><i class="fa-solid fa-code"></i></i></a>
    <a href="#page3"><i class="navbar-icon color-anim"><i class="fa-solid fa-earth-europe"></i></i></a>
    <a href="#page4"><i class="navbar-icon color-anim"><i class="fa-solid fa-address-card"></i></i></a>
    <a href="#page5"><i class="navbar-icon color-anim"><i class="fa-solid fa-envelope"></i></i></a>

    <i @click="toggleDark()" class="flex justify-center mt-auto items-center
                                    h-16 w-16 mb-2 mx-auto text-3xl">
    <i class="fa-solid fa-sun color-anim dark:text-white text-gray-800"></i></i>
  </div>
</template>

<style scoped>
</style>
