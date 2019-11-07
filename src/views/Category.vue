<template>
  <div class="page">
    <h1>Items in {{ $route.params.name }}</h1>
    <ul>
      <li
      v-for="(record, index) in records"
      :key="index"
      @click="$router.push({
        path:'/details',
        query: { title: record.API }
        })"
      >{{record.API}}</li>
    </ul>
  </div>
</template>

<script  lang="ts">
import Vue from 'vue'
import { API } from '../utils'

export default Vue.extend({
  name: 'Home',
  data () {
    return {
      records: null
    }
  },
  created () {
    let params = {
      category: this.$route.params.name
    }
    API.getEntries(params)
      .then(
        (data) => {
          this.records = data.entries.slice(0, 10)
          console.log(data)
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
