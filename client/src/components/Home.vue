<template>
<div class='home-container'>
    <NavOne />
    <MintBox />
    <NavTwo />
</div>
</template>

<script>
import NavOne from '../components/NavOne.vue';
import NavTwo from '../components/NavTwo.vue';
import MintBox from '../components/MintBox.vue';

export default {
    name: 'Home',
    components: {
        NavOne,
        NavTwo,
        MintBox
      
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
