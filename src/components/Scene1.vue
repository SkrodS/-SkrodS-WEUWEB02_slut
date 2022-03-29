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
                parallaxIt('.slide', -200);
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

        const shape2 = 'M469.539032,263.986786H-0.000001L0,229.890961c310.649475,58.156982,255.61113-98.5,469.539032-65.062302V263.986786z'
        const shape3 = 'M469.539032,263.986786H-0.000001L0,0c226.11113,0,182.887283-0.414484,469.539032,0V263.986786zz'

        gsap.from('.slide', {scale: 2, opacity: 0, duration: 1, ease: 'power2.out'})
        var tl = gsap.timeline({repeat: -1, repeatDelay: 1});
        tl.reverse(true);
        tl.to('#wave', {duration: .8, attr: { d: shape2 },ease: 'power2.in'})
        tl.to('#wave', {duration: .8, attr: { d: shape3 }, ease: 'power2.out'})
        tl.to('#wave', {duration: .8, opacity: 0, ease: 'power2.out'})
    },
}
</script>

<template>
    <svg class="wave mr-0 top-0 z-10 absolute h-screen w-screen pointer-events-none" viewBox="0 0 469.539032 263.986786" preserveAspectRatio="none">
        <path id="wave" opacity=".5" d="M469.539032,263.986786H-0.000001L0,263.557617c66.11113,0.429169,351.088104,0.429169,469.539032,0.208344V263.986786z"/>
    </svg>
    <div ref="container" id="container" class="relative h-screen w-full flex justify-center content-center overflow-hidden dark:bg-gray-800 bg-slate-200 color-anim">
        <img src="../assets/image.jpg" class="img grayscale scale-200 absolute left-[50%] scale-125 space-y-reverse scale-x-[-1]">
        <h1 class="text-7xl mt-64 slide font-metana font-bold tracking-tighter text-orange-400 text-shadow-sm grow">Robin Widjeback</h1>
    </div>


</template>

<style scoped>
</style>
