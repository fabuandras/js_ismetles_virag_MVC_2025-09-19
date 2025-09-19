export default class AdminViragSor {
    /* egyetlen egy virág
    adattagjai: 
    1 objektum
    szuloelem
    */
    #szuloElem = "";
    #gombElem = ""
    #obj = {}
    constructor(obj, szuloElem) {
        this.#obj = obj;
        this.#szuloElem = szuloElem;
        console.log(this.#szuloElem)
        this.megjelenit()
        /* button-ra kattintva ki tudjam v'lasytani ay adott virágot */
        this.#gombElem = document.getElementById(this.#obj.id)
        this.esemenyTrigger()
    }

    megjelenit() {
        let txt = `
             <tr>
                <th scope="row">${this.#obj.id}</th>
                <td>${this.#obj.nev}</td>
                <td> <img  src="${this.#obj.kep}"  width="100px"  alt="${this.#obj.nev}">
               </td>
                <td><button class="btn btn-primary" id=${this.#obj.id}>Töröl</button>
               </td>
            </tr>
        
        `
        this.#szuloElem.insertAdjacentHTML("beforeend", txt)
    }

    esemenyTrigger() {
        /* ha rákattintunk a gombra
            kiváltunk egy saját eseményt, amire  majd a főprogram fel tud iratkozni
        */
        this.#gombElem.addEventListener("click", () => {
            let esemeny = new CustomEvent("torol", { detail: this.#obj.id })
            window.dispatchEvent(esemeny)
        })

    }
}