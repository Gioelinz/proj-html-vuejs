<template>
  <section id="tickets">
    <div class="container">
      <h2 class="text-center text-white">TICKETS</h2>
      <div v-if="!isClicked" class="row gx-5 card-ticket">
        <CardTickets
          @isClick="hasClicked"
          v-for="ticket in tickets"
          :key="ticket.cost"
          :ticket="ticket"
        />
      </div>
      <div v-else class="loading text-center">
        <button
          @click="isClicked = false"
          type="button"
          class="btn-close"
          aria-label="Close"
        ></button>
        <p>We are redirecting you to the payment site...</p>
        <img
          v-if="!hasErr"
          src="../assets/images/paypal-loader.gif"
          alt="loader-gif"
        />
        <div v-if="hasErr" class="alert alert-danger" role="alert">
          Error with the server, you will be redirected to the previous page...
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardTickets from "./CardTickets.vue";

export default {
  name: "SecTickets",
  components: { CardTickets },
  data() {
    return {
      isClicked: false,
      hasErr: false,
      tickets: [
        {
          title: "ONE DAY PASS",
          cost: "FREE",
          featured: false,
          description: [
            "One Day Access",
            "Coffee Break",
            "Lunch(International Buffet)",
            "Document Sheets",
            "50USD Voucher For Next Event",
          ],
        },
        {
          title: "FOUR DAY PASSES",
          cost: "750.00 USD",
          featured: true,
          description: [
            "Four Day Access",
            "Coffee Break",
            "Lunch(International Buffet)",
            "Document Sheets",
            "100USD Voucher For Next Event",
          ],
        },
        {
          title: "TWO DAY PASSES",
          cost: "580.00 USD",
          featured: false,
          description: [
            "Two Day Access",
            "Coffee Break",
            "Lunch(International Buffet)",
            "Document Sheets",
            "70USD Voucher For Next Event",
          ],
        },
      ],
    };
  },
  methods: {
    hasClicked(boolean) {
      this.isClicked = boolean;
      setTimeout(() => {
        this.hasErr = true;
        setTimeout(() => {
          this.isClicked = false;
          this.hasErr = false;
        }, 3000);
      }, 6000);
    },
  },
};
</script>

<style lang="scss" scoped>
#tickets {
  background-image: url(../assets/images/ticket-bg.jpg);
  background-size: auto;
  background-position: top center;
  padding: 4rem 0;
  height: 700px;
  h2 {
    padding-bottom: 3rem;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .loading {
    position: relative;
    height: 170px;
    margin: 0 auto;
    background-color: #f3f3f3;
    padding: 3rem;
    margin-top: 10%;
    width: 50%;
    box-shadow: 0px 0px 10px 1px rgb(42, 42, 42);
    animation: scale-in-ver-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    button {
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }
}
.card-ticket {
  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes scale-in-ver-top {
  0% {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
}

@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
</style>