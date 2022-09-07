import * as XLSX from "xlsx";
import getCurrentDate from "./getCurrentDate.js";

export default function convertDataToExcel(data, sucId) {
  return new Promise((res, rej) => {
    try {
      const currentDate = getCurrentDate();
      const fileName = currentDate + "_" + "suc" + "-" + sucId + ".xlsx";
      const pathFileName = `./sheets/${fileName}`;
      const sheetName = "Sucursal-" + sucId;
      const worksheet = XLS.utils.json_to_sheet(data);
      const workbook = XLS.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
      XLSX.writeFile(workbook, pathFileName);
      res(true);
    } catch (err) {
      rej(err);
    }
  });
}
// (async () => {
//   const db = [...Array(20).keys()].map((e) => ({ id: e, title: "title-" + e }));

//   await convertDataToExcel(db, 1);
// })();
