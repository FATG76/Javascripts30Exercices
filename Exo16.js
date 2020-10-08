//var readline = require("readline-sync");
var randomNumber = Math.floor(Math.random() *20);
//var nombreChoisi = parseInt(readline.question("Choisiser un nombre aleatoire"))
console.log(randomNumber);
if(randomNumber <= 7){
    console.log("petit");   
}
else if(randomNumber<= 15){
    console.log("moyen" );
}
else {
    console.log("grand");
}
    


