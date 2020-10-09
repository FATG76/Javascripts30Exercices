//Factoriel d'un nombre
var readline = require("readline-sync");
var chiffreSaisi = parseInt(readline.question("Factorielle de :  "));
produit = 1;
for(var i=1; i<=chiffreSaisi; i++){
    produit *=i;
    console.log(`Etape ${i}: ${produit}`);
}
console.log(`Le résultat du factorielle de ${chiffreSaisi} est ${produit}`);