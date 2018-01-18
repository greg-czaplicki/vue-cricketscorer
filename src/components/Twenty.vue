<template>
  <div id="container">
    <h1 id="player1">X</h1>
    <h1 id="twenty">20</h1>
    <h1 id="player2">/</h1>
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
</style>
