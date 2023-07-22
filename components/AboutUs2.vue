<template>
    <section class="about-us2">
        <div class="about-us2-texts">
            <h1 class="about-us2-title">Our Team</h1>
            <p class="about-us2-para">Over-the-top talent in an amazingly fun environment: these things alone are enough for a 5 star rating.</p>
            <p class="about-us2-para">Kenfront is made up of teams of lean and mean professionals who are singularly focused and passionate about helping your company achieve the highest level of analytics maturity. Period. The team thrives on tackling difficult requirements and projects. Nothing you throw at the group is too hard. People have tried. We are business domain and process experts. Our entire group has walked and worked in your shoes. Now the team builds better shoes. Let this amazing group of talented, innovative and passionate people help you get where you want to go.</p>
        </div>
        <v-container fluid class="my-16 pa-16">
            <v-row>
                <v-col cols="12" md="4" sm="6" xs="12" ><v-card class="bg-black mb-16" ><v-img src="images/member_1.png" width="75%" style="margin: 0 auto;"></v-img><v-card-title class="member-name" >Tom Oliver</v-card-title><v-card-text class="member-role">Founder</v-card-text></v-card></v-col>
                <v-col cols="12" md="4" sm="6" xs="12" ><v-card class="bg-black mb-16" ><v-img src="images/member_2.png" width="75%" style="margin: 0 auto;"></v-img><v-card-title class="member-name">Tom Oliver</v-card-title><v-card-text  class="member-role">CTO</v-card-text></v-card></v-col>
                <v-col cols="12" md="4" sm="6" xs="12" ><v-card class="bg-black mb-16" ><v-img src="images/member_3.png" width="75%" style="margin: 0 auto;"></v-img><v-card-title class="member-name">Tom Oliver</v-card-title><v-card-text  class="member-role">Creative Head</v-card-text></v-card></v-col>
                <v-col cols="12" md="4" sm="6" xs="12" ><v-card class="bg-black mb-16" ><v-img src="images/member_4.png" width="75%" style="margin: 0 auto;"></v-img><v-card-title class="member-name">Tom Oliver</v-card-title><v-card-text  class="member-role">Marketing Head</v-card-text></v-card></v-col>
                <v-col cols="12" md="4" sm="6" xs="12" ><v-card class="bg-black mb-16" ><v-img src="images/member_5.png" width="75%" style="margin: 0 auto;"></v-img><v-card-title class="member-name">Tom Oliver</v-card-title><v-card-text  class="member-role">Designer</v-card-text></v-card></v-col>
                <v-col cols="12" md="4" sm="6" xs="12" ><v-card class="bg-black mb-16" ><v-img src="images/member_6.png" width="75%" style="margin: 0 auto;"></v-img><v-card-title class="member-name">Tom Oliver</v-card-title><v-card-text  class="member-role">Developer</v-card-text></v-card></v-col>
            </v-row>
        </v-container>
    </section>
</template>

<style scoped>

h2{
    font-size: 2rem;
    margin-top: 2vh;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-weight: bold;
  color: white;
}
h4{ 
    font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: #DBDFEA;
}
.about-us2{
    height: 100%;
    background-color: black;
}
.about-us2-texts{
     margin: 20vh 10vw 0;
}
.about-us2-title{
    text-align: center;
}
.about-us2-para{
    margin-top: 5vh;
}
.member-name
{   
    font-family: 'Nexa', sans-serif;
    font-weight: 700;
    font-weight: bold;
    text-align: center  !important;
}

.v-card-title.member-name {
    font-size: 2rem;
    margin-top: 5%;
}
.member-role{
    font-family: 'Nexa', sans-serif;
     text-align: center  !important;
     color:#DBDFEA ;
}
</style>