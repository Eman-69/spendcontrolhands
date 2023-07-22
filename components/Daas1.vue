<template>
   <section class="daas1">
        <div class="daas1-text-image">
            <h1 class="daas1-title">Data Science as a Service</h1>
            <!-- <img src="images/question-dot.png" alt=""> -->
        </div>
        <div class="services">
            <v-container class="service-texts">
                <v-row>
                   <v-col> <h1 class="service-title">Industry's First “as a Service” Consulting Model</h1> </v-col>
                   <v-col> <p class="service-para">Are you ready to get started or accelerate your Data Science, AI or ML initiatives? We offer a revolutionary “as a service” approach to scale the direction and costs of Data Science.Everything you need and nothing you don't make this a game changer.</p></v-col>
                </v-row>
            </v-container>
            <v-container>
                <v-row>
                    <v-col cols="12" lg="4" md="4" sm="6" xs="12">
                        <v-card title="Scalable like Cloud" text="Just like your subscribe to cloud, subscribe to DSaaS. Turn it on and off depending on your needs." variant="outlined"></v-card>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="6" xs="12">
                        <v-card title="Cost Effective" text="Predictable and upfront run-rate allows you to control the costs and manage your budgets." variant="outlined"></v-card>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="6" xs="12">
                        <v-card title="Build with Open Tools" text="Do you have a toolset in mind? Let's use it. If not we will work with you to establish an open toolset." variant="outlined"></v-card>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="6" xs="12">
                        <v-card title="Tactical and Strategic" text="Our unique model allows you to experiment with different AI models and be strategic at the same time." variant="outlined"></v-card>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="6" xs="12">
                        <v-card title="Configurable Models" text="We will work with you to establish a model and run-rate that works for your needs and budgets." variant="outlined"></v-card>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="6" xs="12">
                        <v-card title="Mitigate Risk" text="Our pay-as-you-go approach allows you take complete control of your project and reduce risk." variant="outlined"></v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
   </section>
</template>

<style>
    template{
        width: 100vw;
    }
    .daas1-text-image{
        margin-bottom: 30vh;
    }
    .services{
        background-color: black;
    }
    .v-card-title,.v-card-text{
          font-family: 'Nexa', sans-serif;
          font-weight: 400;
    }
    .v-card-title{
        color: white;
        font-weight: bold;
    }
    .v-card-text{
        color: #DBDFEA;
    }
    .service-texts{
        margin: 30vh 0vw;
    }
</style>