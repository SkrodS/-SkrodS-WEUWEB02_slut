<script>
import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";

gsap.registerPlugin(ExpoScaleEase, RoughEase, SlowMo);

export default {
  mounted () {
    gsap.utils.toArray('i').forEach(i => {
      let hover = gsap.to(i, {borderRadius: '25%', ease: 'power4.out', duration: 0.2, paused: true});
      i.addEventListener('mouseenter', () => hover.play());
      i.addEventListener('mouseleave', () => hover.reverse());
    });
  }
}
</script>

<template>
  <div class="fixed top-0 left-0 h-screen w-20
              flex flex-col
              bg-gray-900 text-white shadow-lg">
    <i class="navbar-icon"><i class="fa-solid fa-compass"></i></i>
    <i class="navbar-icon"><i class="fa-solid fa-code"></i></i>
    <i class="navbar-icon"><i class="fa-solid fa-earth-europe"></i></i>
    <i class="navbar-icon"><i class="fa-solid fa-address-card"></i></i>
    <i class="navbar-icon"><i class="fa-solid fa-envelope"></i></i>
  </div>
</template>

<style scoped>
</style>
