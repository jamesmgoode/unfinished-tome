<template>
  <div id="app">
    <header>
      <div class="header-bar">
        <router-link to="/" class="header-link home-link">The Unfinished Tome</router-link>
        <div class="header-links">
          <router-link to="/events" class="header-link header-page-link">Events</router-link>
        </div>
      </div>
    </header>
    <main>
      <router-view />
      <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </main>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

main {
  text-align: center;
  max-width: 800px;
  margin: 40px auto;
}

header {
  height: auto;
  background-color: #222;
}

.header-bar {
  padding: 10px 0;
  margin: auto 50px;
  display: flex;
  flex-wrap: wrap;
}

.header-links {
  display: flex;
  flex-wrap: wrap;
}

.header-link {
  color: #9d9d9d !important;
  text-decoration: none !important;
  margin: auto 0px;
  white-space: nowrap;
}

.header-link:hover {
  color: lightgrey !important;
}

.home-link {
  position: relative;
  font-size: 30px;
  line-height: 35px;
  margin-right: 30px;
}

.header-page-link {
  line-height: 35px;
  margin-right: 20px;
  font-weight: bold;
}
</style>
