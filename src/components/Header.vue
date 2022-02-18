<template>
  <header>
    <div class="container">
      <nav>
        <ul class="nav">
          <li v-for="(item, index) in nav" :key="index">
            <a class="item-nav" href="#">{{ item.text }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["nav"],
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
    margin: 0 10px;
  }
}
</style>