<template lang="html">
  <li v-on:click="handleClick" v-bind:class="{ flight }">{{ flight }}</li>
</template>

<script>
import { eventBus } from '../main.js'
export default {
  name: 'list-component',
  props: ['flight'],
  methods: {
    handleClick(){
      // eventBus.$emit('film-selected', this.film)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
