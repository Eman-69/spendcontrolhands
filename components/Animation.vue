<template>
  <div>
    <div class="ellipse" id="ellipse">
      <svg
        width="1623"
        height="1623"
        viewBox="0 0 1623 1623"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="svg"
      >
        <circle
          opacity="1"
          cx="811.5"
          cy="811.5"
          r="560"
          stroke="#2684FE"
          stroke-width="5"
        />
        <circle
          opacity="0.8"
          cx="811.5"
          cy="811.5"
          r="637"
          stroke="#2684FE"
          stroke-width="3"
        />
        <circle
          opacity="0.5"
          cx="811.5"
          cy="811.5"
          r="718"
          stroke="#2E6BFE"
          stroke-width="3"
        />
        <circle
          opacity="0.3"
          cx="811.5"
          cy="811.5"
          r="810"
          stroke="#248CFE"
          stroke-width="3"
        />
      </svg>
    </div>
    <img src="/images/page1/graph.png" alt="graph" class="graph" />
    <svg viewBox="50 100 700 700" id="pathsvg" width="100vw">
      <path
        stroke="none"
        fill="none"
        d="M 400 600 L 400 50 L 665 290 L 550 450 L 600 400"
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
  top: -90vh;
  left: -50%;
  height: 150vh;
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
let tl = ref(null);
let t2 = ref(null);
let seekValue = ref(null);
onMounted(() => {
  ellipsepath = $anime.path("#pathsvg path");
  tl = $anime.timeline({
    autoplay: false,
    easing: "easeOutExpo",
    duration: 5000,
  });
  tl.add({
    targets: "#ellipse",
    translateX: ellipsepath("x"),
    translateY: ellipsepath("y"),
    scale: [1, 1, 0, 0, 0],
    opacity: [1, 1, 1, 0, 0],
    easing: "easeOutQuad",
  });
  t2 = $anime.timeline({
    autoplay: false,
    duration: 5000,
  });
  t2.add({
    targets: ".graph",
    opacity: [0, 0, 1, 0, 0],
    easing: "steps(1)",
  });
  //   tl.add({
  //     targets: ".graph",
  //     opacity:[0,0,1,0,0],
  //     easing: "easeOutQuad",
  //     duration:5000,
  //   });
});

watch(props, (val, oldVal) => {
  console.log(props.scrollPer);
  tl.seek(tl.duration * (props.scrollPer / 100));
  t2.seek(t2.duration * (props.scrollPer / 100));
});
</script>
