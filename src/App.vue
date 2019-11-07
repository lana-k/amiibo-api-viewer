<template>
  <div id="app">
    <header>
      <button @click="$router.push('/')">
        Home
      </button>
      <button @click="$router.push('/categories')">
        Categories
      </button>
      <button @click="$router.push('/random')">
        Random
      </button>
    </header>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MyFooter
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  margin: 0px;
  height: 100%;
}
header {
  height: 56px;
  width: 100%;
  background-color: #E65540;
  position:fixed;
  top: 0px;
  left: 0px;
}

#app {
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.page {
  margin-top: 72px;
}
</style>
