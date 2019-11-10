<template>
  <div>
    <button @click="goToPrev()" :disabled="isPrevDisabled">Prev</button>
    <span>{{ currentPage }}</span>
    <button @click="goToNext()" :disabled="isNextDisabled">Next</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

/**
  * Paginator.
  */
export default Vue.extend({
  name: 'Paginator',
  data () {
    return {
      currentPage: this.value
    }
  },
  watch: {
    value: function () {
      this.currentPage = this.value
    }
  },
  computed: {
    isNextDisabled: function (): boolean {
      return this.currentPage >= this.pageAmount
    },
    isPrevDisabled: function (): boolean {
      return this.currentPage === 1
    }
  },
  methods: {
    goToPrev () {
      this.currentPage--
      this.$emit('input', this.currentPage)
    },
    goToNext () {
      this.currentPage++
      this.$emit('input', this.currentPage)
    }
  },
  props: ['pageAmount', 'value']
})
</script>

<style scoped>
button {
  height: 32px;
  padding-left: 12px;
  padding-right: 12px;
  margin: 0px;
  background-color: #E65540;
  color: #fff;
  font-size: 16px;
  border: 1px solid #E65540;
  border-radius: 5px;
  cursor: pointer;
}
button:disabled {
  background-color: white;
  border: 1px solid gray;
  color: gray;
}
span {
  display: inline-block;
  min-width: 60px;
  text-align: center;
}
div {
  margin: 16px;
}
</style>
