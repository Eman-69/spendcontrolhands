		
<template>
  <div class="page-container">
    <section class="page2">
      <div class="page2-texts">
        <h1 class="page2-title">Are You Ready for Analytics,<br> AI & Data Science?</h1>
        <p class="page2-para">Successful analytic initiatives do not start with technology or data.They start with strong
          business cases. We can help you identify and analyze the right business cases and then evaluate your data assets
          to determine the right path to success.</p>
      </div>
      <div class="page2-img">
        <div class="fade1">
          <img class="rocket" id="rocket1" src="/images/rocket.svg" alt="1">
          <img class="rocket" id="rocket2" src="/images/world.svg" alt="2">
          <img class="rocket" id="rocket3" src="/images/budget.svg" alt="3">
          <img class="rocket" id="rocket4" src="/images/business.svg" alt="4">
          <img class="rocket" id="rocket5" src="/images/modern-architecture.svg" alt="5">
        </div>
        <div class="fade2">
          <p class="page2-caption" id="caption1">Powerful Innovation</p>
          <p class="page2-caption" id="caption2">Real World Expertise</p>
          <p class="page2-caption" id="caption3">Budget Friendly</p>
          <p class="page2-caption" id="caption4">Business Focus</p>
          <p class="page2-caption" id="caption5">Modern Architecture</p>
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
let rockettl = ref(null);
let captiontl = ref(null);
onMounted(() => {
  rockettl = $anime.timeline({
    autoplay: true,
    duration: 3000,
    loop: true,
  });
  rockettl.add({
    targets: "#rocket1",
    opacity: [0, 1, 0],
    easing: "linear",
  });
  rockettl.add({
    targets: "#rocket2",
    opacity: [0, 1, 0],
    easing: "linear",
  });
  rockettl.add({
    targets: "#rocket3",
    opacity: [0, 1, 0],
    easing: "linear",
  });
  rockettl.add({
    targets: "#rocket4",
    opacity: [0, 1, 0],
    easing: "linear",
  });
  rockettl.add({
    targets: "#rocket5",
    opacity: [0, 1, 0],
    easing: "linear",
  });
  captiontl = $anime.timeline({
    autoplay: true,
    duration: 3000,
    loop: true,
  });
  captiontl.add({
    targets: "#caption1",
    opacity: [0, 1, 0],
    easing: "linear",
  });
  captiontl.add({
    targets: "#caption2",
    opacity: [0, 1, 0],
    easing: "linear",
  });
  captiontl.add({
    targets: "#caption3",
    opacity: [0, 1, 0],
    easing: "linear",
  });
  captiontl.add({
    targets: "#caption4",
    opacity: [0, 1, 0],
    easing: "linear",
  });
  captiontl.add({
    targets: "#caption5",
    opacity: [0, 1, 0],
    easing: "linear",
  });
});
// watch(props, (val, oldVal) => {
//   rockettl.seek(rockettl.duration * (props.scrollPer / 100));
// });
</script>



<style scoped>
template {
  width: 100vw;
  height: 100vh;
}

.page2 {
  margin: 20vh 10vw 10vh;
  width: 80vw;
  height: 70vh;
  display: grid;
  grid-template-rows: 40vh 30vh;
  text-align: center;
}

.page2-texts>p {
  margin-top: 5vh;
  padding: 0 15%;
}

.rocket {
  height: 5vh;
  opacity: 0;
}

.page2-img>p {
  margin-top: 1vh;
  font-size: 1.8rem;
}

.fade1, .fade2 {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
}


.fade1>img {
  grid-row-start: 1;
  grid-column-start: 1;
}

.page2-caption {
  opacity: 0;
}

.fade2>p {
  grid-row-start: 1;
  grid-column-start: 1;
  margin-top: 2vh;
}


@media only screen and (max-width:1599px) and (min-width:1366px) {
  .page2-caption {
    font-size: 1.2rem !important;
  }
}

@media only screen and (max-width:1919px) and (min-width:1600px) {
  .page2-caption {
    font-size: 1.2rem !important;
  }
}

@media only screen and (max-width:1365px) and (min-width:1024px) {
  .page2-caption {
    font-size: 1rem !important;
  }
}

@media only screen and (max-width:1023px) and (min-width:800px) {
  .page2-caption {
    font-size: 0.7rem !important;
  }
}

@media only screen and (max-width:799px) {
  .page2-caption {
    font-size: 0.8rem !important;
  }

  .rocket {
    height: 10vh;
    margin-top: 5%;
  }
}

@media only screen and (max-height:420px) {
  .page2-texts > p{
    padding: 0% 5%;
  }

  .page2-caption {
    font-size: 0.4rem !important;
  }
}

@media (orientation: portrait) {
  .page2 {
    margin: 20vh 5vw 10vh;
    width: 90vw;
    height: 70vh;
    display: grid;
    grid-template-rows: 40vh 30vh;
    text-align: center;
  }
}</style>
