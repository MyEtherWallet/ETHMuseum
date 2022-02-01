import Web3 from "web3";
import Web3Modal from "web3modal";

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "INFURA_ID" // required
        }
    },
    mewconnect: {
        package: MewConnect, // required
        options: {
          infuraId: "INFURA_ID" // required
        }
    }
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

const provider = await web3Modal.connect();

// const web3 = new Web3(provider);
// web3.on("connect", (info: { chainId: number }) => {
//     console.log(info);
// });