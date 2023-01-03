import { orderDetails } from "api";
import parseOrder from "./parseOrder";

const fetchOrders = async (orderIdArray) => {
  if(!orderIdArray){
    return []
  }
  
  let orderList = [];

  const orderPromises = orderIdArray.map(async (item) => {
    return orderDetails(item).then((res) => {
      return parseOrder(res, item);
    });
  });

  await Promise.all(orderPromises).then((results) => {
    orderList = results;
  });

  return orderList;
};

export default fetchOrders;
