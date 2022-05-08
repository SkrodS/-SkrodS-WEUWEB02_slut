<script setup>
import NavBar from "./components/NavBar.vue";
import MouseIcon from "./components/MouseIcon.vue";
import Scene1 from "./components/Scene1.vue";
import Scene2 from "./components/Scene2.vue";
import Scene3 from "./components/Scene3.vue";
import Scene4 from "./components/Scene4.vue";
import FullPage from "./components/Fullpage.vue";
import { gsap } from "gsap";

document.documentElement.classList.add("dark");
</script>

<script>
export default {
  data() {
    return {
      options: {
        menu: "#menu",
        afterLoad: this.afterLoad,
        navigation: true,
        loopBottom: true,
        anchors: ["page1", "page2", "page3", "page4"],
      },
    };
  },
  mounted() {
    const shape2 =
      "M469.539032,263.986786H-0.000001L0,229.890961c310.649475,58.156982,255.61113-98.5,469.539032-65.062302V263.986786z";
    const shape3 =
      "M469.539032,263.986786H-0.000001L0,0c226.11113,0,182.887283-0.414484,469.539032,0V263.986786zz";

    var tl = gsap.timeline({ repeat: 0 });
    tl.to("#wave", { duration: 0.8, attr: { d: shape2 }, ease: "power2.in" });
    tl.to("#wave", { duration: 0.8, attr: { d: shape3 }, ease: "power2.out" });
    tl.to("#content", { duration: 1, visibility: "visible", ease: "power2" });
    tl.to("#wave", { duration: 3, opacity: 0, ease: "power2.out" });
  },
  methods: {
    afterLoad: function (origin, destination, direction) {
      if (destination["anchor"] == "page1") {
        this.$refs.scene1.timeline();
      }
      if (destination["anchor"] == "page2") {
        this.$refs.scene2.timeline();
      }
      if (destination["anchor"] == "page3") {
        this.$refs.scene3.timeline();
      }
      if (destination["anchor"] == "page4") {
        this.$refs.scene4.timeline();
      }
    },
  },
};
</script>

<template>
  <svg
    class="wave mr-0 top-0 z-10 absolute h-screen w-screen pointer-events-none"
    viewBox="0 0 469.539032 263.986786"
    preserveAspectRatio="none"
  >
    <path
      id="wave"
      d="M469.539032,263.986786H-0.000001L0,263.557617c66.11113,0.429169,351.088104,0.429169,469.539032,0.208344V263.986786z"
    />
  </svg>
  <div id="content" class="invisible">
    <full-page :options="options" if="fullpage">
      <div class="section">
        <Scene1 ref="scene1" />
      </div>
      <div class="section">
        <Scene2 ref="scene2" />
      </div>
      <div class="section">
        <Scene3 ref="scene3" />
      </div>
      <div class="section">
        <Scene4 ref="scene4" />
      </div>
    </full-page>
    <NavBar />
  </div>
  <MouseIcon />
</template>

<style></style>
