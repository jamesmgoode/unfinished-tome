<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
      <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Header
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
}

main {
  text-align: center;
  max-width: 800px;
  margin: 40px auto;
}
</style>
