<template lang="html">
  <table v-bind:class="{ flight }">
    <thead>
      <tr>
        <th> </th>
        <th> Flight No </th>
        <th> Date </th>
        <th> Time </th>
        <th> Arr/Dep </th>
        <th> Origin/Destination Airport </th>
        <th> Other Info </th>
        <!-- <th> Additional Info </th> -->
        <th> Scheduled Date Time </th>
        <th> Airline Code </th>
        <!-- <th> CodeShare </th> -->
        <th> Parent Flight </th>
        <th> Gate </th>
        <th> Arrival Hall </th>
        <th> Flight Active </th>
      </tr>
    </thead>
    <tbody>
      <tr class="FlightTableRow">
        <td><flight-image :imageUrl="flight.Image"></flight-image></td>
        <td> {{ flight.FlightNo }} </td>
        <td> {{ flight.Date }} </td>
        <td> {{ flight.Time }} </td>
        <td> {{ flight.ArrDep }} </td>
        <td> {{ flight.PortOfCallA }} </td>
        <!-- <td> {{ flight.otherInfo }} </td> -->
        <td> {{ flight.Additional }} </td>
        <td> {{ flight.dateTime }} </td>
        <td> {{ flight.airlineCode }} </td>
        <!-- <td> {{ flight.CodeShare }} </td> -->
        <td> {{ flight.ParentFlight }} </td>
        <td> {{ flight.Gate }} </td>
        <td> {{ flight.ArrHall }} </td>
        <td> {{ flight.Active }} </td>

      </tr>
    </tbody>
  </table>
</template>

<script>
import { eventBus } from '../main.js'
import FlightImage from "@/components/FlightImage";

export default {
  name: 'flights-table',
  props: ['flight'],
  components: {
    "flight-image": FlightImage
  },

  }

</script>

<style scoped>

tr {
  text-align: center;
  min-width: 100px;
  font-size:
}
th {
  text-align: center;
  min-width: 100px;
  width: auto;
}

table {
  font-family: 'Calibri', Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
  color: white;
  margin-top: 1px;
  border-style: solid;
  border-width: thin;
  font-size: 14px;
  margin-left: 1px;
  column-width:

}



</style>
