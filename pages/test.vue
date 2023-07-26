<template>
    <div class="main-background">
        <div class="animation">
            <Animationtest :scrollPer="scrollPer" />
        </div>
        <!-- <div class="nav"><Navbar /></div> -->
        <div class="container" ref="el" @scroll="handleScroll()">
            <div class="video-container">
                <div
                    class="wistia_responsive_padding"
                    style="padding: 56.25% 0 0 0; position: relative"
                >
                    <div
                    class="wistia_responsive_wrapper"
                    style="height: 100%; left: 0; position: absolute; top: 0; width: 100%"
                    >
                    <div
                        class="wistia_embed wistia_async_u8a8uxfcz6 seo=false videoFoam=true"
                        style="position: relative; height: 100%; width: 100%"
                    >
                        &nbsp;
                    </div>
                    </div>
                </div>
            </div>
            <div id="id1">
                <LandingPage1 />
            </div>
            <div id="id2">
                <LandingPage2 />
            </div>
            <div id="id3">
                <LandingPage3 />
            </div>
            <div id="id4">
                <LandingPage4 :scrollPer="scrollPer" />
            </div>
            <div id="id5">
                <LandingPage5 />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const el = ref(null);
let scrollPer = ref(0);

const handleScroll = () => {
    const scrollTop = el.value.scrollTop;
    const scrollHeight = el.value.scrollHeight;
    const clientHeight = el.value.clientHeight;
    scrollPer.value = (scrollTop / (scrollHeight - clientHeight)) * 100;
};

onMounted(() => {
    let src1 = document.createElement("script");
    src1.setAttribute(
        "src",
        "https://fast.wistia.com/embed/medias/nq7kpsfnek.jsonp"
    );
    document.head.appendChild(src1);

    let src2 = document.createElement("script");
    src2.setAttribute(
        "src",
        "https://fast.wistia.com/assets/external/E-v1.js"
    );
    document.head.appendChild(src2);
});
</script>

<style scoped>
.animation {
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: -1;
}

.container {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    scroll-behavior: smooth;
    height: 100vh;
}

.container>div {
    scroll-snap-align: start;
    scroll-snap-stop: always;
}</style>
