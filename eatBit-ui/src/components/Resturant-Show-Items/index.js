import { itemNumber, itemList, connectWallet } from "api";
import { useEffect, useState } from "react";
import { Modal, createStyles, useMantineTheme, Table } from "@mantine/core";

const ShowItems = () => {
  const [totalItems, setTotalItems] = useState(0);

  const [items, setItem] = useState([]);

  const arr = [];

  useEffect(() => {
    connectWallet().then((d) => {
      console.log(d);
      itemNumber()
        .then((d) => {
          console.log(d);
          setTotalItems(d);
          for (let idx = 1; idx < 4; idx++) {
            itemList(idx).then((d) => {
              const item = {
                name: "",
                description: "",
                price: "",
              };

              item.name = d[0];
              item.description = d[2];
              item.price = parseInt(d[1]._hex);

              arr.push(item);
              setItem(arr);
            });
          }
          console.log("arr", arr);
        })

        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  const useStyles = createStyles((theme) => ({
    rowSelected: {
      backgroundColor: "#e8fff0",
    },
  }));
  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(["2"]);

  return (
    <>
      <Table
        sx={{ minWidth: 800 }}
        verticalSpacing="sm"
        style={{ background: "white" }}
      >
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const selected = selection.includes(item._id);
            return (
              <tr
                key={item._id}
                className={cx({ [classes.rowSelected]: selected })}
              >
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ShowItems;
