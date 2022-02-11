<template>
<div>
    <Main @blockItemInfo="blockItem"/>
    <div v-if="isEditModalActive == true" class='modal-background' @click="closeModal"></div>
    <form v-if="isEditModalActive == true" action="submit">
        <div @click="closeModal" class='close-x'>&times;</div>
        <h1>Edit Description For: <span class='modal-block-number'> {{ blockItem.meta.name }} </span></h1>
        <input :placeholder="blockItem.meta.description"/>
        <button>Submit</button>
    </form>
</div>
</template>

<script>
import Main from '@/components/Main.vue'

export default {
    name: 'EditModal',
    components:{Main},
    props: ['blockItemInfo'],
    data() {
        return {
            isEditModalActive: false,
            blockItem: null,
        }
    },
    methods: {
        editDescription(blockItemInfo) {
            this.blockItem = blockItemInfo;
            this.isEditModalActive = true;
            console.log(this.blockItem)
        },
        closeModal() {
            this.isEditModalActive = false
        },
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

html,
body,
h1,
#main-box-container {
    font-family: 'Roboto';
}

p {
    font-size: 14px;
    color: #939fb9;
}

form {
    position: fixed;
    max-width: 80%;
    height: 180px;
    top: 50%;
    left: 50%;
    padding: 20px 20px;
    transform: translate(-50%, -50%) scale(1);
    border: 0.5px solid rgba(175, 175, 175, 0.115);
    border-radius: 20px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.32);
    background-color: white;
    z-index: 10;
    transition: 300ms ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
.close-x{
    position: absolute;
    top: 2.5%;
    right: 3%;
    width: 100%;
    cursor: pointer;
    text-align: right;
    font-size: 24px;
}
.close-x:hover{
    color:#0bd9ba;
}
h1{
        color: #343d53;
    font-size: 13px;
}
input {
    width: 510px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #D7DAE3;
    padding-left: 8px;
    border-radius: 8px;
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
    width: 140px;
    height: 35px;
    border-radius: 8px;
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
.modal-block-number{
    color: #05c0a5;
}

.modal-background {
    opacity: 1;
    position: fixed;
    /* Stay in place */
    z-index: 9;
    /* Sit on top */
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
    transition: 300ms ease-in-out;
    pointer-events: all;
}
</style>
