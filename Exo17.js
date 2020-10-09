//Programme qui force la saisie d'un chiffre

var readline = require("readline-sync");
var nombreSaisi = 0;
do {
    console.log("Vous n'avez pas saisi le bon chiffre");
    nombreSaisi = parseInt(readline.question("Saisir le chiffre 3 : "));
    
    
}while(nombreSaisi !==3)
console.log("Bravo! vous avez saisi le chiffre 3");
    


// var nombreSaisi = parseInt(readline.question("Saisir le chiffre 3 : "));

// while(nombreSaisi!==3){
//     console.log("Vous n'avez pas saisi le bon chiffre");
//     nombreSaisi = parseInt(readline.question("Saisir le chiffre 3 : "));
    
// }
// console.log("Bravo! vous avez saisi le chiffre 3 ");