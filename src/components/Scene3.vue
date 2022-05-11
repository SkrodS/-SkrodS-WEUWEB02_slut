<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      timelineBool: false,
      center: { lat: 59.40561346027949, lng: 13.51115627961443 },
      markers: [
        {
          id: "dfsldjl3r",
          position: {
            lat: 59.40561346027949,
            lng: 13.51115627961443,
          },
        },
      ],
    };
  },
  mounted() {
    var rect = this.$refs["container3"].getBoundingClientRect();
    var mouse = { x: 0, y: 0, moved: false };

    this.$refs["container3"].addEventListener("mousemove", (e) => {
      mouse.moved = true;
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    gsap.ticker.add(() => {
      if (mouse.moved) {
        parallaxIt("#img3", -50);
      }
      mouse.moved = false;
    });

    function parallaxIt(target, movement) {
      gsap.to(target, {
        duration: 0.5,
        x: ((mouse.x - rect.width / 2) / rect.width) * movement,
        y: ((mouse.y - rect.height / 2) / rect.height) * movement,
        ease: "power1.out",
      });
    }

    window.addEventListener("resize scroll", () => {
      var rect = this.$refs("container").getBoundingClientRect();
    });

    // confetti
    var total = 20,
      confetti = this.$refs["confetti"],
      w = confetti.offsetWidth,
      h = confetti.offsetHeight;

    for (var i = 0, div; i < total; i++) {
      div = document.createElement("div");
      div.className = "dot";
      confetti.appendChild(div);
      gsap.set(".dot", {
        x: R(0, innerWidth),
        y: R(0, innerHeight),
        opacity: 1,
        scale: R(0, 0.5) + 0.5,
      });
      console.log("done");
      animm(div);
    }

    function animm(elm) {
      gsap.to(elm, {
        duration: R(0, 5) + 10,
        y: -innerHeight,
        ease: "Linear.easeNone",
        repeat: -1,
        delay: -5,
      });
      gsap.to(elm, {
        duration: R(0, 5) + 12,
        x: R(innerWidth, -innerWidth),
        repeat: -1,
        yoyo: true,
        ease: "Sine.easeInOut",
      });
      gsap.to(elm, {
        duration: R(0, 1) + 10.5,
        opacity: R(0, 1),
        repeat: -1,
        yoyo: true,
        ease: "Sine.easeInOut",
      });
    }

    function R(min, max) {
      return min + Math.random() * (max - min);
    }
  },
  methods: {
    //Triggers the following animations when afterLoad is called for this page.
    timeline() {
      if (!this.timelineBool) {
        this.timelineBool = true;
        var tl = gsap.timeline({ onReverseComplete: true });
        tl.to("#container3", {
          duration: 1,
          opacity: 1,
          ease: "power2.inOut",
        });
        "power2.inOut",
          tl.from("#text-anim3", {
            duration: 1,
            x: innerWidth,
            ease: "power2.inOut",
          });
      }
    },
  },
};
</script>

<template>
  <div
    ref="container3"
    id="container3"
    class="relative h-screen w-full flex justify-center content-center dark:bg-gray-900 bg-slate-200 color-anim opacity-0 overflow-hidden"
  >
    <div
      ref="confetti"
      id="confetti"
      class="absolute w-screen h-screen z-20"
    ></div>
    <img
      src="src/assets/Tokyo Store.jpeg"
      alt=""
      class="opacity-80 absolute w-full m-auto dark:grayscale dark:invert-0 grayscale-0 inset-y-full scale-x-150 scale-y-150"
      id="img3"
    />
    <VueWriter
      :array="['Born and raised in:']"
      :start="4300"
      :typeSpeed="100"
      :iterations="1"
      :eraseSpeed="50"
      class="mx-auto z-10 mt-16 text-6xl font-metana font-bold tracking-tighter text-white dark:text-orange-400 text-shadow-sm opacity-90"
    />
    <h1
      id="text-anim3"
      class="absolute mx-auto z-10 mt-32 text-4xl dark:text-white font-newake italic tracking-widest text-black opacity-90 color-anim text-shadow-sm hover:text-shadow-lg"
    >
      Karlstad, Sweden
    </h1>
    <GMapMap
      id="map-anim3"
      :options="{
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
      }"
      :center="center"
      :zoom="5"
      map-type-id="terrain"
      class="w-full h-3/4 color-anim absolute bottom-0"
    >
      <GMapMarker
        :key="marker.id"
        v-for="marker in markers"
        :position="marker.position"
        :icon="{
          url: 'src/assets/map-pin-solid (1).svg',
          scaledSize: { width: 70, height: 70 },
          labelOrigin: { x: 16, y: -10 },
        }"
      />
    </GMapMap>
  </div>
</template>

<style>
.dot {
  width: 30px;
  height: 30px;
  position: absolute;
  background-color: #002fff;
  border-radius: 50%;
}
</style>
