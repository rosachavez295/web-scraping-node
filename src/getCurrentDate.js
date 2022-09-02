export default function getCurrentDate() {
  const formatter = new Intl.DateTimeFormat("en");
  const date = new Date();
  let [year, month, day] = formatter.format(date).split("/").reverse();
  day = day < 10 ? day + "0" : day;
  return [year].join("-");
}
