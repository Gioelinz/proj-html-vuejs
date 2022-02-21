<template>
  <div class="col-4">
    <div class="container-card text-center">
      <div class="head-card">
        <h5>{{ ticket.title }}</h5>
        <h6>{{ ticket.cost }}</h6>
        <div v-if="ticket.featured" class="featured">
          <p><em class="text-white">Featured!</em></p>
        </div>
      </div>
      <div class="content-card">
        <div class="paragraphs">
          <p v-for="(item, index) in ticket.description" :key="index">
            {{ item }}
          </p>
        </div>
      </div>
      <div class="button-card">
        <button class="w-100 button-template"><span>BOOK NOW</span></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardTickets",
  props: ["ticket"],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_vars.scss";
.container-card {
  .head-card {
    background-color: #e9e9e9;
    padding: 2rem 0;
    position: relative;
    overflow: hidden;
    h5 {
      font-weight: 700;
    }
    h6 {
      color: $scarlet;
      font-weight: 700;
      margin: 0;
    }
    .featured {
      position: absolute;
      transform: rotate(45deg);
      top: 17px;
      right: -28px;
      height: 30px;
      width: 120px;
      background-color: $scarlet;
      p {
        font-size: 0.9rem;
        line-height: 30px;
      }
    }
  }
  .content-card {
    background-color: #fff;
    .paragraphs {
      padding: 2rem 0;
      p {
        font-style: italic;
        color: $natural-gray;
      }
    }
  }
  .button-card {
    button {
      font-size: 0.9rem;
      span {
        transition: opacity 0.3s linear;
      }
      &:hover span {
        opacity: 0.5;
      }
    }
  }
}
</style>