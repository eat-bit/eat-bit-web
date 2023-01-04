import { itemNumber, itemList, connectWallet } from "api";
import { useEffect, useState } from "react";
import { Modal, createStyles, useMantineTheme, Table, Button } from "@mantine/core";
import { Dots } from "tabler-icons-react";
const ShowItems = () => {
  const [totalItems, setTotalItems] = useState(0);

  const [items, setItem] = useState([]);

  const [fetchItems, setFetchItems] = useState(false);
  
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
  }, [fetchItems]);

  const useStyles = createStyles((theme) => ({
    rowSelected: {
      backgroundColor: "#e8fff0",
    },
  }));
  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(["2"]);

  return (
    <>
      <div className="flex flex-row justify-end">
          <button
            onClick={() => setFetchItems(!fetchItems)}
            className="flex flex-row justify-center items-center bg-white border-2 border-black-600 rounded-md px-3 py-2 text-black-600 hover:bg-black-600 hover:text-white">
            <Dots size={20} strokeWidth={1.5} />
            <span className="ml-2">Reload</span>
          </button>
        </div>
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
