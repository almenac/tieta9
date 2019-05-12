let dataSource = "./data/visa1.json";

fetch(dataSource)
.then(function(response) {                
    return response.json();
})
.then(function(data) {        
    console.log(data.questions[0].question.toString());
});

