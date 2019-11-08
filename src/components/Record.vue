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
  data () {
    return {
      categories: []
    }
  },
  created () {
    API.getcategories()
      .then(
        (data) => {
          this.categories = data.amiibo
        }
      )
      .catch(
        function (err) {
          console.log('Fetch error', err)
        }
      )
  },
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
}
.h1 {
  padding-left: 8px;
}
.record {
  display: grid;
  grid-template-columns: minmax(220px,160px) minmax(220px,480px);
  grid-template-rows: 1fr;
}
</style>
