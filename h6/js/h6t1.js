let dataSource = "https://restcountries.eu/rest/v2/all";

fetch(dataSource)
    .then(function(response) {                
        return response.json();
    })
    .then(function(myJson) {        
        for (i = 0; i < myJson.length; i++) {
            addItem(JSON.stringify(myJson[i]));
        }        
    });

addItem = (item) => {
    let div = document.querySelector("#display");
    let p = document.createElement("p");
    let text = document.createTextNode(item);
    p.appendChild(text);
    div.appendChild(p);
}

