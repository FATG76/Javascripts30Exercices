//Table de multiplication du nombre saisi pour les 10 premiers nombres
var readline = require("readline-sync");
var chiffreSaisi = parseInt(readline.question("Quelle table de multiplication voulez vous afficher ? "));

for (var i = 1; i<=10; i++){
    var multiplication = chiffreSaisi*i;
    console.log(chiffreSaisi+ " * " +i+ " = " +multiplication);
}
