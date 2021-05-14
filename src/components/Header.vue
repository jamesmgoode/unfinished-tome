<template>
  <div>
    <header>
      <div class="header-bar">
        <router-link to="/" class="header-link home-link">
          The Unfinished Tome
        </router-link>
        <div class="header-links">
          <router-link to="/rules" class="header-link header-page-link">
            Rules
          </router-link>
          <router-link to="/world" class="header-link header-page-link">
            World
          </router-link>
          <router-link to="/events" class="header-link header-page-link">
            Events
          </router-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  height: auto;
  background-color: #222;
}

.header-bar {
  padding: 10px 0;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
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
