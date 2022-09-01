import * as XLSX from "xlsx";

(async () => {
  const db = [...Array(10).keys()].map((e) => ({ id: e, title: "title-" + e }));

  const worksheet = XLSX.utils.json_to_sheet(db);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Dates");

  XLSX.writeFile(workbook, "test.xlsx");
})();
