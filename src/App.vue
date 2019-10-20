<template>
  <div id="app">
    <div class="main-container">

    <div>
      <h1>Flight Information Screen</h1>
      <flights-table v-for="(flights ) in flights" :flight="flights" ></flights-table>
    </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from './main.js'
import FlightsTable from './components/FlightsTable.vue'


export default {
  name: 'app',
  data(){
    return {
      flights: [],
      selectedFlight: null
      }
    },
    components: {
      "flights-table": FlightsTable,

    },
  mounted(){
    fetch('https://kabrudle.edinburghairport.com/api/flights/all')
    .then(res => res.json())
    .then(flights => this.flights = flights)


  }
}

</script>
<style>
  /* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
  color: white;
  margin-top: 60px;
} */
h1{
  text-align: left;
  background-color: yellow
}

</style>
