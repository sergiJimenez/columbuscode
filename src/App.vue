<template>
    <section><columbusTitle/></section>
    <section><esloganLayout/></section>
    <!-- <section><esloganLayoutCopy/></section> -->
    <section><whoamiLayout/></section>
    <!-- <section><skillsLayout/></section> -->
    <!-- <section><projectsLayout/></section> -->
    <section><contactMeLayout/></section>
</template>

<script>
  import columbusTitle from './components/columbusTitle.vue'
  import esloganLayout from './components/esloganLayout.vue'
  // import esloganLayoutCopy from './components/esloganLayoutCopy.vue'
  import whoamiLayout from './components/whoamiLayout.vue'
  // import skillsLayout from './components/skillsLayout.vue'
  // import projectsLayout from './components/projectsLayout.vue'
  import contactMeLayout from './components/contactMeLayout.vue'

  export default {
    el: '#App',
    name: 'App',
    components: {
      columbusTitle,
      esloganLayout,
      // esloganLayoutCopy,
      whoamiLayout,
      // skillsLayout,
      // projectsLayout,
      contactMeLayout
    }
  }
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