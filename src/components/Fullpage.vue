<template>
  <div ref="fullpage">
    <slot></slot>
  </div>
</template>

<script>
import fullpage from "fullpage.js/dist/fullpage.extensions.min";

export const EVENTS = [
  "afterLoad",
  "onLeave",
  "afterRender",
  "afterResize",
  "afterResponsive",
  "afterSlideLoad",
  "onSlideLeave",
];

export const METHODS = [
  "moveSectionUp",
  "moveSectionDown",
  "moveTo",
  "silentMoveTo",
  "moveSlideRight",
  "moveSlideLeft",
  "setAutoScrolling",
  "setFitToSection",
  "fitToSection",
  "setLockAnchors",
  "setAllowScrolling",
  "setKeyboardScrolling",
  "setRecordHistory",
  "setScrollingSpeed",
  "destroy",
  "reBuild",
  "setResponsive",
  "responsiveSlidesToSections",
  "responsiveSlidesToSlides",
];
function camelToKebab(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
export default {
  methods: {
    build() {
      var slideSelector = this.options.slideSelector || ".slide";
      var sectionSelector = this.options.sectionSelector || ".section";
      const activeSectionIndex = fp_utils.index(
        document.querySelector(sectionSelector + ".active")
      );
      const activeSlide = document.querySelector(
        sectionSelector + ".active " + slideSelector + ".active"
      );
      const activeSlideIndex = activeSlide ? fp_utils.index(activeSlide) : -1;
      this.unmount();
      if (activeSectionIndex > -1) {
        fp_utils.addClass(
          document.querySelectorAll(sectionSelector)[activeSectionIndex],
          "active"
        );
      }
      if (activeSlideIndex > -1) {
        fp_utils.addClass(activeSlide, "active");
      }
      this.init();
    },
    unmount() {
      if (
        typeof fullpage_api !== "undefined" &&
        typeof fullpage_api.destroy !== "undefined"
      ) {
        fullpage_api.destroy("all");
      }
    },
    emitEvent(name, args) {
      // Emit event on Vue way
      this.$emit(camelToKebab(name), ...args);
      // Run event's handler with non Vue way
      if (this.options.name) {
        this.options[name].apply(this, args);
      }
    },
    init() {
      // eslint-disable-next-line
      this.api = new fullpage(this.$refs.fullpage, this.options);
    },
  },
  mounted() {
    !this.skipInit && this.init();
  },
  beforeUnmount() {
    if (typeof this.api !== "undefined") {
      this.unmount();
    }
  },
  data() {
    return {
      events: EVENTS.reduce((eventsHandlers, event) => {
        return {
          ...eventsHandlers,
          [event]: (...args) => {
            this.emitEvent(event, args);
          },
        };
      }, {}),
      api: undefined,
    };
  },
  props: {
    options: {
      type: Object,
      required: true,
    },
    skipInit: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    options: {
      deep: true,
      handler() {
        this.build();
      },
    },
  },
};
</script>