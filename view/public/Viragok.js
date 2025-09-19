/* a feladata, hogy a sok virágot megjelenítse */

import Virag from "./Virag.js"

export default class Viragok {
    #lista = []
    #szuloElem = ""
    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.#szuloElem = szuloElem
        this.megjelenit()
    }
    megjelenit() {
        this.#lista.forEach((elem, index) => {
            // new Virag(this.#lista[index], this.#szuloElem)
            new Virag(elem, this.#szuloElem)
        })


    }
}