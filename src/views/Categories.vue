<template>
  <div class="page">
    <div class="page-content">
      <h1>Categories</h1>
      <span class="loading" v-if="loading">Loading categories...</span>
      <ul>
        <li v-for="(category, index) in categories" :key="index">
          <router-link :to="`/categories/${category.name}`">{{ category.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { API } from '../utils'

export default Vue.extend({
  name: 'Categories',
  data () {
    return {
      categories: [],
      loading: false
    }
  },
  created () {
    this.loading = true
    API.getcategories()
      .then(
        (data) => {
          this.categories = data.amiibo
          this.loading = false
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

<style scoped>
ul {
  padding: 0px;
  list-style: none;
}
li {
  margin: 8px;
  font-size: 20px;
}
</style>
