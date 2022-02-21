<template>
  <section id="sponsors">
    <div class="container text-center">
      <h2>SPONSORS</h2>
      <p>
        Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies
        vehicula ut id elit.
      </p>
      <div class="sponsors-links pt-5">
        <div class="row">
          <div class="col link-img" v-for="banner in banners" :key="banner">
            <a href="#">
              <img
                :src="require(`../assets/images/${banner.img}`)"
                alt="sponsor-banner"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SecSponsors",
  data() {
    return {
      banners: [
        { img: "banner-1.jpg" },
        { img: "banner-2.jpg" },
        { img: "banner-3.jpg" },
        { img: "banner-4.jpg" },
        { img: "banner-5.jpg" },
        { img: "banner-6.jpg" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_vars.scss";

#sponsors {
  background-color: #f6f6f6;
  padding: 5rem 0 3rem 0;
  h2 {
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }
  p {
    color: $natural_gray;
    margin: 0 auto;
    width: 40%;
  }
}
</style>