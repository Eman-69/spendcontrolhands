<template>
  <v-app class="background-main">
    <v-layout>
      <div class="nav"><Navbar @customEvent="handleCustomEvent" /></div>
      <v-main>
        <div fluid class="header-margin-top">
          <slot />
        </div>
      </v-main>
      <!-- nav -->
      <v-navigation-drawer
        theme="dark"
        v-model="drawer"
        temporary
        location="right"
      >
        <v-list-item prepend-avatar="" title="Kenfront."></v-list-item>

        <v-divider></v-divider>

        <v-list density="comfortable" nav>
          <NuxtLink class="text-decoration-none text-white" to="/">
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Home"
            value="to"
          ></v-list-item></NuxtLink>
          <v-list-group value="Services" prepend-icon="mdi-toolbox-outline">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Services"></v-list-item>
          </template>
          <NuxtLink class="text-decoration-none text-white"             
            v-for="([title, icon,to], i) in services"
            :key="i"
            :to="to"
            :title="title"
            :icon="icon"
            >
          <v-list-item prepend-icon="mdi-cog-outline">
          {{ title }}</v-list-item></NuxtLink>
        </v-list-group>
        <v-list-group value="Products" prepend-icon="mdi-package-variant">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Products"></v-list-item>
          </template>
          <NuxtLink class="text-decoration-none text-white"             
            v-for="([title, icon,to], i) in products"
            :key="i"
            :to="to"
            :title="title"
            :icon="icon"
            >
          <v-list-item prepend-icon="mdi-cog-outline">
          {{ title }}</v-list-item></NuxtLink>
        </v-list-group>
        <NuxtLink to="/about-us" class="text-decoration-none text-white">
          <v-list-item
            prepend-icon="mdi-forum"
            title="About Us"
            value="about_us"
          ></v-list-item>
        </NuxtLink>
        <NuxtLink to="/contact-us" class="text-decoration-none text-white">
          <v-list-item
            prepend-icon="mdi-email-outline"
            title="Contact Us"
            value="contact_us"
          ></v-list-item>
        </NuxtLink>
        </v-list>
      </v-navigation-drawer>
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
<script setup>
let drawer = ref(null);
let handleCustomEvent = async (dataFromChild) => {
  console.log("Data from child:", dataFromChild);
  drawer.value = dataFromChild;
  
};

</script>

<script>
  export default {
    data: () => ({
      open: ['Users'],
      services: [
        ['Data Science as a Service', 'mdi-cog-outline','data-science-as-a-service'],
        ['IDEA', 'mdi-cog-outline','idea'],
        ['Incorta', 'mdi-cog-outline','incorta'],
        ['Enterprises Analytics', 'mdi-cog-outline','enterprises-analytics'],
      ],
      products: [
        ['Carrom Live', 'mdi-cog-outline','carrom-live'],
        ['Spend Control', 'mdi-cog-outline','spend-control'],
      ],
    }),
  }
</script>
