<template>
    <section><columbusTitle/></section>
    <!-- <section><esloganLayout/></section> -->
    <!-- <section><whoamiLayout/></section> -->
    <!-- <section><skillsLayout/></section> -->
    <!-- <section><projectsLayout/></section> -->
    <!-- <section><contactMeLayout/></section> -->
</template>

<script>
import columbusTitle from './components/columbusTitle.vue'
// import esloganLayout from './components/esloganLayout.vue'
// import whoamiLayout from './components/whoamiLayout.vue'
// import skillsLayout from './components/skillsLayout.vue'
// import projectsLayout from './components/projectsLayout.vue'
// import contactMeLayout from './components/contactMeLayout.vue'

export default {
  el: '#App',
  name: 'App',
  components: {
    columbusTitle,
    // esloganLayout,
    // whoamiLayout,
    // skillsLayout,
    // projectsLayout,
    // contactMeLayout
  }
}
</script>

<style>
  html{
    scroll-behavior: smooth;
    background-color: #111111;
  }
  
  /* .main {
    width: 100%;
    width: 1920px;
    height: 1080px;
    height: 100%;
  } */

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
</style>