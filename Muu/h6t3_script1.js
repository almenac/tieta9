'use strict'

let input = document.getElementById("input");
let output = document.getElementById("output");
input.addEventListener('change', haeNaapurit);

function haeNaapurit() {
    let dataSource = "https://restcountries.eu/rest/v2/all";
    fetch (dataSource)
    .then (
        function(response) {
            if (response.status !== 200) {
                console.log('Could not get the data. Status Code: ' + response.status);
                return;
            }
            return response.json();
        }
    )
    .then(
        function(data) {
            
            let maa = _.where(data, {name:input.value});
            console.log(maa);
            let naapurit = maa[0].borders;

            let text = "Maalla '" + maa[0].name + "' on " + naapurit.length + " naapuria, ja ne ovat:";
            let newDiv = document.createElement("div");
            let textNode = document.createTextNode(text);
            newDiv.appendChild(textNode);
            

            let newList = document.createElement("ul");
            for (let i = 0; i < naapurit.length; i++) {
                console.log(_.where(data, {alpha3Code:naapurit[i]}));
                let naapuri = _.where(data, {alpha3Code:naapurit[i]});
                let newLi = document.createElement("li");
                newLi.appendChild(document.createTextNode(naapuri[0].name));
                newList.appendChild(newLi);
            }

            newDiv.appendChild(newList);
            output.appendChild(newDiv);
        }
    ) 
    .catch(
        function(err) {
            console.log('Fetch Error :', err);
            let newDiv = document.createElement("div");
            let textNode = document.createTextNode("Nimellä " + input.value + " ei löydy tietoja.");
            newDiv.appendChild(textNode);
            output.appendChild(newDiv);
        }
    )
}
