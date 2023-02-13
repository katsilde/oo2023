function plaadid():number{

    let klaviatuur=require("readline-sync");
    //hetkel sisesta andmed ühes mõõtühikus!!!
    let plaat:number=klaviatuur.question("Plaadi laius mm: ");
    let vuuk:number=klaviatuur.question("Vuugivahe on mm: ");
    let laius:number=klaviatuur.question("Põranda laius on mm: ");
    let pikkus:number=klaviatuur.question("Põranda pikkus on mm: ");
    
    //teisendame
    //plaat=plaat/100;
    //vuuk=vuuk/1000;

    //arvutame plaatide koguseid
    let laius_plaadid:number= Math.ceil((laius+vuuk)/(plaat+vuuk));
    console.log(laius-(-vuuk));
    let pikkus_plaadid:number= Math.ceil((pikkus+vuuk)/(plaat+vuuk));
    let plaadid_kokku:number= laius_plaadid*pikkus_plaadid;

    //Palju plaate läheb
    console.log("\nPikkupidi läheb "+ pikkus_plaadid+" plaati vaja");
    console.log("Laiupidi läheb "+ laius_plaadid+" plaati vaja");
    console.log("Vaja läheb vähemalt "+ plaadid_kokku+" plaati");
    return plaadid_kokku;
}

console.log(plaadid());

//väljatrükk

/* Plaadi laius cm: 195
    Vuugivahe on mm: 5
    P├Ąranda laius on m: 400
    P├Ąranda pikkus on m: 600
    4005

    Pikkupidi läheb 4 plaati
    Laiupidi läheb 3 plaati
    Vaja läheb vähemalt 12 plaati */
