<script>
import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";

export default {
    mounted() {
        var rect = this.$refs['container'].getBoundingClientRect();
        var mouse = {x: 0, y: 0, moved: false};

        this.$refs['container'].addEventListener('mousemove', (e)=> {
            mouse.moved = true;
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        gsap.ticker.add(()=>{
            if (mouse.moved){
                parallaxIt('.slide', -600);
                parallaxIt('img', -200);
            }
            mouse.moved = false;
        });

        function parallaxIt(target, movement) {
            gsap.to(target, {duration: 0.5, 
                             x: (mouse.x - rect.width / 2) / rect.width * movement,
                             y: (mouse.y - rect.height / 2) / rect.height * movement,
                             ease: "power1.out"});
        }

        window.addEventListener('resize scroll', ()=>{
            var rect = this.$refs('container').getBoundingClientRect();
        });
    },
}
</script>

<template>
    <div ref="container" id="container" class="relative h-screen w-full border-black flex justify-center content-center overflow-hidden">
        <img src="https://unsplash.it/1000/1000?random=" class="absolute top-0 left-0 h-full w-full object-cover scale-125"/>
        <div class="slide block absolute h-52 w-52 bg-red-600 mt-60"></div>  
    </div>
</template>

<style scoped>
</style>
