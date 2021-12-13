<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
body {
  margin: 0;
  background-color: black;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  max-width: 800px;
  margin: 80px auto;
}

h1 {
  text-align: center;
}

Header {
  position: fixed;
  width: 100%;
  margin-top: -80px;
}
</style>
