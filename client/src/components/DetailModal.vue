<template>
<div>
    <Main @blockItemInfo="blockItem" />

    <div v-if="isModalActive == true" class='modal-background' @click="closeModal"></div>
    <div v-if="isModalActive == true" class='moreDetail-pop-up-modal'>
        <h2>
            {{ blockItem.meta.name }}
        </h2>
        <p>Owned by: {{ blockItem.owners[0] }}</p>
        <div class="block-pic-hugger">
            <img class="block-pic" :src="getImgUrl(blockItem.meta.attributes[0].value)" />
        </div>
        <p>{{ blockItem.meta.attributes[0].value }} transactions</p>
        <p>{{ blockItem.meta.attributes[1].value }} gas</p>
        <p>{{ blockItem.meta.attributes[2].value }} uncles</p>
    </div>
</div>
</template>

<script>
import Main from '@/components/Main.vue'
export default {
    name: 'DetailModal',
    // @ts-ignore
    props: ['blockItemInfo'],
    comoponents: {
        Main
    },
    data() {
        return {
            isModalActive: false,
            blockItem: null
        }
    },
    methods: {
        moreDetails(blockItemInfo) {
            this.blockItem = blockItemInfo;
            this.isModalActive = true
            console.log(this.blockItem)
        },
        closeModal() {
            this.isModalActive = false
        },
        getImgUrl(blockNumber) {
            return "https://ethblocksdata.mewapi.io/1/" + blockNumber + "/image.png";
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

img {
    width: 250px;
    height: 250px;
}

.block-pic-hugger {
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin: 20px;
    padding: 5px;
    z-index: 2;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.437);
}

.moreDetail-pop-up-modal {
    position: fixed;
    max-width: 80%;
    height: 500px;
    top: 50%;
    left: 50%;
    padding: 30px 50px;
    transform: translate(-50%, -50%) scale(1);
    border: 0.5px solid rgba(175, 175, 175, 0.115);
    border-radius: 20px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.32);
    background-color: white;
    z-index: 10;
    transition: 300ms ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1px;
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

.closeModalBox {
    position: fixed;
}
</style>
