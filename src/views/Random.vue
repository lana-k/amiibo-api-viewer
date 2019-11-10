<template>
  <div class="page">
    <div class="page-content">
      <span class="loading" v-if="loading">Loading random item...</span>
      <br>
      <item
        :amiiboSeries="record.amiiboSeries"
        :character="record.character"
        :gameSeries="record.gameSeries"
        :image='record.image'
        :release='record.release'
        :type='record.type'
        :name='record.name'>
      </item>
      <button @click='getRandom'>Get another random item</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Item from '@/components/Item.vue'
import { API } from '../service'

/**
  * Random page.
  *
  * @remarks
  * Shows details of a random item and provide an oportunity to get another random button.
  */
export default Vue.extend({
  name: 'Random',
  data () {
    return {
      record: {
        amiiboSeries: '',
        character: '',
        gameSeries: '',
        image: true,
        name: '',
        release: {},
        type: '',
        head: '',
        tail: ''
      },
      loading: false
    }
  },
  created () {
    if (this.$store.state.records.length === 0) {
      this.fetchData()
    } else {
      this.getRandom()
    }
  },
  methods: {
    /**
    * Gets random item.
    *
    * @remarks
    * Gets random item and save it in `record`.
    */
    fetchData () {
      this.loading = true
      API.getEntries()
        .then(data => {
          this.record = data.amiibo
          this.loading = false
          this.$store.commit('saveRecords', data.amiibo)
          this.getRandom()
        })
        .catch(function (err) {
          console.log('Fetch error', err)
        })
    },
    getRandom () {
      let index: number = Math.floor(Math.random() * this.$store.state.records.length)
      this.record = this.$store.state.records[index]
      window.scrollTo(0, 0)
    }
  },
  components: {
    Item
  }
})
</script>

<style scoped>
button {
  height: 48px;
  background-color: #E65540;
  color: #fff;
  border-style: none;
  border-radius: 5px;
  margin: 0px 32px 32px 32px;
}
button:hover {
  background-color: #b82a14;
}
.page-content {
  text-align: center;
}
</style>
