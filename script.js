window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            let container = document.getElementById("container");
            let astronautHTML= "";
            let heading = document.getElementById("heading");

            json.sort(function(a,b){
                return b.hoursInSpace - a.hoursInSpace;
            });

            for (let i = 0; i <json.length; i++){
                astronautHTML += displayAstronaut(json[i]);
                
            }
            container.innerHTML = astronautHTML;
            heading.innerHTML = heading.innerHTML + ` (${json.length})`;
        });
    });

    function displayAstronaut(astronaut) {
        return `<div class = "astronaut">`+
            `<div class = "bio">` + 
            `<h3>${astronaut.firstName} ${astronaut.lastName}</h3>` + 
            `<ul>`+ 
            `<li> Hours in Space: ${astronaut.hoursInSpace} </li>` + 
            `<li> Active: ${astronaut.active} </li>` +
            `<li> Skills: ${astronaut.skills.join(", ")} </li>` +
            `</ul>` + `</div>` + `<img class = "avatar" src = ${astronaut.picture}>`+ `</div>` +`</div>`

    };
});

