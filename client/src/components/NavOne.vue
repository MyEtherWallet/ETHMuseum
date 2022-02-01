<template>
    <div id='nav-container'>
        <div class='mid-of-nav'>
            <div class='logo-block'>
                <h1>ETH Museum</h1>
                <p class='slogan'><em>Own a piece of Ethereum History</em></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavOne',
}
</script>

<style scoped>
    #nav-container {
        width: 100%;
        height: 60px;
        background-color: #FFFFFF;
        border-bottom: 1px solid #F8F9FB;
        /* box-shadow: 5px 5px 10px rgba(100, 100, 100, 0.062);; */
        display: flex;
        flex-direction: row;
        justify-content:space-evenly;
        align-items: center;
        padding-bottom: 10px;
    }
    .logo-block {
        width: 450px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .mid-of-nav h1{
        color: #05C0A5;
    }
    .mid-of-nav p{
        color: #5A678A;
        font-size: 14px;
    }
    .mid-of-nav{
        width: 33%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 15.7px;
    }
    input {
        width: 280px;
        height: 31px;
        border-radius: 10px;
        border: 1px solid #D7DAE3;
        padding-left: 8px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        color: #192133;
    }
    input::placeholder{
        color: #939FB9;
        opacity: 0.7;
    }
    button {
        width: 80px;
        height: 35px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border: none;
        background-color: #05c0a5;
        color: white;
    }
    button:hover{
        transition: ease-in-out 200ms;
        cursor: pointer;
        background-color: #0bd9ba;
    }

</style>
