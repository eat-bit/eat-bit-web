import { itemList } from "api";

const parseOrder = async (str, orderId) => {
  const ele = str.split(",");

  const itemArraySize = Number(ele[ele.length - 1] - 1);
  let itemArray = [];

  for (let ind = 1; ind < itemArraySize + 2; ind++) {
    itemArray.push(ele[ind]);
  }

  console.log(itemArray);

  const itemPromise = (itemArray = itemArray.map(async (item) => {
    return itemList(item).then((res) => {
      // console.log(res)
      return res[0];
    });
  }));

  const order = {
    _id: orderId,
    custAddress: ele[0],
    itemArray: await Promise.all(itemPromise),
    amount: ele[2 + itemArraySize],
    restrauntId: ele[3 + itemArraySize],
    isFullfiled: ((ele[4 + itemArraySize]))==="true",
    isAccepted: ((ele[5 + itemArraySize])),
    custPhysicalAddress: ele[6 + itemArraySize],
    custName: ele[7 + itemArraySize],
    custcontactNumber: ele[8 + itemArraySize],
    timeStamp: ele[9 + itemArraySize],
  };
  return order;
};

export default parseOrder;
