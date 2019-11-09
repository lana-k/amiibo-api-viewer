<template>
  <div class="page">
     <div class="page-content">
       <span class="loading" v-if="loadingDetails">Loading details...</span>
       <item
         :amiiboSeries="record.amiiboSeries"
         :character="record.character"
         :gameSeries="record.gameSeries"
         :image='record.image'
         :release='record.release'
         :type='record.type'
         :name='record.name'>
       </item>
       <h2>You may be interested in:</h2>
       <span class="loading" v-if="loadingRelevant">Loading items...</span>
       <div class='list'>
         <record
           v-for="(record, index) in otherRelevantRecords"
           :key="index"
           :id="record.head + record.tail"
           :image="record.image"
           :name="record.name"
         ></record>
       </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Item from '@/components/Item.vue'
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
      head: string;
      tail: string;
    }

export default Vue.extend({
  name: 'Details',
  data () {
    return {
      record: {
        amiiboSeries: '',
        character: '',
        gameSeries: '',
        image: true,
        name: '',
        release: '',
        type: '',
        head: '',
        tail: ''
      },
      otherRelevantRecords: [],
      loadingDetails: false,
      loadingRelevant: false
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
      this.loadingDetails = true
      API.getEntries(this.$route.query)
        .then(data => {
          this.record = data.amiibo
          this.loadingDetails = false
          this.fetchRelevantRecords(this.record.type, this.record.gameSeries, this.record.head + this.record.tail)
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
    fetchRelevantRecords (category: string, gameSeries:string, id: string) {
      let params = { type: category, gameSeries: gameSeries }
      this.loadingRelevant = true
      API.getEntries(params)
        .then(data => {
          this.otherRelevantRecords = data.amiibo.filter(
            (record: Record) => id !== record.head + record.tail
          ).slice(0, 3)
          this.loadingRelevant = false
        })
        .catch(function (err) {
          console.log('Fetch error', err)
        })
    }
  },
  components: {
    Item,
    Record
  }
})
</script>
<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</style>
