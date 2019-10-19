<template lang="html">

  <table v-bind:class="{ flight }">
    <thead>
      <tr>
        <th> Flight No </th>
        <th> Date </th>
        <th> Time </th>
        <th> Arr/Dep </th>
        <th> Port of Call </th>
        <th> Other Info </th>
        <th> Additional Info </th>
        <th> Date Time </th>
        <th> Airline Code </th>
        <th> CodeShare </th>
        <th> Parent Flight </th>
        <th> Gate </th>
        <th> Arrival Hall </th>
        <th> flight.Active </th>
        <th> </th> 
      </tr>
    </thead>
    <tbody>
      <tr class="FlightTableRow">
        <td> {{ flight.FlightNo }} </td>
        <td> {{ flight.Date }} </td>
        <td> {{ flight.Time }} </td>
        <td> {{ flight.ArrDep }} </td>
        <td> {{ flight.PortOfCallA }} </td>
        <td> {{ flight.otherInfo }} </td>
        <td> {{ flight.Additional }} </td>
        <td> {{ flight.dateTime }} </td>
        <td> {{ flight.airlineCode }} </td>
        <td> {{ flight.CodeShare }} </td>
        <td> {{ flight.ParentFlight }} </td>
        <td> {{ flight.Gate }} </td>
        <td> {{ flight.ArrHall }} </td>
        <td> {{ flight.Active }} </td>
        <td> {{ flight.Image }} </td>
      </tr>
    </tbody>
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
