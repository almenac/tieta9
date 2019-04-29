const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')

// Input field add
button1.addEventListener("click", event => {
    let num1 = document.getElementById("field1").value;
    let num2 = document.getElementById("field2").value;
    let operand = "+";
    let resDisplay = document.getElementById("result1");
    
    if (!num1 && !num2) {
        resDisplay.innerHTML = "Enter numbers to both fields."
    } else if (!num1 || !num2) {    
        resDisplay.innerHTML = "Enter number to the other field."
    } else if (num1 && num2) {    
        let result = calc(num1, num2, operand);
        resDisplay.innerHTML = result;
    }
})

// Input field multiple operands
button2.addEventListener("click", event => {
    let num1 = document.getElementById("field3").value;
    let num2 = document.getElementById("field4").value;
    let operand = document.getElementById("operand").value;
    let resDisplay = document.getElementById("result2");
    
    if (!num1 && !num2) {
        resDisplay.innerHTML = "Enter numbers to both fields."
    } else if (!num1 || !num2) {    
        resDisplay.innerHTML = "Enter number to the other field."
    } else if (num1 && num2) {    
        let result = calc(num1, num2, operand);
        resDisplay.innerHTML = result;
    }
});

// Full calculator
let calcButtons = document.querySelectorAll("td > button");
let calcDisplay = document.querySelector("#calcDisplay");
resString = "";

for(let i = 0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener("click", event => {        
        if (calcButtons[i].value === "=") {
            result = calcString(resString);
            clearDisplay();
            addToDisplay(result);
        } else if (calcButtons[i].value === "clear") {
            clearDisplay();
        } else {
            addToDisplay(calcButtons[i].value);        
        }
    })
}

// Add to display function
function addToDisplay (value) {
    resString += value;
    calcDisplay.value = resString;
}

// Clear display
function clearDisplay () {
    resString = "";
    calcDisplay.value = resString;
}

// Calculation method for strings
function calcString (argString) {
    let result = eval(argString);
    return result.toFixed(2);
}

// Calculate function for multiple operands
function calc (value1, value2, op) {    
    let result = Number(eval(value1 + op + value2));
    if ((op === "==") || (op === "===")) {
        return Boolean(result)
    }        
    return result.toFixed(2);    
}
