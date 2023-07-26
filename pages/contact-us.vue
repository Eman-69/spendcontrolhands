<template>
  <div class="bg-img" ref="el">
    <div>
      <!-- section 1 -->
      <br />
      <br />
      <br />
      <br />
      <br />

      <div class="justify-center">
        <div>
          <v-container>
            <v-sheet style="background: transparent">
              <v-tabs
                style="border-radius: 30px"
                color="white"
                v-model="tab"
                align-tabs="center"
              >
                <v-tab class="text-white" value="1">USA</v-tab>
                <v-tab class="text-white" value="2">DUBAI</v-tab>
                <v-tab class="text-white" value="3">HYDERABAD</v-tab>
              </v-tabs>
              <v-window v-model="tab">
                <v-window-item value="1">
                  <v-sheet
                    class="pa-5"
                    style="position: relative; background: transparent"
                  >
                    <v-img src="/images/map-hyd.png"></v-img>
                    <v-img
                      src="/images/map-icon.png"
                      style="
                        position: absolute;
                        top: 30%;
                        left: 20%;
                        width: 1.5%;
                        transform: translate(-45%, -20%);
                      "
                    ></v-img>
                    <div
                      class="text-center"
                      style="
                        position: absolute;
                        top: 35%;
                        left: 20%;
                        width: 90%;
                        transform: translate(-50%, -20%);
                      "
                    >
                      <div>
                        <strong class="text-white font-weight-bold title-text"
                          >USA:
                        </strong>
                      </div>
                      <div class="text-white font-weight-thin subtitle-text">
                        4500 Westgrove Dr Addison TX 75001
                      </div>
                    </div>
                  </v-sheet>
                </v-window-item>
                <v-window-item value="2">
                  <v-sheet
                    class="pa-5"
                    style="position: relative; background: transparent"
                  >
                    <v-img src="/images/map-hyd.png"></v-img>
                    <v-img
                      src="/images/map-icon.png"
                      style="
                        position: absolute;
                        top: 50%;
                        left: 60%;
                        width: 1.5%;
                        transform: translate(-52%, -60%);
                      "
                    ></v-img>
                    <div
                      class="text-center"
                      style="
                        position: absolute;
                        top: 58%;
                        left: 60%;
                        width: 90%;
                        transform: translate(-50%, -50%);
                      "
                    >
                      <div>
                        <strong class="text-white font-weight-bold title-text">
                          Dubai:
                        </strong>
                      </div>
                      <div class="text-white font-weight-thin subtitle-text">
                        Dubai Downtown Standard Chartered Building, Level 5 Opp.
                        Emaar Square, Dubai, UAE
                      </div>
                    </div>
                  </v-sheet>
                </v-window-item>
                <v-window-item value="3">
                  <v-sheet
                    class="pa-5"
                    style="position: relative; background: transparent"
                  >
                    <v-img src="/images/map-hyd.png"></v-img>
                    <v-img
                      src="/images/map-icon.png"
                      style="
                        position: absolute;
                        top: 57%;
                        left: 68%;
                        width: 1.5%;
                        transform: translate(-52%, -60%);
                      "
                    ></v-img>
                    <div
                      class="text-center"
                      style="
                        position: absolute;
                        top: 65%;
                        left: 68%;
                        width: 90%;
                        transform: translate(-50%, -50%);
                      "
                    >
                      <div>
                        <strong class="text-white font-weight-bold title-text">
                          Hyderabad:
                        </strong>
                      </div>
                      <div class="text-white font-weight-thin subtitle-text">
                        B2 405 & 406 Manjeera Trinity Corporate Hyderabad 500072
                      </div>
                    </div>
                  </v-sheet>
                </v-window-item>
              </v-window>
            </v-sheet>
          </v-container>
          <br />
          <div class="bg-black">
            <v-container>
              <h1>What Can We Do for You?</h1>
              <p>
                We will respond immediately to your questions and any need for
                additional information.
              </p>
              <br />
              <v-row class="justify-center">
                <v-col order-lg="1" xl="5" lg="6" md="4" cols="5"
                  ><v-img src="/images/contact-us.png"> </v-img
                ></v-col>
                <v-col class="my-auto" xl="6" lg="6" md="12" cols="12">
                  <v-container>
                    <v-row>
                      <v-col>
                        <v-sheet variant="outlined" class="bg-black rounded-xl">
                          <v-text-field
                            theme="dark"
                            density="compact"
                            hide-details="auto"
                            variant="solo-inverted"
                            class="bg-black"
                            base-color="black"
                            placeholder="Enter Full Name"
                          ></v-text-field>
                        </v-sheet>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-sheet variant="outlined" class="bg-black rounded-xl">
                          <v-text-field
                            theme="dark"
                            density="compact"
                            hide-details="auto"
                            variant="solo-inverted"
                            class="bg-black"
                            base-color="black"
                            placeholder="Enter Email Address"
                          ></v-text-field>
                        </v-sheet>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-sheet variant="outlined" class="bg-black rounded-xl">
                          <v-text-field
                            theme="dark"
                            density="compact"
                            hide-details="auto"
                            variant="solo-inverted"
                            class="bg-black"
                            base-color="black"
                            placeholder="Enter Company Name"
                          ></v-text-field>
                        </v-sheet>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-sheet variant="outlined" class="bg-black rounded-xl">
                          <v-text-field
                            theme="dark"
                            density="compact"
                            hide-details="auto"
                            variant="solo-inverted"
                            class="bg-black"
                            base-color="black"
                            placeholder="Enter Phone Number "
                          ></v-text-field>
                        </v-sheet>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-sheet variant="outlined" class="bg-black rounded-xl">
                          <v-textarea
                            theme="dark"
                            density="compact"
                            hide-details="auto"
                            variant="solo-inverted"
                            class="bg-black"
                            base-color="black"
                            placeholder="Enter Phone Number "
                          ></v-textarea>
                        </v-sheet>
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-container>
                    <v-row>
                      <v-col class="text-center">
                        <v-btn
                          theme="light"
                          variant="outlined"
                          rounded
                          class="text-center"
                        >
                          Submit
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>
          </div>
          <v-container class="mt-5 mb-15">
            <h2 class="text-white text-center">Address</h2>
            <br />
            <v-row class="justify-center">
              <v-col class="text-center my-auto">
                <div>
                  <strong class="text-white"> Dubai: </strong>
                </div>
                <small class="text-white">
                  Dubai Downtown Standard Chartered Building, Level 5 Opp. Emaar
                  Square, Dubai, UAE
                </small>
              </v-col>
              <v-col class="text-center my-auto">
                <div>
                  <strong class="text-white">USA: </strong>
                </div>
                <small class="text-white"
                  >4500 Westgrove Dr Addison TX 75001</small
                >
              </v-col>
              <v-col class="text-center my-auto">
                <div>
                  <strong class="text-white"> Hyderabad: </strong>
                </div>
                <small class="text-white"
                  >B2 405 & 406 Manjeera Trinity Corporate Hyderabad
                  500072</small
                >
              </v-col>
            </v-row>
            <v-divider class="text-white my-5"></v-divider>
            <h2 class="text-white text-center">Email</h2>

            <v-row class="text-center">
              <v-col>
                <a
                  style="text-decoration: none"
                  href="mailto:info@kenfront.com"
                >
                  <p class="text-center">info@kenfront.com</p>
                </a>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
let tab = ref(null);
</script>
<style scoped>
.bg-img {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: url("/images/background-service.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}
.subtitle-text {
  font-weight: 300;
  font-size: 16px;
}

.title-text {
  font-weight: 500;
  font-size: 16px;
}
@media only screen and (max-width: 800px) {
  .subtitle-text {
    font-size: 8px;
  }
  .title-text {
    font-weight: 500;
    font-size: 10px;
    line-height: 1.2;
  }
}
@media only screen and (max-width: 500px) {
  .subtitle-text {
    font-size: 9px;
    line-height: 1;
  }
  .title-text {
    font-weight: 500;
    font-size: 10px;
    line-height: 1;
  }
}
</style>
