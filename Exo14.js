const monButton = document.querySelector("button");
const monDivResulta = document.querySelector("div");
monButton.addEventListener("click", function(){
    var txt =""
    for(var i=1; i<=10; i++){
                
         txt+=`3 * ${i} = ${3*i} <br/>`;
              
     }
    monDivResulta.innerHTML = txt;
})