<template>
    <div class="page-container">
        <div class="backgroundgif"></div>
        <div class="footer">
            <div class="logocard">
                <v-img src="/images/logoLight.png" width="10vw"></v-img>
                <br>
                <p><b>USA:</b> 4500 Westgrove Dr Addison TX 75001</p>
                <br>
                <p><b>Dubai:</b> Dubai Downtown Standard Chartered Building, Level 5 Opp. Emaar Square, Dubai, UAE</p>
                <br>
                <p><b>Hyderabad:</b> B2 405 & 406 Manjeera Trinity Corporate Hyderabad 500072</p>
                <br>
                <p><b>E-mail:</b> info@kenfront.com</p>
            </div>
            <div class="links">
                <div>
                    <p><b>Services:</b></p>
                    <NuxtLink class="text-decoration-none text-white" to="/data-science-as-a-service"><p>DSaaS</p></NuxtLink>
                    <NuxtLink class="text-decoration-none text-white" to="/idea"><p>IDEA</p></NuxtLink>
                    <NuxtLink class="text-decoration-none text-white" to="/incorta"><p>Incorta</p></NuxtLink>
                    <NuxtLink class="text-decoration-none text-white" to="/enterprise-analytics"><p>Enterprises Analytics</p></NuxtLink>
                </div>
                <div>
                    <p><b>Products:</b></p>
                    <NuxtLink class="text-decoration-none text-white" to="/carrom-live"><p>Carrom Live</p></NuxtLink>
                    <NuxtLink class="text-decoration-none text-white" to="/spend-control"><p>Spend Centrol</p></NuxtLink>
                </div>
            </div>
            <div class="download">
                <br>
                <h1>Build your Analytics COE</h1>
                <br>
                <v-img src="/images/downloadbtn.svg" width="10vw"></v-img>
            </div>
        </div>
        <v-footer style="background:#2a2929; color: grey;">Kenfront</v-footer>
    </div>
</template>
<style scoped>
.page-container{
    height: 100vh;
}
.backgroundgif{

}
.footer{
    position: relative;
    z-index: 100;
    margin-top: 45vh;
    background-color: #2f2f2f;
    max-height: 95vh;
    padding: 5vh 5vw 0vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2vh 2vw;
}
.logocard{
    height: 45vh;
}
.links{
    line-height: 6vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1vh 2vw;
    align-content: last baseline;
    align-items: baseline;
}
.download{
    display: grid;
    grid-template-columns: 1fr;
    align-content: baseline;
    align-items: center;
    justify-items: center;    
}
@media screen and (max-width:900px){
    .footer{
        grid-template-columns: 1fr;
        margin-top: 0vh;
        gap: 0;
        padding:5vh 5vw 0vh;
        height: 100vh;
    }  
    .footer > .links{
        margin-top: -10vh;
    }  
    v-footer{
        overflow-y: scroll;
    }
    
}
</style>