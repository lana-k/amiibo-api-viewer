<template>
  <div class="page">
    <div class="page-content">
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
</template>

<script  lang="ts">
import Vue from 'vue'
import Record from '@/components/Record.vue'
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
  },
  components: {
    Record
  }
})
</script>

<style>
.pageItem {
  display: block;
  background-color: #f7f7f7;
  border: 1px solid red;
  border-left-width: 0px;
  float:left;
  box-sizing: border-box;
}
.pageItem > a {
  padding: 6px 12px;
  display: block;
  cursor: pointer;
}
.prevButton {
  display: block;
  background-color: #f7f7f7;
  border: 1px solid red;
  float:left;
}
.prevButton > a {
  padding: 6px 12px;
  display: block;
  cursor: pointer;
}
.nextButton {
  display: inline-block;
  background-color: #f7f7f7;
  border: 1px solid red;
  border-left-width: 0px;
  /* float:left; */
}
.nextButton > a {
  padding: 6px 12px;
  display: block;
  cursor: pointer;
}
.pager{
  padding: 0px;
  margin: auto;
  display: block;
}
</style>
