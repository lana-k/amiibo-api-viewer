<template>
  <div id="app">
    <header>
      <div>
        <button @click="$router.push('/')">
          Home
        </button>
        <button @click="$router.push('/categories')">
          Categories
        </button>
        <button @click="$router.push('/random')">
          Random
        </button>
      </div>
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
  text-align: center;
}
header div {
  display: inline-block;
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
  display: grid;
  grid-template-columns: auto minmax(320px, 640px) auto;
}
.page-content {
  grid-column-start: 2;
  text-align: center;
}
button {
  height: 56px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: #E65540;
  color: #fff;
  border-style: none;
}
button:hover {
  background-color: #b82a14;
}
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
</style>
