//Saisie clavier pour afficher la puissance d'un nombre
var readline = require("readline-sync");
//console.log("enter un nombre n");
var x = 2;
var n = parseInt(readline.question("la puissance voulue ?"));
console.log(x + " à la puissance "+ n + " = " +Math.pow(x,n));
