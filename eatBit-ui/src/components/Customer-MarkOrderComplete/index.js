import React, { useEffect, useState } from "react";
import { Select } from "tabler-icons-react";

import { connectWallet, orderComplete } from "api";

export default function MarkOrderComplete({itemID}) {

  const [orderC, setOrderC] = useState(false);

  useEffect(() => {

	connectWallet().then((d1) => {
		console.log(d1);
		orderComplete(itemID).then((d2) => {
			console.log("output", d2)
		})
	})
  }, [orderC]);



  return (
    <Select
      style={{ cursor: "pointer", marginRight: "1rem" }}
      color="green"
      onClick={() => setOrderC(!orderC)}
    />
  );
}
