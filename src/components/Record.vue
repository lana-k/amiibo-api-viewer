<template>
  <div class='record' @click="$router.push({ path:'/details', query: { id: id} })">
    <img :src="image">
    <h1>{{ name }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { API } from '../utils'

export default Vue.extend({
  name: 'Record',
  props: [ 'id', 'image', 'name' ]
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  border: 1px solid gray;
  margin: 16px;
}
img {
  height: auto;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
}
.h1 {
  padding-left: 8px;

}
.record {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}
</style>
