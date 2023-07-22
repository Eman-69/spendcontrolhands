<template>
    <section class="about-us1">
        <div class="about-us1-texts">
            <h1 class="about-us1-title">About Us</h1>
            <p class="about-us1-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p class="about-us1-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    </section>
</template>

<style>
.about-us1{
    background:url("images/black-bg-flipped.png"),url("images/aboutus1.png"),linear-gradient(
    to bottom,
    #4129f4,
    #0f0f0f
  ) ;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
} 
template{
    height: 100%;
    width: 100vw;
}
 .about-us1-texts{
    margin: 40vh 10vw 0;
 }
 .about-us1-title{
    text-align: center;
 }
 .about-us1-para{
    margin-top: 5vh;
 }

@media only screen and (max-width:850px) {
    .about-us1-texts{
        margin-top: 25vh;
        padding: 7%;
    }
}
@media only screen and (max-width:400px) {
    .about-us1-texts{
        margin-top: 10vh;
    }
}
</style>