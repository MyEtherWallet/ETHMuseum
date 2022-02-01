<template>
  <Home />
</template>

<script>
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>

html, body, #app {
  height: 100%;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  margin-top: 10px;
}
</style>
