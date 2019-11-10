<template>
  <div id="app">
    <header>
      <div>
        <button :class="isActive('home') ? 'active' : ''" @click="$router.push({ name: 'home' })">
          HOME
        </button>
        <button :class="isActive('categories') ? 'active' : ''" @click="$router.push({ name: 'categories' })">
          CATEGORIES
        </button>
        <button :class="isActive('random') ? 'active' : ''" @click="$router.push({ name: 'random' })">
          RANDOM
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

export default Vue.extend({
  name: 'App',
  methods: {
    isActive (path: string): boolean {
      return (this.$route.name === path)
    }
  },
  components: {
    MyFooter
  }
})
</script>

<style>
html {
  height: 100%;
  overflow-y: scroll;
}
body {
  margin: 0;
  height: 100%;
}
header {
  height: 56px;
  line-height: 56px;
  width: 100%;
  background-color: #E65540;
  position:fixed;
  top: 0;
  left: 0;
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
  height: 32px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: #E65540;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-style: none;
  margin-left: 8px;
  cursor: pointer;
}
button:first-of-type {
  margin-left: 0px;
}
button:focus {
  outline-width: 0px;
}
.active, 
button:hover {
  background-color: #fff;
  border-radius: 5px;
  color: #b82a14;
}
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
.loading {
  display: inline-block;
  margin: 16px;
}
@media (min-height: 800px) and (min-width: 800px){
  header {
    height: 112px;
    line-height: 112px;
  }
  .page {
    margin-top: 128px;
  }
}
@media (max-width: 340px){
  button {
    font-size: 15px;
  }
}
</style>
