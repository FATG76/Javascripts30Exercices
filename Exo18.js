//Programme qui additionne les 10 premiers nombres
var somme = 0;
for(var i=1; i<=10; i++){
    somme = somme + i
    console.log(`Eatape ${i} : ${somme}`);
}
console.log(`Le resultat des 10 premiers chiffres est ${somme}`)