<template>
  <div class="page">
  <select v-model="order">
    <option value="asc">Sort by name ascending</option>
    <option value="desc">Sort by name descending</option>
  </select>
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
  name: 'Home',
  data () {
    return {
      records: [],
      order: 'asc'
    }
  },
  watch: {
    order: function () {
      this.sort(this.order)
    }
  },
  created () {
    API.getEntries()
      .then(
        (data) => {
          this.records = data.entries.slice(0, 10)
          this.sort(this.order)
        }
      )
      .catch(
        function (err) {
          console.log('Fetch error', err)
        }
      )
  },
  methods: {
    sort (order: string) {
      if (order === 'asc') {
        this.records.sort((a: Record, b: Record): number => {
          if (a.API > b.API) return 1
          else if (a.API === b.API) return 0
          else return -1
        })
      } else {
        this.records.sort((a: Record, b: Record): number => {
          if (a.API < b.API) return 1
          else if (a.API === b.API) return 0
          else return -1
        })
      }
    }
  }
})
</script>
