<template>
  <div>
    <section class="about-us2">
      <div class="about-us2-texts">
        <h1 class="about-us2-title">Our Team</h1>
        <p class="about-us2-para">
          Over-the-top talent in an amazingly fun environment: these things
          alone are enough for a 5 star rating.
        </p>
        <p class="about-us2-para">
          Kenfront is made up of teams of lean and mean professionals who are
          singularly focused and passionate about helping your company achieve
          the highest level of analytics maturity. Period. The team thrives on
          tackling difficult requirements and projects. Nothing you throw at the
          group is too hard. People have tried. We are business domain and
          process experts. Our entire group has walked and worked in your shoes.
          Now the team builds better shoes. Let this amazing group of talented,
          innovative and passionate people help you get where you want to go.
        </p>
      </div>
      <div class="about-us2-members">
        <img src="/images/member_1.png" alt="" class="member1" />
        <img src="/images/member_2.png" alt="" class="member2" />
        <img src="/images/member_3.png" alt="" class="member3" />
        <img src="/images/member_4.png" alt="" class="member4" />
        <img src="/images/member_5.png" alt="" class="member5" />
        <img src="/images/member_6.png" alt="" class="member6" />
        <div class="member-name">
          <h2>Tom Oliver</h2>
          <h4>Founder</h4>
        </div>
        <div class="member-name">
          <h2>Tom Oliver</h2>
          <h4>CTO</h4>
        </div>
        <div class="member-name">
          <h2>Tom Oliver</h2>
          <h4>Creative Head</h4>
        </div>
        <div class="member-name">
          <h2>Tom Oliver</h2>
          <h4>Marketing Head</h4>
        </div>
        <div class="member-name">
          <h2>Tom Oliver</h2>
          <h4>Designer</h4>
        </div>
        <div class="member-name">
          <h2>Tom Oliver</h2>
          <h4>Developer</h4>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
h2 {
  font-size: 2rem;
  margin-top: 2vh;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-weight: bold;
  color: white;
}
h4 {
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: #dbdfea;
}
.about-us2 {
  height: 100%;
  background-color: black;
}
.about-us2-texts {
  margin: 20vh 10vw 0;
}
.about-us2-title {
  text-align: center;
}
.about-us2-para {
  margin-top: 5vh;
}
.about-us2-members {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 20vh;
  grid-template-rows: 1fr 0.5fr 1fr 0.5fr;
  grid-column-gap: 5%;
}
.about-us2-members > img {
  width: 75%;
  display: grid;
  margin: auto;
}

.member4,
.member5,
.member6 {
  grid-row-start: 3;
}
.member-name {
  text-align: center;
}
</style>
