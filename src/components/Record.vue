<template>
  <div class='record' @click="$router.push({ name:'details', query: { id: id } })">
    <img :src="image">
    <h2>{{ name }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Amiibo } from '../service'

/**
 * Record displayed in lists.
 */
export default Vue.extend({
  name: 'Record',
  props: [
    /**
     * Id of the item.
     */
    'id',
    /**
     * Image of the item.
     */
    'image',
    /**
     * Name of the item.
     */
    'name'
  ]
})
</script>

<style scoped>
div {
  border: 1px solid gray;
  margin: 16px;
  cursor: pointer;
}
img {
  max-height: 50vh;
  max-width: 100%;
  padding: 16px;
  box-sizing: border-box;
}
h2 {
  padding: 0 16px;
}
.record {
  display: grid;
  grid-template-rows: 1fr auto;
  align-items: center;
  justify-items: center;
}
</style>
