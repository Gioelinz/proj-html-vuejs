<template>
  <div class="col-4">
    <div class="new-card">
      <figure>
        <img
          class="img-fluid"
          :src="require(`../assets/images/${item.image}`)"
          alt="new-post"
        />
        <div role="button" class="hover-sticky text-white">
          <div
            class="
              content-sticky
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <i class="fa-solid fa-bullhorn"></i>
            <span>STICKY POST</span>
          </div>
        </div>
      </figure>
      <div class="content pt-3">
        <p class="date-comments mb-2">
          <em>{{ item.date }} / {{ item.comments }} Comments</em>
        </p>
        <h4 class="title">{{ item.title }}</h4>
        <p class="description">
          {{ item.content }}
        </p>
        <div class="link">
          <a href="#"><em class="learn">Read More</em></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardNews",
  props: ["item"],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_vars.scss";

.new-card {
  .date-comments {
    color: $muted;
  }
  .title {
    font-weight: 600;
    letter-spacing: 1px;
  }
  .description {
    color: $natural_gray;
  }
  a {
    text-decoration: none;
  }
  figure {
    position: relative;
    &:hover .hover-sticky {
      display: block;
    }
    .hover-sticky {
      display: none;
      position: absolute;
      bottom: 0;
      right: 0;
      height: 35px;
      width: 40%;
      background-color: $mine_shaft;
      .content-sticky {
        line-height: 35px;
        span {
          margin-left: 8px;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>