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
        { text: "HOME", active: true },
        { text: "PAGES", active: false },
        { text: "PROGRAM", active: false },
        { text: "TICKETS", active: false },
        { text: "SPEAKERS", active: false },
        { text: "PAPERS", active: false },
        { text: "BLOG", active: false },
        { text: "SHORTCODES", active: false },
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
