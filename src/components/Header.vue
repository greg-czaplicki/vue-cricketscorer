<template>
  <div id="container">
    <h1 id="logo">Cricket Scorer</h1>
    <h2 class="player" id="player1">Player 1</h2>
    <h2 class="player" id="player2">Player 2</h2>
    <h4 id="versus">VS.</h4>
  </div>
</template>

<script>
export default {
  data () {
    return {}
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
}

.player {
  justify-self: center;
  align-self: center;
  text-decoration: underline;
  grid-row: 2;
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
