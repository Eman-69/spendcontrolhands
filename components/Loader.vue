<template>
    <div class="page-container" v-if="!isloaded">
        <section class="cover">
            <img src="/images/logoDark.png" alt="KenFront logo">
        </section>
    </div>
</template>

<script>
  export default {
    data: () => {
      return {
        isloaded: false
      }
    },
    onMounted() {
        setTimeout(() => {
           return this.isloaded = true; 
        }, 3000);
    },
  }
</script>
<style scoped>
.cover{
    position: absolute;
    z-index: 100;
    height: 100vh;
    width: 100vw;
    background-color: white;
}
</style>