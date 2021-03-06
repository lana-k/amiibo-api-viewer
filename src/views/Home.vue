<template>
  <div class="page">
    <div class="page-content">
      <select v-model="order">
        <option value="asc">Sort by name: ascending</option>
        <option value="desc">Sort by name: descending</option>
      </select>
      <paginator :pageAmount="pageAmount" v-model="currentPage"></paginator>
      <br>
      <span class="loading" v-show="loading">Loading items...</span>
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
      <paginator v-show="!loading" :pageAmount="pageAmount" v-model="currentPage"></paginator>
    </div>
  </div>
</template>

<script  lang="ts">
import Vue from 'vue'
import Record from '@/components/Record.vue'
import Paginator from '@/components/Paginator.vue'
import { Amiibo } from '../service'

interface Record {
      amiiboSeries: string;
      character: string;
      gameSeries: string;
      image: string;
      name: string;
      release: object;
      type: string;
    }

/**
 * Home page.
 *
 * @remarks
 * Shows 10 records per page and provide an oportunity to sort them by name.
 */
export default Vue.extend({
  name: 'Home',
  data () {
    return {
      records: [],
      order: 'asc',
      loading: false,
      currentPage: 1,
      pageAmount: 0
    }
  },
  watch: {
    order: function () {
      if (this.$route.query.order !== this.order.toString()) {
        this.$router.push({ name: 'home', query: { order: this.order, page: '1' } })
      }
    },
    currentPage: function () {
      if (this.$route.query.page !== this.currentPage.toString()) {
        this.$router.push({
          name: 'home',
          query: {
            order: this.order,
            page: this.currentPage.toString()
          }
        })
      }
    },
    $route: 'fetchRecords'
  },
  created () {
    this.fetchRecords()
  },
  methods: {
    /**
     * Gets a list of items from Amiibo service.
     *
     * @remarks
     * Gets a sorted list of items from Amiibo service and calculates the total of pages.
     */
    fetchRecords () {
      this.records = []
      this.order = String(this.$route.query.order || 'asc')
      this.currentPage = Number(this.$route.query.page || 1)
      this.loading = true
      Amiibo.getEntries()
        .then(
          (data) => {
            this.pageAmount = Math.floor(data.amiibo.length / 10) + (data.amiibo.length % 10 === 0 ? 0 : 1)
            this.$store.commit('saveRecords', data.amiibo)
            this.update(this.order, this.currentPage)
            this.loading = false
          }
        )
        .catch(
          function (err) {
            console.error('Fetch error', err)
          }
        )
    },
    /**
     * Sorts the list of items in the store.
     *
     * @param order - The name of the order `asc` (ascending) or `desc` (descending)
     * @returns A sorted copy of the item list from the store.
     */
    sort (order: string): [] {
      let temp: [] = this.$store.state.records.slice()
      if (order === 'desc') {
        return temp.sort((a: Record, b: Record): number => {
          if (a.name < b.name) return 1
          else if (a.name === b.name) return 0
          else return -1
        })
      } else {
        return temp.sort((a: Record, b: Record): number => {
          if (a.name > b.name) return 1
          else if (a.name === b.name) return 0
          else return -1
        })
      }
    },
    /**
     * Gets a selected range of items from sorted list from the store.
     *
     * @param order - The name of the order `asc` (ascending) or `desc` (descending)
     * @param page - The number of selected page
     */
    update (order: string, page: number) {
      let start: number = (this.currentPage - 1) * 10
      let end: number = (this.currentPage - 1) * 10 + 10
      this.records = this.sort(order).slice(start, end)
    }
  },
  components: {
    Record,
    Paginator
  }
})
</script>

<style scoped>
select {
  display: inline-block;
  height: 48px;
  border-radius: 5px;
  padding: 8px;
  background-color: white;
  cursor: pointer;
}
select:focus {
  outline-width: 0;
}
</style>
