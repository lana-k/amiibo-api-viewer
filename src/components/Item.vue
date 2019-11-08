<template>
  <div class='record' @click="$router.push({ path:'/details', query: { id: id} })">
    <img :src="image">
    <div class='info'>
      <h1>{{ name }}</h1>
      <div><span class='label'>Character:</span> {{ character }}</div>
      <div><span class='label'>GameSeries:</span> {{ gameSeries }}</div>
      <div><span class='label'>AmiiboSeries:</span> {{ amiiboSeries }}</div>
      <div><span class='label'>Category:</span> {{ type }}</div>
      <h3>Releases:</h3>
      <div><span class='label'>Australia:</span> {{ release.au }}</div>
      <div><span class='label'>Europe:</span> {{ release.eu }}</div>
      <div><span class='label'>Japan:</span> {{ release.jp }}</div>
      <div><span class='label'>North America:</span> {{ release.na }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { API } from '../utils'

export default Vue.extend({
  name: 'Item',
  props: ['amiiboSeries', 'character', 'gameSeries', 'image', 'name', 'release', 'type']
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: 16px;
}
img {
  height: auto;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
}
.info {
  padding-left: 8px;
  border: 1px solid gray;
}
.record {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(268px, 1fr));
}
.label {
  color: gray;
}
</style>
