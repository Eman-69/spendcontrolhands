<template>
  <div class="main-container">
    <section class="page4" id="page4">
      <div class="page4-texts">
        <h1 class="page4-title">Why Kenfront?</h1>
        <p class="page4-para">
          With constantly demanding business users, changing IT priorities and
          technologies and shrinking budgets, building your own analytics
          solution internally is not always viable.
        </p>
        <p class="page4-para">
          Our products and services are built around best of the breed
          technologies and architectures. Using our industry best practices
          helps you get started quickly and at a price within your budgets.
        </p>
      </div>
      <div class="page4-image">
        <img src="/images/question.png" alt="" class="question" />
        <img src="/images/question-dot.png" alt="" class="question-dot" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.main-container {
  width: 100vw;
  height: 100vh;
}
.page4 {
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 20vh;
  height: 80vh;
}
.page4-texts {
  margin: 0vh 5vw 5vh;
  text-align: left;
}
.page4-title {
  margin-bottom: 3vh;
}
.page4-para {
  margin-top: 5vh;
}
.page4-image {
  display: grid;
  grid-template-rows: 190px 300px;
  justify-content: center;
}
.question-dot {
  margin-left: -10px;
}

@media only screen and (max-width: 1919px) and (min-width: 1600px) {
  .question,
  .question-dot {
    width: 500px;
  }
}
@media only screen and (max-width: 1599px) and (min-width: 1366px) {
  .question,
  .question-dot {
    width: 370px;
  }
  .question-dot {
    margin-top: -50px;
  }
}
@media only screen and (max-width: 1365px) and (min-width: 800px) {
  .question,
  .question-dot {
    width: 300px;
  }
  .question-dot {
    margin-top: -80px;
  }
}
</style>
