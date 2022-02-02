<template>
<div id='main-box-container'>
    <div class='left-of-main-box'>
        <div class="timeline-box">
            <!-- <div class="timeline-box-title">
                    <h1>View Our History</h1>
                </div> -->
            <div class='timeline-content'>
                <!-- <span class='timeline-span'></span> -->

                <section v-if="errored">
                    <p>We're sorry, we're unable to retrieve this information at the moment, please try again later</p>
                </section>
                <section v-else>
                    <div v-if="loading">Loading ETH Blocks...</div>

                    <div class='block-card' v-else v-for="block in blockInfo" v-bind:key="block">
                        <img class='paint' src='../assets/images/layered-peaks-haikei.svg' />
                        <div class='left-of-blockcard'>
                            <div class='block-pic-hugger'>
                                <img class='block-pic' :src="getImgUrl(block.meta.attributes[0].value)" v-bind:alt="pic" />
                            </div>
                            <div class='mint-date'>
                                <p>Minted: {{block.meta.attributes[2].value}}</p>
                            </div>
                        </div>
                        <div class='right-of-blockcard'>

                            <div class='card-title'>
                                <h2>
                                    {{block.meta.name}}
                                </h2>
                            </div>
                            <div class='card-owner-title'>
                                <p>
                                    Owned by: {{block.meta.attributes[3].value}}
                                </p>
                            </div>
                            <div class='comment-container'>
                                <p>
                                    {{block.meta.description}}
                                </p>
                            </div>
                            <div class='details-container'>
                                <h1>
                                    More info
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </div>
    <div class='right-of-main-box'>
        <img class='mew-icon' src='../assets/images/icon-mew-wallet.f29574d3.png' />
        <img class='mint-blob-block' src="../assets/images/block_img.png" alt="">
        <div class='pulse'></div>
        <div class="mint-box">
            <h3>How does it work?</h3>
            <p>Notable Ethereum blocks are minted as NFTs by the community and displayed here.
                Comments are added by owners, and may or may not be accurate.</p>
            <button>Mint Your ETH Block</button>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Main',
    data() {
        return {
            blockInfo: '',
            blockImg: '',
            blockInfoName: '',
            errored: false,
            loading: true
        }
    },
    mounted() {
        axios
            .get('https://ethereum-api.rarible.org/v0.1/nft/items/byCollection?collection=0x01234567bac6ff94d7e4f0ee23119cf848f93245&size=3')
            .then(response => {
                this.blockInfo = response.data.items;
                // console.log(this.blockInfo.meta)
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    },
    methods: {
        getImgUrl(blockNumber) {
            return ('https://ethblocksdata.mewapi.io/1/'+ blockNumber +'/image.png')
        }
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

html,
body,
h1,
#nav-container {
    font-family: 'Roboto';
}

#main-box-container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
}
/*=========================  LEFT OF MAIN BOX  ===============================================*/
/*=========================  LEFT OF MAIN BOX  ===============================================*/
.left-of-main-box {
    width: 57%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #F8F9FB;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
    z-index: 1;
    position: relative;
}

.left-of-main-box::-webkit-scrollbar {
    width: 0.3vw;
    background-color: white;
}

.left-of-main-box::-webkit-scrollbar-thumb {
    width: 0.3vw;
    border-radius: 10px;
    background-color: #E0E0E0;
}

.timeline-content {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    margin-top: 20px;
}

.block-card {
    width: 550px;
    height: 180px;
    border: none;
    display: flex;
    margin: 25px;
    background: #FFFF;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.226);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    /* border: 1px solid black; */
}

.timeline-span {
    height: 100%;
    z-index: -1;
    top: 0;
    left: 18%;
    position: absolute;
    border: 2px solid grey;
}

.paint {
    width: 100%;
    bottom: -70px;
    position: absolute;
    z-index: -1;
}

.left-of-blockcard {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid black; */
}

.mint-date {
    color: #F5A623;
    font-size: 11px;
    font-weight: 600;
    margin-top: -20px;
    /* border: 1px solid black; */
}

.right-of-blockcard {
    width: 70%;
    height: 100%;
    display: flex;
    text-align: flex-start;
    flex-direction: column;
    /* border: 1px solid black; */
}

.card-title {
    width: 100%;
    padding-top: 5px;
    font-size: 12px;
    text-align: left;
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
}

.card-owner-title {
    width: 100%;
    height: 30px;
    text-align: left;
    font-size: 12px;
    margin-top: -28px;
    color: #939FB9;
}

.comment-container {
    width: 100%;
    height:fit-content;
    font-size: 12px;
    text-align: left;
    /* border: 1px solid black; */
}

.details-container {
    width: 100%;
    height: 100%;
    display: flex;
    /* border: 1px solid black; */
}

.details-container h1 {
    font-size: 12px;
    font-weight: 700;
    margin:0;
    cursor: pointer;
}

.details-container h1:hover {
    color: #5A678A
}

.right-of-details-container {
    width: 50%;
    height: 100%;
    text-align: left;
    /* border: 1px solid black; */
}

.block-pic {
    width: 50px;
    height: 50px;
    z-index: 2;
}

.block-pic-hugger {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin: 20px;
    padding: 5px;
    z-index: 2;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.267);
}

/*=========================  RIGHT OF MAIN BOX  ===============================================*/
/*=========================  RIGHT OF MAIN BOX  ===============================================*/
.right-of-main-box {
    width: 43%;
    height: 100vh;
    display: flex;
    justify-content: center;
}

.mew-icon {
    width: 90px;
    height: 90px;
    position: absolute;
    top: 34%;
    z-index: 2;
    animation: minticonmove 2s linear infinite;
}

@keyframes minticonmove {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    25% {
        transform: translateY(0px) rotate(2deg);
        opacity: 1;
        border-radius: 0;
    }

    50% {
        transform: translateY(0px) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    75% {
        transform: translateY(0px) rotate(2deg);
        opacity: 1;
        border-radius: 0;
    }

    100% {
        transform: translateY(0px) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }
}

.mint-blob-block {
    width: 290px;
    height: 350px;
    top: 33%;
    border-radius: 50%;
    opacity: 0.6;
    position: absolute;
    /* box-shadow: 1px 1px 10px #05c0a40a; */
    z-index: 0;
}

.pulse {
    width: 90px;
    height: 90px;
    position: absolute;
    top: 34%;
    background: #05C0A5;
    filter: blur(0.2rem);
    margin: auto;
    border-radius: 50%;
    opacity: 0.2;
    z-index: -2;
    animation: pulse 2.0s ease-out infinite;
}

.pulse:before,
.pulse:after {
    content: '';
    position: absolute;
    height: 100%;
    height: 100%;
    background: #05C0A5;
    z-index: -2;
    opacity: 0.1;
}

@keyframes pulse {
    100% {
        transform: scale(4);
        opacity: 0;
    }
}

.mint-box {
    width: 60%;
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 0px 10px rgba(233, 233, 233, 0.911);
    background-color: white;
    font-size: 13px;
    padding: 15px;
    margin-top: 30%;
    z-index: 1;
}

.mint-box h3 {
    height: 5px;
    color: #05C0A5;
}

.mint-box p {
    color: #5A678A;
    font-weight: 700;
}

.right-of-mint-box-container {
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

button {
    width: 150px;
    height: 40px;
    border-radius: 8px;
    background: #3494E6;
    border: 1px solid #3494E6;
    background: -webkit-linear-gradient(to right, #EC6EAD, #3494E6);
    background: linear-gradient(to right, #EC6EAD, #3494E6);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 12px;
}

button:hover {
    transition: ease-in-out 400ms;
    cursor: pointer;
    background-color: #3494E6;
    background: -webkit-linear-gradient(to right, #eb8cbb, #8db9e0);
    background: linear-gradient(to right, #eca3c8, #92bfe7);
}
</style>
