var counterVal = 0;
var counterVal2 = 0;
var counterVal3 = 0;

function incrementClick() {
    updateDisplay(++counterVal);
    
}

function incrementClick2() {
    updateDisplay(++counterVal2);
    
}

function incrementClick3() {
    updateDisplay(++counterVal3);
    
}



function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
    document.getElementById("count-label-2").innerHTML = val;
    document.getElementById("count-label-3").innerHTML = val;
}


























//out: fuera de 
//over: sobre de 
// bobleclick: ha hecho doble click
//click editar: se edita 


 /*  var count = 0;
    var countElement = document.querySelector("#count")

    console.log(countElement);


    function incrementClick() {
    count++;
    countElement.innerText = "like" + count;
    }
*/