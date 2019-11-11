<template>
<div>
  <h1>{{ name }}</h1>
  <div class='record'>
    <img :src="image">
    <div class='info'>
      <h3>Details:</h3>
      <div class='label'>Character</div>
      <div class='value'>{{ character }}</div>
      <div class='label'>Game series</div>
      <div class='value'>{{ gameSeries }}</div>
      <div class='label'>Amiibo series</div>
      <div class='value'>{{ amiiboSeries }}</div>
      <div class='label'>Category</div>
      <div class='value'> {{ type }}</div>
      <h3>Releases:</h3>
      <div v-if="release.au" class='release'><span class='label'>Australia:</span> {{ release.au | date }}</div>
      <div v-if="release.eu" class='release'><span class='label '>Europe:</span> {{ release.eu | date }}</div>
      <div v-if="release.jp" class='release'><span class='label'>Japan:</span> {{ release.jp | date }}</div>
      <div v-if="release.na" class='release'><span class='label'>North America:</span> {{ release.na | date }}</div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Amiibo } from '../service'

/**
 * Item with details.
 */
export default Vue.extend({
  name: 'Item',
  props: [
    /**
     * Name of Amiibo series of the item
     */
    'amiiboSeries',
    /**
     * Name of character of the item
     */
    'character',
    /**
     * Name of game series of the item
     */
    'gameSeries',
    /**
     * Image of the item
     */
    'image',
    /**
     * Name of the item
     */
    'name',
    /**
     * Object representing release dates of the item in
     * Australia (au), Europe (eu), Japan (jp) and North America (na)
     *
     * @example
     * ```
     * {
     *   au: "2014-11-29",
     *   eu: "2014-11-28",
     *   jp: "2014-12-06",
     *   na: "2014-11-21"
     * }
     * ```
     */
    'release',
    /**
     * Type of the item
     */
    'type'
  ]
})
</script>

<style scoped>
div {
  margin: 16px;
  text-align: center;
}
img {
  max-height: 50vh;
  max-width: 100%;
  padding: 16px;
  box-sizing: border-box;
}
.info {
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid gray;
  margin: 16px 0;
  text-align: left;
}
.record {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(268px, 1fr));
  align-items: center;
  justify-items: center;
}
.label {
  color: gray;
  font-size: 16px;
  margin: 16px 0 4px 8px;
  text-align: left;
}
.value {
  margin: 0 8px;
  font-size: 20px;
  text-align: left;
}
div.release {
  margin: 8px 0;
  text-align: left;
}
h3 {
  margin: 24px 0 16px 0;
}
h3:first-of-type {
  margin-top: 8px;
}
</style>
