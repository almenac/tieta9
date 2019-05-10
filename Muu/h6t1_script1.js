let input = document.getElementById("input");
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
        input.textContent = "";
        for (let i=0; i < data.length; i++) {
            let dataJSstring = JSON.stringify(data[i]);
            input.innerHTML += dataJSstring + "<br><br>";
        }
        
    }
) 
.catch(
    function(err) {
        console.log('Fetch Error :', err);
    }

)