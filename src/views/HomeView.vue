<template>
  <div class="home">
    <div class="title">
      Programming languages<br>and frameworks
    </div>
    <div class="text">
      What are programming languages? What is a framework?
      Why are they needed,<br>in what spheres are they used?
      You can read about all this here.
    </div>
    <div class="grid-icons">
      <div class="row">
        <div class="contain-icon"><router-link to="language/1"><img class="icon" src="../assets/lang/icons8-js.svg"
              alt=""></router-link></div>
        <div class="contain-icon"><router-link to="language/2"><img class="icon" src="../assets/lang/icons8-python.svg"
              alt=""></router-link></div>
        <div class="contain-icon"><router-link to="language/3"><img class="icon" src="../assets/lang/icons8-c.svg"
              alt=""></router-link></div>
        <div class="contain-icon"><router-link to="language/4"><img class="icon" src="../assets/lang/icons8-c++.svg"
              alt=""></router-link></div>
        <div class="contain-icon"><img class="icon" src="../assets/lang/icons8-c-sharp-logo.svg" alt=""></div>
      </div>
      <div class="circle"></div>
      <div class="row">
        <div class="contain-icon"><router-link to="language/5"><img class="icon" src="../assets/lang/icons8-java.svg"
              alt=""></router-link></div>
        <div class="contain-icon"><router-link to="language/7"><img class="icon" src="../assets/lang/icons8-ruby.svg"
              alt=""></router-link></div>
        <div class="contain-icon"><img class="icon" src="../assets/lang/icons8-rust-programming-language.svg" alt="">
        </div>
        <div class="contain-icon"><img class="icon" src="../assets/lang/icons8-swift.svg" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  setup() {
    return document.title = "Home"
  }
});
</script>

<style>
.title {
  text-align: center;
  font-size: 80px;
  font-weight: bold;
  background: linear-gradient(270deg, #f00f44 0%, #feab2e 52.00%, #5200FF 95%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 25px;
}

.text {
  color: #FFF;
  text-align: center;
  font-size: 26px;
  margin-bottom: 120px;
}

.row {
  display: grid;
  grid-template-columns: repeat(5, 180px);
  /* border: 1px solid red; */
  width: 940px;
  gap: 15px;
  margin: 0 auto 15px;
}

.grid-icons {
  position: relative;
  /* border: 1px solid red; */
}

.circle {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 420px;
  background: linear-gradient(180deg, #B7BA31 0%, rgba(185, 113, 61, 0.00) 100%);
  filter: blur(200px);
  z-index: -123234382746;
  top: -40px;
  left: 700px;
}

.row:nth-child(3) {
  /* border: 1px solid blue; */
  grid-template-columns: repeat(4, 180px);
  width: 750px;
}

.contain-icon {
  width: 155px;
  height: 155px;
  padding: 40px;
  border-radius: 34px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px);
  text-align: center;
  z-index: 1232344;
  /* margin-left: 500px; */
}

.contain-icon:hover {
  background: rgba(255, 255, 255, 0.15);
}

.icon {
  width: 73px;
  cursor: pointer;
  z-index: 123234324;
}

@media (max-width: 768px) {
  .text {
    width: 550px;
    margin: 0 auto 30px;
  }

  .row {
    grid-template-columns: repeat(4, 180px);
    width: 720px;
    margin: 0 auto;
  }

  .row>div:nth-child(5) {
    /* border: 1px solid red; */
    display: none;
  }

  .row:nth-child(3) {
    grid-template-columns: repeat(4, 180px);
    width: 720px;
    margin: 20px auto;
  }

  .circle {
    left: 180px;
  }

  @media (max-width: 375px) {
    .title {
      font-size: 40px;
    }

    .text {
      width: 330px;
      margin: 0 auto;
      font-size: 18px;
    }

    .row {
      grid-template-columns: repeat(2, 180px);
      width: 360px;
      margin: 0 auto;
    }

    .row:nth-child(3) {
      grid-template-columns: repeat(2, 180px);
      width: 360px;
      margin: 20px auto;
    }

    .circle {
      width: 220px;
      height: 220px;
      border-radius: 220px;
      left: 100px;
      filter: blur(100px);
      top: 200px;
    }
  }

}
</style>