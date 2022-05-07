<script setup>
import NavBar from './components/NavBar.vue';
import MouseIcon from './components/MouseIcon.vue';
import Scene1 from './components/Scene1.vue';
import Scene2 from './components/Scene2.vue'
import FullPage from './components/Fullpage.vue';
import { gsap } from 'gsap';

document.documentElement.classList.add('dark')
localStorage.theme = 'dark'
</script>

<script>
export default {
  data() {
    return {
      options: {
        menu: '#menu',
        afterLoad: this.afterLoad,
        loopBottom: true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
      }
    }
  },
  mounted() {
    const shape2 = 'M469.539032,263.986786H-0.000001L0,229.890961c310.649475,58.156982,255.61113-98.5,469.539032-65.062302V263.986786z'
    const shape3 = 'M469.539032,263.986786H-0.000001L0,0c226.11113,0,182.887283-0.414484,469.539032,0V263.986786zz'

    var tl = gsap.timeline({repeat: 0});
        tl.to('#wave', {duration: .8, attr: { d: shape2 },ease: 'power2.in'})
        tl.to('#wave', {duration: .8, attr: { d: shape3 }, ease: 'power2.out'})
        tl.to('#content', {duration: 1, visibility: "visible", ease: 'power2'})
        tl.to('#wave', {duration: 3, opacity: 0, ease: 'power2.out'})
  },
  methods: {
	  afterLoad: function(origin){
      console.log(origin.index, origin)
      // if (index['index'] == 0 && index['isFirst']) {
      //   this.$refs.scene1.timeline()
      // }

      // if (index['index'] == 0 && index['isLast']) {
      //   console.log(index['index'])
      //   this.$refs.scene2.timeline()
      // }
    }
  }
}
</script>

<template>
  <svg class="wave mr-0 top-0 z-10 absolute h-screen w-screen pointer-events-none" viewBox="0 0 469.539032 263.986786" preserveAspectRatio="none">
        <path id="wave" d="M469.539032,263.986786H-0.000001L0,263.557617c66.11113,0.429169,351.088104,0.429169,469.539032,0.208344V263.986786z"/>
  </svg>
  <div id="content" class="invisible">
    <full-page :options="options" if=fullpage @after-load='afterLoad'>
      <div class="section">
        <Scene1 ref="scene1"/>
      </div>
      <div class="section">
        <Scene2 ref="scene2"/>
        <!-- <div class="slide" data-anchor="slide1">Two 1</div>
        <div class="slide" data-anchor="slide2">Two 2</div> -->
      </div>
    </full-page>
    <NavBar/>
  </div>
  <MouseIcon/>
</template>

<style>
</style>
