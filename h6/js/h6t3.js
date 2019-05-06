let dataSource = "https://restcountries.eu/rest/v2/all";

// Catch input when user presses enter

// Fetch data, loop through and find search item

// Array of neighbouring countries
let neighbours = [];

// Pick neighbouring countries' alpha3 codes to neighbours array

// Save the size of the neighbours list

// Append original country and neighbouring countries array in ul under the input field
// Maalla {country} on {neighbours.length} naapuria, ja ne ovat:
// <li>neighbours[i].name</li> 



fetch(dataSource)
    .then(function(response) {                
        return response.json();
    })
    .then(function(myJson) {        
        for (i = 0; i < myJson.length; i++) {
            let country = myJson[i].name.toString();
            let capital = myJson[i].capital.toString();
            addItem(country, capital);
        };        
    });

addItem = (country, capital) => {     
    // Save the ul element
    let ul = document.querySelector("#display");
    // Create li element
    let li = document.createElement("li");
    // Create span for country
    let countrySpan = document.createElement("span");
    // Create span for capital
    let capSpan = document.createElement("span");
    // Create text for country
    let countryText = document.createTextNode(country + ": ");
    // Create text for capital
    let capText = document.createTextNode(capital);
    // Add text to country span
    countrySpan.appendChild(countryText);
    // Add text to capital span
    capSpan.appendChild(capText);
    // Set class for the country span
    countrySpan.setAttribute("class", "country");    
    // Add country span to the li
    li.appendChild(countrySpan);
    // Add capital span to the li
    li.appendChild(capSpan);
    // Add li to the ul
    ul.appendChild(li);
}

