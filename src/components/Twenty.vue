<template>
  <div id="container">
    <h1 id="player1" :class="{active: returnActive.player1 && returnPlayer2Scores.twenty  < 3}" v-if="returnPlayer1Scores.twenty > 0">{{ returnPlayer1Scores.twenty }}</h1>
    <h1 id="twenty">20</h1>
    <h1 id="player2" :class="{active: returnActive.player2 && returnPlayer1Scores.twenty < 3}" v-if="returnPlayer2Scores.twenty > 0">{{ returnPlayer2Scores.twenty}}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['returnActive', 'returnPlayer1Scores', 'returnPlayer2Scores'])
  }
}
</script>

<style lang="scss" scoped>
#container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 75px;
}
#player1 {
  grid-row: 1;
  grid-column: 4 / 6;
  justify-self: center;
  align-self: center;
}

#player2 {
  grid-row: 1;
  grid-column: 8 / 10;
  justify-self: center;
  align-self: center;
}

#twenty {
  grid-row: 1;
  grid-column: 6 / 8;
  justify-self: center;
  align-self: center;
  margin: 0;
  font-size: 50px;
}

.active {
  color: seagreen;
  background-color: aquamarine;
}
</style>
