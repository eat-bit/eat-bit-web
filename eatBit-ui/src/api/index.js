const { ethers } = require("ethers");
import contractAbi from "../../../contract/abi/Eatbit.json";

const contractAddress = "0x3C10eadFE40EB2eBca722f4C31c2338Bf130349e";

let provider = new ethers.providers.Web3Provider(window.ethereum);
let signer;

export async function connectWallet() {
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();
    return await signer.getAddress();
}

export async function getBalance() {
    const balance = await signer?.getBalance()
    console.log("account's balance in matic:", balance?.toString() / 1e18);
}

// ------------------ Contract functions ------------------

export async function itemList() {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).itemList(0);
    await console.log(txResponse);
}

export async function itemNumber() {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).itemNumber();
    await console.log(txResponse.toString());
}

export async function restaurantList() {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).restrauntList(0);
    await console.log(txResponse);
}

export async function restaurantNumber() {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).restrauntNumber();
    await console.log(txResponse.toString());
}

export async function orderDetails() {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).orderDetails(0);
    await console.log(txResponse.toString());
}

export async function checkOrdersCustomer() {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).checkOrdersCust();
    await console.log(txResponse.toString());
}

export async function checkOrdersRestaurant() {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).checkOrdersRestraunt();
    await console.log(txResponse.toString());
}

export async function acceptOrder(ans, idx) {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).acceptOrder(ans, idx);
    await console.log(txResponse.toString());
}

export async function addItem() {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).addItem("Dosa", 35, "Tasty", "uuurl");
    await console.log(txResponse.toString());
}

export async function addRestaurant() {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).addRestraunt("name", "cool", "Delhi");
    await console.log(txResponse.toString());
}

export async function orderComplete(idx) {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).orderComplete(idx);
    await console.log(txResponse.toString());
}

export async function placeOrder() {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).placeOrder([0], "Delhi", "Harshit", "1234567890", {gasLimit: 3000000, value: ethers.utils.parseEther(ethers.utils.formatEther(1))});
    await console.log(txResponse.toString());
}

export async function getRestrauntId() {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).getRestrauntId();
    await console.log(txResponse.toString());
}

export async function checkItemRestraunt() {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).checkItemRestraunt(0);
    await console.log(txResponse.toString());
}

export async function getItemIdForOrder() {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).getItemIdForOrder(0);
    await console.log(txResponse.toString());
}