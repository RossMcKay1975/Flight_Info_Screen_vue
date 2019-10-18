<template>
  <div>
    <h1>Flight Information Screen</h1>
    <div class="main-container">
      <flights-list :flights="flights"></flights-list>
    <flight-detail :flight="selectedFlight"></flight-detail>
    </div>
  </div>
</template>

<script>
import { eventBus } from './main.js'
import FlightsList from './components/FlightsList.vue'
import FlightDetail from './components/FlightDetail.vue';

export default {
  name: 'app',
  data(){
    return {
      flights: [],
      selectedFlight: null
      }
    },
    components: {
      "flights-list": FlightsList,
      "flight-detail": FlightDetail
    },
  mounted(){
    fetch('https://kabrudle.edinburghairport.com/api/flights/all')
    .then(res => res.json())
    .then(flights => this.flights = flights)

    eventBus.$on('flight-selected', (flight) => {
      this.selectedFlight = flight
    })
  }
}

</script>
