var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage1= ("dice_images/dice-"+randomNumber1+".png");

var randomImage1 = (document.querySelector("#image1")).setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2= ("dice_images/dice-"+randomNumber2+".png");

var randomImage2 = (document.querySelector("#image2")).setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
} else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins!";
} else{
    document.querySelector("h1").innerHTML="Draw!";
}

