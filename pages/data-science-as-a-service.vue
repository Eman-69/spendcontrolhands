<template>
  <div class="bg-black">
    <div class="nav"><Navbar /></div>
    <div class="container" ref="el">
      <!-- section 1 -->
      <div class="section justify-center">
        <!-- section 1 a-->
        <v-container
          fluid
          style="position: relative; height: 50vh"
          class="pa-0 ma-0"
        >
          <div style="position: absolute; width: 100%; height: 100%">
            <v-sheet
              style="
                background: transparent;
                position: relative;
                width: 100%;
                height: 100%;
              "
            >
              <v-img
                height="100%"
                cover
                src="/images/background-service.png"
              ></v-img>
            </v-sheet>
          </div>
          <div class="ellipse-main">
            <v-sheet style="background: transparent">
              <v-img
                class="group-ellipse"
                src="/images/ellipses/group4.svg"
              ></v-img>
            </v-sheet>
          </div>

          <div class="service-title">Data Science as a Service</div>
        </v-container>
        <!-- section 1b -->
        <v-container fluid style="position: relative; height: 50vh">
          <v-row class="fill-height d-none d-md-flex">
            <v-col
              class="fill-height my-auto"
              style="position: relative"
              xl="6"
              lg="6"
              md="6"
              sm="12"
              cols="12"
            >
              <div class="my-auto service-subtitle">
                Industry’s First “as a Service” Consulting Model
              </div>
            </v-col>
            <v-col
              class="fill-height my-auto"
              xl="6"
              lg="6"
              md="6"
              sm="12"
              cols="12"
              style="position: relative"
            >
              <div class="my-auto service-description">
                Are you ready to get started or accelerate your Data Science, AI
                or ML initiatives? We offer a revolutionary “as a service”
                approach to scale the direction and costs of Data
                Science.Everything you need and nothing you don’t make this a
                game changer.
              </div>
            </v-col>
          </v-row>
          <v-container class="fill-height d-block d-md-none my-auto">
            <v-row class="fill-height my-auto">
              <v-col cols="12" class="my-auto service-subtitle-small">
                Industry’s First “as a Service” Consulting Model
              </v-col>

              <v-col cols="12" class="my-auto service-description-small">
                Are you ready to get started or accelerate your Data Science, AI
                or ML initiatives? We offer a revolutionary “as a service”
                approach to scale the direction and costs of Data
                Science.Everything you need and nothing you don’t make this a
                game changer.
              </v-col>
            </v-row>
          </v-container>
        </v-container>
      </div>
      <div class="section">2</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}
.section {
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
.service-title {
  position: absolute;
  transform: translate(-40%, -50%);
  top: 50%;
  left: 20%;
  font-weight: 700;
  font-size: 50px;
}
.service-subtitle {
  font-size: 46px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 40%;
  width: 80%;
}
.service-description {
  font-size: 22px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 40%;
  width: 80%;
}
.ellipse-main {
  position: absolute;
  width: 50%;
  height: 100%;
  right: 0;
}
.group-ellipse {
  animation: zoomInOut 20s infinite alternate ease-in-out;
}

@media only screen and (max-width: 2650px) {
  .service-title {
    font-size: 57px;
  }
  .service-subtitle {
    font-size: 46px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 40%;
    width: 80%;
  }
  .service-description {
    font-size: 19px;
    position: absolute;
    left: 50%;
    font-weight: 300;
    transform: translate(-50%, -50%);
    top: 40%;
  }
}
@media only screen and (max-width: 1440px) {
  .service-title {
    font-size: 50px;
    left: 25%;
  }
  .service-subtitle {
    font-size: 46px;
  }
  .service-description {
    font-size: 20px;
  }
}
@media only screen and (max-width: 1250) {
  .service-title {
    font-size: 38px;
    left: 40%;
    transform: translate(-50%, -50%);
  }
  .service-subtitle {
    font-size: 43px;
  }
  .service-description {
    font-size: 18px;
  }
}
@media only screen and (max-width: 1024) {
  .service-title {
    font-size: 3px;
    left: 50%;
  }
}
@media only screen and (max-width: 960px) {
  .service-title {
    font-size: 37px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .service-subtitle {
    font-size: 40px;
    position: relative;
  }
  .service-description {
    font-size: 16px;
    position: relative;
  }
  .service-subtitle-small {
    font-size: 30px;
    text-align: center;
    line-height: 1;
    position: relative;
  }
  .service-description-small {
    font-size: 16px;
    position: relative;
    text-align: center;
    font-weight: 300;
  }
}
@media only screen and (max-width: 720px) {
  .service-title {
    text-align: center;
    font-size: 36px;
    left: 50%;
  }
  .ellipse-main {
    top: 15%;
    width: 100%;
  }
}
@media only screen and (max-width: 600px) {
  .service-title {
    font-size: 32px;
  }
}

@media only screen and (max-width: 500px) {
  .service-title {
    font-size: 28px;
  }
}
@media only screen and (max-width: 350px) {
  .service-title {
    font-size: 15px;
  }
  .service-subtitle {
    font-size: 9px;
    line-height: 1;
  }
  .service-description {
    font-size: 6px;
  }
}

@keyframes zoomInOut {
  0%,
  100% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1); /* Adjust the value to control the zoom level */
  }
}
</style>
