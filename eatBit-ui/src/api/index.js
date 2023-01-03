const { ethers } = require("ethers");
import contractAbi from "../../../contract/abi/Eatbit.json";

const contractAddress = "0x4C79336987874cbfE5F442C4A321A6E3b967D111";

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

export async function itemList(idx) {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).itemList(idx);
    // await console.log(txResponse);
    return await txResponse;
}

export async function itemNumber() {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).itemNumber();
    // await console.log(txResponse.toString());
    return await txResponse.toString();
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

export async function orderDetails(idx) {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).orderDetails(idx);
    return txResponse.toString();
}

export async function checkOrdersCustomer() {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    return await connectWallet().then(async (res) => {
      const txResponse = await contract.connect(signer).checkOrdersCust();
      return txResponse.toString();
    })
}

export async function checkOrdersRestaurant() {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    
    return await connectWallet().then(async (res) => {
      const txResponse = await contract.connect(signer).checkOrdersRestraunt();
      return await txResponse.toString();
    })
}

export async function acceptOrder(ans, idx) {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).acceptOrder(ans, idx);
    await console.log(txResponse.toString());
}

export async function addItem(fullName, price, description, imageURL) {
    price = BigInt(price);
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    await connectWallet().then(async (res) => {
        const txResponse = await contract.connect(signer).addItem(fullName, price, description, imageURL);
        await console.log(txResponse.toString());
        return await txResponse.toString();
    })
}

export async function addRestaurant(fullName, description, address, imageUrl) {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    await connectWallet().then(async (res) => {
        const txResponse = await contract.connect(signer).addRestraunt(fullName, description, address, imageUrl, { gasLimit: 3000000 });
        console.log(txResponse.toString());
        return txResponse.toString();
    })
}

export async function orderComplete(idx) {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).orderComplete(idx);
    await console.log(txResponse.toString());
}

export async function placeOrder(itemArr, address, fullname, customerContact, price) {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    // const txResponse = await contract.connect(signer).placeOrder(itemArr, address, fullname, customerContact, { gasLimit: 3000000, value: ethers.utils.parseEther(ethers.utils.formatEther(1)) });
    await connectWallet().then(async (res) => {
        const txResponse = await contract.connect(signer).placeOrder(itemArr, address, fullname, customerContact, { gasLimit: 3000000, value: ethers.utils.parseEther(ethers.utils.formatEther(price)) });
        return await console.log(txResponse.toString());
    });
    // const txResponse = await contract.connect(signer).placeOrder([0], "address", "fullname", 123, { gasLimit: 3000000, value: ethers.utils.parseEther(ethers.utils.formatEther(1)) });
    // return await txResponse.toString();
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

export async function isRestrauntExist() {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const txResponse = await contract.connect(signer).isRestrauntExist();
    await console.log(txResponse.toString());
}