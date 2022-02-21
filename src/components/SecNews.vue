<template>
  <section id="news">
    <div class="container">
      <div class="head d-flex justify-content-between">
        <h3>RECENT NEWS</h3>
        <a href="#"><em class="learn">Read All News</em></a>
      </div>
      <div class="card-container">
        <div class="row gx-5">
          <CardNews
            v-for="(newParam, index) in newsParams"
            :key="index"
            :item="newParam"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardNews from "./CardNews.vue";

export default {
  name: "SecNews",
  components: { CardNews },
  data() {
    return {
      newsParams: [
        {
          image:
            "photodune-7770665-two-white-coffee-mug-with-diy-decoration-o.jpg",
          date: "03 Dec 2013",
          comments: "0",
          title: "SEDIAL EIUSMOD TEMPOR",
          content: `Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris
          facere voluntate liceret: sese habere....`,
        },
        {
          image:
            "photodune-8797753-multiethnic-people-with-startup-business-t.jpg",
          date: "03 Dec 2013",
          comments: "2",
          title: "DONEC LUCTUS IMPERDIET",
          content: `Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris
          facere voluntate liceret: sese habere....`,
        },
        {
          image:
            "photodune-8522811-speaker-at-business-conference-and-present.jpg",
          date: "03 Dec 2013",
          comments: "2",
          title: "MAGNA PARS STUDIORUM",
          content: `Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris
          facere voluntate liceret: sese habere....`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.head {
  padding-top: 5rem;
  h3 {
    font-weight: 600;
    letter-spacing: 2px;
  }
  .learn {
    font-weight: 500;
  }
  a {
    text-decoration: none;
  }
}
.card-container {
  padding: 4rem 0;
}
</style>