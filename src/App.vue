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
    /* width: 100%;
    height: 100%; */
    scroll-behavior: smooth;
    background-color: #111111;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 0%;
    background: transparent;
  }
</style>