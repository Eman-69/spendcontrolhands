<template>
  <div class="main-background">
    <div class="animation"><Animation :scrollPer="scrollPer" /></div>
    <div class="nav"><Navbar /></div>
    <div class="container" ref="el" @scroll="handleScroll()">
      <div id="id1"><LandingPage1 /></div>
      <div id="id2"><LandingPage2 /></div>

      <div id="id3"><LandingPage3 /></div>
      <div id="id4"><LandingPage4 /></div>
      <div id="id5"><LandingPage5 /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const el = ref(null);
let scrollPer = ref(0);
console.log(el);
let drawer = ref(false);
const handleScroll = () => {
  const scrollTop = el.value.scrollTop;
  const scrollHeight = el.value.scrollHeight;
  const clientHeight = el.value.clientHeight;
  scrollPer.value = (scrollTop / (scrollHeight - clientHeight)) * 100;
  console.log("scrollper", scrollPer.value);
};
</script>

<style>
.animation {
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: -1;
}
.container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}
.container > div {
  scroll-snap-align: start;
}
</style>
