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
    class=""
  >
    <form class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            E-mail
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
          />
          <p class="text-gray-600 text-xs italic">
            Some tips - as long as needed
          </p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Message
          </label>
          <textarea
            class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
          ></textarea>
          <p class="text-gray-600 text-xs italic">
            Re-size can be disabled by set by resize-none / resize-y / resize-x
            / resize
          </p>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3">
          <button
            class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Send
          </button>
        </div>
        <div class="md:w-2/3"></div>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
