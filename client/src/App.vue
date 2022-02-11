<template>
<Main />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Main from './components/Main.vue'

export default defineComponent({
        name: 'App',
        components: {Main}
}

);
</script>

<style>
/* @import '@/assets/styles/GlobalStyles.scss'; */
html,
body,
#app {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    scroll-behavior: smooth;
}
</style>
