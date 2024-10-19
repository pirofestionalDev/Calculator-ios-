const display = document.getElementById(`display`);//the operation class
//inputValue, clearDisplay, calculate, backSpace
function inputValue(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function backSpace(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch{
        display.value = "Too smart Genius";
    }
}
