<script>
import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ExpoScaleEase, RoughEase, SlowMo);

export default {
  mounted () {
    gsap.utils.toArray("i").forEach(i => {
      let hover = gsap.to(i, {borderRadius: '30%', ease: 'sine.out', duration: 0.2, paused: true});
      i.addEventListener("mouseenter", () => hover.play());
      i.addEventListener("mouseleave", () => hover.reverse());
    });
  }
}
</script>

<template>
  <div class="fixed top-0 left-0 h-screen w-16
              flex flex-col
              bg-gray-900 text-white shadow-lg">
    <i class="navbar-icon">A</i>
    <i class="navbar-icon">B</i>
    <i class="navbar-icon">C</i>
    <i class="navbar-icon">D</i>
    <i class="navbar-icon">E</i>
  </div>
</template>

<style scoped>
</style>
