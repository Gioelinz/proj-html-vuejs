<template>
  <div id="app">
    <!-- Sezione Header -->
    <Header :nav="navElements" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      navElements: [
        { text: "HOME" },
        { text: "PAGES" },
        { text: "PROGRAM" },
        { text: "TICKETS" },
        { text: "SPEAKERS" },
        { text: "PAPERS" },
        { text: "BLOG" },
        { text: "SHORTCODES" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./assets/scss/generics.scss";
body {
  font-family: Helvetica, sans-serif;
}
</style>
