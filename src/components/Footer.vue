<template>
  <footer>
    <div class="container">
      <div class="main-footer">
        <div class="row gx-5">
          <!-- About US -->
          <div class="col-3">
            <h5>{{ fAbout.title }}</h5>
            <p class="py-3">{{ fAbout.text }}</p>
            <div class="socials d-flex">
              <a
                class="pe-3"
                href="#"
                v-for="(icon, index) in fAbout.icons"
                :key="index"
              >
                <i :class="icon" class="fa-xl"></i>
              </a>
            </div>
          </div>
          <!-- News -->
          <div class="col-3">
            <h5>{{ fNews.title }}</h5>
            <ul class="ps-2">
              <li v-for="list in fNews.list" :key="list">
                <i class="fa-solid fa-angle-right fa-sm pe-3"></i>
                <a class="listed" href="#">{{ list }}</a>
              </li>
            </ul>
          </div>
          <!-- Tickets -->
          <div class="col-3">
            <h5>{{ fTicket.title }}</h5>
            <p class="py-3">{{ fTicket.text }}</p>
            <button class="button-template">{{ fTicket.button }}</button>
          </div>
          <!-- Gallery -->
          <div class="col-3">
            <h5>{{ fGallery.title }}</h5>
            <div class="images py-3">
              <div class="row g-3">
                <div
                  class="col-3"
                  v-for="image in fGallery.images"
                  :key="image"
                >
                  <img
                    role="button"
                    class="img-fluid"
                    :src="require(`../assets/images/${image}`)"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-footer">
      <div class="container">
        <div class="py-4 d-flex justify-content-between align-items-center">
          <div class="copyright">
            <p class="m-0">&#169; Copyright GoodLayers, All Right Reserved</p>
          </div>
          <div class="links">
            <a href="#">About Us |</a>
            <a href="#">Accomodation |</a>
            <a href="#">Call for Paper |</a>
            <a href="#">Contact US</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: ["fAbout", "fNews", "fTicket", "fGallery"],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_vars.scss";

footer {
  background-color: #212121;
  color: white;
  .main-footer {
    padding: 4rem 0;
    h5 {
      font-weight: 600;
      letter-spacing: 1px;
    }
    p {
      font-size: 0.85rem;
      color: #bfbfbf;
    }
    a {
      text-decoration: none;
      color: white;
    }
    li {
      list-style-type: none;
      padding: 6px 0;
      i {
        color: $dusty_gray;
      }
      .listed {
        color: $natural_gray;
        font-size: 0.9rem;
        letter-spacing: 1px;
        transition: color 0.3s linear;
        &:hover {
          color: white;
        }
      }
    }
    button {
      font-size: 0.8rem;
      border-radius: 2px;
    }
    img {
      height: auto;
    }
  }
  .bottom-footer {
    background-color: #161616;
    color: $natural_gray;
    font-size: 0.9rem;
    a {
      color: $natural_gray;
      text-decoration: none;
      transition: color 0.3s linear;
      &:hover {
        color: white;
      }
    }
  }
}
</style>