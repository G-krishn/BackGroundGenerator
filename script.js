var select1 =document.querySelector("#color1");
var select2 =document.querySelector("#color2");
var colorInfo=document.querySelector("h3");
var body=document.querySelector("body");

function setBackground() {
    body.style.background = 
    "linear-gradient(to right," 
    + color1.value + 
    "," 
    + color2.value 
    + ")";

    colorInfo.textContent = body.style.background + ";";
}

// calling this function is:
select1.addEventListener("input", setBackground);
select2.addEventListener("input", setBackground);

// this is to check initial background color listed in css style sheet. 
// getComputedStyle gives read only format to get it in rgb format "background color" 
// works only if backcolor is applied, check it before applying it as i used here
// backgroundImage" property because it was showing background in image format by using getComputedStyle method.  
// var  a =document.querySelector("body");
// var b= getComputedStyle.a;
// console.log(a);
// console.log(b);
// var c = getComputedStyle(body,null);
// var d= c.backgroundImage
// console.log(d);









// select1.addEventListener("input", function() {
//     body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
// });

// select2.addEventListener("input", function() {
//     body.style.background = "linear-gradient(to left," + color1.value + "," + color2.value + ")";
// });


// Another way of calling function