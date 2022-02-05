<template>
<div id='nav-container'>
    <div class='left-of-nav'>
        <a href="#">All minted blocks</a>
        <a href="#">Blocks with comments</a>
        <a href="#">Most liked</a>
        <div>
            <input v-model="blockSearchInput" @input="searchAttempt" type="text" placeholder="Block # or hash.." />
            <button @click="submitSearch">Search Block</button>
        </div>
    </div>
    <div class='right-of-nav'>
    </div>
</div>
</template>


<script>
export default {
    name: 'NavOne',
    data() {
        return {
            initData: '',
            blockSearchInput: '',
            blockSearchSubmit: '',
            searchError: ''
        }
    },
    methods: {
        searchAttempt(e) {
            this.blockSearchInput = e.target.value;
        },
        submitSearch(e) {
            e.preventDefault();
            this.blockSearchSubmit = this.blockSearchInput;
            this.$emit('blockWasSearched', this.blockSearchInput);
            this.blockSearchInput = '';
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

html,
body,
#nav-container {
    font-family: 'Roboto';
}

#nav-container {
    width: 100%;
    height: 50%;
    border: none;
    box-shadow: 5px 5px 10px rgba(100, 100, 100, 0.108);
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.left-of-nav {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 7.2%;
}

.left-of-nav a {
    text-decoration: none;
    color: #05C0A5;
    font-size: 14px;
}

.left-of-nav a:hover {
    transition: ease-in-out 200ms;
    cursor: pointer;
    color: #4B83E8;
}

.right-of-nav {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

input {
    width: 210px;
    height: 31px;
    border-radius: 10px;
    border: 1px solid #D7DAE3;
    padding-left: 8px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right: none;
    color: #192133;
}

input:focus {
    color: #0b1a40;
    outline: none;
}

input::placeholder {
    color: #939FB9;
    opacity: 0.7;
    font-size: 12px;
}

button {
    width: 100px;
    height: 35px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border: none;
    background-color: #05c0a5;
    color: white;
    font-size: 12px;
}

button:hover {
    transition: ease-in-out 200ms;
    cursor: pointer;
    background-color: #0bd9ba;
}
</style>
