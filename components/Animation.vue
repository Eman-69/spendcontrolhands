<template>
  <div class="ellipse" id="ellipse">
    <svg
      width="2000"
      height="1900"
      viewBox="0 0 2000 1900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="svg"
    >
      <circle
        id="c1"
        opacity="1"
        cx="811.5"
        cy="811.5"
        r="740"
        stroke="#2684FE"
        stroke-width="5"
      />
      <circle
        id="c2"
        opacity="0.8"
        cx="811.5"
        cy="811.5"
        r="760"
        stroke="#2684FE"
        stroke-width="3"
      />
      <circle
        id="c3"
        opacity="0.5"
        cx="811.5"
        cy="811.5"
        r="780"
        stroke="#2E6BFE"
        stroke-width="3"
      />
      <circle
        id="c4"
        opacity="0.3"
        cx="811.5"
        cy="811.5"
        r="800"
        stroke="#248CFE"
        stroke-width="3"
      />
    </svg>
  </div>
  <div class="graph-container">
    <img src="/images/page1/graphbg.png" alt="graph" class="graph" />
    <svg
      class="graphdot"
      width="199"
      height="199"
      viewBox="0 0 199 199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        opacity="0.2"
        cx="99.5"
        cy="99.5"
        r="98"
        stroke="#248CFE"
        stroke-width="3"
      />
      <circle
        opacity="0.5"
        cx="99.5"
        cy="99.5"
        r="82"
        stroke="#2E6BFE"
        stroke-width="3"
      />
      <circle
        opacity="0.7"
        cx="99.5"
        cy="99.5"
        r="67"
        stroke="#2684FE"
        stroke-width="3"
      />
      <circle
        cx="100"
        cy="100"
        r="13"
        fill="#10CDFC"
        stroke="#10CDFC"
        stroke-width="5"
      />
      <circle cx="99.5" cy="99.5" r="50" stroke="#2684FE" stroke-width="3" />
    </svg>
    <!-- <img class="question" src="images/question.png" alt=""> -->
    <!-- <svg class="questiondot" width="627" height="546" viewBox="0 0 627 546" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.5" cx="313.5" cy="313.5" r="217" transform="rotate(-180 313.5 313.5)" stroke="url(#paint1_linear_97_1002)" stroke-width="3"/>
        <circle opacity="0.7" cx="313.5" cy="313.5" r="135" transform="rotate(-180 313.5 313.5)" stroke="url(#paint2_linear_97_1002)" stroke-width="3"/>
        <circle cx="313.5" cy="313.5" r="51" stroke="#5DCDF6" stroke-width="5"/>
        <defs>
        <linearGradient id="paint0_linear_97_1002" x1="313.5" y1="-0.000274658" x2="313.5" y2="627" gradientUnits="userSpaceOnUse">
        <stop stop-color="#248CFE"/>
        <stop offset="1" stop-color="#248CFE" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint1_linear_97_1002" x1="313.5" y1="94.9997" x2="313.5" y2="532" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2E6BFE"/>
        <stop offset="1" stop-color="#2E6BFE" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint2_linear_97_1002" x1="313.5" y1="177" x2="313.5" y2="450" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2684FE"/>
        <stop offset="1" stop-color="#2684FE" stop-opacity="0"/>
        </linearGradient>
        </defs>
      </svg> -->
  </div>

  <svg viewBox="50 100 700 700" id="pathsvg" width="100vw">
    <path
      stroke="none"
      fill="none"
      d="M 400 600 L 400 50 L 665 290 L 665 450 L 665 400"
    ></path>
  </svg>
</template>
<style scoped>
template {
  width: 100vw;
  height: 100vh;
}
#ellipse {
  position: absolute;
  top: -125vh;
  left: -51vw;
  height: 180%;
  width: 120%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: baseline;
  justify-items: center;
}
.ellipse > svg {
  width: 100%;
  height: 100%;
  grid-row-start: 1;
  grid-column-start: 1;
  animation-name: svganime;
  animation-timing-function: ease-in-out;
  animation-duration: 6s;
  animation-iteration-count: infinite;
}
@keyframes svganime {
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(1%);
  }
  100% {
    transform: translateY(0%);
  }
}

.graph {
  position: absolute;
  z-index: -1;
  top: 27vh;
  right: 0;
  height: 100vh;
  width: 960px;
  opacity: 0;
}
.graphdot {
  height: 22vh;
  position: absolute;
  right: 145px;
  top: 34.5vh;
  z-index: -1;
  opacity: 0;
}
.questiondot {
  height: 10vh;
  position: absolute;
  right: -3.5vw;
  top: 38vh;
  z-index: -1;
  opacity: 0;
}

@media only screen and (max-aspect-ratio: 4/3) {
  #ellipse {
    top: -90vh;
    left: -49vw;
  }
}

@media (orientation: portrait) {
  .graph {
    top: 60vh;
  }
  .graphdot {
    top: 66vh !important;
  }
  #ellipse {
    top: -75vh;
  }
}
</style>
<script setup lang="ts">
let props = defineProps({
  scrollPer: {
    type: Number,
    required: true,
  },
});
const { $anime } = useNuxtApp();
let ellipsepath = ref(null);
let ellipsetl = ref(null);
let graphtl = ref(null);
let graphdottl = ref(null);
// let questiondottl= ref(null);
let c1tl = ref(null);
let c2tl = ref(null);
let c3tl = ref(null);
let c4tl = ref(null);
let seekValue = ref(null);
onMounted(() => {
  ellipsepath = $anime.path("#pathsvg path");
  ellipsetl = $anime.timeline({
    autoplay: false,
    easing: "easeOutExpo",
    duration: 10000,
  });
  graphtl = $anime.timeline({
    autoplay: false,
    duration: 10000,
  });
  graphdottl = $anime.timeline({
    autoplay: false,
    duration: 10000,
  });
  // questiondottl=$anime.timeline({
  //   autoplay: false,
  //   duration: 10000,
  // });
  c1tl = $anime.timeline({
    autoplay: false,
    duration: 10000,
  });
  c2tl = $anime.timeline({
    autoplay: false,
    duration: 10000,
  });
  c3tl = $anime.timeline({
    autoplay: false,
    duration: 10000,
  });
  c4tl = $anime.timeline({
    autoplay: false,
    duration: 10000,
  });
  ellipsetl.add({
    targets: "#ellipse",
    translateX: ellipsepath("x"),
    translateY: ellipsepath("y"),
    scale: [1, 1, -0.8, 0, 0],
    opacity: [1, 1, -0.8, 0, 0],
    top: ["-125vh", "0vh", "-160vh", "-90vh", "-90vh"],
    left: ["-51vw", "-51vw", "-22.5vw", "-22.5vw", "-22.5vw"],
    easing: "easeOutQuad",
  });
  graphtl.add({
    targets: ".graph",
    opacity: [0, 0, 1, 0, 0],
    easing: "steps(1)",
  });
  graphdottl.add({
    targets: ".graphdot",
    opacity: [0, 0, 2, -2, -2],
    top: ["34.5vh", "34.5vh", "34.5vh", "73vh", "73vh"],
    right: ["145px", "145px", "145px", "100px", "100px"],
    easing: "linear",
  });
  // questiondottl.add({
  //   targets:".questiondot",
  //   opacity:[0,0,1,0,0],
  //   scale:[1,1,1,7,0],
  //   top:["38vh","38vh","38vh","73vh","73vh"],
  //   right:["-3.5vw","-3.5vw","-3.5vw","13.5vw","13.5vw"],
  //   easing: "linear",
  // });
  c1tl.add({
    targets: "#c1",
    r: [740, 780, 780, 780, 780],
    easing: "easeOutElastic",
  });
  c2tl.add({
    targets: "#c2",
    r: [760, 900, 900, 900, 900],
    easing: "easeOutElastic",
  });
  c3tl.add({
    targets: "#c3",
    r: [780, 1000, 1000, 1000, 1000],
    easing: "easeOutElastic",
  });
  c4tl.add({
    targets: "#c4",
    r: [800, 1100, 1100, 1100, 1100],
    easing: "easeOutElastic",
  });
  //   ellipsetl.add({
  //     targets: ".graph",
  //     opacity:[0,0,1,0,0],
  //     easing: "easeOutQuad",
  //     duration:10000,
  //   });
});

watch(props, (val, oldVal) => {
  ellipsetl.seek(ellipsetl.duration * (props.scrollPer / 100));
  graphtl.seek(graphtl.duration * (props.scrollPer / 100));
  graphdottl.seek(graphdottl.duration * (props.scrollPer / 100));
  // questiondottl.seek(questiondottl.duration * (props.scrollPer / 100));
  c1tl.seek(c1tl.duration * (props.scrollPer / 100));
  c2tl.seek(c2tl.duration * (props.scrollPer / 100));
  c3tl.seek(c3tl.duration * (props.scrollPer / 100));
  c4tl.seek(c4tl.duration * (props.scrollPer / 100));
});
</script>
