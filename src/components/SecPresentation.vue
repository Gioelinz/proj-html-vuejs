<template>
  <section id="presentation">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="presentation-container">
            <h3>PRESENTATION</h3>
            <!-- Iframe Vimeo -->
            <div style="padding: 56.25% 0 0 0; position: relative">
              <iframe
                src="https://player.vimeo.com/video/84467622?h=0d19bc51bf&title=0&byline=0&portrait=0"
                style="
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                "
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="twitter-feed">
            <h3>TWITTER FEED</h3>
            <div
              class="tweet-container my-5"
              v-for="feed in twitterFeeds"
              :key="feed.link"
            >
              <div class="tweet d-flex">
                <i class="fa-brands fa-twitter fa-xl pt-3 pe-4"></i>
                <p v-html="feed.text"></p>
              </div>
              <p class="ps-5">
                <em>{{ feed.time }} days ago</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SecPresentation",
  data() {
    return {
      twitterFeeds: [
        {
          text: `Stand out and be vibrant with some of the best bright and bold
                  templates on 
                    <span class="learn">@Envato</span>
                  Elements. And
                  add a splash of c..  <a target="_blank" class="learn" href="https://t.co/jFrsnzEJK7">
                  https://t.co/jFrsnzEJK7
                </a>`,
          time: "3",
        },
        {
          text: `Do you need to deliver the perfect presentation or creative pitch? Sure, your ideas and plan need to be on-point, b.. <a target="_blank" class="learn" href="https://t.co/CmvsJVDpW">
                  https://t.co/CmvsJVDpW
                </a>`,
          time: "9",
        },
        {
          text: `Cut yourself a piece of the BFCM sales pie with a solid marketing plan. Here are 5 ways to optimize your content fo.. <a target="_blank" class="learn" href="https://t.co/UZfKHshE0T">
                  https://t.co/UZfKHshE0T
                </a>`,
          time: "11",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_vars.scss";

.presentation-container,
.twitter-feed {
  padding: 5rem 0;
  i {
    color: #47bdee;
  }
  p {
    color: $natural_gray;
  }
}
h3 {
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 3rem;
}
</style>