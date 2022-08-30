var counterVal = 0;
var co

function incrementClick() {
    updateDisplay(++counterVal);
}



function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}