<template>
  <div id="container">
    <h1 id="logo">Cricket Scorer</h1>
    <h2 class="player" :class="{ active: returnActive.player1 }" id="player1" @click="togglePlayers">Player 1</h2>
    <h2 class="player" :class="{ active: returnActive.player2 }" id="player2" @click="togglePlayers">Player 2</h2>
    <h4 id="versus">VS.</h4>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['returnActive'])
  },
  methods: {
    ...mapActions(['toggleActive']),
    togglePlayers: function (event) {
      if (!this.returnActive.player1 && event.target.id === 'player1') {
        this.toggleActive()
      }
      if (!this.returnActive.player2 && event.target.id === 'player2') {
        this.toggleActive()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 100px 75px;
}

#logo {
  grid-row: 1;
  grid-column: 1 / 13;
  justify-self: center;
  align-self: center;
  margin: 0;
}

.player {
  justify-self: center;
  align-self: center;
  text-decoration: underline;
  grid-row: 2;
  margin: 0;
}

.active {
  color: seagreen;
  background-color: aquamarine;
}

#player1 {
  grid-column: 4 / 6;
}

#player2 {
  grid-column: 8 / 10;
}

#versus {
  grid-row: 2;
  grid-column: 6 / 8;
  justify-self: center;
  align-self: center;
  margin: 0;
  font-weight: 800;
}
</style>
