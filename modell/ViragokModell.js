import { viragLista } from "../adat.js";
export default class ViragokModell{
    #viragLista=[]
    constructor(){
        this.#viragLista=viragLista;
    }

    getLista(){
        /* így nem referenciát adok át, hanem egy másolatot a listámról.  */
        //return [...this.#viragLista]; listáról készítettem mélymásolatot, de a lista elemei is objektumok, és azokról is kell mélymásolat
        return JSON.parse(JSON.stringify(this.#viragLista));
    }

    kedvencModosit(id){
        /* Módosítanunk kell a viráglistának a megfelelő id-hez tartotzó elemét */
        console.log(id)
        let obj = this.#viragLista.find((elem) => elem.id==id);
        obj.kedvenc=true;
        console.log(this.#viragLista)
    }
}

/* feladatok: 
1. ViragokModell elkésztése
VirágokContlorrel elkészítsd el


2. 
AdminViragokModell elkészítése
AdminViragokController elkészítése
*/