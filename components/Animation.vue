<template>
  <div>
    <div class="ellipse" id="ellipse">
      <svg
        width="2000"
        height="2000"
        viewBox="0 0 2000 2000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="svg"
      >
        <circle
          id="c1"
          opacity="1"
          cx="811.5"
          cy="811.5"
          r="780"
          stroke="#2684FE"
          stroke-width="5"
        />
        <circle
          id="c2"
          opacity="0.8"
          cx="811.5"
          cy="811.5"
          r="790"
          stroke="#2684FE"
          stroke-width="3"
        />
        <circle
          id="c3"
          opacity="0.5"
          cx="811.5"
          cy="811.5"
          r="800"
          stroke="#2E6BFE"
          stroke-width="3"
        />
        <circle
          id="c4"
          opacity="0.3"
          cx="811.5"
          cy="811.5"
          r="810"
          stroke="#248CFE"
          stroke-width="3"
        />
      </svg>
    </div>
    <div class="graph-container">
      <img src="../images/page1/graph.png" alt="graph" class="graph" />
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
        <circle cx="99.5" cy="99.5" r="50" stroke="#2684FE" stroke-width="3" />
      </svg>
    </div>

    <svg viewBox="50 100 700 700" id="pathsvg" width="100vw">
      <path
        stroke="red"
        fill="none"
        d="M 400 600 L 400 50 L 665 290 L 665 450 L 665 400"
      ></path>
    </svg>
  </div>
</template>
<style>
template {
  width: 100vw;
  height: 100vh;
}
#ellipse {
  position: absolute;
  top: -130vh;
  left: -42.5%;
  height: 160vh;
  width: 100%;
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
  /* animation-name:svganime;
    animation-timing-function: ease-in-out;
    animation-duration: 3s;
    animation-iteration-count: infinite; */
}
/* @keyframes svganime{
    0% {transform: scale(1);}
    50% {transform: scale(1.1);}
    100% {transform: scale(1);}
} */

.graph {
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  height: 100vh;
  opacity: 0;
}
.graphdot {
  height: 22vh;
  position: absolute;
  right: 7.5vw;
  top: 33vh;
  z-index: -1;
  opacity: 0;
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
    duration: 5000,
  });
  graphtl = $anime.timeline({
    autoplay: false,
    duration: 5000,
  });
  graphdottl = $anime.timeline({
    autoplay: false,
    duration: 5000,
  });
  c1tl = $anime.timeline({
    autoplay: false,
    duration: 5000,
  });
  c2tl = $anime.timeline({
    autoplay: false,
    duration: 5000,
  });
  c3tl = $anime.timeline({
    autoplay: false,
    duration: 5000,
  });
  c4tl = $anime.timeline({
    autoplay: false,
    duration: 5000,
  });
  ellipsetl.add({
    targets: "#ellipse",
    translateX: ellipsepath("x"),
    translateY: ellipsepath("y"),
    scale: [1, 1, 0, 0, 0],
    opacity: [1, 1, -0.8, 0, 0],
    top: ["-130vh", "0vh", "-110vh", "-90vh", "-90vh"],
    easing: "easeOutQuad",
  });
  graphtl.add({
    targets: ".graph",
    opacity: [0, 0, 1, 0, 0],
    easing: "steps(1)",
  });
  graphdottl.add({
    targets: ".graphdot",
    opacity: [0, 0, 1, 1, 1],
    top: ["33vh", "33vh", "33vh", "33vh", "33vh"],
    right: ["7.5vw", "7,5vw", "7.5vw"],
    easing: "linear",
  });
  c1tl.add({
    targets: "#c1",
    r: [780, 780, 780, 780, 780],
    easing: "easeOutElastic",
  });
  c2tl.add({
    targets: "#c2",
    r: [790, 900, 900, 900, 900],
    easing: "easeOutElastic",
  });
  c3tl.add({
    targets: "#c3",
    r: [800, 1000, 1000, 1000, 1000],
    easing: "easeOutElastic",
  });
  c4tl.add({
    targets: "#c4",
    r: [810, 1100, 1100, 1100, 1100],
    easing: "easeOutElastic",
  });
  //   ellipsetl.add({
  //     targets: ".graph",
  //     opacity:[0,0,1,0,0],
  //     easing: "easeOutQuad",
  //     duration:5000,
  //   });
});

watch(props, (val, oldVal) => {
  console.log(props.scrollPer);
  ellipsetl.seek(ellipsetl.duration * (props.scrollPer / 100));
  graphtl.seek(graphtl.duration * (props.scrollPer / 100));
  graphdottl.seek(graphdottl.duration * (props.scrollPer / 100));
  c1tl.seek(c1tl.duration * (props.scrollPer / 100));
  c2tl.seek(c2tl.duration * (props.scrollPer / 100));
  c3tl.seek(c3tl.duration * (props.scrollPer / 100));
  c4tl.seek(c4tl.duration * (props.scrollPer / 100));
});
</script>
