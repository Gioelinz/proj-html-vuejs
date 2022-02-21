<template>
  <section id="tickets">
    <div class="container">
      <h2 class="text-center text-white">TICKETS</h2>
      <div class="row gx-5">
        <CardTickets
          v-for="ticket in tickets"
          :key="ticket.cost"
          :ticket="ticket"
        />
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
};
</script>

<style lang="scss" scoped>
#tickets {
  background-image: url(../assets/images/ticket-bg.jpg);
  background-size: auto;
  background-position: top center;
  padding: 4rem 0;
  h2 {
    padding-bottom: 3rem;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 1px;
  }
}
</style>