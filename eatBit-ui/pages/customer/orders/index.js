import React from "react";
import dynamic from "next/dynamic";
// checkOrdersCustomer
const CustomerOrder = dynamic(() => import("components/Customer-order"), {
  ssr: false,
});


import { useEffect, useState } from "react";


export default function Orders() {


  return (
    // <div style={{ height: "100%", width: "100%" }}>
    // <Navbar />
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
    //           {/* <th style={{ width: 40 }}>
    //             <Checkbox
    //               onChange={toggleAll}
    //               checked={selection.length === data.length}
    //               indeterminate={
    //                 selection.length > 0 && selection.length !== data.length
    //               }
    //               transitionDuration={0}
    //             />
    //           </th> */}
    //           <th>Customer Address</th>
    //           <th>Orders</th>
    //           <th>Total Price</th>
    //           <th>Accepted</th>
    //           <th>Completed</th>
    //           <th>Mark Complete</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {data.map((item) => {
    //           const selected = selection.includes(item._id);
    //           return (
    //             <tr
    //               key={item._id}
    //               className={cx({ [classes.rowSelected]: selected })}>
    //               {/* <td>
    //                 <Checkbox
    //                   checked={selection.includes(item._id)}
    //                   onChange={() => toggleRow(item._id)}
    //                   transitionDuration={0}
    //                 />
    //               </td> */}
    //               <td>{item.address}</td>
    //               <td>{`${item.orders}`}</td>
    //               <td>{item.price}</td>

    //               <td className="flex items-center">
    //                 {isAccepted ? (
    //                   <Select style={{ marginRight: "1rem" }} color="green" />
    //                 ) : (
    //                   <Dots style={{ marginRight: "1rem" }} color="orange" />
    //                 )}
    //                 {/* <Ban
    //                   style={{ cursor: "pointer", marginRight: "1rem" }}
    //                   color="red"
    //                 /> */}
    //               </td>
    //               <td>
    //                 <Select
    //                   style={{ cursor: "pointer", marginRight: "1rem" }}
    //                   color="green"
    //                 />
    //               </td>
    //               <td>
    //                 <MarkOrderComplete itemID={item.id} />
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
    <CustomerOrder />
  );
}
