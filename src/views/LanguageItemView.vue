<template>
  <div class="page">
    <h1 class="title">{{ language.name }}</h1>
    <div class="contain-desc">
      <div class="desc" v-if="language.description">{{ language.description }}
      </div>
      <img class="language-img" :src='language.sin' width="500" height="300" alt="">
    </div>
    <div class="info">
      <div class="ellipse"></div>
      <div class="left">
        <div class="left-framework-grid" v-if="frameworks">
          <div class="left-framework-grid-item" v-for="framework in frameworks" v-bind:key="framework.name">
            <div class="anim">
              <div class="contain-framework-icon">
                <div class="contain-icon"><img class="icon" :src="framework.img" style="border-radius: 10px;" alt="">
                </div>
                <div class="framework-name">{{ framework.name }}</div>
              </div>
              <div className="description-body">
                <div class="info2">{{ framework.description ?? 'No info' }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-info">
          <div class="date" v-if="language.date">Date: {{ language.date }}</div>
          <div class="author" v-if="language.author">Author: {{ language.author }}</div>
          <div class="type" v-if="language.type">Used for: {{ language.type }}</div>
          <div class="interpretation" v-if="language.interpretation">Translates: {{ language.interpretation }}</div>
          <div class="typing" v-if="language.typingDiscipline">Typing discipline: {{ language.typingDiscipline }}</div>
        </div>
        <div class="used" v-if="language.used">{{ language.used }}</div>
      </div>

      <!-- </div> -->
    </div>
    <div class="ellipse2"></div>
  </div>
</template>

<script>
import languages from "../components/languages.ts"
import { useRoute } from 'vue-router'

export default {
  setup() {

    const route = useRoute()
    const language = languages.filter((languageItem) => languageItem.id == route.params.id)[0]
    const frameworks = language.frameworks

    document.title = language.name
    return {
      language,
      frameworks,
    }
  }
}
</script>

<style>
.info {
  /* border: 1px solid red; */
  width: 1400px;
  margin: 30px auto 0;
  min-height: 200px;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.page {
  position: relative;
  /* border: 1px solid red; */
  overflow-y: hidden;
}

.ellipse {
  position: absolute;
  top: 120px;
  border-radius: 720px;
  background: linear-gradient(180deg, #25a986 0%, rgba(60, 34, 13, 0) 100%);
  /* filter: blur(350px); */
  width: 720px;
  height: 720px;
  flex-shrink: 0;
  z-index: -5432;
  animation: name-of-animation 12s ease-in-out infinite;
}

.ellipse2 {
  position: absolute;
  border-radius: 720px;
  background: linear-gradient(180deg, #e68d07 0%, rgba(60, 34, 13, 0) 100%);
  transition-property: filter;
  filter: blur(350px);
  width: 720px;
  height: 720px;
  flex-shrink: 0;
  right: 0;
  top: 1200px;
}

.left {
  /* border: 1px solid blue; */
  min-height: 150px;
  width: 880px;
}

.right {
  /* border: 1px solid yellow; */
  border-radius: 10px;
  width: 500px;
  font-size: 22px;
  color: rgb(255, 255, 255, 0.8);
}

.right-info,
.used {
  border-radius: 10px;
  padding: 20px;
  font-size: 22px;
  background: rgb(255, 255, 255, 0.15);
  margin-bottom: 25px;
}

.used {
  font-size: 25px;
}

.right-info>div:nth-child(2),
.right-info>div:nth-child(4) {
  margin-bottom: 10px;
  margin-top: 10px;
}

.contain-framework-icon>.contain-icon {
  width: 160px;
  height: 160px;
  padding: 22px;
  border-radius: 15px;
  margin: 40px auto 0;
}

.contain-framework-icon>.contain-icon>.icon {
  width: 120px;
  height: 120px;
}

.left-framework-grid-item:last-child>.anim>.description-body {
  font-size: 18px;
}

.left-framework-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.left-framework-grid-item {
  width: 320px;
  height: 450px;
  background: rgb(255, 255, 255, 0.15);
  border-radius: 15px;
  margin: 0 auto;
  z-index: 4354;
  /* box-shadow: 0 0 10px 5px #ffffff2c; */
  /* border: 1px solid red; */
}

.anim {
  width: 320px;
  height: 450px;
  position: relative;
  overflow: hidden;
  /* border: 1px solid red; */
}

.framework-name {
  font-size: 28px;
  color: rgb(255, 255, 255, 1);
  text-align: center;
  margin-top: 10px;
}

.description-body {
  border-radius: 18px;
  position: absolute;
  word-break: keep-all;
  padding: 20px;
  width: 100%;
  height: 102%;
  font-size: 19px;
  right: 0;
  bottom: -100%;
  visibility: hidden;
  overflow-y: auto;
  background-color: rgba(73, 73, 73, 0.627);
  backdrop-filter: blur(3px);
  transition: 1s;
  cursor: pointer;
  color: rgb(255, 255, 255);
}


.anim:hover .description-body {
  bottom: -1px;
  visibility: visible;
  /* border: 1px solid blue; */
}

.info2 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.contain-desc {
  display: flex;
  width: 1400px;
  margin: 0 auto;
}

.desc {
  margin-right: 20px;
  font-size: 25px;
  color: rgb(255, 255, 255, 0.8);
}

.language-img {
  border-radius: 10px;
  display: block;
}

.framework-item {
  display: flex;
  position: relative;
  /* border: 1px solid red; */
  width: 1400px;
  margin: 0 auto;
  border-radius: 35px;
  /* background: rgb(50, 50, 50); */
}

.framework-item>.contain-icon {
  width: 120px;
  height: 120px;
  padding: 25px;
  position: absolute;
  left: 0;
  top: 0;
}

.framework-item-info {
  /* background: rgb(50, 50, 50); */
  border-radius: 0;
  /* border: 1px solid blue; */
  width: 1400px;
  padding: 15px;
  font-size: 28px;
  color: rgb(255, 255, 255, 0.8);
  transition: 0.4s;
  border-radius: 35px;
  /* border-radius: 0 0 35px 35px; */
  /* border: 1px solid red; */
}

/* .framework-item>:not(details[open]) {
  background: rgb(50, 50, 50);
}

.framework-item>details[open] {
  background: rgb(160, 92, 92);
} */

summary {
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 120px;
  cursor: pointer;
}

.language-frameworks-items>.framework-item:nth-child(2n + 2)>.contain-icon {
  right: 0;
  top: 0;
  left: auto;
  position: absolute;
}

.language-frameworks-items>.framework-item:nth-child(2n + 2)>details>summary {
  text-align: right;
  margin-right: 120px;
}

.language-frameworks-items>.framework-item:nth-child(2n + 2)>details summary {
  list-style-type: none;
}

details[open] {
  /* border: 1px solid blue; */
  transition: 1s all;
  border-radius: 35px;
  background: rgb(50, 50, 50, 0.6);
  margin-bottom: 10px;
}


.content {
  margin-top: 50px;
}


@media (max-width: 1280px) {
  .contain-desc {
    display: flex;
    width: 1200px;
    margin: 0 auto;
  }

  .info {
    width: 1200px;
  }

  .left {
    /* border: 1px solid blue; */
    min-height: 150px;
    width: 500px;
  }
}

@media (max-width: 1024px) {
  .contain-desc {
    display: block;
    width: 950px;
    margin: 0 auto;
  }

  .language-img {
    margin: 0 auto;
    width: 700px;
    height: 400px;
  }

  .info {
    width: 900px;
  }

  .left-framework-grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .ellipse2 {
    top: 1600px;
    right: 0;
  }
}

@media (max-width: 768px) {
  .contain-desc {
    width: 700px;
    margin-bottom: 20px;
  }

  .language-img {
    margin-top: 20px;
  }

  .info {
    display: flex;
    flex-direction: column-reverse;
    width: 750px;
    margin: 0 auto;
  }

  .left-framework-grid {
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
  }

  .right {
    width: 750;
    margin: 20px auto;
  }

  .left {
    width: 750px;
    margin: 0 auto;
  }
}

@media (max-width: 375px) {
  .contain-desc {
    width: 350px;
    margin-bottom: 20px;
  }

  .language-img {
    margin-top: 20px;
    width: 320px;
    height: 200px;
    margin: 0 auto;
  }

  .ellipse {
    border-radius: 350px;
    filter: blur(350px);
    width: 350px;
    height: 350px;
    flex-shrink: 0;
    right: 0;
    animation: name-of-animation 12s ease-in-out infinite;
  }

  .ellipse2 {
    border-radius: 350px;
    filter: blur(350px);
    width: 350px;
    height: 200px;
    flex-shrink: 0;
    right: 0;
    top: 1000px;
  }

  .info {
    display: flex;
    flex-direction: column-reverse;
    width: 350px;
    margin: 0 auto;
  }

  .right-info {
    width: 350px;
  }

  .left-framework-grid {
    margin: 0 auto;
    grid-template-columns: repeat(1, 1fr);
  }

  .used {
    width: 350px;
  }

  .right {
    width: 350px;
    margin: 20px auto;
  }

  .left {
    width: 350px;
    margin: 0 auto;
  }

  .asd {
    width: 350px;
  }
}

@keyframes name-of-animation {
  0% {
    filter: blur(350px);
  }

  20% {
    filter: blur(450px);
  }

  50% {
    filter: blur(580px);
  }

  80% {
    filter: blur(450px);
  }

  100% {
    filter: blur(350px);
  }
}
</style>