<template>
<div class='home-container'>
    <Main />
    <Footer />
</div>
</template>

<script>
import Main from '@/components/Main.vue';
import Footer from '@/components/Footer.vue'

export default {
    name: 'Home',
    components: {
        Main,
        Footer
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

    .home-container{
    width: 100%;
    height: 100vh;
    }

h1 {
    font-family: 'Roboto';
    margin: 40px 0 0;
    font-size: 2.571rem;
    color: #05C0A5;

}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
