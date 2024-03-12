var randomNumber1= Math.floor((Math.random()*6) + 1);

var finalImage1= "images/dice"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src",finalImage1);

var randomNumber2= Math.floor((Math.random()*6) + 1);

var finalImage2= "images/dice"+randomNumber2+".png";

document.querySelector(".img2").setAttribute("src",finalImage2);

if(finalImage1===finalImage2){
    document.querySelector("h1").textContent="DRAW";
}
else if(finalImage1>finalImage2){
    document.querySelector("h1").textContent="PLAYER 1 WINS";
}
else{
    document.querySelector("h1").textContent="PLAYER 2 WINS";
}