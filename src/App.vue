<template>
  <div>
    <h1>Flight Information Screen</h1>
    <div class="main-container">
      <flights-list :flights="flights"></flights-list>
      <!-- <film-detail :film="selectedFilm"></film-detail> -->
    </div>
  </div>
</template>

<script>
import { eventBus } from './main.js'
import FlightsList from './components/FlightsList.vue';

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
