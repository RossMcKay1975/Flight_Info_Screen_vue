<template lang="html">
  <div v-if="flight" id="flightDetail">
    <div id="detailWrapper">
      <h2>{{ flight }}</h2>
      <div id="flexWrapper">
      </div>
        <div id="left">
        <p><span>Flight No.</span>: {{ flight.Status }} </p>
      </div>
    </div>
  </div>
</template>


<script>
import ListComponent from './ListComponent.vue';

export default {
  name: 'flight-detail',
  props: ['flight'],
  components: {
    }
  }

</script>

<style lang="css" scoped>
