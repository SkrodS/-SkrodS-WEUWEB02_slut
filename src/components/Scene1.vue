<script>
import { gsap } from "gsap";

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
                parallaxIt('.slide', -100);
                parallaxIt('img', -50);
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
    <div ref="container" id="container" class="relative h-screen w-full flex justify-center content-center overflow-hidden bg-gray-600">
        <h1 class="text-7xl slide text-center font-metana font-regular tracking-tight text-black top-16">Robin Widjeback</h1>
    </div>
</template>

<style scoped>
</style>
