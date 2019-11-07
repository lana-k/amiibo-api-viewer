<template>
  <div class="page">
    <h1>Items in {{ $route.params.type }}</h1>
     <ul>
      <li
      v-for="(record, index) in records"
      :key="index"
      @click="$router.push({
        path:'/details',
        query: { id: record.head + record.tail}
        })"
      >{{record.name}}</li>
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
      type: this.$route.params.type
    }
    API.getEntries(params)
      .then(
        (data) => {
          this.records = data.amiibo
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
