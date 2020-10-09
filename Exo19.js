//Factoriel d'un nombre
var readline = require("readline-sync");
var chiffreSaisi = parseInt(readline.question("Factorielle de :  "));
// var produit = 1;
// for(var i=1; i<=chiffreSaisi; i++){
//     produit *=i;
//     console.log(`Etape ${i}: ${produit}`);
// }
// console.log(`Le résultat du factorielle de ${chiffreSaisi} est ${produit}`);


//Fonction recursive

var resultat = factorielle(chiffreSaisi);
console.log(`Le résultat du factorielle de ${chiffreSaisi} est ${resultat}`);

function factorielle(chiffreSaisi){
    if(chiffreSaisi>1){
        return chiffreSaisi*factorielle(chiffreSaisi-1);
    }
    else{
        return 1;
    }


}


