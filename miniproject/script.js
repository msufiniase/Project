// Style the background
document.body.style.backgroundColor = "lightblue";

 
// Have the words be clicked when they are chosen
let redButton = document.querySelector("#red-choice");
redButton.addEventListener("click", function(event){

  applyColor("red", document.querySelector(".red-card"));
  let h2 = document.querySelector('h2');
 h2.innerText = "Reset these cards";

});
let blueButton = document.querySelector("#blue-choice");
blueButton.addEventListener("click", function(){
  secondaryColor("blue", document.querySelector(".blue-card"));
  
});
// Retrieve Cards from id using DOM of the canvas

function applyColor(color, element){
  element.style.backgroundColor = color;
  
}
 function secondaryColor(color, secondaryElement){
   secondaryElement.style.backgroundColor = color;
 }

// reset button



