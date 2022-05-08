<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      timelineBool: false,
    };
  },
  methods: {
    timeline() {
      if (!this.timelineBool) {
        this.timelineBool = true;
        var tl = gsap.timeline({ onReverseComplete: true });
        tl.to("#container4", { duration: 1, opacity: 1, ease: "power2.inOut" });
        tl.from("form", {
          stagger: .1,
          scale: 0.2,
          opacity: 0,
          duration: 2,
          ease: "power2.inOut",
        });
      }
    },
  },
};
</script>

<template>
  <div
    ref="container4"
    id="container4"
    class="relative h-screen w-screen flex justify-center content-center overflow-hidden color-anim opacity-0"
  >
    <div
      class="w-full h-full pattern-wavy pattern-slate-100 pattern-bg-slate-300 dark:pattern-bg-gray-700 dark:pattern-gray-600 pattern-size-32 absolute color-anim z-10"
    ></div>
    <div class="absolute w-full h-screen dark:bg-gray-900 bg-slate-200"></div>
    <VueWriter
      :array="['Contact me!']"
      :start="5300"
      :typeSpeed="100"
      :iterations="1"
      :eraseSpeed="50"
      class="absolute mx-auto z-10 mt-16 text-6xl font-metana font-bold tracking-tighter text-orange-400 text-shadow-sm opacity-90"
    />
    <form class="w-full max-w-lg m-auto mt-100 z-30">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white color-anim"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-lg"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white color-anim"
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow-lg"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white color-anim"
            for="grid-password"
          >
            E-mail
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow-lg"
            id="email"
            type="email"
          />
          <p class="text-gray-500 text-xs italic dark:text-gray-500 color-anim">
            Some tips - as long as needed
          </p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white color-anim"
            for="grid-password"
          >
            Message
          </label>
          <textarea
            class="resize-y appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 shadow-lg"
            id="message"
          ></textarea>
          <p class="text-gray-500 text-xs italic dark:text-gray-500 color-anim">
            Write year message above.
          </p>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3">
          <button
            class="shadow bg-orange-400 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-none color-anim"
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
