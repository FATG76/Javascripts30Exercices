var nbClick = 1;
const monDiv = document.querySelector("div");
function incrementer(){
    
    monDiv.innerHTML= `Vous avez cliquez ${nbClick} fois`;
    nbClick++;
}