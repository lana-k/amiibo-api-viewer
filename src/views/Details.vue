<template>
  <div class="page">
    <h1>{{ record.API }}</h1>
    <div v-if="record.Auth">Auth: {{ record.Auth }}</div>
    <p>{{ record.Description }}</p>
    <div>Category: {{ record.Category }}</div>
    <a :href="record.Link">Link</a>

    You may be interested in:
    <ul>
      <li v-for="(record, index) in otherRelevantRecords" :key="index" @click="$router.push({path:'/details', query: { title: record.API } })">{{record.API}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { API } from '../utils'

interface Record {
      API: string;
      Auth: string;
      Description: string;
      HTTPS: boolean;
      Cors: string;
      Link: string;
      Category: string;
    }

export default Vue.extend({
  name: 'Details',
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
      },
      otherRelevantRecords: []
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    /**
    * Gets all data for the Details page.
    *
    * @remarks
    * First, gets details about the selected item and save it into `record`.
    * Then gets 3 items from the same category by calling `fetchRelevantRecords` method.
    */
    fetchData () {
      API.getEntries(this.$route.query)
        .then(data => {
          this.record = data.entries.filter(
            (record: Record) => record.API === this.$route.query.title
          )[0]
          this.fetchRelevantRecords(this.record.Category, this.record.API)
        })
        .catch(function (err) {
          console.log('Fetch error', err)
        })
    },
    /**
    * Gets relevant items.
    *
    * @remarks
    * Gets 3 items from the given category that not include the item with given title
    * and save them into `otherRelevantRecords`.
    *
    * @param category - The category of relevant items string
    * @param title - The title of the item that have to be ignored string
    *
    */
    fetchRelevantRecords (category: string, title: string) {
      let params = { category: category }
      API.getEntries(params)
        .then(data => {
          this.otherRelevantRecords = data.entries.filter(
            (record: Record) => record.API !== title
          ).slice(0, 3)
        })
        .catch(function (err) {
          console.log('Fetch error', err)
        })
    }
  }
})
</script>
