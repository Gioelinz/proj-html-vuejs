<template>
  <main>
    <Jumbotron />
    <!-- Sezione chi siamo -->
    <div class="container">
      <div class="row clearfix">
        <CardWho
          v-for="whoInfo in whoInfos"
          :key="whoInfo.icon"
          :info="whoInfo"
        />
      </div>
    </div>
    <!-- Sezione Updates -->
    <SecUpdates :date="end" />
    <!-- Sezione speakers -->
    <SecSpeakers />
    <!-- Sezione Program -->
    <SecProgram />
    <!-- Mappa Google -->
    <Maps />
    <!-- Sezione Location -->
    <SecLocation />
    <!-- Sezione Cards News Recenti -->
    <SecNews />
    <!-- Sezione Shop Tickets -->
    <SecTickets />
    <!-- Sezione Presentazioni -->
    <SecPresentation />
    <!-- Sezione Sponsors -->
    <SecSponsors />
  </main>
</template>

<script>
import Jumbotron from "./Jumbotron.vue";
import CardWho from "./CardWho.vue";
import SecUpdates from "./SecUpdates.vue";
import SecSpeakers from "./SecSpeakers.vue";
import SecProgram from "./SecProgram.vue";
import Maps from "./Maps.vue";
import SecLocation from "./SecLocation.vue";
import SecNews from "./SecNews.vue";
import SecTickets from "./SecTickets.vue";
import SecPresentation from "./SecPresentation.vue";
import SecSponsors from "./SecSponsors.vue";

export default {
  name: "Main",
  components: {
    Jumbotron,
    CardWho,
    SecUpdates,
    SecSpeakers,
    SecProgram,
    Maps,
    SecLocation,
    SecNews,
    SecTickets,
    SecPresentation,
    SecSponsors,
  },
  data() {
    return {
      /* Countdown */
      end: new Date("2028-07-11T00:00:00"),

      whoInfos: [
        {
          icon: "fa-solid fa-trophy",
          title: "WHO WE ARE",
          info: "Donec id elit non mi porta gravida at eget me tus. Sed posuere consectetur estat lobo rtis. Cum sociis natoque.",
          footer: "Learn More",
        },
        {
          icon: "fa-solid fa-bolt-lightning",
          title: "WHAT WE DO",
          info: "Donec id elit non mi porta gravida at eget me tus. Sed posuere consectetur estat lobo rtis. Cum sociis natoque.",
          footer: "Learn More",
        },
        {
          icon: "fa-solid fa-question",
          title: "WHY US?",
          info: "Donec id elit non mi porta gravida at eget me tus. Sed posuere consectetur estat lobo rtis. Cum sociis natoque.",
          footer: "Learn More",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>