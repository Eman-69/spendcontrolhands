<template>
  <div class="bg-black">
    <!-- <div class="nav"><Navbar /></div> -->
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

          <div class="service-title">Enterprise Analytics</div>
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
                  Successful Projects Start with the Right Partners
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
                  It’s not about small or large. What matters most is doing it
                  right.
                  <br />
                  We deliver the right methods for today’s analytics initiatives
                  to help you gain competitive advantage.
                </div>
              </v-col>
            </v-row>
          </v-container>
          <v-container class="d-block d-md-none my-auto fill-height">
            <v-row class="my-auto fill-height">
              <v-col cols="12" class="my-auto service-subtitle-small">
                Successful Projects Start with the Right Partners
              </v-col>

              <v-col cols="12" class="my-auto service-description-small">
                It’s not about small or large. What matters most is doing it
                right.
                <br />
                We deliver the right methods for today’s analytics initiatives
                to help you gain competitive advantage.
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
                  <v-col class="my-auto" lg="7" md="9" sm="8" cols="12">
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
                          "
                          class="pa-3 slider-font"
                        >
                          <b
                            class="pl-0 selected-slider slider-font"
                            style="color: #0fcffc"
                          >
                            &nbsp; {{ each.title }}
                          </b>
                        </div>
                        <div
                          v-else
                          class="pa-3 onHoverUnderline"
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
                  <v-col lg="4" md="3" sm="3" cols="8" class="my-auto">
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
                      >
                      </v-card-text>
                      <v-card-text>
                        <ul style="list-style-type: circle; color: white">
                          <li
                            style="
                              font-size: 14px;
                              margin-left: 10px;
                              list-style-type: circle;
                            "
                            v-for="(n, k) in selectedService.description"
                            :key="k"
                          >
                            <span class="text-white" v-html="n"></span>
                          </li>
                        </ul>
                        <br />
                        <div>
                          <v-btn
                            color="primary"
                            v-if="
                              selectedService.title ==
                              'Spend Control on Incorta'
                            "
                            >More about Spend Control</v-btn
                          >
                        </div>
                      </v-card-text>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script setup>
let value = ref(null);
let items = [
  {
    title: "Innovation at Our Core",
    description:
      "Analytic initiatives are not just reports. Data wisdom from your analytics is about competitive advantage and innovation.",
    src: "/images/services/enterprise-analytics/a.png",
  },
  {
    title: "Domain Expertise",
    description:
      "Successful analytics results start with deep business domain knowledge augmented with modern technology.",
    src: "/images/services/enterprise-analytics/b.png",
  },
  {
    title: "Business Focus",
    description:
      "We make sure business needs are aligned with technology and all the process solutions we bring to the table.",
    src: "/images/services/enterprise-analytics/c.png",
  },
  {
    title: "Modern Architecture",
    description:
      "With our unique mix of product development and consulting expertise we can help you utilize the right technologies.",
    src: "/images/services/enterprise-analytics/d.png",
  },
  {
    title: "Budget Conscious",
    description:
      "We are nimble, focused, results-oriented, on time and on budget–no matter the project size.",
    src: "/images/services/enterprise-analytics/e.png",
  },
  {
    title: "Mitigate Risk",
    description:
      "Our unique engagement models, with the correct mix of right-shore resourcing, helps in mitigating risk upfront.",
    src: "/images/services/enterprise-analytics/f.png",
  },
];
let serviceItems = [
  {
    title: "Transform Data Into Insights",
    src: "/images/services/enterprise-analytics/1.png",
    subtitle:
      "We create significant value in the process of enabling your applied Analytics solutions. Waterfall or agile delivery can be considered based on how quickly you need to show meaningful results and ROI. Utilize our right-shore model to best match your budget and culture. Because we are objectives driven, our goal is always to make the project and our working relationship successful.",
    description: [],
  },
  {
    title: "Information Lifecycle Management",
    src: "/images/services/enterprise-analytics/2.png",
    subtitle:
      "Our Managed Services (ILM) program for your data analytics environment is built on the foundation of value enablement and flexibility. Fill a gap, extend your existing team, or fully outsource the support of your analytics environment. We are sensitive to the culture and lineage of your organization and provide a model that maximizes value for the business and minimizes cost of ownership.",
    description: [],
  },
  {
    title: "Point Solutions",
    src: "/images/services/enterprise-analytics/3.png",
    subtitle:
      "With ever demanding business users, changing IT priorities, and shrinking budgets, building an analytics solution internally is not always the best way to go. Our point solutions, built on best of the breed technologies, using industry best practices, would help you get started at a rapid pace. These can be fully customizable and tailored to your needs.",
    description: [],
  },
];
let selectedService = ref({
  title: "Transform Data Into Insights",
  src: "/images/services/enterprise-analytics/1.png",
  subtitle:
    "We create significant value in the process of enabling your applied Analytics solutions. Waterfall or agile delivery can be considered based on how quickly you need to show meaningful results and ROI. Utilize our right-shore model to best match your budget and culture. Because we are objectives driven, our goal is always to make the project and our working relationship successful.",
  description: [],
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
  /* height: 100vh; */
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
}
.service-subtitle {
  font-size: 46px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  line-height: 1.2;
  width: 80%;
}
.service-description {
  font-size: 22px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
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
    font-size: 43px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    width: 80%;
    line-height: 1.2;
  }
  .service-description {
    font-size: 19px;
    position: absolute;
    left: 50%;
    font-weight: 300;
    transform: translate(-50%, -50%);
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
    font-size: 46px;
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
    font-size: 43px;
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
  height: 40vh;
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
