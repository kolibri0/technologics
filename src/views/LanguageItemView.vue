<template>
  <div>
    <h1 class="title">{{ language.name }}</h1>
    <div class="contain-desc">
      <div class="desc" v-if="language.description">{{ language.description }}
      </div>
      <img class="language-img" :src='language.sin' width="500" height="300" alt="">
    </div>
    <div class="info">
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

/* .desc:: {
  color: red;
} */
</style>