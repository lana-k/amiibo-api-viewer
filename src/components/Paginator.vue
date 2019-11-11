<template>
  <div>
    <button @click="goToPrev()" :disabled="isPrevDisabled">Prev</button>
    <span>{{ currentPage }}/{{ pageAmount }}</span>
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
    /**
    * Gets called when the user clicks on the Prev button
    *
    * @remarks
    * Decreases the number of the current page and emit `input` event
    */
    goToPrev () {
      this.currentPage--
      this.$emit('input', this.currentPage)
    },
    /**
    * Gets called when the user clicks on the Next button
    *
    * @remarks
    * Increases the number of the current page and emit `input` event
    */
    goToNext () {
      this.currentPage++
      this.$emit('input', this.currentPage)
    }
  },
  props: [
    /**
    * Total of pages
    */
    'pageAmount',
    /**
    * Value of the component in the v-model
    */
    'value']
})
</script>

<style scoped>
button {
  height: 32px;
  padding-left: 12px;
  padding-right: 12px;
  margin: 0;
  background-color: #E65540;
  color: white;
  font-size: 16px;
  border: 1px solid #E65540;
  border-radius: 5px;
  cursor: pointer;
}
button:disabled {
  background-color: white;
  border: 1px solid gray;
  color: gray;
  cursor: default;
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
