<template>
  <div id="app">
    <!-- Sezione Header -->
    <Header :nav="navElements" />
    <!-- Main -->
    <Main />
    <!-- Footer -->
    <Footer
      :f-about="footerAbout"
      :f-news="footerNews"
      :f-ticket="footerTicket"
      :f-gallery="footerGallery"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
  data() {
    return {
      navElements: [
        { text: "HOME", active: false },
        { text: "PAGES", active: false },
        { text: "PROGRAM", active: false },
        { text: "TICKETS", active: false },
        { text: "SPEAKERS", active: false },
        { text: "PAPERS", active: false },
        { text: "BLOG", active: false },
        { text: "SHORTCODES", active: false },
      ],

      footerAbout: {
        title: "ABOUT US",
        text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        icons: [
          "fa-brands fa-facebook-square",
          "fa-brands fa-twitter-square",
          "fa-brands fa-linkedin",
          "fa-brands fa-google-plus-square",
          "fa-brands fa-pinterest-square",
          "fa-brands fa-flickr",
        ],
      },
      footerNews: {
        title: "RECENT NEWS",
        list: [
          "SEM PORTA MOLLIS PARTURIENT",
          "NULLAM LOREM MATTIS PURUS",
          "NIBH SEM SIT ULLAMCORPER",
          "DONEC LUCTUS IMPERDIET",
          "MAGNA PARS STUDIORUM",
        ],
      },
      footerTicket: {
        title: "GET YOUR SEAT!",
        text: "Book for your seat before it's too rate. We provide variety of ticket options.",
        button: "CHECK OUT TICKETS!",
      },
      footerGallery: {
        title: "GALLERY FROM LAST YEAR",
        images: [
          "photodune-7770665-two-white-coffee-mug-with-diy-decoration-o (1).jpg",
          "photodune-8523683-speaker-at-business-convention-and-present.jpg",
          "photodune-6745579-modern-creative-man-relaxing-on-workspace-.jpg",
          "photodune-8522811-speaker-at-business-conference-and-present (1).jpg",
          "photodune-8797753-multiethnic-people-with-startup-business-t (1).jpg",
          "card04-150x150.jpg",
          "photodune-6745606-man-wristwatch-calendar-key-and-glasses-on.jpg",
          "photodune-6745585-modern-creative-workspace-m-150x150.jpg",
          "6426608875_186070f8ca_o-150x150.jpg",
          "card01-150x150.jpg",
          "13349065283_64d09b067c_o-150x150.jpg",
          "photodune-8795110-overhead-of-essentials-denim-clothes-m-150.jpg",
        ],
      },
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
