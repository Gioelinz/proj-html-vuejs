<template>
  <section id="updates">
    <div class="container">
      <div class="container-counter text-white d-flex justify-content-center">
        <div class="counter days text-center">
          <p class="mb-0">{{ days | twoDigits }}</p>
          <span class="fs-5 fw-light">DAYS</span>
        </div>
        <div class="counter hours text-center">
          <p class="mb-0">{{ hours | twoDigits }}</p>
          <span class="fs-5 fw-light">HOURS</span>
        </div>
        <div class="counter mins text-center">
          <p class="mb-0">{{ minutes | twoDigits }}</p>
          <span class="fs-5 fw-light">MINS</span>
        </div>
        <div class="counter secs text-center">
          <p class="mb-0">{{ seconds | twoDigits }}</p>
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
  props: ["date"],
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      event: this.date,
    };
  },
  mounted() {
    /* Aggiorno ogni secondo */
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  computed: {
    /* controlli per parametri */
    secondCount() {
      return this.calculatedDate - this.now;
    },

    calculatedDate() {
      return Math.trunc(Date.parse(this.event) / 1000);
    },

    seconds() {
      if (this.secondCount < 0) return 0;
      return this.secondCount % 60;
    },
    minutes() {
      if (this.secondCount < 0) return 0;
      return Math.trunc(this.secondCount / 60) % 60;
    },
    hours() {
      if (this.secondCount < 0) return 0;
      return Math.trunc(this.secondCount / 60 / 60) % 24;
    },
    days() {
      if (this.secondCount < 0) return 0;
      return Math.trunc(this.secondCount / 60 / 60 / 24);
    },
  },

  filters: {
    /* filtro con controllo se finisce timer */
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return "0" + value.toString();
      }
      return value.toString();
    },
  },
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