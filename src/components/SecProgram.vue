<template>
  <section id="program">
    <div class="container">
      <div class="head d-flex justify-content-between">
        <div class="text d-flex">
          <h2>PROGRAM</h2>
          <p class="w-50">
            This conference run through all 4 days from 23 - 26 May 2016. We
            also provide free lunch and coffee break in each day.
          </p>
        </div>
        <div class="links">
          <a href="#">
            <em class="learn">View Full Program</em>
          </a>
        </div>
      </div>
      <div class="table">
        <div class="head-table d-flex">
          <div
            class="days"
            role="button"
            v-for="program in daysProgram"
            :key="program.day"
          >
            <h5 class="text-white">{{ program.day }}</h5>
            <p class="text-white">{{ program.date }}</p>
          </div>
        </div>
        <div class="body-table d-flex">
          <div class="left-section w-50 ps-5 pt-5">
            <div class="time d-flex">
              <i class="fa-regular fa-clock pe-3"></i>
              <p>09:00 - 10:30</p>
            </div>
            <div class="location d-flex">
              <i class="fa-solid fa-location-arrow pe-3"></i>
              <p>ROOM A</p>
            </div>
            <div class="speaker d-flex">
              <i class="fa-solid fa-user pe-3"></i>
              <p role="button" class="learn">LAURENCE FRANCIS</p>
            </div>
          </div>
          <div class="right-section">
            <h3>WELCOMING AND INTRODUCTION</h3>
            <p>
              Vestibulum id ligula porta felis euismod semper. Nullam quis risus
              eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non
              metus auctor fringilla. Aenean lacinia bibendum nulla sed
              consectetur....
            </p>
            <img
              role="button"
              src="../assets/images/speaker-8-150x150.jpg"
              alt="speaker 8"
              title="Laurence Francis"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SecProgram",
  data() {
    return {
      daysProgram: [
        { day: "DAY 1", date: "23 May 2016" },
        { day: "DAY 2", date: "23 May 2020" },
        { day: "DAY 3", date: "24 May 2030" },
        { day: "DAY 4", date: "25 May 2030" },
        { day: "DAY 5", date: "26 May 2030" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_vars.scss";
#program {
  margin: 6rem 0 5rem 0;
  .text {
    h2 {
      letter-spacing: 2px;
      font-weight: 700;
      margin-right: 3rem;
    }
    p {
      color: $natural_gray;
    }
  }
  .table {
    margin-top: 3rem;
    .head-table {
      background-color: $scarlet;
      .days {
        padding: 15px 5rem 15px 1rem;
        h5 {
          padding: 0;
          margin: 0;
          font-weight: 600;
        }
        p {
          padding: 0;
          margin: 0;
        }
      }
    }
    .body-table {
      background-color: #f3f3f3;
      .left-section {
        color: $natural_gray;
      }
      .right-section {
        padding: 4rem;
        margin-left: -2rem;
        h3 {
          color: $masala;
          letter-spacing: 2px;
        }
        p {
          color: $natural_gray;
        }
        img {
          height: 80px;
          border-radius: 10px;
        }
      }
    }
  }
  a {
    text-decoration: none;
  }
}
</style>