class Veekann{ //sees olev vesi ml ja selle temp
	 constructor(protected maht:number, protected temp:number){}
	
	kas_on_80(){
		if(this.temp<80){return "Vee temperatuur on alla 80 kraadi\nTemperatuur on hetkel "+this.temp+" kraadi";}
		else if(this.temp>=80){return "Vee temperatuur on vähemalt 80 kraadi\nTemperatuur on hetkel "+this.temp+" kraadi";}	
		else{return "midagi on andmetega mäda!!!"}
	}
	
	mitu_sek(){
		let sek:number=this.maht*4.19*(80-this.temp)/1200;
		return sek.toFixed(1)+"sekundit";
	}
	
	vala_vett(uus_maht:number, uus_temp:number){
		this.temp= ((this.maht*this.temp)+(uus_maht*uus_temp))/(this.maht+uus_maht);
		this.maht=this.maht+uus_maht;
		return "Kannus olev uus vee kogus "+this.maht+"\nUus vee temperatuur "+this.temp.toFixed(1);
		
	}
}

let kann1:Veekann=new Veekann(500, 30);
console.log(kann1.kas_on_80());
console.log(kann1.mitu_sek());
console.log(kann1.vala_vett(300, 5));
