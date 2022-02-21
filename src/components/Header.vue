<template>
  <header>
    <div class="container h-100">
      <div class="h-100 d-flex justify-content-between align-items-center">
        <figure class="m-0">
          <img src="../assets/images/logo.png" alt="logo" />
        </figure>
        <nav>
          <ul class="nav">
            <li v-for="(item, index) in nav" :key="index">
              <a
                class="item-nav"
                :class="{ active: setPage(index) }"
                @click="currentIndex = index"
                href="#"
                >{{ item.text }}</a
              >
            </li>
            <li>
              <a class="item-nav" href="#">|</a>
            </li>
            <li class="d-none d-xl-block">
              <a class="item-nav" href="#">
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["nav"],
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    setPage(index) {
      return this.currentIndex === index;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_vars.scss";
header {
  background-color: white;
  height: 100px;
  .item-nav {
    color: $gray;
    text-decoration: none;
    font-weight: 800;
    font-size: 12px;
    letter-spacing: 1px;
    margin: 0 15px;
    padding-bottom: 10px;
    &:hover,
    &.active {
      color: $scarlet;
      border-bottom: 3px solid $scarlet;
    }
  }
}
</style>