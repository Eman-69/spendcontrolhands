<template>
    <div class="animecontainer">
        <img id="h1" src="/images/hand/1.svg" alt="">
        <img id="h2" src="/images/hand/2.svg" alt="">
        <img id="h3" src="/images/hand/3.svg" alt="">
        <img id="h4" src="/images/hand/4.svg" alt="">
        <img id="h5" src="/images/hand/5.svg" alt="">
        <img id="h6" src="/images/hand/6.svg" alt="">
        <img id="h7" src="/images/hand/7.svg" alt="">
        <img id="h8" src="/images/hand/8.svg" alt="">
        <!-- <img id="c9" src="/images/coin/Group 13.svg" alt="">
        <img id="c10" src="/images/coin/Group 14.svg" alt="">
        <img id="c11" src="/images/coin/Group 14.svg" alt="">
        <img id="c12" src="/images/coin/Group 13.svg" alt="">
        <img id="c13" src="/images/coin/Group 10.svg" alt="">
        <img id="c14" src="/images/coin/Group 9.svg" alt="">
        <img id="c15" src="/images/coin/Group 8.svg" alt="">
        <img id="c16" src="/images/coin/Group 7.svg" alt="">
        <img id="c17" src="/images/coin/Group 6.svg" alt="">
        <img id="c18" src="/images/coin/Group 5.svg" alt="">
        <img id="c19" src="/images/coin/Group 4.svg" alt="">
        <img id="c20" src="/images/coin/Group 3.svg" alt=""> -->
    </div>
</template>
<style scoped>

.animecontainer{
    height: 100vh;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-rows: 10vh;
    background-color: black;
    scroll-behavior: smooth;
}
.animecontainer > img{
    display: none;
    position: relative;
    top: 50vh;
    grid-row-start: 1;
    grid-column-start: 1;
}
#h1{
    display: block;
} 
</style>
<script setup lang="ts">

let curr=ref(0);
let props = defineProps({
  scrollPer: {
    type: Number,
    required: true,
  },
});
const { $anime } = useNuxtApp();
let i=ref(0);
watch(props, (val, oldVal) => {
//   ellipsetl.seek(ellipsetl.duration * (props.scrollPer / 100));
if(props.scrollPer<=12.5)
{
    curr=Math.round(((props.scrollPer)/12.5)*8);
    console.log(curr);
    for(i=0;i<8;i++)
    {

        let temp=`h`+(i+1);
        let t=document.getElementById(temp);   
        if(i==curr)
        {
            t.style="display:block";
            continue;
        }
        t.style="display:none";
    }
}
else{
    
}
});
</script>
