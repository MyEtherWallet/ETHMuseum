<template>
    <div id='mint-box-container'>
        <div class='left-of-mint-box-container'>
            <div class="mint-box">
                <h3>How does it work?</h3>
                <p>Notable Ethereum blocks are minted as NFTs by the community and displayed here. 
                    Comments are added by owners, and may or may not be accurate.</p>
                <button>Mint Your ETH Block</button>
            </div>
        </div>
        <div class='right-of-mint-box-container'>
                <p class='slogan'><em>Own a piece of Ethereum History</em></p>
        </div>
    </div>
</template>



<script>
export default {
    name: 'MintBox'
}
</script>


<style scoped>
    #mint-box-container{
        width: 100%;
        height: 250px;
        display: flex;
        justify-content: center;
       background: #06beb6;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #48b1bf, #06beb6);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #48b1bf, #06beb6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }
    .left-of-mint-box-container{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .mint-box{
        width: 50%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        border-radius: 10px;
        border: 4px solid #D4E1F9;
        box-shadow: 5px 5px 10px rgba(100, 100, 100, 0.425);
        background-color: white;
        font-size: 13px;
        padding: 20px;
        z-index: 1;
    }
    .mint-box h3 {
        height: 0px;
        color: #05C0A5;
    }
    .mint-box p {
        color: #5A678A;
        font-weight: 700;
    }
    .right-of-mint-box-container{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .block-logo {
        position: absolute;
        z-index: 0;
    }
    .right-of-mint-box-container p {
        font-size: 25px;
        color: #FFFF;
        z-index: 1;
    }
    button{
        width: 150px;
        height: 40px;
        border-radius: 8px;
        background: #3494E6;  
        background: -webkit-linear-gradient(to right, #EC6EAD, #3494E6);  
        background: linear-gradient(to right, #EC6EAD, #3494E6); 
        color: white;
        border: none;
        cursor: pointer;
        font-size: 12px;
    }
    button:hover{
        transition: ease-in-out 400ms;
        cursor: pointer;
        background-color: #3494E6;  
        background: -webkit-linear-gradient(to right, #eb8cbb, #8db9e0);  
        background: linear-gradient(to right, #eca3c8, #92bfe7); 
    }
</style>
