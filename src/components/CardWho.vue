<template>
  <div class="col-4">
    <i class="fa-2xl icon-who float-start" :class="info.icon"></i>
    <div class="who-section d-flex flex-column">
      <h6>{{ info.title }}</h6>
      <p class="info">
        {{ info.info }}
      </p>
      <div class="links">
        <a href="#"
          ><em class="learn">{{ info.footer }}</em></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardWho",
  props: ["info"],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_vars.scss";
.col-4 {
  padding: 6rem 0;
  i.icon-who {
    margin-right: 30px;
    margin-top: 5px;
    color: $natural_gray;
  }
  h6 {
    letter-spacing: 1px;
    font-weight: 600;
  }
  .info {
    color: $gray;
  }
  a {
    text-decoration: none;
    display: inline-block;
  }
}
</style>