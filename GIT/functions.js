import { readFile } from "fs/promises";
import path from "path";

const abeceda =
  "abcdefghijklmnopqrstuvwxyz" +
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
  "áčďéěíňóřšťúůýž" +
  "ÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ";

function jePismeno(znak) {
  for (let i = 0; i < abeceda.length; i++) {
    if (abeceda[i] === znak) return true;
  }
  return false;
}

async function nactiSoubor(nazev) {
  const cesta = path.join(process.cwd(), nazev);
  return await readFile(cesta, "utf-8");
}

export async function pocetPismen(nazev) {
  const text = await nactiSoubor(nazev);
  let pocet = 0;

  for (let i = 0; i < text.length; i++) {
    if (jePismeno(text[i])) {
      pocet++;
    }
  }

  console.log("Počet písmen:", pocet);
}

export async function pocetSlov(nazev) {
  const text = await nactiSoubor(nazev);

  let pocet = 0;
  let veSlove = false;

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " " && text[i] !== "\n" && text[i] !== "\t") {
      if (!veSlove) {
        pocet++;
        veSlove = true;
      }
    } else {
      veSlove = false;
    }
  }

  console.log("Počet slov:", pocet);
}

export async function pocetVet(nazev) {
  const text = await nactiSoubor(nazev);

  let pocet = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "." || text[i] === "!" || text[i] === "?") {
      pocet++;
    }
  }

  console.log("Počet vět:", pocet);
}

export async function pocetOdstavcu(nazev) {
  const text = await nactiSoubor(nazev);

  let pocet = 0;
  let vOdstavci = false;

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== "\n") {
      if (!vOdstavci) {
        pocet++;
        vOdstavci = true;
      }
    }

    if (text[i] === "\n" && text[i + 1] === "\n") {
      vOdstavci = false;
    }
  }

  console.log("Počet odstavců:", pocet);
}