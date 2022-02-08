<template>
<div class='home-container'>
    <Web3Modal />
</div>
</template>

<script lang="ts">
// import Main from '@/components/Main.vue';
import Web3 from "web3";
import Web3Modal from "web3modal";
import MewConnect from "@myetherwallet/mewconnect-web-client";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Authereum from "authereum";


export default {
    name: 'Web3PointOh',
    data() {
        return {
            loading: false,
            number: '',
            string: ''
        }
    },
    mounted() {
        // @ts-ignore
        this.getWeb3()
    },
    methods: {
        async getWeb3() {
            // @ts-ignore
            this.loading = true
            let web3Modal;
            let provider;
            let web3;
            let providerOptions;
            console.log('variables created')
            providerOptions = {
                mewconnect: {
                    package: MewConnect, // required
                    options: {
                        rpc: "https://nodes.mewapi.io/rpc/eth"
                    }
                },
                walletconnect: {
                    package: WalletConnectProvider, // required
                    options: {
                        infuraId: "27e484dcd9e3efcfd25a83a78777cdf1" // required
                    }
                },
                authereum: {
                    package: Authereum // required
                }
            };
            web3Modal = new Web3Modal({
                network: "mainnet", // optional
                cacheProvider: true, // optional
                providerOptions // required
            });

            provider = await web3Modal.connect();

            provider.on("connect", (info: {
                chainId: number
            }) => {
                console.log(info)
            })
            provider.on("disconnect", (error: {
                code: number;message: string
            }) => {
                console.log(error);
            });
            web3 = new Web3(provider);
            return web3
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

.home-container {
    width: 100%;
    height: 100vh;
}

h1 {
    font-family: 'Roboto';
    margin: 40px 0 0;
    font-size: 2.571rem;
    color: #05C0A5;

}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
