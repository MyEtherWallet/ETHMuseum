<template>
<div class="home-container">
    <Web3Modal />
</div>
</template>

<script lang="ts">
import Web3 from "web3";
import Web3Modal from "web3modal";
import MewConnect from "@myetherwallet/mewconnect-web-client";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Authereum from "authereum";

export default {
    name: "Web3",
    data() {
        return {
            web3Modal: null,
            web3: null,
            provider: null,
        }
    },
    mounted() {
        // @ts-ignore
        this.getWeb3();
    },
    methods: {
        async getWeb3() {
            const providerOptions = {
                mewconnect: {
                    package: MewConnect, // required
                    options: {
                        rpc: "https://nodes.mewapi.io/rpc/eth",
                    },
                },
                walletconnect: {
                    package: WalletConnectProvider, // required
                    options: {
                        infuraId: "27e484dcd9e3efcfd25a83a78777cdf1", // required
                    },
                },
                authereum: {
                    package: Authereum, // required
                },
            };
            const web3Modal = new Web3Modal({
                network: "mainnet", // optional
                cacheProvider: false, // optional
                providerOptions, // required
            });
            // @ts-ignore
            this.web3Modal = web3Modal;

            const provider = await web3Modal.connect();
            const web3 = new Web3(provider);
            const accounts = await web3.eth.getAccounts();
            // @ts-ignore
            this.provider = provider;
            console.log(provider)
            // @ts-ignore
            this.web3 = web3;
            // @ts-ignore
            this.$emit("accountsChanged", accounts[0]);
            return web3;
        },
        async disConnect() {
                // @ts-ignore
                await this.web3Modal.clearCachedProvider();
                // @ts-ignore
                await this.provider.disconnect();
                // @ts-ignore
                this.$emit("disconnectWallet");
        },
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

.home-container {
    width: 100%;
    height: 100vh;
}

h1 {
    font-family: "Roboto";
    margin: 40px 0 0;
    font-size: 2.571rem;
    color: #05c0a5;
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
