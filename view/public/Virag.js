export default class Virag {
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
        this.megjelenit()
        /* button-ra kattintva ki tudjam v'lasytani ay adott virágot */
        this.#gombElem = document.getElementById(this.#obj.id)
        this.esemenyTrigger()
    }

    megjelenit() {
        let txt = `
            <div class="card" style="width: 18rem;">
                <img src="${this.#obj.kep}" class="card-img-top" alt="${this.#obj.nev}">
                <div class="card-body">
                    <h5 class="card-title">${this.#obj.nev}</h5>
                    <button class="btn btn-primary" id=${this.#obj.id}>Kiválaszt</button>
                </div>
            </div>
        
        `
        this.#szuloElem.insertAdjacentHTML("beforeend", txt)
    }

    esemenyTrigger() {
        /* ha rákattintunk a gombra
            kiváltunk egy saját eseményt, amire  majd a főprogram fel tud iratkozni
        */
        this.#gombElem.addEventListener("click", () => {
            let esemeny = new CustomEvent("kivalaszt", { detail: this.#obj.id })
            window.dispatchEvent(esemeny)
        })

    }
}