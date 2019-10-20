<template lang="html">
  <img :src="checkForImage"/>
</template>

<script>
import noImage from '@/assets/noimgfnd.jpg'
export default {
  name: 'flight-image',
  props: ['imageUrl'],
  computed: {
    checkForImage(){
      return this.imageUrl != undefined ? this.imageUrl : noImage;
    }
  }
}
</script>

<style lang="css" scoped>

img {
  height: 38px;
  width: 96px;
  padding-bottom: 10px;
}
</style>
