<template>
  <div class="frameworks-page">
    <div class="description">
      Framework - is
      a structure that you can build software on. It serves as a foundation, so you're not starting entirely from
      scratch.<br>
      Frameworks are typically associated with a <router-link class="language" to="/language">specific programming
        language</router-link> and are
      suited to different types of tasks.
    </div>
    <div class="frameworks-title">Language and them frameworks</div>

    <div class="grid-frameworks">
      <div class="contain-language">
        <div class="item-icon"><img class="icon" src="../assets/icons8-js.svg" alt=""></div>
        <div class="language-frameworks-container">
          <div class="language-frameworks">
            <div class="item-framework-container">
              <div><img src="../assets/icons8-react.svg" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/icons8-vue-js.svg" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/icons8-angularjs.svg" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/nextjs-icon.svg" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/meteor-icon.svg" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/icons8-jquery.svg" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/ember-tomster-lockup-4c.svg" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/nuxt-icon.svg" alt=""></div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="contain-language"><img class="icon" src="../assets/icons8-python.svg" alt=""></div>
      <div class="contain-language"><img class="icon" src="../assets/icons8-c.svg" alt=""></div>
      <div class="contain-language"><img class="icon" src="../assets/icons8-c++.svg" alt=""></div> -->
    </div>
  </div>
</template>




<style>
.frameworks-page {
  text-align: center;
  font-size: 25px;
  color: white;
}

.description {
  margin-bottom: 40px;
}

.contain-language {
  position: relative;
  /* border: 1px solid red; */
  width: 400px;
  z-index: 2134234;
}

.language-frameworks-container {
  position: absolute;
  top: 50px;
  left: 0;
  /* height: 250px; */
  height: fit-content;
  width: 400px;
  /* z-index: 1; */
  border-radius: 10px;
  overflow: hidden;
  z-index: -234234;
  padding-bottom: 2px;
}

.item-framework-container {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px);
}

.language-frameworks-container::before {
  content: '';
  position: absolute;
  width: 450px;
  height: 100%;
  left: -25px;
  top: 0px;
  background: linear-gradient(60deg, #f00f44, #5200FF);
  animation: animate 9s linear infinite;
  z-index: -324234;
}

.language-frameworks-container::after {
  content: '';
  position: absolute;
  inset: 4px;
  background: black;
  z-index: -324234;
}

.item-icon {
  /* border: 1px solid red; */
  width: 100px;
  height: 100px;
  padding: 12px;
  border-radius: 50%;
  background: linear-gradient(270deg, #761090 20%, #f26643 100%);
  backdrop-filter: blur(20px);
  margin: 0 auto;
}

.language-frameworks {
  color: white;
  z-index: 1231234;
  width: 390px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 85px);
  gap: 10px;
}

.frameworks-title {
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  background: linear-gradient(270deg, #f00f44 0%, #feab2e 52.00%, #5200FF 90%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 25px;
}

.language {
  color: rgb(247, 84, 24);
  cursor: pointer;
  text-decoration: none;
}

.language:hover {
  opacity: 0.8;
}

@keyframes animate {
  100% {
    transform: rotate(1turn);
  }
}
</style>

<!-- .contain-icon {
  width: 155px;
  height: 155px;
  padding: 40px;
  border-radius: 34px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px);
  text-align: center;
  /* margin-left: 500px; */
} -->
<!-- .icon {
  width: 73px;
  cursor: pointer;
} -->