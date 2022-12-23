// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Eatbit {
    address owner;

    constructor() {
        itemNumber = 0;
        restrauntNumber = 0;
        orderNumber = 0;
        wallet = 0;

        owner = msg.sender;
    }

    // function addDefaults() public {
    //     addRestraunt("Lords of Drinks", "dating spot", "Nirman Vihar");

    //     addItem("burger", 1000000, "tasty", "url");
    //     addItem("pizza", 2000000, "yummy", "unurl");
    // }

    // function addDefaults2() public {
    //     addRestraunt("Aapki Rasoi", "dec", "1/1");

    //     addItem("pasta", 3, "eww", "uurl");
    // }

    uint256 private wallet;

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner of the contract");
        _;
    }

    function checkWallet() public view onlyOwner returns (uint256) {
        return wallet;
    }

    struct Order {
        address customerAdd;
        uint256[] itemIds;
        uint256 amount;
        uint256 restrauntId;
        bool isFullfiled;
        int8 isAccepted;
        string custAddress;
        string custName;
        string custcontactNumber;
        uint256 timeStamp;
    }

    struct Item {
        string name;
        uint256 price;
        string description;
        string imageURL;
        uint256 restrauntId;
        uint256 id;
    }

    struct Restraunt {
        // image
        address sender;
        string name;
        uint256[] itemId;
        string description;
        string ptaa;
        uint256 id;
        uint256[] orderId;
    }

    Item[] public itemList;
    Restraunt[] public restrauntList;
    Order[] private orderList;

    uint256 public itemNumber;
    uint256 public restrauntNumber;
    uint256 private orderNumber;

    function addRestraunt(
        string memory name,
        string memory description,
        string memory ptaa
    ) public {
        for (uint256 ind = 0; ind < restrauntList.length; ind++) {
            require(
                restrauntList[ind].sender != msg.sender,
                "Restraunt already exists"
            );
        }

        uint256[] memory tempArray;

        Restraunt memory newRestraunt;

        newRestraunt.sender = msg.sender;
        newRestraunt.name = name;
        newRestraunt.itemId = tempArray;
        newRestraunt.description = description;
        newRestraunt.ptaa = ptaa;
        newRestraunt.id = restrauntNumber;
        newRestraunt.orderId = tempArray;

        restrauntList.push(newRestraunt);

        restrauntNumber++;
    }

    function addItem(
        string memory name,
        uint256 price,
        string memory description,
        string memory imageURL
    ) public {
        uint256 restrauntId;
        bool restrauntExist = false;

        for (uint256 ind = 0; ind < restrauntList.length; ind++) {
            if (restrauntList[ind].sender == msg.sender) {
                restrauntId = ind;
                restrauntExist = true;
            }
        }

        require(restrauntExist, "Restraunt does not exist");

        Item memory newItem;

        newItem.name = name;
        newItem.price = price;
        newItem.description = description;
        newItem.imageURL = imageURL;
        newItem.restrauntId = restrauntId;
        newItem.id = itemNumber;

        itemList.push(newItem);

        restrauntList[restrauntId].itemId.push(itemNumber);

        itemNumber++;
    }

    function totalAmount(uint256[] memory itemIdArray)
        private
        view
        returns (uint256, bool)
    {
        uint256 tempRestrauntId = itemList[itemIdArray[0]].restrauntId;
        uint256 amount = 0;
        for (uint256 ind = 0; ind < itemIdArray.length; ind++) {
            Item memory tempItem = itemList[itemIdArray[ind]];

            if (tempRestrauntId != tempItem.restrauntId) {
                return (10, false);
            }

            amount += tempItem.price;
        }

        return (amount * 1 ether, true);
        // return (amount, true);
    }

    