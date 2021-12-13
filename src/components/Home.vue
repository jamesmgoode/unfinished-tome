<template>
  <div class="home">
    <div class="home-content">
      <h1>The Unfinished Tome</h1>
      <p>
        This is all placeholder, but the idead is for an IC introduction to the
        world, who you are going to be playing etc. with links for mechanics.
        There will then be links on the top to reference pages, but the in the
        first instance people are introduced to the world in an IC way.
      </p>
      <br />
      <p class="ic-text">
        Welcome to the new Solem, awakened. Now is a time of magic and new
        beginnings. Open your third eye to see the world around you as it truly
        is. Reach out and claim your destiny.
      </p>
      <br />
      <p>
        The Unfinished Tome is a live action roleplaying game about magical
        mystery, occult secrets, fantasy combat and the rise to power through
        arcane mastery.
      </p>
      <br />
      <p class="ic-text">
        All your life you have lived in one of the towns of Aardglass, Baran,
        Cromerth, Llyn or Tarrin. Nought else beyond was known to you. Yet now
        your dreams become restless, they beckon you to a certain place. A place
        of power and discovery. There is something more.
      </p>
      <br />
      <p>
        Your character comes from one of the few towns where people shelter in
        relative safety from the monsters that roam the wildlands. There are
        some safe roads that connect between the towns and allow for trade and
        travel with a measure of security, but the rest of the world is cut off.
      </p>
      <br />
      <p class="ic-text">
        You travel days into the wilderness, abandoning your family and anyone
        you called kin to seek out the dream which calls each night. Eventually
        you find yourselves close to the source. Yet now, at the very last
        hurdle, there are folk still who might bar your path.
      </p>
      <br />
      <p>
        In The Unfinished Tome you play a character who has become "Awakened" to
        magic. You feel stronger than you once did and see strange colours in
        the air and lingering around certain objects. You do not yet know what
        this means, but each night you experience the same dream. In the dream a
        man made of scrolls and parchment visits you and promises understanding
        and safety. They promise to teach you how to open your third eye to view
        the world as it truly is and how to learn new mastery of magic.
      </p>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  background-image: url("../assets/scroll-ghost.jpg");
  background-repeat: no-repeat;
  background-position: center top;
}

.home-content {
  color: white;
  padding: 5px;
}

h1 {
  text-align: center;
}

P {
  max-width: 600px;
  margin: auto;
}

.ic-text {
  font-style: italic;
}
</style>
