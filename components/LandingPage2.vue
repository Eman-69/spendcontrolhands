<template>
  <div class="page-container">
    <section class="page2">
      <div class="page2-texts">
        <h1 class="page2-title">Are You Ready for Analytics,<br> AI & Data Science?</h1>
        <p class="page2-para">Successful analytic initiatives do not start with technology or data.They start with strong business cases. We can help you identify and analyze the right business cases and then evaluate your data assets to determine the right path to success.</p>
      </div>
      <div class="page2-img">
          <div class="fade">
            <img class="rocket" id="rocket1" src="../images/rocket.png" alt="1">
            <img class="rocket" id="rocket2" src="../images/rocket.png" alt="2">
            <img class="rocket" id="rocket3" src="../images/rocket.png" alt="3">
            <img class="rocket" id="rocket4" src="../images/rocket.png" alt="4">
            <img class="rocket" id="rocket5" src="../images/rocket.png" alt="5">
          </div>
          <div class="fade">
            <p class="page2-caption" id="p1">Powerful Innovation</p>
            <p class="page2-caption" id="p2">Powerful Innovation</p>
            <p class="page2-caption" id="p3">Powerful Innovation</p>
            <p class="page2-caption" id="p4">Powerful Innovation</p>
            <p class="page2-caption" id="p5">Powerful Innovation</p>
          </div>
      </div>
    </section>
  </div> 
</template>


<script setup lang="ts">
// let props = defineProps({
//   scrollPer: {
//     type: Number,
//     required: true,
//   },
// });
const { $anime } = useNuxtApp();
let rockettl= ref(null);
onMounted(()=>{
        rockettl=$anime.timeline({
        autoplay:true,
        duration:3000,
        loop:true,
    });
    rockettl.add({
        targets:"#rocket1,#p1",
        opacity:[0,1,0],
        easing:"linear",
    });
    rockettl.add({
        targets:"#rocket2,#p2",
        opacity:[0,1,0],
        easing:"linear",
    });
    rockettl.add({
        targets:"#rocket3,#p3",
        opacity:[0,1,0],
        easing:"linear",
    });
    rockettl.add({
        targets:"#rocket4,#p4",
        opacity:[0,1,0],
        easing:"linear",
    });
    rockettl.add({
        targets:"#rocket5,#p5",
        opacity:[0,1,0],
        easing:"linear",
    });

});
// watch(props, (val, oldVal) => {
//   rockettl.seek(rockettl.duration * (props.scrollPer / 100));
// });
</script>



<style scoped>
template{
  width: 100vw;
  height: 100vh;
}
.page2{
  margin: 20vh 10vw 10vh;
  width: 80vw;
  height: 70vh;
  display: grid;
  grid-template-rows: 40vh 30vh;
  text-align: center;
}
.page2-texts>p{
  margin-top: 5vh;
  padding:0 15%;
}
.rocket{
    height: 15vh;
    opacity: 0;
}
.page2-img p{
  margin-top: 1vh;
  font-size: 1.8rem;
}
.fade{
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
}
.fade > img,.fade > p{
  grid-row-start: 1;
  grid-column-start: 1;
  opacity: 0;
}
@media only screen and (max-width:1599px) and (min-width:1366px)
{
  .page2-caption{
    font-size: 1.2rem !important;
  }
}

@media only screen and (max-width:1919px) and (min-width:1600px)
{
    .page2-caption{
      font-size: 1.2rem !important;
    }
}

@media only screen and (max-width:1365px) and (min-width:1024px)
{
 .page2-caption{
        font-size: 1rem !important;
 }
}

@media only screen and (max-width:1023px) and (min-width:800px)
{
   .page2-caption{
          font-size: 0.7rem !important;
   }
}
@media only screen and (max-width:799px)
{
.page2-caption{
            font-size: 0.8rem !important;
     }
  .rocket{
      height: 10vh;
      margin-top: 5%;
  }
}
@media only screen and (max-height:420px) 
{
  .page2-caption{
              font-size: 0.4rem !important;
       }
  }
@media (orientation: portrait)
{
 .page2{
  margin: 20vh 5vw 10vh;
  width: 90vw;
  height: 70vh;
  display: grid;
  grid-template-rows: 40vh 30vh;
  text-align: center;
}
}

</style>
