/* a feladata, hogy a sok virágot megjelenítse */

import AdminViragSor from "./AdminViragSor.js";


export default class AdminViragok {
    #lista = []
    #szuloElem = ""
    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.#szuloElem = szuloElem
        this.megjelenit()
    }
    megjelenit() {
    let txt=`
        <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">név</th>
                <th scope="col">kép</th>
                <th scope="col"> </th>
            </tr>
        </thead>
        <tbody id="tbody">
           
        </tbody>
        </table>
        `
        this.#szuloElem.insertAdjacentHTML("beforeend",txt)
        let tbodyElem=document.querySelector("#tbody")
        this.#lista.forEach((elem, index) => {
            // new Virag(this.#lista[index], this.#szuloElem)
            new AdminViragSor(elem, tbodyElem)
        })


    }
}