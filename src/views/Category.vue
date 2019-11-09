<template>
  <div class="page">
    <div class="page-content">
      <h1>Category: {{ $route.params.type }}</h1>
      <span v-if="loading">Loading items...</span>
       <div class='list'>
         <record
         v-for="(record, index) in records"
         :key="index"
         :id="record.head + record.tail"
         :image="record.image"
         :name="record.name"
         >
        </record>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import Vue from 'vue'
import Record from '@/components/Record.vue'
import { API } from '../utils'

export default Vue.extend({
  name: 'Home',
  data () {
    return {
      records: [],
      loading: false
    }
  },
  watch: {
    $route: 'fetchData'
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.records = []
      let params: object = {
        type: this.$route.params.type
      }
      this.loading = true
      API.getEntries(params)
        .then(
          (data) => {
            this.records = data.amiibo.slice(1, 10)
            this.loading = false
          }
        )
        .catch(
          function (err) {
            console.log('Fetch error', err)
          }
        )
    }
  },
  components: {
    Record
  }
})
</script>
