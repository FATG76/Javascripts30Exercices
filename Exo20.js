var tab = [2, 6, 10, 3, 8, 7, 20];
var somme = 0;
for(var i = 0; i<tab.length; i++){
    if(tab[i]%2 === 0){
        somme +=tab[i];
        console.log(`itération : ${i} : ${somme}`);
    }
     else          
          console.log(`itération : ${i} : non paire`);

}
console.log(`Le total est de ${somme}`);

