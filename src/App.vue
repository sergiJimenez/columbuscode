<template>
  <div class="scroll-tracker"></div>
    <section><columbusTitle/></section>
    <section><esloganLayout/></section>
    <section><whoamiLayout/></section>
    <section><skillsLayout/></section>
    <section><projectsLayout/></section>
    <section><contactMeLayout/></section>
</template>

<script>
import "https://raw.githubusercontent.com/flackr/scroll-timeline/master/dist/scroll-timeline.js";
import columbusTitle from './components/columbusTitle.vue'
import esloganLayout from './components/esloganLayout.vue'
import whoamiLayout from './components/whoamiLayout.vue'
import skillsLayout from './components/skillsLayout.vue'
import projectsLayout from './components/projectsLayout.vue'
import contactMeLayout from './components/contactMeLayout.vue'

const scrollTracker = document.querySelector(".scroll-tracker");
const scrollTrackingTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [CSS.percent(0), CSS.percent(100)]
});

scrollTracker.animate(
  {
    transform: ['scaleX(0)', 'scaleX(1)'],
  },
  {
    duration: 1,
    timeline: scrollTrackingTimeline,
  }
);

export default {
  el: '#App',
  name: 'App',
  components: {
    columbusTitle,
    esloganLayout,
    whoamiLayout,
    skillsLayout,
    projectsLayout,
    contactMeLayout
  }
}
</script>

<style>
  html{
    scroll-behavior: smooth;
  }
  
  .main {
    width: 1920px;
    height: 1080px;
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  .scrollTracker {
    position: fixed;
    inset: 0 0;
    width: 100%;
    height: .3%;
    background-color: red;
    /* linear-gradient */
  }
</style>