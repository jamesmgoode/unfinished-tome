<template>
  <div class="combat">
    <h2 v-on:click="showHide">Combat</h2>
    <transition name="fade">
      <div v-show="showCombat" class="text-body">
        <p>Combat rules</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Combat",
  data() {
    return {
      showCombat: true,
    };
  },
  methods: {
    showHide: function () {
      this.showCombat = !this.showCombat;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-body {
  margin: 10px;
  height: 30px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
