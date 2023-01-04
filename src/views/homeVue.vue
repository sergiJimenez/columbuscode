<template>
    <!-- Try scroll and fade in -->
    <section class="columbusTitle"><columbusTitle/></section>
    <section class="tag whoamiLayout"><whoamiLayout/></section>
    <section class="tag projectsLayout"><projectsLayout/></section>
    <section class="tag contactMeLayout"><contactMeLayout/></section>

    <!-- Parallax components -->
    <!-- <columbusTitleParallax/> -->
    <!-- <whoamiLayoutParallax/> -->
    <!-- <projectsLayoutParallax/> -->
    <!-- <contactMeLayoutParallax/> -->
</template>

<script>
  //Regular and responsive components
  import columbusTitle from '../components/componentsHome/columbusTitle.vue'
  import whoamiLayout from '../components/componentsHome/whoamiLayout.vue'
  import projectsLayout from '../components/componentsHome/projectsLayout.vue'
  import contactMeLayout from '../components/componentsHome/contactMeLayout.vue'
  import $ from 'jquery'

  //Parallax components
  // import columbusTitleParallax from '../components/scrollParallax/columbusTitle.vue'
  // import whoamiLayoutParallax from '../components/scrollParallax/whoamiLayout.vue'
  // import projectsLayoutParallax from '../components/scrollParallax/projectsLayout.vue'
  // import contactMeLayoutParallax from '../components/scrollParallax/contactMeLayout.vue'

  export default {
    components: {
      columbusTitle,
      whoamiLayout,
      projectsLayout,
      contactMeLayout
    },
    mounted () {
      $(document).on("scroll", function() {
        let pageTop = $(document).scrollTop();
        let pageBottom = pageTop + $(window).height();
        let tags = $(".tag");

        for (let i = 0; i < tags.length; i++) {
          let tag = tags[i];
          if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
          } else {
            $(tag).removeClass("visible");
          }
        }
      });
    }
  }
</script>

<style>
  html {
    background-color: #111111;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  .tag{
    opacity: 0;
    transform: translate(0, 10vh);
    transition: all 1s;
  }

  .tag.visible {
    opacity: 1;
    transform: translate(0, 0);
  }

  ::-webkit-scrollbar {
    width: 0%;
    background: transparent;
  }
</style>