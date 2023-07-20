<template>
  <div class="main-container">
    <section class="page5">
      <div class="page5-texts">
        <h1 class="page5-title">Build your Analytics COE</h1>
        <p class="page5-para">
          Trying to understand how to meet your business AI needs and build<br />your
          Analytics COE to enable data science and machine learning? We<br />have
          the answer you need!
        </p>
      </div>
      <div class="page5-img">
        <img src="/images/downloadcircle.svg" alt="" class="downloadrings" />
        <img
          class="downloadbtn"
          id="downloadbtn"
          src="/images/downloadbtn.svg"
          alt=""
        />
      </div>
    </section>
  </div>
</template>

<style>
.main-container {
  width: 100vw;
  height: 100vh;
}
.page5 {
  text-align: center;
  height: 80vh;
  margin-top: 20vh;
  display: grid;
  grid-template-rows: 30vh 50vh;
}
.page5-title {
  margin-bottom: 3vh;
}
.page5-img {
  display: grid;
  grid-template-columns: 100%;
  justify-items: center;
}
.downloadrings {
  position: relative;
  width: 400px;
  grid-row-start: 1;
  grid-column-start: 1;
}
.downloadbtn {
  position: relative;
  top: 120px;
  width: 180px;
  grid-row-start: 1;
  grid-column-start: 1;
}

@media only screen and (max-width: 1919px) and (min-width: 1600px) {
  .downloadbtn {
    width: 160px;
    top: 105px;
  }
  .downloadrings {
    width: 350px;
  }
}
@media only screen and (max-width: 1599px) and (min-width: 1366px) {
  .downloadbtn {
    width: 130px;
    top: 93px;
  }
  .downloadrings {
    width: 300px;
  }
}
@media only screen and (max-width: 1365px) and (min-width: 1024px) {
  .downloadbtn {
    width: 120px;
    top: 87px;
  }
  .downloadrings {
    width: 280px;
  }
}
@media only screen and (max-width: 1023px) and (min-width: 800px) {
  .downloadbtn {
    width: 90px;
    top: 61px;
  }
  .downloadrings {
    width: 200px;
  }
}
</style>
