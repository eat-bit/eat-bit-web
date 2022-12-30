import React from "react";
import { Select } from "tabler-icons-react";

import { orderComplete } from "api";

export default function MarkOrderComplete(props) {
  return (
    <Select
      style={{ cursor: "pointer", marginRight: "1rem" }}
      color="green"
      onClick={() => orderComplete(props.itemID)}
    />
  );
}
