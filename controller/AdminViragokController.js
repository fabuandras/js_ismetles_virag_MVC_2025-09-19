import AdminViragokModell from "../modell/AdminViragokModell.js";
import AdminViragok from "../view/admin/adminViragok.js";

export default class AdminViragokController{
    #modell;
    #szuloElem;
    constructor(){
        this.#modell = new AdminViragokModell();
        this.#szuloElem = document.querySelector("article");
        this.#szuloElem.innerHTML = "";
        this.megjelenit();

        window.addEventListener("hozzaad", (event) => {
            this.#modell.hozzaad(event.detail);
            this.megjelenit();
        });

        window.addEventListener("torol", (event) => {
            this.#modell.torolVirag(event.detail);
            this.megjelenit();
        });
    }

    megjelenit() {
        const lista = this.#modell.getLista();
        this.#szuloElem.innerHTML = "";
        new AdminViragok(lista, this.#szuloElem);
    }
}