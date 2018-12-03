console.log("allo");
console.log("hello \n you");

var name = prompt("enter name!");
sayHello();

var upperCase = name.toUpperCase();
console.log(upperCase);

for(var i = 0; i < name.length; i++) {
	console.log(name[i]);
}

function sayHello() {
	console.log("Hello " + name + " !");
}

var garcon = {
	init: function (nom, age, jeuxPrefere){
		this.nom = nom,
		this.age = age,
		this.jeuxPrefere = jeuxPrefere
	},
	decrit: function(){
		var description =  this.nom + " a " + this.age + " ans et aime jouer à " + this.jeuxPrefere;
		return description;
	}
}
var amoureux = Object.create(garcon);
amoureux.init("Antoine", 24, "Smash");

var lamidemonamoureux = Object.create(garcon);
lamidemonamoureux.init("Brunoooooo", 24, "Smash");
lamidemonamoureux.jeuxPrefere = "rien";

console.log (amoureux.decrit());
console.log (lamidemonamoureux.decrit());

/*var amoureux = {
	nom: "Antoine",
	age: 24,
	jeuxPrefere: "Smash",
	decrit: function(){
		var description =  this.nom + " a " + this.age + " ans et aime jouer à " + this.jeuxPrefere;
		return description;
	}
}
console.log (amoureux.decrit());

var lamidemonamoureux = Object.create(amoureux);
lamidemonamoureux.nom = "Bruno!!!!!";

console.log (lamidemonamoureux.decrit());*/