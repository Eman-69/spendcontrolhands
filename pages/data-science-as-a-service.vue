<template>
  <div class="bg-black">
    <div class="container" ref="el">
      <!-- section 1 -->
      <div class="justify-center">
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
          <div class="ellipse-main d-none d-md-block">
            <v-sheet style="background: transparent">
              <v-img
                class="group-ellipse"
                src="/images/ellipses/ellipse-data-service.png"
              ></v-img>
            </v-sheet>
          </div>
          <div class="d-block d-md-none">
            <v-sheet style="background: transparent">
              <v-img
                class="group-ellipse"
                src="/images/ellipses/ellipse-data-service.png"
              ></v-img>
            </v-sheet>
          </div>

          <div class="service-title">Data Science as a Service</div>
        </v-container>
        <!-- section 1b -->

        <div style="height: 50vh">
          <v-container fluid class="d-none d-md-block fill-height">
            <v-row class="fill-height">
              <v-col
                class="my-auto fill-height"
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
                class="my-auto fill-height"
                xl="6"
                lg="6"
                md="6"
                sm="12"
                cols="12"
                style="position: relative"
              >
                <div class="my-auto service-description">
                  Are you ready to get started or accelerate your Data Science,
                  AI or ML initiatives? We offer a revolutionary “as a service”
                  approach to scale the direction and costs of Data Science.
                  Everything you need and nothing you don’t make this a game
                  changer.
                </div>
              </v-col>
            </v-row>
          </v-container>
          <v-container class="d-block d-md-none my-auto fill-height">
            <v-row class="my-auto fill-height">
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
        </div>
      </div>

      <div class="section">
        <v-divider class="text-white"></v-divider>
        <!-- <div class="section-margin-top"></div> -->
        <v-container>
          <v-row>
            <v-col
              xl="4"
              lg="6"
              md="6"
              sm="6"
              cols="12"
              v-for="(each, i) in items"
              :key="i"
            >
              <v-row class="d-none d-md-flex hover-card">
                <v-col xl="3" lg="4" md="4" sm="6" cols="5">
                  <v-sheet style="background: transparent" class="pa-3">
                    <v-img :aspect-ratio="1 / 1" :src="each.src"> </v-img>
                  </v-sheet>
                </v-col>

                <v-col xl="9" lg="8" md="8" sm="12" cols="12" class="my-auto">
                  <div class="service-each-title mx-auto">
                    {{ each.title }}
                  </div>
                  <div class="service-each-subtitle mx-auto">
                    {{ each.description }}
                  </div>
                </v-col>
              </v-row>
              <v-row class="d-flex d-md-none justify-center text-center">
                <v-col xl="3" lg="4" md="4" sm="6" cols="5" class="py-0">
                  <v-sheet style="background: transparent" class="pa-3">
                    <v-img :aspect-ratio="1 / 1" :src="each.src"> </v-img>
                  </v-sheet>
                </v-col>

                <v-col class="py-0" xl="9" lg="8" md="8" sm="12" cols="12">
                  <div class="service-each-title mx-auto">
                    {{ each.title }}
                  </div>
                  <div class="service-each-subtitle mx-auto">
                    {{ each.description }}
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
        <v-divider class="text-white"></v-divider>
      </div>
      <div class="section">
        <v-container>
          <v-row>
            <v-col>
              <v-container fluid>
                <v-row class="justify-center">
                  <v-col class="my-auto" xl="7" lg="6" md="9" sm="8" cols="12">
                    <div
                      style="cursor: pointer"
                      class="slider-container"
                      v-for="(each, j) in serviceItems"
                      :key="j"
                    >
                      <div v-if="each.title">
                        <div
                          v-if="j == activeStep"
                          @click="setActiveStep(j)"
                          style="
                            position: relative;
                            border-left: 2px solid #696969;
                            background-color: #068fff;
                            border-radius: 20px;
                          "
                          class="pa-xl-6 pa-lg-5 pa-md-4 pa-3 slider-font"
                        >
                          <b
                            class="pl-0 selected-slider slider-font"
                            style="color: #ffffff"
                          >
                            &nbsp; {{ each.title }}
                          </b>
                        </div>
                        <div
                          v-else
                          class="pa-xl-6 pa-lg-5 pa-md-4 pa-3 onHoverUnderline"
                          @click="setActiveStep(j)"
                          style="
                            border-left: 2px solid #696969;
                            text-decoration: underline;
                          "
                        >
                          &nbsp; {{ each.title }}
                        </div>
                      </div>
                    </div>
                  </v-col>
                  <v-col xl="4" lg="5" md="3" sm="3" cols="8" class="my-auto">
                    <v-sheet
                      style="background: transparent"
                      v-if="selectedService"
                    >
                      <v-img
                        :aspect-ratio="1 / 1"
                        :src="selectedService.src"
                      ></v-img>
                    </v-sheet>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-sheet style="background: transparent">
                      <v-card-text class="text-white">
                        <strong>
                          <h2>
                            {{ selectedService.title }}
                          </h2>
                        </strong>
                      </v-card-text>
                      <v-card-text
                        class="text-white"
                        v-html="selectedService.subtitle"
                        style="font-weight: 300"
                      >
                      </v-card-text>
                      <v-card-text>
                        <ul style="list-style-type: circle">
                          <li
                            style="
                              font-size: 14px;
                              margin-left: 10px;
                              list-style-type: circle;
                              font-weight: 300;
                              color: #dbdfea;
                            "
                            v-for="(n, k) in selectedService.description"
                            :key="k"
                          >
                            <span class="text-white" v-html="n"></span>
                          </li>
                        </ul>
                      </v-card-text>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </div>
    <div id="footer"><Footer/></div>
    </div>
  </div>
</template>

<script setup>
let value = ref(null);
let items = [
  {
    title: "Scalable like Cloud",
    description:
      "Just like your subscribe to cloud, subscribe to DSaaS. Turn it on and off depending on your needs.",
    src: "/images/services/data-as-service/a.png",
  },
  {
    title: "Cost Effective",
    description:
      "Predictable and upfront run-rate allows you to control the costs and manage your budgets.",
    src: "/images/services/enterprise-analytics/e.png",
  },
  {
    title: "Build with Open Tools",
    description:
      "Do you have a toolset in mind? Let’s use it. If not we will work with you to establish an open toolset.",
    src: "/images/services/data-as-service/b.png",
  },
  {
    title: "Tactical and Strategic",
    description:
      "Our unique model allows you to experiment with different AI models and be strategic at the same time.",
    src: "/images/services/data-as-service/d.png",
  },
  {
    title: "Configurable Models",
    description:
      "We will work with you to establish a model and run-rate that works for your needs and budgets.",
    src: "/images/services/data-as-service/c.png",
  },
  {
    title: "Mitigate Risk",
    description:
      "Our pay-as-you-go approach allows you take complete control of your project and reduce risk.",
    src: "/images/services/data-as-service/e.png",
  },
];
let serviceItems = [
  {
    title: "You Love the Cloud",
    src: "/images/services/data-as-service/1.png",
    subtitle:
      "We do too. Our Data Science subscription model works just like your cloud services.",
    description: [
      "&#9675 Just like the cloud, DSaaS is fully scalable",
      "&#9675 Ramp up and down as needed",
      "&#9675 Even turn it off",
      "&#9675 Right experts for relevant tasks",
      "&#9675 No wasted costs",
    ],
  },
  {
    title: "Open Tools and Technologies",
    src: "/images/services/data-as-service/2.png",
    subtitle:
      "We will work with you to establish the tools and technologies of your choice.",
    description: [
      "&#9675 Service built using widely available, open tools and technologies",
      "&#9675 No proprietary handcuffs anywhere ",
      "&#9675 Uses all major cloud services, depending on your corporate standards and  requirements",
      "&#9675 Friendly, encouraging environment for our teams to easily collaborate",
    ],
  },
  {
    title: "Tailored to your needs",
    src: "/images/services/data-as-service/3.png",
    subtitle:
      " Flexible and configurable usage models to meet your specific advanced analytics needs",
    description: [
      "&#9675 <b>On-Demand</b> allows you to get started in data science without building and managing an expensive data science team.",
      "&#9675 <b>Premier</b> has been structured for our clients with longer-term Data Science and AI projects and want our low cost, specialized assistance over a longer period",
      "&#9675 Both offerings are cost effective and risk mitigating.",
    ],
  },
];
let selectedService = ref({
  title: "You Love the Cloud",
  src: "/images/services/data-as-service/1.png",
  subtitle:
    "We do too. Our Data Science subscription model works just like your cloud services.",
  description: [
    "&#9675 Just like the cloud, DSaaS is fully scalable",
    "&#9675 Ramp up and down as needed",
    "&#9675 Even turn it off",
    "&#9675 Right experts for relevant tasks",
    "&#9675 No wasted costs",
  ],
});
let activeStep = ref(0);
let setActiveStep = async (stepNumber) => {
  activeStep.value = stepNumber;
  selectedService.value = serviceItems[stepNumber];
};
</script>

<style scoped>
.container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}
.section {
  height: 100vh;
  scroll-snap-align: unset;
  /* scroll-snap-stop: always; */
}
.slider-font {
  font-size: x-large;
}
.section1a.section1b {
  /* position: relative;
  height: 50vh; */
}
.section-margin-top {
  padding-top: 18vh;
}
.service-title {
  position: absolute;
  transform: translate(-30%, -50%);
  top: 60%;
  left: 30%;
  font-weight: 700;
  font-size: 50px;
}
.service-each-title {
  font-weight: 500;
  font-size: 36px;
}
.service-each-subtitle {
  font-weight: 300;
  font-size: 17px;
  line-height: 1.2;
  color: #dbdfea;
}
.service-subtitle {
  font-size: 46px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  width: 80%;
  font-weight: 500;
}
.service-description {
  font-size: 22px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  width: 80%;
  color: #dbdfea;
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
    line-height: 1.2;
    width: 80%;
  }
  .service-description {
    font-size: 19px;
    position: absolute;
    left: 50%;
    font-weight: 300;
    transform: translate(-50%, -50%);
    top: 50%;
  }
}
@media only screen and (max-width: 1440px) {
  .slider-font {
    font-size: larger;
  }
  .service-title {
    font-size: 50px;
    left: 35%;
  }
  .service-subtitle {
    font-size: 43px;
  }
  .service-description {
    font-size: 20px;
  }
  .service-each-title {
    font-size: 28px;
  }
  .service-each-subtitle {
    font-weight: 300;
    font-size: 16px;
    line-height: 1.2;
  }
}
@media only screen and (max-width: 1250) {
  .service-title {
    font-size: 38px;
    left: 40%;
    transform: translate(-50%, -50%);
  }
  .service-subtitle {
    font-size: 40px;
  }
  .service-description {
    font-size: 18px;
  }
  .service-each-title {
    font-size: 25px;
  }
  .service-each-subtitle {
    font-size: 14px;
  }
  .slider-font {
    font-size: large;
  }
}
@media only screen and (max-width: 1024) {
  .service-title {
    font-size: 3px;
    left: 50%;
  }
  .service-each-title {
    font-size: 23px;
    line-height: 1;
  }
  .service-each-subtitle {
    font-size: 12px;
  }
  .service-each-title {
    font-size: 23px;
    line-height: 1;
  }
  .service-each-subtitle {
    font-size: 12px;
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
  .service-each-title {
    font-size: 23px;
    line-height: 1;
  }
  .service-each-subtitle {
    font-size: 13px;
  }
  .slider-font {
    font-size: medium;
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
  .slider-font {
    font-size: small;
  }
  .service-title {
    font-size: 32px;
  }

  .service-each-title {
    font-size: 21px;
    line-height: 1;
  }
  .service-each-subtitle {
    font-size: 11px;
  }
}
.section1a {
  /* height: 40vh; */
}
.section1b {
  height: 60vh;
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

/* slider */

.selected-slider::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0;
  margin-left: -2px;
  border-left: 5px solid #ffffff;
  border-radius: 10px;
  cursor: pointer;
  z-index: 99 !important;
}
</style>
<style>
.onHoverUnderline:hover {
  text-decoration: underline;
  text-underline-offset: 2px;
}
.hover-card:hover {
  cursor: pointer;

  background: #0fcffc;

  border-radius: 20px;
  transition: all 500ms;
}
</style>
