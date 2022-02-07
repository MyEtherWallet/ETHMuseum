<template>
<div>
    <div class='modal-background' ref='modalOverlay'></div>
    <div class='moreDetail-pop-up-modal' ref='modalPopup'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ratione sunt quis error natus sint, laudantium a nihil non voluptatibus corrupti?
    </div>

</div>
</template>

<script>
export default {
    name: 'DetailModal',
    data () {
        return {
            isModalActive: false
        }
    },
    methods: {
        moreDetails() {
            this.isModalActive = true;
            document.querySelector('.modal-background').classList.add('active')
            document.querySelector('.moreDetail-pop-up-modal').classList.add('active')
            // console.log(this.moreDetails())
        }
    },

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

.moreDetail-pop-up-modal {
        position: fixed;
        max-width: 80%;
        height: 520px;
        top: 50%;
        left: 50%;
        padding:20px 40px;
        transform: translate(-50%, -50%) scale(0);
        border:  0.5px solid rgba(175, 175, 175, 0.115);
        border-radius: 20px;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.32);
        background-color: white;;
        z-index: 10;
        transition:  300ms ease-in-out;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
}

.moreDetail-pop-up-modal.active {
    transform: translate(-50%, -50%) scale(1);
}

.modal-background {
        opacity: 0;
        position: fixed; /* Stay in place */
        z-index: 0; /* Sit on top */
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        transition:  300ms ease-in-out;
        pointer-events: none;
    }

.modal-background.active {
    opacity: 1;
    pointer-events: all;
}

.closeModalBox {
    position: fixed;
}
</style>
