import { viragLista } from "../adat.js";

export default class AdminViragokModell{
    #viragLista = [];

    constructor(){
        this.#viragLista = JSON.parse(JSON.stringify(viragLista));
    }

    getLista() {
        return [...this.#viragLista];
    }

    hozzaad(ujObj) {
        this.#viragLista.push(ujObj);
    }

    torolVirag(id) {
        this.#viragLista = this.#viragLista.filter(v => v.id != id);
    }
}