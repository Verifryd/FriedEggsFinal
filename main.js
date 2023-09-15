// Importing web3
import Web3 from 'web3';

// Initialize web3
let web3;

if (typeof window.ethereum !== 'undefined') {
    web3 = new Web3(window.ethereum);
    console.log("Web3 initialized with the browser's Ethereum provider.");
} else {
    console.warn("No Ethereum provider detected. You might want to consider using MetaMask!");
}

// Your application logic below
// ...

console.log("main.js loaded!");
