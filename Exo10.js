//Objet: permettre la saisie des informations d'un objet
var readline = require("readline-sync");
var personnage = {};
personnage.nom = readline.question("Quel est votre nom ? ");
personnage.age = parseInt(readline.question("Quel est votre age ? "));
personnage.carac = {};
personnage.carac.force = 7;
personnage.carac.agilite = 5;
personnage.carac.yeux = "bleu";

console.log("----------------------------------");
console.log("Afficher l'objet");
console.log(personnage);