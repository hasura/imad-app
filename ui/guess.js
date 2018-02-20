var a= Math.floor((Math.random() * 10) + 1);
var move= 3;
function askforvalue()
{
var moves = document.getElementById('moves');
var guess =document.getElementById('choice');
if (guess.value==a)
alert(" you won");
else
{
move=move-1;
moves.innerHTML=move;
}
if(move==0)
{
alert("You lost Play again ");
}
}
