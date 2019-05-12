// Div container in html
const container = document.querySelector("#container");
// Restcountries data source
const dataSource = "https://restcountries.eu/rest/v2/all";

// Get data and handle it
fetch(dataSource)    
// Error if data not found in source
.then (function(response) {
    if (response.status !== 200) {
        console.log("Data not found! Code: " + response.status);
        return;
    }
    return response.json();
})
// Data handling
.then(function(data) {        
    // Limit countries to those with at least two border countries
    const validCountries = data.filter(country => country.borders.length > 1);
    // Take three random countries from valid country list
    let startingCountries = _.sample(validCountries, 3);    
    // Make a temporary document fragment to contain all data to be inserted simultaneusly    
    const frag = document.createDocumentFragment();
    // Loop through starting countries
    startingCountries.forEach(country => {
        // Build country with buildCountryElement function and append to fragment        
        frag.append(buildCountryElement(country));
    });
    // Append the fragment to container div with one go
    container.appendChild(frag);    
})
// Error handling
.catch(function(err) {
    console.log("Fetch catch clause", err);    
});

// Build the country DOM element
function buildCountryElement(country){
	// Div to house country data
    const container = document.createElement("div");
    // Append image with separate function and flag data from country data
    container.appendChild( createImgElement(country.flag) );
    // Append name data, currency and borders with corresponding data as arguments
    container.appendChild( createDataElement(country.name + ":", country.capital) );
    container.appendChild( createDataElement("Currency:", country.currencies[0].name + " (" + country.currencies[0].code + ")") );
    container.appendChild( createDataElement("Borders:", country.borders.join(", ") + ".") );
    return container;
}

// Helper function to create image element inside a div
function createImgElement(src){
    // Container div for the flag image
    const container = document.createElement('div');
    // Create image element
    const img = document.createElement('img');
    // Set image source attribute to match address in argument
    img.src = src;
    // Resize the image to fit to screen better
    img.style.width = '200px';
    // Append img element to container div
    container.appendChild(img);
    // Return container div
    return container;
}

// Helper function to create data element inside a div
function createDataElement(boldText, notBoldText){
    // Container div for the data
    const container = document.createElement('div');
    // Container for bolded text
    const strong = document.createElement('div');
    // Container for the other text
    const weak = document.createElement('div');
    // Add info class to data container for bottom margin
    container.classList.add('info');
    // Add head class to strong div to bold text
    strong.classList.add('head');
    // Add both elements to container div
    container.appendChild(strong);
    container.appendChild(weak);
    // Place argument text to right elements
    strong.textContent = boldText;
    weak.textContent = notBoldText;
    // Return container div
    return container;
}

