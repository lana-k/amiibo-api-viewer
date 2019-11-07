<template>
  <div class="page">
    <h1>{{ record.API }}</h1>
    <div v-if="record.Auth">Auth: {{ record.Auth }}</div>
    <p>{{ record.Description }}</p>
    <div>Category: {{ record.Category }}</div>
    <a :href="record.Link">Link</a>
    <button @click='fetchData'>Get another random item</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { API } from '../utils'

export default Vue.extend({
  name: 'Random',
  data () {
    return {
      record: {
        API: '',
        Auth: '',
        Description: '',
        HTTPS: true,
        Cors: '',
        Link: '',
        Category: ''
      }
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    /**
    * Gets random item.
    *
    * @remarks
    * Gets random item and save it in `record`.
    */
    fetchData () {
      API.getRandom()
        .then(data => {
          this.record = data.entries[0]
        })
        .catch(function (err) {
          console.log('Fetch error', err)
        })
    }
  }
})
</script>

<style scoped>
button {
  height: 48px;
  background-color: #E65540;
  color: #fff;
  border-style: none;
  border-radius: 5px;
}
button:hover {
  background-color: #b82a14;
}
</style>
