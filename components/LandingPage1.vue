<template>
  <div class="main-container">
    <section class="page1-texts">
      <h1 class="page1-title">
        Unleashing the Power of Analytics, AI & Data Science for Business
        Success
      </h1>
      <div class="page1arrow">
        <img src="/images/download.png" alt="" class="downarrow" />
      </div>
    </section>
  </div>
</template>
<style scoped>
.main-container {
  width: 100vw;
  height: 100vh;
}
.page1-texts {
  margin: 40vh 10vw 0vh;
  width: 80vw;
  height: 60vh;
  display: grid;
  grid-template-rows: 30vh 30vh;
  text-align: center;
}
/* .page1-title{
} */
.downarrow {
  height: 25vh;
}
</style>

<!-- <script setup lang="ts">
const { $anime } = useNuxtApp();
let leftSideSmokePath = null;
let rightSideSmokePath = null;

onMounted(() => {
  leftSideSmokePath = $anime.path("#leftSideSmokePath path");
  rightSideSmokePath = $anime.path("#rightSideSmokePath path");
});
let startAnimate1 = async () => {
  $anime({
    targets: "#leftSideSmoke",
    translateX: leftSideSmokePath("x"),
    translateY: leftSideSmokePath("y"),
    // rotate: path("angle"),
    easing: "easeOutQuad",
    duration: 2000,
  });
  $anime({
    targets: "#rightSideSmoke",
    translateX: rightSideSmokePath("x"),
    translateY: rightSideSmokePath("y"),
    // rotate: path("angle"),
    easing: "easeOutQuad",
    duration: 2000,
  });
};
</script> -->
