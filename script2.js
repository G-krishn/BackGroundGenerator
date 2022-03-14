var selectElement=document.querySelector("body");
var computedStyle=getComputedStyle(body,null); //nul is for pseudo elements  body element is where our targeted color property is listed.
var colorDetails=computedStyle.backgroundImage;
console.log(colorDetails);

var header=document.createElement("header");
var currentColor=document.createElement("h4");
header.appendChild(document.createTextNode("Below (⬇) colors are default"))
selectElement.appendChild(header);
currentColor.appendChild(document.createTextNode(colorDetails))
selectElement.appendChild(currentColor);

// This part is for Random color Generator
const addColor = document.querySelector("#ran");
const rndindi=document.querySelector(".randomIndicator");
console.log(rndindi);
addColor.addEventListener("click", function(){
    const newColor1 = "#"+((Math.floor(Math.random()*10000000).toString(16).slice(0,6))+"000000").slice(2,8).toUpperCase();
    const newColor2 = "#"+(Math.floor(Math.random()*16777215).toString(16).slice(0,6)).toUpperCase();
    body.style.background ="linear-gradient(to right," 
    + newColor1 + 
    "," 
    + newColor2 
    + ")";

    rndindi.textContent= selectElement.style.background + ";";
});
// const random = ()=> {
