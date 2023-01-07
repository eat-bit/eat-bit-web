export default function parseErrorMessage(err) {
  err = err.message;

  try {
    const errorMessage = err.split("reason=")[1].split('"')[1];

    return errorMessage;
  } catch (err) {
    // if (err.includes("insufficient funds")) {
    //   return "Insufficient funds";
    // }

    // if (err.includes("execution reverted")) {
    //   const errorMessage = err.split("execution reverted:")[1].split('"')[1];

    //   return errorMessage;
    // }
    return "An error encounterd. Please try again";
  }
}
