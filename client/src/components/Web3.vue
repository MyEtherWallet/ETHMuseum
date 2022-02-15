<template>
<div class="home-container">
    <Web3Modal />
</div>
</template>

<script>
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
            accounts: null,
            messageData: "",
            walletid: "",
            signaureKey: ""
        }
    },
    mounted() {
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

            const provider = await web3Modal.connect();
            const web3 = new Web3(provider);
            const accounts = await web3.eth.getAccounts();

            this.web3Modal = web3Modal;
            this.provider = provider;
            this.web3 = web3;
            this.accounts = accounts;
            this.$emit("accountsChanged", accounts[0]);
            return web3;
        },
        async disConnect() {
            await this.web3Modal.clearCachedProvider();
            await this.provider.disconnect();
            this.$emit("disconnectWallet");
        },
        async signNewDescription(data, address) {
            this.messageData = data;
            this.walletid = address;
            await this.web3.eth.personal.sign(this.messageData, this.walletid).then(console.log);
            // await this.web3.eth.personal.ecRecover(this.messageData).then(console.log);
            console.log(`A message of "${this.messageData}" from ${this.walletid} has been signed!`);
            this.$emit('signatureFinished', this.messageData)
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

.home-container {
    width: 100%;

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
