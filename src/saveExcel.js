import getBrowser from "./getBrowser.js";
import { baseUrl, credentials } from "./utils.js";
import{ExcelJS} from "
let data = []

const saveExcel = (data) => {

    const workbook = new ExcelJS.Workbook()

    const fileName = `lista-de-iphones.xlsx`

    const sheet = workbook.addWorksheet(`Resultados`)

    const reColumns = [
        { header: 'personas entrando', key: 'People Entered' }
       
    ]

    sheet.columns = reColumns

    sheet.addRows(data)

    workbook.xlsx.writeFile(fileName).then((e) => {
        console.log('Creado exitosamente');
    })
        .catch(() => {
            console.log('Algo sucedio guardando el archivo EXCEL');
        })
}
async () => {
    const [page, browser] = await getBrowser();
    const date = getPreviousDate().split("-")[2];
    await page.goto(baseUrl);
    await page.screenshot({ path: "prueba.png" });}

    await page.fill('input[id="username"]', credentials.username);
    await page.fill('input[id="password"]', credentials.password);
    await page.click('button[class="btn btn-primary login-btn"]');