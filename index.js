// player1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomdiceimage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png
var randomimagesource1= "images/"+ randomdiceimage; //images/dice[1-6].png
var image1 = document.querySelectorAll('img')[0];
image1.setAttribute("src",randomimagesource1);
// player2
var randomNumber2=Math.floor(Math.random()*6) + 1;
var randomimagesource2="images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll('img')[1].setAttribute("src",randomimagesource2);

 if (randomNumber1 > randomNumber2) {
   document.querySelector('h1').innerHTML = "> Player1 wins";
   }
   else if (randomNumber2 > randomNumber1) {
     document.querySelector('h1').innerHTML="Player2 wins <";
   }
   else{
     document.querySelector('h1').innerHTML="Draw!"
   }
