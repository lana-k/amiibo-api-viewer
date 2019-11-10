<template>
  <div class="page">
    <div class="page-content">
      <h1>Category: {{ $route.params.type }}</h1>
      <paginator v-if="pageAmount > 1" :pageAmount="pageAmount" v-model="currentPage"></paginator>
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
      <paginator v-if="pageAmount > 1" v-show="!loading" :pageAmount="pageAmount" v-model="currentPage"></paginator>
    </div>
  </div>
</template>

<script  lang="ts">
import Vue from 'vue'
import Record from '@/components/Record.vue'
import Paginator from '@/components/Paginator.vue'
import { API } from '../service'

/**
  * Category page.
  *
  * @remarks
  * Shows 10 records of selected category.
  */
export default Vue.extend({
  name: 'Home',
  data () {
    return {
      records: [],
      loading: false,
      currentPage: 1,
      pageAmount: 0
    }
  },
  watch: {
    currentPage: function () {
      if (this.$route.query.page !== this.currentPage.toString()) {
        this.$router.push({
          name: 'category',
          query: {
            page: this.currentPage.toString()
          }
        })
      }
    },
    $route: 'fetchData'
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.records = []
      this.currentPage = Number(this.$route.query.page || 1)
      let params: object = {
        type: this.$route.params.type
      }
      this.loading = true
      API.getEntries(params)
        .then(
          (data) => {
            this.pageAmount = Math.floor(data.amiibo.length / 10) + (data.amiibo.length % 10 === 0 ? 0 : 1)
            let start: number = (this.currentPage - 1) * 10
            let end: number = (this.currentPage - 1) * 10 + 10
            this.records = data.amiibo.slice(start, end)
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
    Record,
    Paginator
  }
})
</script>
