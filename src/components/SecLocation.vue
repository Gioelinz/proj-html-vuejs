<template>
  <section id="location">
    <div class="container text-white text-center">
      <h2 class="pb-4">LOCATION</h2>
      <h4>GD BUILDING, GRAND CONFERENCE ROOM</h4>
      <div class="where pb-3">
        <i class="fa-solid fa-location-arrow text-white pe-2"></i>
        <span>11 GD Building, River Mall, New york, USA 8879</span>
      </div>
      <a href="#">Check For Accomodations Here</a>
      <div class="contacts text-white">
        <figure>
          <img class="mt-5" src="../assets/images/1-item-2.jpg" alt="line" />
        </figure>
        <div class="d-flex justify-content-between w-100">
          <div class="tel me-5">
            <i class="fa-solid fa-phone pe-3"></i>
            <span>+1-112-222-3344</span>
          </div>
          <div class="mail">
            <i class="fa-solid fa-envelope pe-3"></i>
            <span>Contact@TheKeynoteTheme.com</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SecLocation",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_vars.scss";

#location {
  padding: 5rem 0;
  background-image: url(../assets/images/location-bg.jpg);
  h2,
  h4 {
    font-weight: 700;
    letter-spacing: 2px;
  }
  a {
    color: $scarlet;
    text-decoration: none;
  }
  .contacts {
    /* width dell' immagine */
    width: max-content;
    margin: 0 auto;
  }
}
</style>