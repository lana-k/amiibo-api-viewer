<template>
  <div class='record'>
    <img :src="image">
    <div class='info'>
      <h1>{{ name }}</h1>
      <div class='label'>Character:</div>
      <div class='value'>{{ character }}</div>
      <div class='label'>GameSeries:</div>
      <div class='value'>{{ gameSeries }}</div>
      <div class='label'>AmiiboSeries:</div>
      <div class='value'>{{ amiiboSeries }}</div>
      <div class='label'>Category:</div>
      <div class='value'> {{ type }}</div>
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
import { API } from '../service'

/**
  * Item with details.
  */
export default Vue.extend({
  name: 'Item',
  props: ['amiiboSeries', 'character', 'gameSeries', 'image', 'name', 'release', 'type']
})
</script>

<style scoped>
div {
  margin: 16px;
  text-align: left;
}
img {
  max-height: 50vh;
  max-width: 100%;
  padding: 16px;
  box-sizing: border-box;
}
.info {
  padding-left: 16px;
  border: 1px solid gray;
  margin: 16px 0px;
}
.record {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(268px, 1fr));
  justify-items: center;
}
.label {
  color: gray;
  font-size: 16px;
  margin: 16px 8px 4px 8px;
}
.value {
  margin: 0 8px;
  font-size: 20px;
}
</style>
