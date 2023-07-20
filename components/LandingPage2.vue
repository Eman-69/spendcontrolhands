<template>
  <div class="main-container">
    <section class="page2">
      <div class="page2-texts">
        <h1 class="page2-title">
          Are You Ready for Analytics,<br />
          AI & Data Science?
        </h1>
        <p class="page2-para">
          Successful analytic initiatives do not start with technology or
          data.They start with strong business cases. We can help you identify
          and analyze the right business cases and then evaluate your data
          assets to determine the right path to success.
        </p>
      </div>
      <div class="page2-img">
        <img class="rocket" src="/images/rocket.png" alt="rocket" />
        <p class="page2-caption">Powerful Innovation</p>
      </div>
    </section>
  </div>
</template>
<style scoped>
.main-container {
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
.page2-texts > p {
  margin-top: 5vh;
}
.rocket {
  height: 15vh;
}
.page2-img > p {
  margin-top: 3vh;
  font-size: 1.8rem;
}

@media only screen and (max-width: 1599px) and (min-width: 1366px) {
  .page2-caption {
    font-size: 1.2rem !important;
  }
}

@media only screen and (max-width: 1919px) and (min-width: 1600px) {
  .page2-caption {
    font-size: 1.2rem !important;
  }
}

@media only screen and (max-width: 1365px) and (min-width: 1024px) {
  .page2-caption {
    font-size: 1rem !important;
  }
}

@media only screen and (max-width: 1023px) and (min-width: 800px) {
  .page2-caption {
    font-size: 0.7rem !important;
  }
}
</style>
