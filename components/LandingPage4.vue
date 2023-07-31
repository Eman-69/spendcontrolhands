<template>
    <div class="page-container">
        <section class="page4" id="page4">
            <div class="page4-texts">
                <h1 class="page4-title">Yes, Kenfront!
                </h1>
                <p class="page4-para">With constantly demanding business users, changing IT priorities and technologies and
                    shrinking budgets, building your own analytics solution internally is not always viable.</p>
                <p class="page4-para">Our products and services are built around best of the breed technologies and
                    architectures. Using our industry best practices helps you get started quickly and at a price within your
                    budgets.</p>
            </div>
                <div class="page4-image">
                    <img src="/images/question.png" alt="" class="question">
                    <img src="/images/question-dot.png" alt="" class="question-dot">
                </div>              
        </section>
    </div>
</template>

<script setup lang="ts">
let props = defineProps({
  scrollPer: {
    type: Number,
    required: true,
  },
});
const { $anime } = useNuxtApp();
let questiondottl= ref(null);
onMounted(()=>{
    questiondottl=$anime.timeline({
        autoplay:false,
        duration:5000,
    });
    questiondottl.add({
        targets:".question-dot",
        scale:[0,0,0,1.2,0,0],
        easing:"linear",
    });
});
watch(props, (val, oldVal) => {
  questiondottl.seek(questiondottl.duration * (props.scrollPer / 100));
});
</script>

<style>
template {
    width: 100vw;
    height: 100vh;
}

.page4 {
    display: grid;
    margin-top: 20vh;
    height: 80vh;
}

@media (orientation: landscape) {
    .page4 {
        grid-template-areas: "page4-texts page4-image";

    }
}

.page4-texts {
    grid-area: page4-texts;
    margin: 0vh 5vw;
    text-align: left;
}

.page4-title {
    margin-bottom: 3vh;
}

.page4-para {
    margin-top: 5vh;
}

.page4-image {
    grid-area: page4-image;
    display: grid;
    grid-template-rows: 190px 300px;
    justify-content: center;
}

@media only screen and (max-width: 1919px) and (min-width: 1600px) {

    .question,
    .question-dot {
        width: 500px;
    }
}

@media only screen and (max-width:1599px) and (min-width:1366px) {

    .question,
    .question-dot {
        width: 370px;
    }

    .question-dot {
        margin-top: -50px;
    }
}

@media only screen and (max-width:1365px) and (min-width:800px) {

    .question,
    .question-dot {
        width: 300px;
    }

    .question-dot {
        margin-top: -80px;
    }
}

@media (orientation: portrait) {
    .page4 {
        grid-template-areas: "page4-texts"
            "page4-image";
    }
}

@media only screen and (max-width:799px) and (min-width:300px) {
    .page4-texts {
        text-align: center;
        height: 50vh;
    }

    .page4 {
        grid-template-rows: 45% 65%;
        height: 100vh;
        margin-top: 13vh;
    }

    .question,
    .question-dot {
        width: 200px;
    }

    .question-dot {
        margin-top: -120px;
        margin-left: -1px;
    }
}

@media only screen and (max-width:299px) {
    .page4 {
        margin-top: 0vh;
        height: 100vh;
    }

    .page4-texts {
        text-align: center;
    }

    .page4-image {
        display: none;
    }
}

@media only screen and (max-height:544px) {
    .page4-image {
        display: none;
    }

    .page4 {
        grid-template-rows: 100%
    }

    .page4-texts {
        margin-top: 20vh;
    }
}</style>