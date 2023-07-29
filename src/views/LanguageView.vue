<template>
  <div class="languages-page">
    <div class="content">
      <h1 class="title">Languages</h1>
      <div class="contain-table">
        <table class="up" cellpadding="0" cellspacing="0" border="0">
          <thead>
            <tr class="tr-up">
              <th>Name</th>
              <th>Date<br>Created</th>
              <th>Type</th>
              <th>Compiled /<br>Interpreted</th>
              <th>Complexity</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="tbl-content">
        <table class="down" cellpadding="0" cellspacing="0" border="0">
          <tbody>
            <tr v-for="language in languages" v-bind:key="language.id">
              <td><router-link class="no" :to="{ path: `/language/${language.id}` }">{{ language.name }}</router-link>
              </td>
              <td>{{ language.date }}</td>
              <td>{{ language.type }}</td>
              <td>{{ language.interpretation }}</td>
              <td>{{ language.lvl }}</td>
            </tr>
          </tbody>
        </table>
        <div class="elipse"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import languages from "../components/languages.ts";
document.title = "Languages"
</script>

<style>
/* h1 {
  font-size: 30px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
} */


.contain-table {
  margin-top: 50px;
}


.tbl-content {
  position: relative;
}

table {
  width: 1150px;
  margin: 0 auto;
  table-layout: fixed;
  background: rgba(175, 175, 175, 0.1);
  overflow: hidden;
  z-index: 123123;
}

.up {
  border-radius: 20px 20px 0 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.down {
  border-radius: 0 0 20px 20px;
}

th {
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
  display: table-cell;
  text-transform: uppercase;
}

td {
  padding: 15px;
  text-align: left;
  vertical-align: middle;
  font-size: 19px;
  color: rgba(255, 255, 255, 0.9);
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
  text-decoration: none;
}

.no {
  color: rgba(255, 255, 255, 0.9);
  font-size: 19px;
  text-decoration: none;
}

.no:hover {
  text-decoration: underline rgb(196, 143, 143);
}

.elipse {
  position: absolute;
  width: 1161px;
  height: 467px;
  border-radius: 1161px;
  opacity: 0.44999998807907104;
  background: linear-gradient(180deg, #C173FF 0%, #70EEFF 100%);
  filter: blur(234px);
  top: -130px;
  right: 380px;
  z-index: -123123123;
}
</style>