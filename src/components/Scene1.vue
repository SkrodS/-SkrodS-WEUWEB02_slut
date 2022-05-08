<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      timelineBool: false,
    };
  },
  mounted() {
    var rect = this.$refs["container"].getBoundingClientRect();
    var mouse = { x: 0, y: 0, moved: false };

    this.$refs["container"].addEventListener("mousemove", (e) => {
      mouse.moved = true;
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    gsap.ticker.add(() => {
      if (mouse.moved) {
        parallaxIt(".slide2", -200);
        parallaxIt(".img", -50);
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

    var newShape =
      "100,0 115.5,52.4 158.8,19.1 140.5,70.6 195.1,69.1 150,100 195.1,130.9 140.5,129.4 158.8,180.9 115.5,147.6 100,200 84.5,147.6 41.2,180.9 59.5,129.4 4.9,130.9 50,100 4.9,69.1 59.5,70.6 41.2,19.1 84.5,52.4 ";
    gsap.to(".star", {
      duration: 5,
      rotation: "360deg",
      transformOrigin: "50% 50%",
      repeat: -1,
      ease: "linear.easeNone",
    });
    gsap.to(".star", {
      duration: 2,
      attr: { points: newShape },
      repeat: -1,
      yoyo: true,
      ease: "elastic.easeInOut",
    });
  },

  methods: {
    timeline() {
      if (!this.timelineBool) {
        this.timelineBool = true;
        var tl = gsap.timeline({ onReverseComplete: true });
        tl.to("#container1", { duration: 1, opacity: 1, ease: "power2.inOut" });
        tl.from(".img", { duration: 1, x: innerWidth, ease: "power3.out" });
        tl.from(".slide", {
          scale: 0.2,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
        tl.from(".slide2", {
          scale: 0.2,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
        tl.from(".scroll", {
          delay: 3,
          scale: 0.2,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      }
    },
  },
};
</script>

<template>
  <div
    ref="container"
    id="container1"
    class="relative h-screen w-full flex justify-center content-center overflow-hidden dark:bg-gray-800 bg-slate-200 color-anim opacity-0"
  >
    <div
      class="absolute w-full h-full pattern-isometric dark:pattern-gray-900 pattern-gray-400 pattern-size-32"
    ></div>
    <img
      src="../assets/image.jpg"
      class="img scale-200 absolute left-[50%] scale-125 space-y-reverse scale-x-[-1] dark:grayscale  ease-in-out"
    />
    <div class="star-container absolute top-28 left-36 slide2 color-anim">
      <VueWriter
        :array="['robin Wi', 'Robin Widjeback']"
        :start="5300"
        :delay="1500"
        :typeSpeed="100"
        :iterations="1"
        :eraseSpeed="50"
        class="absolute left-36 text-7xl slide font-metana font-bold tracking-tighter text-orange-400 text-shadow-sm grow opacity-90"
      /><br /><br />
      <svg viewBox="0 0 200 200" width="100" height="100">
        <polygon
          class="star"
          fill="#202225b5"
          points="100,50 130.9,4.9 129.4,59.5 180.9,41.2 147.6,84.5 200,100 147.6,115.5 180.9,158.8 129.4,140.5 
                130.9,195.1 100,150 69.1,195.1 70.6,140.5 19.1,158.8 52.4,115.5 0,100 52.4,84.5 19.1,41.2 70.6,59.5 69.1,4.9 "
        />
      </svg>
      <p
        class="text-2xl font-bold font-metana text-black dark:text-slate-300 -tracking-tighter text-shadow color-anim"
      >
        web developer and programmer
      </p>
    </div>
    <h1
      class="scroll text-2xl z-50 text-center font-metana tracking-widest absolute bottom-0 dark:text-white text-black"
    >
      Scroll<br /><i class="fa-solid fa-arrow-down"></i>
    </h1>
  </div>
</template>

<style scoped></style>
