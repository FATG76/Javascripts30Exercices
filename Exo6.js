//Boucle While: saisie d'un chiffre et vérification de sa valeur
var  readline = require("readline-sync");
var nombreSaisi = readline.question("Quel nombre voulez vous saisir ? ");
var fin = false
while(fin === false){
    if(isNaN(nombreSaisi)){
        console.log("Veuillez recommencer la saisie, vous devez saisir un nombre")
        nombreSaisi = readline.question("Quel nombre voulez vous saisir ? ");
    }
    else{
        
        fin = true
    }

}
console.log("Le chiffre saisi est " +nombreSaisi)