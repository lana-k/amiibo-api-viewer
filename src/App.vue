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
  </div>
</template>

<style>

body {
  margin: 0px;
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
