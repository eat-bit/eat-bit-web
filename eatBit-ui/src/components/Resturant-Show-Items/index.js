import { itemNumber, itemList, connectWallet } from "api";
import { useEffect, useState } from "react";
import { Modal, createStyles, useMantineTheme, Table } from "@mantine/core";

const ShowItems = () => {
  const [totalItems, setTotalItems] = useState(0);

  const [items, setItem] = useState([]);

  
  useEffect(() => {
    connectWallet().then((d1) => {
      console.log(d1);
      itemNumber()
      .then((d2) => {
          const arr = [];
          console.log(d2);
          // setTotalItems(d2);

          for (let idx = 0; idx < d2; idx++) {

            itemList(idx).then((d3) => {
              const item = {
                name: "",
                description: "",
                price: "",
                _id: idx,
              };

              item.name = d3[0];
              item.description = d3[2];
              item.price = parseInt(d3[1]._hex);

              arr.push(item);
              if (idx == d2-1)
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
          {items.length > 0 && items.map((i) => {
            {/* const selected = selection.includes(i._id); */}
            return (
              <tr
                key={i._id}
                // className={cx({ [classes.rowSelected]: selected })}
              >
                <td>{i.name}</td>
                <td>{i.description}</td>
                <td>{i.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ShowItems;
