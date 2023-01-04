<template>
    <!-- Regular and responsive components -->
    <columbusTitle/>
    <whoamiLayout/>
    <projectsLayout/>
    <contactMeLayout/>

    <!-- Parallax components -->
    <!-- <columbusTitleParallax/> -->
    <!-- <whoamiLayoutParallax/> -->
    <!-- <projectsLayoutParallax/> -->
    <!-- <contactMeLayoutParallax/> -->
</template>

<script setup>
  //Regular and responsive components
  import columbusTitle from '../components/columbusTitle.vue'
  import whoamiLayout from '../components/whoamiLayout.vue'
  import projectsLayout from '../components/projectsLayout.vue'
  import contactMeLayout from '../components/contactMeLayout.vue'

  //Parallax components
  // import columbusTitleParallax from '../components/scrollParallax/columbusTitle.vue'
  // import whoamiLayoutParallax from '../components/scrollParallax/whoamiLayout.vue'
  // import projectsLayoutParallax from '../components/scrollParallax/projectsLayout.vue'
  // import contactMeLayoutParallax from '../components/scrollParallax/contactMeLayout.vue'
</script>

<style>
  html {
    background-color: #111111;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 0%;
    background: transparent;
  }
</style>