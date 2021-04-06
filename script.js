// Write your JavaScript code here!

window.addEventListener("load",function(){

   let missionPick = Math.floor(Math.random() * 6)

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(responce){

      responce.json().then(function(json){

         let div = document.getElementById("missionTarget");

         div.innerHTML=`

         <h2>Mission Destination</h2>

         <ol>
            <li>Name: ${json[missionPick].name}</li>
            <li>Diameter: ${json[missionPick].diameter}</li>
            <li>Star: ${json[missionPick].star}</li>
            <li>Distance from Earth: ${json[missionPick].distance}</li>
            <li>Number of Moons: ${json[missionPick].moons}</li>
         </ol>

         <img src="${json[missionPick].image}">
         `

      });

   });
   
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {

      event.preventDefault();

      let pilotN = document.querySelector("input[name=pilotName]");
      let pilotNVal = pilotN.value;
      let pilotNum = Number(pilotNVal);

      let fuel = document.querySelector("input[name = fuelLevel]");
      let fuelVal = fuel.value;
      let fuelNum = Number(fuelVal);

      let coPilotN = document.querySelector("input[name=copilotName]");
      let coPilotNVal = coPilotN.value;
      let coPilotNum = Number(coPilotNVal);

      let cargo = document.querySelector("input[name=cargoMass]");
      let cargoVal = cargo.value;
      let cargoNum = Number(cargoVal);

      if(pilotNVal === '' || fuelVal === '' || coPilotNVal === '' || cargoVal === ''){

         alert('ALL FIELDS ARE REQUIRED.');
         
      };

      if(isNaN(fuelNum) === true || isNaN(cargoNum) === true || isNaN(pilotNum) === false || isNaN(coPilotNum) === false){

         alert('ENTER VALID INPUTS.');

      };

      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNVal} is ready for luanch`;
      document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${coPilotNVal} is ready for luanch`;

      if(cargoNum > 10000){

         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = 'Shuttle not ready for launch';
         document.getElementById("cargoStatus").innerHTML = 'Cargo mass is too high for launch';

      }

      if(fuelNum < 10000){

         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = 'Shuttle not ready for launch';
         document.getElementById("fuelStatus").innerHTML = 'Fuel level is too low for launch';

      }

      else{

         document.getElementById("launchStatus").style.color = "green";
         document.getElementById("launchStatus").innerHTML = 'Shuttle is ready for launch';

      }

   });
      
});