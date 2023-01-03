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
    //     // addRestraunt("Lords of Drinks", "dating spot", "Nirman Vihar");
    //     addRestraunt("Lords of Drinks", "dating spot", "Nirman Vihar", "url");

    //     addItem("burger", 1000000, "tasty", "url");
    //     addItem("pizza", 2000000, "yummy", "unurl");
    // }

    // function addDefaults2() public {
    //     // addRestraunt("Aapki Rasoi", "dec", "1/1");
    //     addRestraunt("Aapki Rasoi", "dec", "1/1", "url");

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
        uint256 itemArrSize;
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
        string imageURL;
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
        string memory ptaa,
        string memory imageURL
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
        newRestraunt.imageURL = imageURL;

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

        // return (amount * 1 ether, true);
        return (amount, true);
    }

    function placeOrder(
        uint256[] memory itemIdArray,
        string memory customerPhysicalAddress,
        string memory customerName,
        string memory customerContactNumber
    ) public payable {
        (uint256 amount, bool isSameRestraunt) = totalAmount(itemIdArray);
        uint256 tempRestrauntId = itemList[itemIdArray[0]].restrauntId;

        require(isSameRestraunt, "Do place the order from same restraunt");
        require(
            amount == msg.value,
            "Please submit the asking price in order to complete the purchase"
        );

        wallet += msg.value;

        orderList.push(
            Order(
                msg.sender,
                itemIdArray,
                amount,
                tempRestrauntId,
                false,
                0,
                customerPhysicalAddress,
                customerName,
                customerContactNumber,
                block.timestamp,
                itemIdArray.length
            )
        );
        restrauntList[tempRestrauntId].orderId.push(orderNumber);

        orderNumber++;
    }

    function checkOrdersRestraunt()
        public
        view
        returns (uint256[] memory orderIds)
    {
        for (uint256 ind = 0; ind < restrauntList.length; ind++) {
            if (msg.sender == restrauntList[ind].sender) {
                return restrauntList[ind].orderId;
            }
        }

        require(false, "Restraunt does not exist");

        // uint256[] memory temp;
        // return temp;
    }

    // only triverse upto tempnooforders , else are garbage
    function checkOrdersCust()
        public
        view
        returns (uint256[] memory array, uint256 size)
    {
        uint256[] memory ids = new uint256[](orderNumber);

        uint256 tempNumberOfOrders = 0;
        for (uint256 ind = 0; ind < orderList.length; ind++) {
            if (msg.sender == orderList[ind].customerAdd) {
                ids[tempNumberOfOrders] = ind;
                tempNumberOfOrders++;
            }
        }

        return (ids, tempNumberOfOrders);
    }

    function getRestrauntId() public view returns (uint256 id) {
        for (uint256 ind = 0; ind < restrauntList.length; ind++) {
            if (msg.sender == restrauntList[ind].sender) {
                return ind;
            }
        }

        require(false, "Restraunt does not exist");
    }

    function checkItemRestraunt(uint256 restrauntId)
        public
        view
        returns (uint256[] memory)
    {
        return restrauntList[restrauntId].itemId;
    }

    function getItemIdForOrder(uint256 orderId)
        public
        view
        returns (uint256[] memory)
    {
        Order memory tempOrder = orderList[orderId];
        require(
            tempOrder.customerAdd == msg.sender ||
                restrauntList[tempOrder.restrauntId].sender == msg.sender,
            "Unauthorized"
        );

        return orderList[orderId].itemIds;
    }

    function acceptOrder(bool isAccept, uint256 orderId) public {
        Order storage tempOrder = orderList[orderId];
        require(
            restrauntList[tempOrder.restrauntId].sender == msg.sender,
            "Login from restraunt id"
        );

        if (isAccept) {
            tempOrder.isAccepted = 1;
        } else {
            tempOrder.isAccepted = -1;
            tempOrder.isFullfiled = true;

            payable(tempOrder.customerAdd).transfer(tempOrder.amount);
            wallet -= tempOrder.amount;
        }
    }

    function orderComplete(uint256 orderId) public {
        Order storage tempOrder = orderList[orderId];
        require(
            tempOrder.customerAdd == msg.sender,
            "You are not the one who ordered"
        );
        require(tempOrder.isAccepted != 0, "Order is not yet even acceted");
        require(
            tempOrder.isAccepted != -1,
            "Order was rejected by the restraunt.Your money would have been returned"
        );
        require(tempOrder.isFullfiled == false, "Already completed");
        tempOrder.isFullfiled = true;

        payable(restrauntList[tempOrder.restrauntId].sender).transfer(
            tempOrder.amount
        );
        wallet -= tempOrder.amount;
    }

    function orderDetails(uint256 orderId) public view returns (Order memory) {
        Order memory tempOrder = orderList[orderId];
        require(
            tempOrder.customerAdd == msg.sender ||
                restrauntList[tempOrder.restrauntId].sender == msg.sender,
            "Unauthorized"
        );

        return tempOrder;
    }

    uint256 private interval = 1 days;

    function chainLinkAutomation() public onlyOwner {
        for (uint256 ind = 0; ind < orderNumber; ind++) {
            if (
                orderList[ind].isFullfiled == false &&
                block.timestamp - orderList[ind].timeStamp > interval
            ) {
                payable(orderList[ind].customerAdd).transfer(
                    orderList[ind].amount
                );
                wallet -= orderList[ind].amount;
                orderList[ind].isFullfiled = true;
            }
        }
    }

    function isRestrauntExist() public view returns (bool) {
        for (uint256 ind = 0; ind < restrauntList.length; ind++) {
            if (msg.sender == restrauntList[ind].sender) {
                return true;
            }
        }

        return false;
    }
}
