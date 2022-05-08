<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      timelineBool: false,
    };
  },

  mounted() {},

  methods: {
    timeline() {
      if (!this.timelineBool) {
        this.timelineBool = true;
        var tl = gsap.timeline({ onReverseComplete: true });
        tl.to("#container2", { duration: 1, opacity: 1, ease: "power2.inOut" });
        tl.from("#card1", {
          scale: 0.2,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
        tl.from("#card2", {
          scale: 0.2,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
        tl.from("#card3", {
          scale: 0.2,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
        tl.from("#card4", {
          scale: 0.2,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
        tl.from("#scroll-text", {
          scale: 0.2,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
      }
    },
  },
};
</script>

<template>
  <div
    ref="container"
    id="container2"
    class="relative h-screen w-full flex justify-center content-center overflow-hidden dark:bg-gray-900 bg-slate-200 color-anim opacity-0"
  >
    <VueWriter
      :array="['Projects']"
      :start="5300"
      :typeSpeed="100"
      :iterations="1"
      :eraseSpeed="50"
      class="absolute mx-auto mt-16 text-6xl font-metana font-bold tracking-tighter text-orange-400 text-shadow-sm opacity-90 z-50"
    />
    <p
      id="scroll-text"
      class="absolute mx-auto mt-32 text-xl font-newake font-bold tracking-widest text-black dark:text-white text-shadow-sm opacity-90 color-anim"
    >
      (Scroll <i class="fa-solid fa-arrow-right-long"></i>)
    </p>
    <div class="flex items-center justify-center">
      <div
        class="w-full h-full pattern-wavy pattern-gray-900 pattern-bg-white pattern-size-32 pattern-opacity-5 absolute color-anim"
      ></div>

      <div
        class="flex flex-no-wrap overflow-x-scroll items-start mt-12 ml-[5rem] no-scrollbar"
      >
        <!-- CARD -->
        <div
          id="card1"
          class="ml-8 flex-none md:w-1/3 mr-8 md:pb-4 relative max-w-xl overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-xl z-40 bg-opacity-60 border border-gray-200 rounded-xl color-anim"
        >
          <a
            href="src/assets/Screenshot from 2022-05-06 11-20-10.png"
            target="_blank"
          >
            <img
              class="h-80 w-full object-cover hover:blur-sm transition-all"
              src="src/assets/Screenshot from 2022-05-06 11-20-10.png"
              alt=""
            />
          </a>
          <div class="p-5 mb-12">
            <a href="#">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-white color-anim font-metana"
              >
                Bizard: The Bunny-loving Wizard
              </h5>
            </a>
            <p
              class="mb-3 font-normal text-gray-400 color-anim hidden xl:block"
            >
              Bizard is a rouge-like shooter game I made for a programming class
              in my second year of Upper secondary school. You play as the
              charachter Bizard who's main goal is to turn living tree trunks
              into cute rabbits.
            </p>
            <p
              class="mb-3 font-normal text-gray-400 color-anim hidden xl:block"
            >
              The game was created in python using pygame. Check out the code
              below!
            </p>

            <div class="absolute bottom-0 h-16 inset-x-0">
              <a
                href="https://github.com/SkrodS/bizard-game"
                class="inline-flex items-center py-2 px-3 w-full text-2xl font-medium text-center text-black bg-orange-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-400 dark:hover:bg-blue-800 dark:focus:ring-blue-800 color-anim"
              >
                <p class="mx-auto font-newake tracking-wider">
                  Visit repo: <i class="fa-brands fa-github"></i>
                </p>
              </a>
            </div>
          </div>
        </div>

        <!-- CARD -->
        <div
          id="card2"
          class="flex-none w-1/3 md:w-1/3 mr-8 md:pb-4 relative max-w-xl overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-xl z-40 bg-opacity-60 border border-gray-200 rounded-xl color-anim"
        >
          <a href="src/assets/smartmockups_klawjpjg.jpg" target="_blank">
            <img
              class="h-80 w-full object-cover hover:blur-sm transition-all"
              src="src/assets/smartmockups_klawjpjg.jpg"
              alt=""
            />
          </a>
          <div class="p-5 mb-12">
            <a href="#">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-white color-anim font-metana"
              >
                Share:y
              </h5>
            </a>
            <p
              class="mb-3 font-normal text-gray-400 color-anim hidden xl:block"
            >
              This is a project I worked on for school. It's social media
              platform called Share:y with fully functional back-end +
              front-end, made by me.
            </p>
            <p
              class="mb-3 font-normal text-gray-400 color-anim hidden xl:block"
            >
              The back-end enables the users to create accounts, make posts,
              visit other peoples profiles.
            </p>

            <div class="absolute bottom-0 h-16 inset-x-0">
              <a
                href="https://github.com/SkrodS/bizard-game"
                class="inline-flex items-center py-2 px-3 w-full text-2xl font-medium text-center text-black bg-orange-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-400 dark:hover:bg-blue-800 dark:focus:ring-blue-800 color-anim"
              >
                <p class="mx-auto font-newake tracking-wider">
                  Visit repo: <i class="fa-brands fa-github"></i>
                </p>
              </a>
            </div>
          </div>
        </div>

        <!-- CARD -->
        <div
          id="card3"
          class="flex-none w-1/3 md:w-1/3 mr-8 md:pb-4 relative max-w-xl overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-xl z-40 bg-opacity-60 border border-gray-200 rounded-xl color-anim"
        >
          <a href="src\assets\Skärmbild 2022-05-06 200821.png" target="_blank">
            <img
              class="h-80 w-full object-cover hover:blur-sm transition-all"
              src="src\assets\Skärmbild 2022-05-06 200821.png"
              alt=""
            />
          </a>
          <div class="p-5 mb-12">
            <a href="#">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-white color-anim font-metana"
              >
                REV
              </h5>
            </a>
            <p
              class="mb-3 font-normal text-gray-400 color-anim hidden xl:block"
            >
              {REV} is another social media platform I made for school. This one
              does however only feature a front end made by me.
            </p>
            <p
              class="mb-3 font-normal text-gray-400 color-anim hidden xl:block"
            >
              This project was a normal message board type social media platform
              with an integrated news feed. The news were served using RSS.
            </p>

            <div class="absolute bottom-0 h-16 inset-x-0">
              <a
                href="https://github.com/SkrodS/-rev--social-media"
                class="inline-flex items-center py-2 px-3 w-full text-2xl font-medium text-center text-black bg-orange-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-400 dark:hover:bg-blue-800 dark:focus:ring-blue-800 color-anim"
              >
                <p class="mx-auto font-newake tracking-wider">
                  Visit repo: <i class="fa-brands fa-github"></i>
                </p>
              </a>
            </div>
          </div>
        </div>

        <!-- CARD -->
        <div
          id="card4"
          class="flex-none w-1/3 md:w-1/3 mr-8 md:pb-4 relative max-w-xl overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-xl z-40 bg-opacity-60 border border-gray-200 rounded-xl color-anim"
        >
          <a
            href="src/assets/Screenshot from 2022-05-06 11-39-51.png"
            target="_blank"
          >
            <img
              class="h-80 w-full object-cover hover:blur-sm transition-all"
              src="src/assets/Screenshot from 2022-05-06 11-39-51.png"
              alt=""
            />
          </a>
          <div class="p-5 mb-12">
            <a href="#">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-white color-anim font-metana"
              >
                EC Store
              </h5>
            </a>
            <p
              class="mb-3 font-normal text-gray-400 color-anim hidden xl:block"
            >
              For this project I created a whole webshop including back-end and
              front-end.
            </p>
            <p
              class="mb-3 font-normal text-gray-400 color-anim hidden xl:block"
            >
              The website works as you'd imagine, you can put items in your
              shopping cart, create orders and it even has an admin page where
              everything can be managed by an owner.
            </p>

            <div class="absolute bottom-0 h-16 inset-x-0">
              <a
                href="https://github.com/SkrodS/ec-store"
                class="inline-flex items-center py-2 px-3 w-full text-2xl font-medium text-center text-black bg-orange-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-400 dark:hover:bg-blue-800 dark:focus:ring-blue-800 color-anim"
              >
                <p class="mx-auto font-newake tracking-wider">
                  Visit repo: <i class="fa-brands fa-github"></i>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        src="src/assets/wallpapersden.com_cyberpunk-2077-lifepaths_3840x2160.jpg"
        alt=""
        class="opacity-80 absolute w-full m-auto dark:grayscale dark:invert-0 grayscale-0"
      />
    </div>
  </div>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
