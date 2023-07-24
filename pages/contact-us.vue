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
          <div class="nav"><Navbar /></div>
          <v-container>
            <v-sheet style="background: transparent">
              <v-tabs
                style="border-radius: 30px"
                bg-color="grey-darken-4"
                color="white"
                v-model="tab"
                align-tabs="center"
              >
                <v-tab color="" value="1">USA</v-tab>
                <v-tab color="" value="2">DUBAI</v-tab>
                <v-tab color="" value="3">HYDERABAD</v-tab>
              </v-tabs>
              <v-window v-model="tab">
                <v-window-item value="1">
                  <v-card class="pa-5" style="background: transparent">
                    <v-img src="/images/map-hyd.png"></v-img>
                  </v-card>
                </v-window-item>
                <v-window-item value="2">
                  <v-img src="/images/map-hyd.png"></v-img>
                </v-window-item>
                <v-window-item value="3">
                  <v-img src="/images/map-hyd.png"></v-img>
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
                  <v-contain>
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
                  </v-contain>
                </v-col>
              </v-row>
            </v-container>
          </div>
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
</style>
