







const button = document.querySelector('button');

button.addEventListener('click', event => {
    let num1 = document.getElementById("field1").value;
    let num2 = document.getElementById("field2").value;
    let result = +num1 + +num2;
    let resDisplay = document.getElementById("result");
    resDisplay.innerHTML = result;
})