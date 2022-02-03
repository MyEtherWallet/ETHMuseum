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
import axios from 'axios';

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
    computed: {
        rules() {
            return [
                this.searchError === '' || this.searchError,
                (this.name && this.name.length > 2) ||
                this.$t('ens.warning.not-enough-char'),
                !this.hasInvalidChars || this.$t('ens.warning.invalid-symbol'),
                (this.name && this.name.split('.').length <= 2) ||
                this.$t('ens.warning.invalid-symbol')
            ];
        },
        hasInvalidChars() {
            const hash = /\b([0x]+[a-f0-9]{40})\b/;
            if (!hash.test(this.blockSearchSubmit)) {
                return true;
            }
            return false;
        },
    },
    mounted() {
        axios
            .get('https://ethereum-api.rarible.org/v0.1/nft/items/byCollection?collection=0x01234567bac6ff94d7e4f0ee23119cf848f93245&size=2000')
            .then(response => {
                this.initData = response.data.items;
                console.log(this.initData)
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    },
    methods: {
        searchAttempt(e) {
            this.blockSearchInput = e.target.value;
            // this.$emit('blockWasSearched', this.blockSearchInput);
            // console.log(this.blockSearchInput);
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
