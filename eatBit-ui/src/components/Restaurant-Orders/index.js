import React from "react";

import {acceptOrder} from "api";
import { Ban, Select } from "tabler-icons-react";

export default function AcceptRejectOrder(props) {
  return (
    <>
      <Select
        style={{ cursor: "pointer", marginRight: "1rem" }}
        color="green"
        onClick={() => acceptOrder(true, props.itemID)}
      />
      <Ban
        style={{ cursor: "pointer", marginRight: "1rem" }}
        color="red"
        onClick={() => acceptOrder(false, props.itemID)}
      />
    </>
  );
}
