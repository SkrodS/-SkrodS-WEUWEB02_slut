<script setup>
import NavBar from './components/NavBar.vue'
import MouseIcon from './components/MouseIcon.vue';
import Scene1 from './components/Scene1.vue';
import FullPage from './components/Fullpage.vue'

document.documentElement.classList.add('dark')
localStorage.theme = 'dark'
</script>

<script>
export default {
  data() {
    return {
      options: {
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
      }
    }
  }
}
</script>

<template>
  <full-page :options="options" if=fullpage>
    <div class="section">
      <Scene1/>
    </div>
    <div class="section">
    </div>
  </full-page>
  <MouseIcon/>
  <NavBar/>
</template>

<style>
</style>
