<template>
  <div class="page">
    <div class="page-content">
      <h1>Categories</h1>
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
  }
})
</script>
