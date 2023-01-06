<template>
    <section class="columbusTitle"><columbusTitle/></section>
    <section class="tag whoamiLayout"><whoamiLayout/></section>
    <section class="tag projectsLayout"><projectsLayout/></section>
    <section class="tag contactMeLayout"><contactMeLayout/></section>
</template>

<script>
  import columbusTitle from '../components/columbusTitle.vue'
  import whoamiLayout from '../components/whoamiLayout.vue'
  import projectsLayout from '../components/projectsLayout.vue'
  import contactMeLayout from '../components/contactMeLayout.vue'
  import $ from 'jquery'

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