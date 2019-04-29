const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')

// Calculate function for multiple operands
function calc (valueString) {    
    let result = Number(eval(valueString));
    if ((op === "==") || (op === "===")) {
        return Boolean(result)
    }        
    return result.toFixed(2);    
}

// Input field add
button1.addEventListener("click", event => {
    let num1 = document.getElementById("field1").value;
    let num2 = document.getElementById("field2").value;
    let result = calc(num1 + "+" + num2);
    let resDisplay = document.getElementById("result1");
    resDisplay.innerHTML = result;
})

// Input field simple calc
button2.addEventListener("click", event => {
    let num1 = document.getElementById("field3").value;
    let num2 = document.getElementById("field4").value;
    let operand = document.getElementById("operand").value;
    if ((num1) && (num2)) {
        let result = calc(num1, num2, operand);
        let resDisplay = document.getElementById("result2");
        resDisplay.innerHTML = result;
    }
});

// Full calculator
let calcButtons = document.querySelectorAll("td > button");
let calcDisplay = document.querySelector("#calcDisplay");
resString = "";

for(let i = 0; i < calcButtons.length; i++) {
    calcButtons[i].style.color = "blue";
    
    calcButtons[i].addEventListener("click", event => {        
        if (calcButtons[i].value === "=") {
            calc(resString);
        }
        addToDisplay(calcButtons[i].value);        
    })
}

// Add to display function
function addToDisplay (value) {
    resString += value;
    calcDisplay.value = resString;
}








