<template>
    <div class="main-background">
        <div class="nav"><Navbar /></div>
        <div class="container2">
            <div><AboutUs1 /></div>
            <div><AboutUs2 /></div>
            <div><LandingPage5 /></div>
        </div>
    </div>
</template>


<style scoped>
  .container2{
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
  }
  .container2 > div{
    scroll-snap-align: start;
  }

</style>