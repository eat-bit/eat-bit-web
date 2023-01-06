import React from "react";

import { acceptOrder } from "api";
import { Ban, Select } from "tabler-icons-react";

const acceptRejectOrder = (ans, orderId) => {
  acceptOrder(ans, orderId).then((res) => {
    console.log(res);
  });
};

export default function AcceptRejectOrder(props) {
  return props.currState == 0 ? (
    <>
      <Select
        style={{ cursor: "pointer", marginRight: "1rem" }}
        color="green"
        onClick={() => acceptRejectOrder(true, props.itemID)}
      />
      <Ban
        style={{ cursor: "pointer", marginRight: "1rem" }}
        color="red"
        onClick={() => acceptRejectOrder(false, props.itemID)}
      />
    </>
  ) : props.currState == 1 ? (
    <Select
      style={{ cursor: "pointer", marginRight: "1rem" }}
      color="green"
      onClick={() => acceptRejectOrder(true, props.itemID)}
    />
  ) : (
    <Ban
      style={{ cursor: "pointer", marginRight: "1rem" }}
      color="red"
      onClick={() => acceptRejectOrder(false, props.itemID)}
    />
  );
}
