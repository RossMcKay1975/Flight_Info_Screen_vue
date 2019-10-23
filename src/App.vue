<template>
  <div id="app">
    <div class="main-container">
        <h1>Flight Information Screen</h1>
        <flights-table v-for="flights in flights" :flight="flights"/>
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
      timer: '',
      selectedFlight: null,

      }
    },
    components: {
      "flights-table": FlightsTable,
    },
    created () {
        this.fetchData();
        this.timer = setInterval(this.fetchData(), 5000)
      },
    methods: {
    fetchData(){
     fetch('https://kabrudle.edinburghairport.com/api/flights/all')
    .then(res => res.json())
    .then(flights => this.flights = flights);
      },
    },
  }





</script>
<style>

h1{
  font-family: ClanWeb-Ultra, Calibri, Arial, Helvetica;
  font-weight:bold;
  text-align: center;
  background-color: yellow;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 0px
}

</style>
