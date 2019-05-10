'use strict'
let output = document.getElementById("output");
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
        
        for (let i=0; i < data.length; i++) {
            // uusi <span>-olio maalle, jolle annetaan luokka "country", ja asetetaan se divin child-olioksi
            let span1 = document.createElement("SPAN");
            span1.setAttribute("class", "country");
            output.appendChild(span1);
            // uusi <span>-olio kaupungille, ja asetetaan se divin child-olioksi
            let span2 = document.createElement("SPAN");
            output.appendChild(span2);

            let name = (data[i].name);
            span1.textContent = name + ": ";
            let capital = (data[i].capital);
            span2.innerHTML = capital + "<br>";
            
        }
        
    }
) 
.catch(
    function(err) {
        console.log('Fetch Error :', err);
    }

)