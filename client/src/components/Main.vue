<template>
<div id='main-container'>
    <!--
                        ====================================================================================================
                            NAVIGATION BAR SECTION THAT PASSES PROPS BY AN EMITTED EVENT FROM CHILD COMPONENT AND SET AS A 
                            DATA PROPERTY WITHIN PARENT COMPONENT TO USE VIA THIS.BLOCKSEARCH
                        ====================================================================================================
                    -->
    <div id='nav-container-hugger'>
        <navOneApp />
        <navTwoApp @blockWasSearched="blockSearch = $event" class='nav-two' ref='nav-two-bar' />
    </div>

    <div id="main-content-container">
        <div class='left-of-main-box'>
            <!--
                        ====================================================================================================
                                            BLOCK CARD SEARCH CONDITIONAL RENDERING BEGINS
                        ====================================================================================================
                    -->
            <section v-if="errored">
                <p class='noDataMessage'>We're sorry, we're unable to retrieve block information at the moment, please try again later</p>
            </section>
            <div v-if="loading" class='loadMessage'>
                <blockCardSkeleton-app class='skeleton-load' />
                <blockCardSkeleton-app class='skeleton-load' />
                <blockCardSkeleton-app class='skeleton-load' />
            </div>
            <!--
                        ====================================================================================================
                            RUNS AN IF CHECK IF NOT LOADING AND IS TRUE RENDER BELOW ELSE... 
                        ====================================================================================================
                    -->

            <div class='block-card' v-else-if="!loading && searchedMultiple" v-for="block in blockItems" v-bind:key="block">
                <img class='paint' src='../assets/images/layered-peaks-haikei.svg' />
                <div class='left-of-blockcard'>
                    <div class='block-pic-hugger'>
                        <img class='block-pic' :src="getImgUrl(block.meta.attributes[0].value)" />
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
                            Owned by: {{block.owners[0]}}
                        </p>
                    </div>
                    <div class='comment-container'>
                        <p>
                            {{block.meta.description}}
                        </p>
                    </div>
                    <div class='details-container'>
                        <h1 @click="showMoreDetails">
                            More info
                        </h1>
                        <detailModal-app ref='detailModal'/>
                    </div>
                </div>
            </div>
            <!--
                        ====================================================================================================
                        IF IT'S NOT LOADING AND ALSO IS FALSE MEANING THE USER IS SEARCHING FOR "ONE" 
                        PARTICULAR BLOCK# OR HASH, IT WILL RENDER BELOW 
                        ====================================================================================================
                    -->
            <div class='block-card' v-else-if="!loading && !searchedMultiple">
                <img class='paint' src='../assets/images/layered-peaks-haikei.svg' />
                <div class='left-of-blockcard'>
                    <div class='block-pic-hugger'>
                        <img class='block-pic' :src="getImgUrl(this.blockInfo.meta.attributes[0].value)" />
                    </div>
                    <div class='mint-date'>
                        <p>Minted: {{this.blockInfo.meta.attributes[2].value}}</p>
                    </div>
                </div>
                <div class='right-of-blockcard'>

                    <div class='card-title'>
                        <h2>
                            {{this.blockInfo.meta.name}}
                        </h2>
                    </div>
                    <div class='card-owner-title'>
                        <p>
                            Owned by: {{this.blockInfo.owners[0]}}
                        </p>
                    </div>
                    <div class='comment-container'>
                        <p>
                            {{this.blockInfo.meta.description}}
                        </p>
                    </div>
                    <div class='details-container'>
                        <h1 @click="showMoreDetails">
                            More info
                        </h1>
                    </div>
                    <detailModal-app ref='detailModal' />
                </div>
            </div>
            <!--
            ====================================================================================================
                    THE AREA BELOW IS STRICTLY FOR THE INTERSECTION OBSERVER INCLUDING THE P TAGS
            ====================================================================================================
        -->
            <trigger-app @intersect="intersected" v-if="!loading && searchedMultiple" />
            <p></p>
        </div>
        <!--
            ====================================================================================================
                                        RIGHT SIDE OF MAIN CONTAINER
            ====================================================================================================
        -->
        <div class='right-of-main-box'>
            <img class='mew-icon' src='../assets/images/icon-mew-wallet.f29574d3.png' />
            <img class='mint-blob-block' src="../assets/images/block_img.png" alt="">
            <div class='pulse'></div>
            <div class="mint-box">
                <h3>How does it work?</h3>
                <p>Notable Ethereum blocks are minted as NFTs by the community and displayed here.
                    Comments are added by owners, and may or may not be accurate.</p>
                <a href="https://www.myetherwallet.com/wallet/dapps/eth-blocks/" target="_blank">
                    <button>Mint Your ETH Block</button>
                </a>
            </div>
        </div>
    </div>
    <footer-app class='footer' ref='footer' />
</div>
</template>

<script>
import NavOne from '@/components/NavOne.vue'
import NavTwo from '@/components/NavTwo.vue'
import Footer from '@/components/Footer.vue'
import Trigger from '@/components/Trigger.vue'
import DetailModal from '@/components/DetailModal.vue'
import BlockCardSkeleton from '@/components/BlockCardSkeleton.vue'
import axios from 'axios';

export default {
    name: 'Main',
    props: ['blockWasSearched', 'intersect'],
    components: {
        'navOneApp': NavOne,
        'navTwoApp': NavTwo,
        'footer-app': Footer,
        'trigger-app': Trigger,
        'blockCardSkeleton-app': BlockCardSkeleton,
        'detailModal-app': DetailModal
    },
    data() {
        return {
            blockSearch: '',
            blockInfo: [],
            blockList: [],
            blockItems: [],
            pageIncrement: 5,
            errored: false,
            loading: true,
            blockPage: null,
            searchedMultiple: true,
            searchedHash: false,
        }
    },
    computed: {
        /*
            ====================================================================================================
            THIS COMPUTED PROPERTY WILL SET A VARIABLE THAT WILL BE ON THE LOOK OUT FOR THE PROP BEING PASSED
            IN FROM CHILD COMPONENT AND RUN A CONDITIONAL AND EXECUTE BASED ON WHAT THE SEARCH CRITERIA WAS.
            ====================================================================================================
         */
        blockSearchLink() {
            const hash = /\b([0x]+[a-f0-9]{40})\b/;
            if (this.blockSearch == '') {
                return 'https://ethereum-api.rarible.org/v0.1/nft/items/byCollection?collection=0x01234567bac6ff94d7e4f0ee23119cf848f93245&size=10';
            } else if (hash.test(this.blockSearch)) {
                return 'https://ethereum-api.rarible.org/v0.1/nft/items/byOwner?owner=' + this.blockSearch;
            } else {
                return 'https://ethereum-api.rarible.org/v0.1/nft/items/0x01234567bac6ff94d7e4f0ee23119cf848f93245:' + this.blockSearch;
            }
        },
    },
    watch: {
        /*
            ====================================================================================================
            THIS WATCH PROPERTY WILL PASS IN DATA VIA NEWVAL THAT BECOMES THE WHAT WE GRAB THEN RUNS THE API CALL
            ONCE THAT PARAMETER IS PASSED, THEN SETS THE SEARCH MUTLIPLE STATE TO TRUE, WHICH THEN RENDERS THE PROPER BLOCK CARD
            ====================================================================================================
         */
        blockSearchLink(newVal) {
            this.loading = true;
            this.errored = false;
            axios
                .get(newVal)
                .then(response => {
                    if (response.data.items) {
                        this.blockInfo = response.data.items;
                        this.searchedMultiple = true;
                    } else {
                        this.blockInfo = response.data;
                        this.searchedMultiple = false;
                        // this.searchedHash = true
                    }
                    this.errored = false;
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        }
    },
    mounted() {
        /*
            ====================================================================================================
                                ON RENDER WE WANT TO RENDER "10" BLOCKS FOR NOW
            ====================================================================================================
         */
        axios
            .get('https://ethereum-api.rarible.org/v0.1/nft/items/byCollection?collection=0x01234567bac6ff94d7e4f0ee23119cf848f93245&size=100')
            .then(response => {
                this.blockInfo = response.data.items;
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    },
    methods: {
        /*
            ====================================================================================================
            THIS METHOD PASSES IN PARAMETERS WE'D  PASSS THROUGH INTO THE NEW API LINK TO FETCH 
            ====================================================================================================
         */
        getImgUrl(blockNumber) {
            return ('https://ethblocksdata.mewapi.io/1/' + blockNumber + '/image.png')
        },
        intersected() {
            // const querySize = this.pageIncrement + this.blockInfo.length
            axios
                .get('https://ethereum-api.rarible.org/v0.1/nft/items/byCollection?collection=0x01234567bac6ff94d7e4f0ee23119cf848f93245&size=' + this.pageIncrement)
                .then(response => {
                    this.pageIncrement += 5;
                    this.blockList = response.data.items;
                    this.blockItems = [...this.blockItems,...this.blockList]
                    console.log(this.blockItems)
                    // this.blockInfo.concat(this.blockList)
                    // this.blockInfo = [...this.blockList, ...this.blockList]
                    // this.blockInfo.concat(this.blockList.splice(this.blockInfo.length, this.blockInfo.length + pageIncrement - 1))
                    // console.log(this.blockItems)
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        },
    },
    showMoreDetails() {
        this.$refs.detailModal.moreDetails();
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

html,
body,
h1,
#main-box-container {
    font-family: 'Roboto';
}

#nav-container-hugger {
    width: 100%;
    height: 110px;
}

#main-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#main-content-container {
    width: 100%;
    height: 84.7%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.loadMessage {
    margin-top: 0;
}

.loading-more-msg {
    width: 80%;
    text-align: center;
}

.skeleton-load {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}

/*=========================  LEFT OF MAIN BOX  ===============================================*/
/*=========================  LEFT OF MAIN BOX  ===============================================*/
.left-of-main-box {
    width: 50%;
    height: 100%;
    background-color: #F8F9FB;
    overflow-y: scroll;
    scroll-behavior: smooth;
    padding-left: 8%;
    /* border: 1px solid black; */
}

.left-of-main-box::-webkit-scrollbar {
    width: 0.5vw;
    background-color: rgb(244, 244, 244);
}

.left-of-main-box::-webkit-scrollbar-thumb {
    width: 1.1vw;
    border-radius: 10px;
    background-color: #05c0a491;
    box-shadow: 1px 1px 5px rgb(222, 222, 222);
}

.block-card {
    width: 550px;
    height: 180px;
    border: none;
    display: flex;
    margin: 15px;
    background: #FFFF;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.226);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    /* border: 1px solid black; */
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
    height: fit-content;
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
    margin: 0;
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
    height: 100%;
    display: flex;
    justify-content: center;
}

.mew-icon {
    width: 90px;
    height: 90px;
    position: absolute;
    top: 32%;
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
