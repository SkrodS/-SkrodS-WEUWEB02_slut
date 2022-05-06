<script>
import { gsap } from "gsap";

export default {
    mounted() {
        function moveCircle(e){
            gsap.to('.circle', {duration: 0, left: e.pageX, top: e.pageY});
            gsap.to('.circle2', {duration: 5, left: e.pageX-20, top: e.pageY+20, ease: 'elastic.out(1,0.3)'});
            gsap.to('.circle3', {duration: 5.5, left: e.pageX+20, top: e.pageY+20, ease: 'elastic.out(1, 0.3)'});
            gsap.to('.circle4', {duration: 6, left: e.pageX+20, top: e.pageY, ease: 'elastic.out(1, 0.3)'});
            gsap.to('.circle5', {duration: 6.5, left: e.pageX-20, top: e.pageY-20, ease: 'elastic.out(1, 0.3)'});
        };
        addEventListener('mousemove', moveCircle);
    },
}
</script>

<template>
    <div class="circle rounded-full bg-white
                absolute w-8 h-8 top-[50%] left-[50%]
                mt-[-16px] mr-0 mb-0 ml-[-16px]
                z-10 mix-blend-exclusion
                pointer-events-none">
    </div>
    <div class="circle2 rounded-full bg-white
                absolute w-3 h-3 top-[50%] left-[50%]
                mt-[-6px] mr-0 mb-0 ml-[-6px]
                z-40 mix-blend-exclusion
                pointer-events-none">
    </div>
    <div class="circle5 rounded-full bg-white
                absolute w-2 h-2 top-[50%] left-[50%]
                mt-[-4px] mr-0 mb-0 ml-[-4px]
                z-20 mix-blend-exclusion
                pointer-events-none">
    </div>
    <div class="circle3 rounded-full bg-white
                absolute w-5 h-5 top-[50%] left-[50%]
                mt-[-10px] mr-0 mb-0 ml-[-10px]
                z-30 mix-blend-exclusion
                pointer-events-none">
    </div>
    <div class="circle4 rounded-full bg-white
                absolute w-4 h-4 top-[50%] left-[50%]
                mt-[-8px] mr-0 mb-0 ml-[-8px]
                z-40 mix-blend-exclusion
                pointer-events-none">
    </div>
</template>

<style scoped>
</style>
