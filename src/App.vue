<template>
  <div id="app">
    <!-- Sezione Header -->
    <Header :nav="navElements" />
    <!-- Main -->
    <Main />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
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
  font-family: "Open Sans", sans-serif;
}
</style>
