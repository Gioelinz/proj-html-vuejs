<template>
  <section id="updates">
    <div class="container">
      <div class="container-counter text-white d-flex justify-content-center">
        <div class="counter days text-center">
          <p class="mb-0">2964</p>
          <span class="fs-5 fw-light">DAYS</span>
        </div>
        <div class="counter hours text-center">
          <p class="mb-0">24</p>
          <span class="fs-5 fw-light">HOURS</span>
        </div>
        <div class="counter mins text-center">
          <p class="mb-0">39</p>
          <span class="fs-5 fw-light">MINS</span>
        </div>
        <div class="counter secs text-center">
          <p class="mb-0">56</p>
          <span class="fs-5 fw-light">SECS</span>
        </div>
      </div>
      <div class="subscribe text-center">
        <h4>SUBSCRIBE FOR UPDATES</h4>
        <form action="#">
          <input type="text" placeholder="Please fill your email..." />
          <button class="button-template ms-3">SUBSCRIBE</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SecUpdates",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_vars.scss";
#updates {
  background-image: url(../assets/images/coutdown-bg1.jpg);
  background-size: auto;
  background-position: top center;
  .container-counter {
    padding: 7rem 0 4rem 0;
    .counter {
      background-color: $mine_shaft;
      padding: 20px 50px;
      border-radius: 8px;
      margin: 0 1rem;
      &.days {
        opacity: 0.95;
      }
      &.hours {
        opacity: 0.85;
      }
      &.mins {
        opacity: 0.75;
      }
      &.secs {
        opacity: 0.65;
      }
      p {
        font-size: 60px;
        font-weight: 600;
      }
    }
  }
  .subscribe {
    padding-bottom: 6rem;
    h4 {
      letter-spacing: 2px;
      font-weight: 600;
    }
    form {
      margin: 0 auto;
      input {
        padding: 14px 15px;
        width: 40%;
        border: 0;
        &:focus {
          outline: 0;
          border: 0;
        }
      }
    }
  }
}
</style>