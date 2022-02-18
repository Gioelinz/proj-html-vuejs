<template>
  <section id="speakers">
    <div class="container">
      <div class="head d-flex justify-content-between">
        <h2>SPEAKERS</h2>
        <div class="arrows">
          <button class="button-template">
            <i class="fa-solid fa-angle-left fa-sm"></i>
          </button>
          <button class="button-template">
            <i class="fa-solid fa-angle-right fa-sm"></i>
          </button>
        </div>
      </div>
      <div class="people">
        <div class="row">
          <div class="col-3" v-for="speaker in speakers" :key="speaker.name">
            <figure>
              <img
                class="img-fluid"
                :src="require(`../assets/images/${speaker.image}`)"
                alt=""
              />
              <div class="hover-overlay">
                <div class="socials">
                  <a href="#"><i class="fa-brands fa-twitter fa-xl"></i></a>
                  <a href="#"><i class="fa-brands fa-facebook-f fa-xl"></i></a>
                  <a href="#"><i class="fa-brands fa-linkedin-in fa-xl"></i></a>
                </div>
              </div>
            </figure>
            <div class="text-center mt-4">
              <h4>{{ speaker.name }}</h4>
              <p class="text-muted">
                <em>{{ speaker.job }}</em>
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
  name: "SecSpeakers",
  data() {
    return {
      speakers: [
        {
          image: "speaker-6.jpg",
          name: "PATRICK SPENCER",
          job: "S&P Analyzer",
        },
        {
          image: "speaker-5.jpg",
          name: "JANET JONES",
          job: "Newyork Post's GM",
        },
        {
          image: "speaker-4.jpg",
          name: "MICHAEL DOVER",
          job: "Starbuck's CEO",
        },
        {
          image: "speaker-3.jpg",
          name: "ANGELINA HOLY",
          job: "Maxii's Manager",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_vars.scss";

#speakers {
  background-color: #f3f3f3;
  .head {
    padding: 4rem 0;
    h2 {
      letter-spacing: 2px;
      font-weight: 700;
    }
    .button-template {
      padding: 8px 16px;
      border-radius: 5px;
      margin-left: 4px;
    }
  }
  .people {
    padding-bottom: 4rem;
    h4 {
      letter-spacing: 1px;
      font-weight: 600;
    }
    figure {
      position: relative;
      &:hover .hover-overlay {
        display: block;
      }
      img {
        border-radius: 6px;
      }
      .hover-overlay {
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba($scarlet, 0.6);
        border-radius: 6px;
        .socials {
          position: absolute;
          top: 50%;
          right: 50%;
          transform: translate(50%, -50%);
          a {
            color: white;
            margin: 0 10px;
          }
        }
      }
    }
  }
}
</style>