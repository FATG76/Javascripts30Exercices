const monDivResulta = document.querySelector("div");
function TableMultiplication(){
    var txt =""
    for(var i=1; i<=10; i++){
        
        txt+=`3 * ${i} = ${3*i} <br/>`;
        
    }
    monDivResulta.innerHTML = txt;
}
