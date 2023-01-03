import React from "react";

import dynamic from "next/dynamic";

const RestaurantOrder = dynamic(() => import("components/Restaurant-Order"), {
  ssr: false,
});

export default function Orders() {

  return (
    // <div style={{ height: "100%", width: "100%" }}>
    //   <RestNavbar />
    //   <div className="w-full py-5 px-5 flex justify-between bg-white">
    //     <h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-black-600">
    //       Order List
    //     </h3>
    //   </div>
    //   <div className="flex flex-col justify-start w-full h-full py-3 px-5 bg-white">
    //     <Table
    //       sx={{ minWidth: 800 }}
    //       verticalSpacing="sm"
    //       style={{ background: "white" }}>
    //       <thead>
    //         <tr>
    //           <th>Customer Address</th>
    //           <th>Orders</th>
    //           <th>Total Price</th>
    //           <th>Accept/Reject</th>
    //           <th>Completed</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {data.map((item) => {
    //           const selected = selection.includes(item._id);
    //           return (
    //             <tr
    //               key={item._id}
    //               className={cx({ [classes.rowSelected]: selected })}>
    //               <td>{item.address}</td>
    //               <td>{`${item.orders}`}</td>
    //               <td>{item.price}</td>

    //               <td className="flex items-center">
    //                 <AcceptRejectOrder itemID={item.id} />
    //               </td>
    //               <td className="">
    //                 {isAccepted ? (
    //                   <Select style={{ marginRight: "1rem" }} color="green" />
    //                 ) : (
    //                   <Dots style={{ marginRight: "1rem" }} color="orange" />
    //                 )}
    //               </td>
    //             </tr>
    //           );
    //         })}
    //       </tbody>
    //     </Table>
    //     <div
    //       style={{
    //         display: "flex",
    //         justifyContent: "flex-end",
    //         width: "100%",
    //         marginTop: "2rem",
    //       }}>
    //       <Pagination size="sm" total={10} position="end"></Pagination>
    //     </div>
    //   </div>
    // </div>
    <RestaurantOrder />
  );
}
