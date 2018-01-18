<template>
  <div id="app">
    <Header></Header>
    <Twenty></Twenty>
  </div>
</template>

<script>
import Header from './components/Header'
import Twenty from './components/Twenty'

export default {
  components: {
    Header: Header,
    Twenty: Twenty
  },
  name: 'app',
  computed: {
    name () {
      return this.$store.state.name
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  grid-template-rows: repeat(12, 1fr);
}

h1,
h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
