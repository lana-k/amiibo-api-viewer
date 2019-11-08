<template>
  <div class="page">
    <h1>Items in {{ $route.params.type }}</h1>
      <record
      v-for="(record, index) in records"
      :key="index"
      :id="record.head + record.tail"
      :image="record.image"
      :name="record.name"
      >
    </record>
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
  },
  components: {
    Record
  }
})
</script>
