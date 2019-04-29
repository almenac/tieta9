// Select rows to array
rows = document.querySelectorAll(".rivi");

// Loop through rows
for (let i = 0; i < rows.length; i++) {
    // Add event listener to each row
    rows[i].addEventListener("click", event => {        
        if (rows[i].classList.contains("poistettava")) {
            promptDelete(rows[i]);
        }
        else if (rows[i].classList.contains("huomio")) {
            rows[i].classList.remove("huomio");            
            rows[i].classList.add("poistettava");            
        } 
        else if (rows[i].classList.contains("normaali")) {
            rows[i].classList.add("huomio");
        }
    });
}

function promptDelete (item) {
    let resp = confirm("Poistetaanko rivi?");
    
    if(resp == true) {        
        item.parentNode.removeChild(item);        
    }
    else {
        item.classList.remove("poistettava")        
    }
}

