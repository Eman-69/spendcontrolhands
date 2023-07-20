<template>
  <v-app class="background-main">
    <v-layout>
      <v-main>
        <div fluid class="header-margin-top">
          <slot />
        </div>
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped>
.background-main {
  background: /*url("../img/page1dots.png"), */ linear-gradient(
    to bottom,
    #4129f4,
    #0f0f0f
  ) !important;
  background-position: bottom, center, 0% 0%, 100% 0%;
  background-repeat: repeat-x, no-repeat, no-repeat, no-repeat;
  height: 100vh;
  position: fixed;
  width: 100%;
}
</style>
