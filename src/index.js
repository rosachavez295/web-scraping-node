import extractData from "./extractData.js";
import { URLs } from "./utils.js";

(async () => {
  const dataSucursales = Object.entries(URLs.sucursales);
  await Promise.allSettled(
    dataSucursales.map(
      async ([sucId, sucUrl]) => await extractData(sucId, sucUrl)
    )
  );
})();
