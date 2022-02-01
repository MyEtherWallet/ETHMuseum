<template>
    <div id='nav-container'>
        <div class='left-of-nav'>
            <div class='logo-block'>
                <h1>ETH Blocks</h1>
                <p><em>Own a piece of Ethereum History</em></p>
            </div>
        </div>
        <div class='mid-of-nav'>
            <a href="#">All minted blocks</a>
            <a href="#">Blocks with comments</a>
            <a href="#">Most liked</a>
        </div>
        <div class='right-of-nav'>
            <input type="text" placeholder="Block number, hash or comment.."/>
            <button>Search</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Nav',
}
</script>

<style scoped>
    #nav-container {
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #F2F3F6;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.046);;
        display: flex;
        flex-direction: row;
        justify-content:space-evenly;
        align-items: center;
        padding-bottom: 10px;
    }
    .left-of-nav{
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .logo-block {
        width: 300px;
        height: 100%;
        color: gray;
    }
    .left-of-nav h1{
        color: #05C0A5;
    }
    .left-of-nav p{
        color: #192133;
    }
    .mid-of-nav{
        width: 33%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 15.7px;
    }
    .mid-of-nav a {
        text-decoration: none;
        color: #05C0A5;
    }
    .mid-of-nav a:hover {
        transition: ease-in-out 200ms;
        cursor: pointer;
        color: #0bd9ba;
    }
    .right-of-nav{
        width: 22%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
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
