<template>
  <div class="page">
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

<script>
import { API } from '../utils.ts'

export default {
  name: 'Home',
  data () {
    return {
      records: null
    }
  },
  created () {
    API.getEntries()
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
}
</script>
