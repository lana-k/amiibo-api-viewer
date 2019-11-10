<template>
  <footer>
    <div class="footer-content">
      <div class="footer-column">
        <h3><router-link to="/">HOME</router-link></h3>
      </div>
      <div class="footer-column">
        <h3><router-link to="/categories">CATEGORIES</router-link></h3>
          <ul>
            <li v-for="(category, index) in categories" :key="index">
              <router-link :to="`/categories/${category.name}`">{{ category.name }}</router-link>
            </li>
          </ul>
      </div>
      <div class="footer-column">
        <h3><router-link to="/random">RANDOM</router-link></h3>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { API, getCachedCategories } from '../service'

/**
  * Footer.
  *
  * @remarks
  * Shows a generated sitemap.
  */
export default Vue.extend({
  name: 'MyFooter',
  data () {
    return {
      categories: []
    }
  },
  created () {
    getCachedCategories()
      .then(
        (data) => {
          this.categories = data.amiibo
        }
      )
      .catch(
        function (err) {
          console.error('Fetch error', err)
        }
      )
  }
})
</script>

<style scoped>

footer {
  background-color: #636363;
  color: #fff;
  display: grid;
  grid-template-columns: auto minmax(320px, 640px) auto ;
  grid-row-start: 2;
  grid-row-end: 3;
}
.footer-content {
  grid-column-start: 2;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-items: center;
}
.footer-column {
  padding: 8px;
  box-sizing: border-box;
}
a {
  color: #fff;
}
ul {
  padding: 0;
  list-style: none;
}
li {
  margin: 8px;
}
h3 {
  font-size: 16px;
}
@media (max-width: 340px){
  h3 {
    font-size: 15px;
  }
}
</style>
