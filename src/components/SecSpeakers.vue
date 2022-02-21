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
            <div class="people-card" v-if="speaker.visible">
              <figure>
                <img
                  class="img-fluid"
                  :src="require(`../assets/images/${speaker.image}`)"
                  alt=""
                />
                <div class="hover-overlay">
                  <div class="socials">
                    <a href="#"><i class="fa-brands fa-twitter fa-xl"></i></a>
                    <a href="#"
                      ><i class="fa-brands fa-facebook-f fa-xl"></i
                    ></a>
                    <a href="#"
                      ><i class="fa-brands fa-linkedin-in fa-xl"></i
                    ></a>
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
    </div>
  </section>
</template>

<script>
export default {
  name: "SecSpeakers",
  data() {
    return {
      currentIndex: 0,
      speakers: [
        {
          image: "speaker-6.jpg",
          name: "PATRICK SPENCER",
          job: "S&P Analyzer",
          visible: true,
        },
        {
          image: "speaker-5.jpg",
          name: "JANET JONES",
          job: "Newyork Post's GM",
          visible: true,
        },
        {
          image: "speaker-4.jpg",
          name: "MICHAEL DOVER",
          job: "Starbuck's CEO",
          visible: true,
        },
        {
          image: "speaker-3.jpg",
          name: "ANGELINA HOLY",
          job: "Maxii's Manager",
          visible: true,
        },
        {
          image: "speaker-1.jpg",
          name: "ANGELINAs HOLY",
          job: "Maxii's Manager",
          visible: false,
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
        animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
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

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>