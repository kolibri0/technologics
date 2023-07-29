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
    <div class="framework-circle"></div>
    <div class="framework-circle-two"></div>
    <div class="grid-frameworks">
      <div class="contain-language">
        <div class="item-icon"><router-link to="language/1"><img class="icon" src="../assets/lang/icons8-js.svg"
              alt=""></router-link></div>
        <div class="language-frameworks-container">
          <div class="language-frameworks">
            <div class="item-framework-container">
              <div><img src="../assets/frame/js/icons8-react.svg" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/frame/js/icons8-vue-js.svg" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/frame/js/icons8-angularjs.svg" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/frame/js/nextjs-icon.svg" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/frame/js/meteor-icon.svg" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/frame/js/icons8-jquery.svg" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/frame/js/ember-tomster-lockup-4c.svg" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/frame/js/nuxt-icon.svg" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/frame/js/jest-svgrepo-com.svg" width="48" height="48" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/frame/js/icons8-express-js.svg" width="48" height="48" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/frame/js/backbonejs-icon.svg" width="48" height="48" alt=""></div>
            </div>
          </div>
        </div>
      </div>
      <div class="contain-language">
        <div class="item-icon"><router-link to="language/2"><img class="icon" src="../assets/lang/icons8-python.svg"
              alt=""></router-link></div>
        <div class="language-frameworks-container">
          <div class="language-frameworks">
            <div class="item-framework-container">
              <div><img src="../assets/frame/py/icons8-django.svg" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/frame/py/cherrypy-svgrepo-com.svg" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/frame/py/aiohttp-svgrepo-com.svg" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/frame/py/icons8-flask.svg" alt=""></div>
            </div>
          </div>
        </div>
      </div>
      <div class="contain-language">
        <div class="item-icon"><router-link to="language/5"><img class="icon" src="../assets/lang/icons8-java.svg"
              alt=""></router-link></div>
        <div class="language-frameworks-container">
          <div class="language-frameworks">
            <div class="item-framework-container">
              <div><img src="../assets/frame/java/icons8-mybatis.svg" width="48" height="48" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/frame/java/apacheTwo.svg" width="48" height="48" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/frame/java/gwtproject-icon.svg" width="48" height="48" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/frame/java/spring-icon.svg" width="48" height="48" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/frame/java/wicket.com.png" width="48" height="48" alt=""></div>
            </div>
          </div>
        </div>
      </div>
      <div class="contain-language">
        <div class="item-icon"><router-link to="language/4"><img class="icon" src="../assets/lang/icons8-c++.svg"
              alt=""></router-link></div>
        <div class="language-frameworks-container">
          <div class="language-frameworks">
            <div class="item-framework-container">
              <div><img src="../assets/frame/c++/48876018.png" width="48" height="48" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/frame/c++/poco.jpg" width="48" height="48" alt=""></div>
            </div>
            <div class="item-framework-container">
              <div><img src="../assets/frame/c++/treefrog.jpg" width="48" height="48" alt=""></div>
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
body {
  overflow-x: hidden;
}

.frameworks-page {
  text-align: center;
  font-size: 25px;
  color: white;
  position: relative;
}

.description {
  margin-bottom: 40px;
}

.contain-language {
  position: relative;
  /* border: 1px solid red; */
  width: 315px;
  z-index: 2134234;
  margin: 0 auto;
}

.language-frameworks-container {
  position: absolute;
  top: 50px;
  left: 0;
  /* height: 250px; */
  height: fit-content;
  width: 310px;
  border-radius: 10px;
  overflow: hidden;
  z-index: -234234;
  padding-bottom: 2px;
  /* border: 1px solid red; */
}

.grid-frameworks>.contain-language:nth-child(1) {
  grid-row-start: 1;
  grid-row-end: 3;
  /* height: 500px; */
}

.grid-frameworks>.contain-language:nth-child(4) {
  /* border: 2px solid blue; */
  grid-column-start: 2;
  grid-row-start: 2;
  margin-top: 220px;
  margin-bottom: 200px;
}

.grid-frameworks>.contain-language:nth-child(5) {
  margin-top: 220px;
}

.grid-frameworks>.contain-language:nth-child(4)>.language-frameworks-container::before {
  background: linear-gradient(60deg, #05c9ff, #5200FF);
  top: 10px;
  left: -20px;
  width: 355px;
}

.grid-frameworks>.contain-language:nth-child(1)>.language-frameworks-container::before {
  width: 555px;
  left: -110px;
}

.grid-frameworks>.contain-language:nth-child(4)>.item-icon {
  background: linear-gradient(60deg, #6200ff 10%, #06e2e2ca);
}

.grid-frameworks>.contain-language:nth-child(2)>.language-frameworks-container::before {
  background: linear-gradient(60deg, #ff9e01, #0008ff);
}

.grid-frameworks>.contain-language:nth-child(2)>.item-icon {
  background: linear-gradient(60deg, #6200ff 20%, #399fe8ca);
}

.grid-frameworks>.contain-language:nth-child(3)>.language-frameworks-container::before {
  background: linear-gradient(100deg, #ff4901, #0008ff);
}

.grid-frameworks>.contain-language:nth-child(3)>.item-icon {
  background: linear-gradient(60deg, #b181fe 30%, #06e2e2ca);
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
  width: 500px;
  height: 100px;
  left: -80px;
  top: 40%;
  /* top: 0px; */
  background: linear-gradient(60deg, #f00f44, #5200FF);
  animation: animate 9s linear infinite;
  z-index: -324234;
}

.language-frameworks-container::after {
  content: '';
  position: absolute;
  inset: 5px;
  background: black;
  z-index: -324234;
  border-radius: 10px;
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
  width: 290px;
  /* border: 1px solid red; */
  margin: 0 auto;
  margin-top: 50px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

.grid-frameworks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 1300px;
  margin: 0 auto;
  justify-content: center;
  /* border: 1px solid red; */
}

.framework-circle {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 420px;
  background: linear-gradient(180deg, #de2222 0%, rgba(185, 113, 61, 0.00) 100%);
  filter: blur(200px);
  z-index: -123234382746;
  top: 180px;
  left: 700px;
}

.framework-circle-two {
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 420px;
  background: linear-gradient(180deg, #ffd500 0%, rgba(185, 113, 61, 0.00) 100%);
  filter: blur(200px);
  z-index: -123234382746;
  bottom: 0;
  right: -150px;
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