export default function getPreviousDate() {
  let date = new Date();
  let separador = "-";
  let output =
    date.getFullYear() +
    separador +
    String(date.getMonth() + 1).padStart(2, "0") +
    separador +
    String(date.getDate() - 1).padStart(2, "0");
  console.log(output);
  return output;
}
