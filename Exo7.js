//Fonction et modulo. Fonction qui vérifie si un chiffre est divisible par 3.
var readline = require("readline-sync");
var chiffre = parseInt(readline.question("Entrer un chiffre "));
var diviseur = parseInt(readline.question("Entrer un diviseur "));
var resteDivision = chiffre%diviseur;
var resultat = chiffre/diviseur;
DiviseurDunChiffre(chiffre);
//console.log(reponse);
function DiviseurDunChiffre(chiffre){
    if(resteDivision === 0){
        console.log("Le resultat de " +chiffre + " / "+ diviseur+ " = " +resultat);

    }
    else{
        console.log("Le chiffre " +chiffre+ " n'est pas divisible par " +diviseur);
    }
}

// var c1 = 123;
// var c2 = 20
// DiviseurDunChiffre(c1);
// DiviseurDunChiffre(c2);
// function DiviseurDunChiffre(chiffre){
//     if(chiffre%3 === 0){
//                 console.log("Le resultat de " +chiffre + " / 3 = " +(chiffre/3));
        
//             }
//             else{
//                 console.log("Le chiffre " +chiffre+ " n'est pas divisible par 3" );
//             }
// }

    