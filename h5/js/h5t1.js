const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')

button1.addEventListener("click", event => {
    let num1 = document.getElementById("field1").value;
    let num2 = document.getElementById("field2").value;
    let result = calc(+num1, +num2, "+");
    let resDisplay = document.getElementById("result1");
    resDisplay.innerHTML = result;
})

button2.addEventListener("click", event => {
    let num1 = document.getElementById("field3").value;
    let num2 = document.getElementById("field4").value;
    let operand = document.getElementById("operand").value;
    if ((num1) && (num2)) {
        let result = calc(num1, num2, operand);
        let resDisplay = document.getElementById("result2");
        resDisplay.innerHTML = result;
    }
})

// Calculate function for multiple operands
function calc (value1, value2, op) {    
    let result = Number(eval(value1 + op + value2));
    if ((op === "==") || (op === "===")) {
        return Boolean(result)
    }        
    return result.toFixed(2);    
}

/**
 * Input-fieldi stringinä
 * html collection ja for loop joka napille
 * 
 */