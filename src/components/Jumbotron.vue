<template>
  <section id="jumbo" class="text-center text-white">
    <h1>
      CONFERENCE ON <br />
      <span class="big-text">SOCIAL NETWORKS</span>
    </h1>
    <img src="../assets/images/1-item-2.jpg" alt="" />
    <ul class="list-group list-group-horizontal justify-content-center">
      <li v-for="(item, index) in jumboData" :key="index">
        {{ item.text }}
      </li>
    </ul>
    <button class="button-template">REGISTER ONLINE</button>
  </section>
</template>

<script>
export default {
  name: "Jumbotron",
  data() {
    return {
      jumboData: [
        { text: "23 - 26 MAY 2019" },
        { text: "/" },
        { text: "SANS FRANCISCO" },
        { text: "/" },
        { text: "8 SPEAKERS" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#jumbo {
  background-image: url(../assets/images/slider-1-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 10rem 0;
  h1 {
    font-size: 3rem;
    font-weight: lighter;
    .big-text {
      font-size: 5.5rem;
      font-weight: 700;
      display: block;
      margin: 25px 0;
      letter-spacing: 1px;
    }
  }
  li {
    list-style-type: none;
    font-weight: 800;
    margin: 0 15px;
  }
  button {
    margin-top: 30px;
    border-radius: 5px;
  }
}
</style>