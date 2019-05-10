var classname = document.getElementsByClassName("rivi");

var myFunction = function() {
    let selected = this;
    var attribute = this.getAttribute("class");
    if (attribute == "rivi normaali") {
        selected.setAttribute("class", "rivi huomio");
    } else if (attribute == "rivi huomio") {
        selected.setAttribute("class", "rivi poistettava");

    } else if (attribute == "rivi poistettava") {
        let x = confirm("poistetaanko rivi?");
        if (x) {
            let parent = selected.parentNode;
            parent.removeChild(this);
        } else {
             selected.setAttribute("class", "rivi normaali");
        }
    }
};

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunction, false);
}

let input = document.getElementById("syote");

input.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        let syote = document.getElementsByClassName('rivi uusi')[0].value;

        let uusi = document.createElement("li");
        uusi.className="rivi normaali";
        let teksti = document.createTextNode(syote);
        uusi.appendChild(teksti);
        let parentDiv = document.getElementById("kauppalista").getElementsByTagName('ul')[0];
        parentDiv.appendChild(uusi);

        uusi.addEventListener('click', myFunction, false);
    }
});