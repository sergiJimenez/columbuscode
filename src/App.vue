<template>
    <section><columbusTitle/></section>
    <section><esloganLayout/></section>
    <section><whoamiLayout/></section>
    <section><projectsLayout/></section>
    <section><contactMeLayout/></section>
</template>

<script>
  import columbusTitle from './components/columbusTitle.vue'
  import esloganLayout from './components/esloganLayout.vue'
  import whoamiLayout from './components/whoamiLayout.vue'
  import projectsLayout from './components/projectsLayout.vue'
  import contactMeLayout from './components/contactMeLayout.vue'

  export default {
    el: '#App',
    name: 'App',
    components: {
      columbusTitle,
      esloganLayout,
      whoamiLayout,
      projectsLayout,
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