<template lang="html">
  <table v-bind:class="{ flights }">
    <thead>
      <tr>
        <th> Flight No </th>
        <th> Date </th>
        <th> Time </th>
        <th> Arr/Dep </th>
        <th> Port of Call </th>
        <th> Other Info </th>
        <!-- <th> Additional Info </th> -->
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
        <!-- <td> {{ flight.otherInfo }} </td> -->
        <td> {{ flight.Additional }} </td>
        <td> {{ flight.dateTime }} </td>
        <td> {{ flight.airlineCode }} </td>
        <td> {{ flight.CodeShare }} </td>
        <td> {{ flight.ParentFlight }} </td>
        <td> {{ flight.Gate }} </td>
        <td> {{ flight.ArrHall }} </td>
        <td> {{ flight.Active }} </td>
        <td> <image :imageUrl="flight.image"></image>  </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { eventBus } from '../main.js'
// import FlightImage from "@/components/FlightImage";
export default {
  name: 'flights-table',
  props: ['flight']

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
}



table {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
  color: white;
  margin-top: 1px;
  border-style: solid;
  border-width: thin;
  font-size: 14px;
  margin-left: 1px

}



</style>
