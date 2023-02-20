class Sein{
    constructor(protected plaat:number, protected vuuk:number,protected laius:number,protected pikkus:number){}

    

    plaadid_kokku(){
        let laius_plaadid:number= Math.ceil((this.laius+this.vuuk)/(this.plaat+this.vuuk));
        let pikkus_plaadid:number= Math.ceil((this.pikkus+this.vuuk)/(this.plaat+this.vuuk));
        let plaadid_kokku:number= laius_plaadid*pikkus_plaadid;
        return "Pikkupidi läheb "+ pikkus_plaadid+" plaati vaja\nLaiupidi läheb "+ laius_plaadid+" plaati vaja\nVaja läheb vähemalt "+ plaadid_kokku+" plaati";
    }

    porand():number{
        return (this.laius*this.pikkus/1000000);
    }

    segu(){
        let kotid:number=Math.ceil(this.porand()/5);
        return this.porand()+" ruutmeetri põranda jaoks läheb vaja "+this.porand()*5+"kg segu\n"+kotid+" kotti(25kg) või "+Math.ceil(this.porand()) +" kotti(5kg) segu";
    }
}

let esimene:Sein=new Sein(195, 5, 4000, 6000);
console.log(esimene.plaadid_kokku());
console.log(esimene.segu());