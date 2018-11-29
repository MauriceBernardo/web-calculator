var storedValue = 0;
var screen = document.querySelector(".result");
var result = "0";
var lastOperand = null;

// init();


$("button").click(function(){
    handleClick($(this).text());
    $(".result").text(result);
});


// function init(){
//     document.querySelector(".calculator").addEventListener("click", 
//     function(event) {
//         if(event.target.className !== "result"){
//             handleClick(event.target.innerText);
//         }
//     });
// }

function handleClick(text){
    if(isNaN(parseInt(text))){
        handleSymbol(text);
    } else {
        handleNumber(text);
    }

    rerender();
}

function handleSymbol(symbol){
    switch (symbol) {
        case "C":
            result = "0";
            storedValue = 0;
            break;
    
        case "←":
            if (result.length == 1) {
                result = "0";
            } else {
                result = result.substring(0,result.length-1);
            }
            break;

        case "=":
            if(lastOperand === null){
                result = "0";
            }
            applyMath(lastOperand);
            lastOperand = null;
            result = storedValue.toString();
            storedValue = 0;
            break;
        
        case "+":
        case "-":
        case "x":
        case "÷":
            handleMath(symbol);
            break;
    }
}

function handleNumber(number){
    if(result === "0"){
        result = number;
    } else {
        result += number;
    }
}

function handleMath(operand){
    if(parseInt(result) === 0){
        result = "0";
    }

    if(storedValue === 0){
        storedValue = parseInt(result);
    } else {
        applyMath(operand);
    }

    lastOperand = operand;
    result = "0";
}

function applyMath(operand){
    switch (operand) {
        case "+":
            storedValue += parseInt(result);
            break;
        case "-":
            storedValue -= parseInt(result);
            break;
        case "x":
            storedValue *= parseInt(result);
            break;
        case "÷":
            storedValue /= parseInt(result);
            break;
    }
}

function rerender() {
    screen.innerText = result;
} 
