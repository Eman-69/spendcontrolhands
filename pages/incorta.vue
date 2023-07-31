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

          <div class="service-title">Incorta</div>
        </v-container>
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
                  You Need the Right Master to Tame the [Data] Beast​
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
                  Power Partners for a Modern Analytics Platform.
                  <br />
                  Incorta is a step in the right direction. Make sure you take
                  full advantage of its great analytics foundation.
                </div>
              </v-col>
            </v-row>
          </v-container>
          <v-container class="d-block d-md-none my-auto fill-height">
            <v-row class="my-auto fill-height">
              <v-col cols="12" class="my-auto service-subtitle-small">
                You Need the Right Master to Tame the [Data] Beast​
              </v-col>

              <v-col cols="12" class="my-auto service-description-small">
                Power Partners for a Modern Analytics Platform.
                <br />
                Incorta is a step in the right direction. Make sure you take
                full advantage of its great analytics foundation.
              </v-col>
            </v-row>
          </v-container>
        </div>
        <!-- section 1b -->
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
    <div id="footer"><Footer/></div>
    </div>
  </div>
</template>

<script setup>
let value = ref(null);
let items = [
  {
    title: "Fast Incorta Requirements Evaluation",
    description:
      "We call it FIRE. Our unique methodology addresses your specific Incorta POC requirements.",
    src: "/images/services/incorta/a.png",
  },
  {
    title: "Power Partners",
    description:
      "We are a power partner with Incorta, involved in applications and accelerators, a close working relationship with development and beta testing.",
    src: "/images/services/incorta/b.png",
  },
  {
    title: "Business Focus",
    description:
      "We make sure business needs are aligned with technology and all the process solutions we bring to the table.",
    src: "/images/services/incorta/c.png",
  },
  {
    title: "Advanced Analytics",
    description:
      "We know how to leverage the full capability of Incorta by using native Spark. Our accelerators do exactly that.",
    src: "/images/services/incorta/d.png",
  },
  {
    title: "Ongoing Innovation",
    description:
      "Thinking about support? Think a little differently. How do you innovate on a continuous basis? We do exactly that.",
    src: "/images/services/incorta/e.png",
  },
  {
    title: "As a Service",
    description:
      "Our “as a Service” consulting model works just like the cloud! Turn needed services on and off–easily. Our secret sauce can be your success mantra.",
    src: "/images/services/incorta/f.png",
  },
];
let serviceItems = [
  {
    title: "FIRE: Fast Incorta Requirements Evaluation",
    src: "/images/services/incorta/1.png",
    subtitle:
      "FIRE was created by Kenfront to help you quickly and thoroughly evaluate Incorta. Our unique evaluation methodology ensures that Incorta is the right fit by keeping both technology and business needs in mind. We developed evaluation methods based on our expertise in developing accelerators for Incorta and our broad project domain expertise.",
    description: [
      "&#9675 Free Evaluation Program for Qualified Customers",
      "&#9675 No Commitment Required",
      "&#9675 Technology & Business Need Evaluation",
    ],
  },
  {
    title: "Incorta Implementation",
    src: "/images/services/incorta/2.png",
    subtitle:
      "We believe Incorta is the first platform that delivers on the long-promised capabilities of a modern analytics platforms. Projects can be delivered at a faster pace and often with less complexity. With Kenfront, you get a partner who doesn’t just configure the system and gets you to the first setp. We help you take advantage of full Incorta capabilities. ",
    description: [
      "&#9675 Incorta Power Partner",
      "&#9675 Experts in Advanced Analytics, Data Science, AI and Machine Learning",
      "&#9675 Built Applications and Accelerators for Incorta",
      "&#9675 Deep Domain Knowledge",
    ],
  },
  {
    title: "Spend Control on Incorta",
    src: "/images/services/incorta/3.png",
    subtitle:
      "Spend Control is a powerful spend classification solution built by Kenfront and ported in Incorta. Spend Control works with any ERP system and uses deep learning and machine learning algorithms to discover hidden savings opportunities at a fraction of cost of traditional solutions.",
    description: [
      "&#9675 Native to Incorta",
      "&#9675 AI-Based Spend Classification",
      "&#9675 Built using Deep Learning and Machine Learning Algorithms",
      "&#9675 Leverages native Spark of Incorta",
    ],
  },
  {
    title: "Ongoing Innovation",
    src: "/images/services/incorta/4.png",
    subtitle:
      "How do you innovate on a continous basis?  This is where a lot of our thinking should go. It’s not just about meeting business needs by being reactive. You should be proactive by colloborating with business leadership by helping them with innovative and creative analytics ideas.  With Kenfront at your side, the possibilities are endless.",
    description: [
      "&#9675 Unique “as a service” consulting model",
      "&#9675 No commitment–turn On and Off just like the cloud",
      "&#9675 Architectural guidance",
      "&#9675 Data Science, AI and ML experts, PLUS trained on Incorta",
    ],
  },
];
let selectedService = ref({
  title: "FIRE: Fast Incorta Requirements Evaluation",
  src: "/images/services/incorta/1.png",
  subtitle:
    "FIRE was created by Kenfront to help you quickly and thoroughly evaluate Incorta. Our unique evaluation methodology ensures that Incorta is the right fit by keeping both technology and business needs in mind. We developed evaluation methods based on our expertise in developing accelerators for Incorta and our broad project domain expertise.",
  description: [
    "&#9675 Free Evaluation Program for Qualified Customers",
    "&#9675 No Commitment Required",
    "&#9675 Technology & Business Need Evaluation",
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
    font-size: 38px;
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
