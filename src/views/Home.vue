<template>
  <div class="page">
  <select v-model="order">
    <option value="asc">Sort by name ascending</option>
    <option value="desc">Sort by name descending</option>
  </select>
   <paginate
      :page-count="20"
      :click-handler="sort"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :page-range="1"
      page-class="pageItem"
      prev-class="prevButton"
      next-class="nextButton"
      container-class='pager'>
    </paginate>
    <ul>
      <li
      v-for="(record, index) in records"
      :key="index"
      @click="$router.push({
        path:'/details',
        query: { id: record.head + record.tail}
        })"
      >{{record.name}}</li>
    </ul>
  </div>
</template>

<script  lang="ts">
import Vue from 'vue'
import { API } from '../utils'

const Paginate = require('vuejs-paginate')
Vue.component('paginate', Paginate)

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
  }
})
</script>

<style>
.pageItem {
  display: inline;
  padding: 6px 12px;
  background-color: #f7f7f7;
  border: 1px solid red;
  border-left-width: 0px;
  text-align: center;
  position: relative;
  float: left;
}
.prevButton {
  display: inline;
  padding: 6px 12px;
  background-color: #f7f7f7;
  border: 1px solid red;
  text-align: center;
  position: relative;
  float: left;
}
.nextButton {
  display: inline-block;
  padding: 6px 12px;
  background-color: #f7f7f7;
  border: 1px solid red;
  border-left-width: 0px;
  text-align: center;
  position: relative;
  float: left;
}
.pager{
  padding: 0px;
  z-index: 2;
}
</style>
