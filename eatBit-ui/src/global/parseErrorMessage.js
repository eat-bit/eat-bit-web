export default function parseErrorMessage(err) {
  err = err.message;

  const errorMessage = err.split("reason=")[1].split('"')[1];

  return errorMessage;
}
