<template lang="html">
  <div>
    <ul>
      <list-component v-for="(flight, index) in flights" :flight="flight" :key="index"></list-component>
      
    </ul>
  </div>

</template>

<script>
import ListComponent from './ListComponent.vue';

  export default {
  name: 'flights-list',
  props: ['flights'],
  components: {
    "list-component": ListComponent
  }
}
</script>
