function GenerateNumbersBetweenValues(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function BatSimple(){
  

var intervalStart=prompt("Introduceti inceputul intervalului:");
var intervalStop=prompt("Introduceti sfarsitul intervaluluil:");
while(intervalStart>=intervalStop)
{alert("Ati introdus gresit");
intervalStart=prompt("Introduceti inceputul intervalului:");
intervalStop=prompt("Introduceti sfarsitul intervaluluil:");
}
var location1 = GenerateNumbersBetweenValues(intervalStart,intervalStop)
var location2 = GenerateNumbersBetweenValues(intervalStart,intervalStop)
var location3 = GenerateNumbersBetweenValues(intervalStart,intervalStop)

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
/*while (isSunk == false) {
guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
if (guess < intervalStart || guess > intervalStop) {
alert("Please enter a valid cell number!");
} else {
guesses = guesses + 1;
if (guess == location1 || guess == location2 || guess == location3) {
alert("HIT!");
hits = hits + 1;
if (hits == 3) {
isSunk = true;
alert("You sank my battleship!");
}
} else {
alert("MISS");
}
}
}
var stats = "You took " + guesses + " guesses to sink the battleship, " +
"which means your shooting accuracy was " + (3/guesses);
alert(stats);*/
}
BatSimple();