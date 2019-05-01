// Select rows to array
rows = document.querySelectorAll(".rivi");

addRowListeners();

// Loop through rows
function addRowListeners () {
    for (let i = 0; i < rows.length; i++) {
        // Add event listener to each row
        rows[i].addEventListener("click", event => {        
            // Removal
            if (rows[i].classList.contains("poistettava")) {
                promptDelete(rows[i]);
            }
            // Change classes
            else if (rows[i].classList.contains("huomio")) {
                rows[i].classList.remove("huomio");            
                rows[i].classList.add("poistettava");            
            } 
            // Add huomio class
            else if (rows[i].classList.contains("normaali")) {
                rows[i].classList.add("huomio");
            }
        });
    }
}

// Handling new items
let fields = document.getElementsByClassName("rivi uusi");

for (let i = 0; i < fields.length; i++) {
    fields[i].addEventListener("keypress", e => {
        if(e.keyCode == 13) {
            let content = fields[i].value;
            console.log("Enter was pressed!");
            console.log(content);
            addItem(content);
            fields[i].value = "";             
        }
    });
}

addItem = (item) => {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    let text = document.createTextNode(item);
    li.appendChild(text);
    li.classList.add("rivi", "normaali");
    ul.appendChild(li);
    addRowListeners(); // No work
}

promptDelete = (item) => {
    let resp = confirm("Poistetaanko rivi?");
    
    if(resp == true) {        
        item.parentNode.removeChild(item);        
    }
    else {
        item.classList.remove("poistettava");
    }
}

