console.log("allo");
console.log("hello \n you");
//commentaire
console.log (4*2);
var name=prompt("enter name!");
alert ("hello"+ name);
var number=Number (prompt("enter a number"));
if (number>1){
	console.log (number + "plus grand que 1");
}else if (number<1){
	console.log (number+ " plus petit que 1");
}
else{
	console.log (number+"cest 1");
}
var number2= Number (prompt("enter un autre chiffre"));
if ((number2 >1) && (number2<100)){
console.log (number2+ "entre 1 et 100 exclusivement");
}
else{
	console.log (number2+"c'Est autre");
}	
var number3= Number (prompt("encore"));
while (number3<100){
console.log (number3);
number3++;
}
for (number4=100; number4<105; number4++){
	console.log (number4);
}
function sayHello (){
	console.log ("Hello! "+ name + " !");
}
sayhello ();
