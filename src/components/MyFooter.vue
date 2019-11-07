<template>
  <footer >
    <ul>
      <li v-for="(category, index) in categories" :key="index">
        <router-link :to="`/categories/${category}`">{{ category }}</router-link>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { API } from '../utils'

export default Vue.extend({
  name: 'MyFooter',
  data () {
    return {
      categories: []
    }
  },
  created () {
    API.getcategories()
      .then(
        (data) => {
          this.categories = data
        }
      )
      .catch(
        function (err) {
          console.log('Fetch error', err)
        }
      )
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

footer {
  background-color: #636363;
  color: #fff;
  grid-row-start: 2;
  grid-row-end: 3;
}
a {
  color: #fff;
}

</style>
