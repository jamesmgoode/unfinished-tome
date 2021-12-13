<template>
  <div class="rules">
    <h1>Rules</h1>
    <Combat />
    <CharacterCreation />
  </div>
</template>

<script>
import Combat from "./Combat.vue";
import CharacterCreation from "./CharacterCreation";

export default {
  name: "Rules",
  components: {
    Combat,
    CharacterCreation,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
