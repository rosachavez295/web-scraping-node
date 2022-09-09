import * as fs from "node:fs/promises";
import getCurrentDate from "./getCurrentDate";

export default async function convertDataToText(data, sucId) {
  
  const currentDate =getCurrentDate();
  const fileName = currentDate + "_" + "suc" + "-" + sucId + ".txt";
  const pathFileName = `./sheets/${fileName}`;
  await fs.writeFile(pathFileName, data);
}
