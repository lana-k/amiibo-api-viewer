<template>
  <div class="page">
    <div class="page-content">
      <select v-model="order">
        <option value="asc">Sort by name ascending</option>
        <option value="desc">Sort by name descending</option>
      </select>
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

interface Record {
      amiiboSeries: string;
      character: string;
      gameSeries: string;
      image: string;
      name: string;
      release: object;
      type: string;
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
          this.records = data.amiibo.slice(0, 10)
          this.sort(this.order)
          this.$store.commit('saveRecords', data.amiibo)
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
          if (a.name > b.name) return 1
          else if (a.name === b.name) return 0
          else return -1
        })
      } else {
        this.records.sort((a: Record, b: Record): number => {
          if (a.name < b.name) return 1
          else if (a.name === b.name) return 0
          else return -1
        })
      }
    }
  },
  components: {
    Record
  }
})
</script>

<style>
select {
  display: inline-block;
  height: 48px;
}
</style>
