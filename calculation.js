/* Variable for vanilla and jQuery */

// var storedValue = 0;
// var screen = document.querySelector(".result");
// var result = "0";
// var lastOperand = null;

/* code for jQuery */

// $("button").click(function(){
//     handleClick($(this).text());
//     $(".result").text(result);
// });

new Vue({
    el: ".calculator",
    data(){
        return {
            result: 0,
            lastOperand : null,
            storedValue : 0
        }
    },
    methods: {
        handleClick(e){
            if(isNaN(parseInt(e.target.innerText))){
                this.handleSymbol(e.target.innerText);
            } else {
                this.handleNumber(e.target.innerText);
            }
        },
    

        handleSymbol(symbol){
            switch (symbol) {
                case "C":
                    this.result = 0;
                    this.storedValue = 0;
                    break;
            
                case "←":
                    if (this.result.length == 1) {
                        this.result = 0;
                    } else {
                        this.result = this.result.substring(0,this.result.length-1);
                    }
                    break;
        
                case "=":
                    if(this.lastOperand === null){
                        this.result = "0";
                    }
                    this.applyMath(this.lastOperand);
                    this.lastOperand = null;
                    this.result = this.storedValue.toString();
                    this.storedValue = 0;
                    break;
                
                case "+":
                case "-":
                case "x":
                case "÷":
                    this.handleMath(symbol);
                    break;
            }
        },
        
        handleNumber(number){
            if(this.result === 0){
                this.result = number;
            } else {
                this.result += number;
            }
        },
        
        handleMath(operand){
            if(parseInt(this.result) === 0){
                this.result = 0;
            }
        
            if(this.storedValue === 0){
                this.storedValue = parseInt(this.result);
            } else {
                this.applyMath(operand);
            }
        
            this.lastOperand = operand;
            this.result = 0;
        },
        
        applyMath(operand){
            switch (operand) {
                case "+":
                    this.storedValue += parseInt(this.result);
                    break;
                case "-":
                    this.storedValue -= parseInt(this.result);
                    break;
                case "x":
                    this.storedValue *= parseInt(this.result);
                    break;
                case "÷":
                    this.storedValue /= parseInt(this.result);
                    break;
            }
        },
    }

})


/* code for vanilla */

// init();
// function init(){
//     document.querySelector(".calculator").addEventListener("click", 
//     function(event) {
//         if(event.target.className !== "result"){
//             handleClick(event.target.innerText);
//         }
//     });
// }



