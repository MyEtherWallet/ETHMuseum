<template>
    <div class='footer-container'>
        <p>© 2021 MyEtherWallet. All rights reserved.</p>

    </div>
</template>



<script>
export default {
    name: 'Footer'
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

.footer-container{
    font-family: 'Roboto';
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #0b2840;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: #05c0a5;
    font-size: 14px;
}

</style>