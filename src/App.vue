<script setup>
import NavBar from './components/NavBar.vue'
import MouseIcon from './components/MouseIcon.vue';
import Scene1 from './components/Scene1.vue';
import FullPage from './components/Fullpage.vue'
</script>

<script>
export default {
  data() {
    return {
      options: {
        menu: '#menu',
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
      hej2
    </div>
  </full-page>
  <MouseIcon/>
  <NavBar/>
</template>

<style>
</style>
