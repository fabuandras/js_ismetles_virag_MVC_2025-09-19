import Viragok from "../view/public/Viragok.js";
import ViragokModell from "../modell/ViragokModell.js";

export default class ViragokController {
  #viragokModell = {};
  #virag2Lista = [];
  #szuloelem;
  constructor() {
    /*  példányosítja a modell, és a view */
    this.#viragokModell = new ViragokModell();
    this.#virag2Lista = [...this.#viragokModell.getLista()];
    this.#virag2Lista[0].id=111
    console.log(this.#virag2Lista)
    this.#szuloelem = document.querySelector("article");
    this.#szuloelem.innerHTML = "";
    new Viragok(this.#virag2Lista, this.#szuloelem);
    this.esemenykezelo()
  }
  esemenykezelo() {
    window.addEventListener("kivalaszt", (event) => {
      console.log(event.detail);
      console.log(this.#virag2Lista)
      this.#viragokModell.kedvencModosit(event.detail)
    });
  }
}