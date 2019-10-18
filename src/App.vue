<template>
  <div>
    <h1>Flight Information Screen</h1>
    <div class="main-container">
    </div>
  </div>
</template>

<script>
import { eventBus } from './main.js'


export default {
  name: 'app',
  data(){
    return {
      flights: [],
      selectedFlight: null
      }
    },
    components: {

    },
  mounted(){
    fetch('https://kabrudle.edinburghairport.com/api/flights/all')
    .then(res => res.json())
    .then(flights => this.flights = flights)

  }
}

</script>
