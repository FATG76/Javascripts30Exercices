//Tests et Fonctions. Vérifier le nombre de caractere d'un string
var readline = require("readline-sync");
var motPasseEnParametre = readline.question("Passer un mot: ");
var numbreCaractere = motPasseEnParametre.length
AfficherLeNombreDeCaractere(motPasseEnParametre);
function AfficherLeNombreDeCaractere(motPasseEnParametre){
    if(numbreCaractere < 8){
        console.log(`Le mot contient ${numbreCaractere} caracteres`);
    
    }
    else{
        console.log("Le mot fait plus de 8 caracteres");
    }
}
