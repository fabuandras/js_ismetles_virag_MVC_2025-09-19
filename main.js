/* feladat jelenítsük meg kis kártyák formájában a virágok neveit és képeit
kell: 
objektumlista - adat.js
KEPEK mappa
Virag osztály - egyetlen virág megjelenításe

*/
import ViragokController from "./controller/ViragokController.js";
import AdminViragok from "./view/admin/AdminViragok.js";

/* példányosítom a controllereket */
new ViragokController();

document.getElementById("virag").addEventListener("click", () => {
    new ViragokController();
})
document.getElementById("admin").addEventListener("click", () => {
    document.querySelector("article").innerHTML = ""
    new AdminViragok(viragLista, document.querySelector("article"))
})

window.addEventListener("kivalaszt", (event) => {
    console.log(event.detail)
})
window.addEventListener("torol", (event) => {
    console.log(event.detail)
})


/* legyen egy admin felület, ahol táblázatosan listázom a virágokat és ott legyen egy űrlap is, ahol új virágot tudok felvinni 
Minden virág mellett legyen egy törlés gomb is. 
osztályok:
AdminViragSor - egyetlen egy virág a táblázatban
AdminViragok - táblázat az összes sorral.  - ez példányosítja az AdminViragSor
main-ben példányosítjuk az AdminViragok- at. 


Urlap - itt lenne a felviteli űrlap

*/
