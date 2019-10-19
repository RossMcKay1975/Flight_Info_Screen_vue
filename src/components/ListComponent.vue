<template lang="html">
  <table  v-bind:class="{ flight }">{{ flight.FlightNo }}
    <p><span>Date </span>:{{ flight.Date }} </p>
    <p><span>Time </span>:{{ flight.Time }} </p>
    <p><span>Arr/Dep </span>:{{ flight.ArrDep }} </p>
    <p><span>Port Of Call </span>:{{ flight.PortOfCallA }} </p>
    <p><span>OtherInfo </span>:{{ flight.OtherInfo }} </p>
    <p><span> </span>:{{ flight.Image }} </p>
    <p><span>Arrival Hall </span>:{{ flight.ArrHall }} </p>
    <p><span>Date Time </span>:{{ flight.dateTime }} </p>
    <p><span>Airline Code </span>:{{ flight.airlineCode }} </p>
    <p><span>CodeShare </span>:{{ flight.CodeShare }} </p>
    <p><span>Parent Flight </span>:{{ flight.ParentFlight }} </p>
    <p><span>Gate </span>:{{ flight.Gate }} </p>
    <p><span>Arrival Hall </span>:{{ flight.ArrHall }} </p>
    <p><span>Active </span>:{{ flight.Active }} </p>
  </table>
</template>

<script>
import { eventBus } from '../main.js'
export default {
  name: 'list-component',
  props: ['flight'],
  methods: {
    handleClick(){
      eventBus.$emit('flight-selected', this.flight)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
