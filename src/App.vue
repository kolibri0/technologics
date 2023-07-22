<template>
  <div class="asd"></div>
  <nav>
    <router-link class="nav-item" to="/">Home</router-link>
    <router-link class="nav-item" to="/frameworks">Frameworks</router-link>
    <router-link class="nav-item" to="/language">Languages</router-link>
  </nav>
  <router-view />
</template>

<style>
body {
  background-color: black;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 15px;
  width: 580px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(10px);
  margin: 50px auto 150px;
  z-index: 1203;
  text-align: center;
}

/* .nav-item, */
.nav-item.router-link-active {
  color: rgb(255, 255, 255, 0.6);
}

.nav-item,
.nav-item.router-link-active {
  margin: 0 15px;
}

.asd {
  width: 801px;
  height: 720px;
  border-radius: 901px;
  background: linear-gradient(180deg, #7531BA 0%, rgba(137, 78, 196, 0.00) 100%);
  filter: blur(280px);
  position: absolute;
  top: -400px;
  left: 55px;
  z-index: -12312324;
}

nav a {
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
}

nav a.router-link-exact-active {
  color: white;
}
</style>
