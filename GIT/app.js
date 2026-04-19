import readline from "readline";
import { promisify } from "util";
import {
  pocetPismen,
  pocetSlov,
  pocetVet,
  pocetOdstavcu,
} from "./functions.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = promisify(rl.question).bind(rl);

async function main() {
  while (true) {
    const vstup = await question("Zadej příkaz: ");
    const casti = vstup.split(" ");

    const prikaz = casti[0];
    const soubor = casti[1];

    try {
      if (prikaz === "pocet_pismen") {
        await pocetPismen(soubor);
      } else if (prikaz === "pocet_slov") {
        await pocetSlov(soubor);
      } else if (prikaz === "pocet_vet") {
        await pocetVet(soubor);
      } else if (prikaz === "pocet_odstavcu") {
        await pocetOdstavcu(soubor);
      } else if (prikaz === "konec") {
        console.log("Ukončuji aplikaci...");
        rl.close();
        break;
      } else {
        console.log("Neznámý příkaz");
      }
    } catch (err) {
      console.log("Chyba při práci se souborem:", err.message);
    }
  }
}

main();