play();

function play(){

let pointPlayer1 = 0
let pointPlayer2 = 0

diceQuestion1();
function diceQuestion1(){
var play = prompt('player1 would you like to roll the dice?')
  if (play == 'yes'){
  roll();
  }
  else if (play == 'no'){
    console.log('shame')
  }
  else{
    console.log('invalid please re-enter an answer')
    diceQuestion1();
  }}
function roll(){
  let dice1 = Math.floor(Math.random() * 6 + 1)
  console.log('you rolled a ' + dice1)
  if(isNaN(dice1) == 2){
    console.log('double points')
    }else{
      pointPlayer1 + isNaN(dice1);
    }
    }


diceQuestion2();
function diceQuestion2(){
var play = prompt('player2 would you like to roll the dice?')
  if (play == 'yes'){
  roll2();
  }
  else if (play == 'no'){
    console.log('shame')
  }
  else{
    console.log('invalid please re-enter an answer')
    diceQuestion2();
  }}
function roll2(){
  let dice2 = Math.floor(Math.random() * 6 + 1)
  console.log('you rolled a ' + dice2)
  if(isNaN(dice2) == 2){
    console.log('double points')
  }else{
    pointPlayer2 + isNaN(dice2);
  }
  
}

var play2 = prompt ('do you want to play again?')
  if (play2 == 'yes'){
  play();
  } else {
ending();
  }

function ending(){
if( pointPlayer1 > pointPlayer2 ){
  console.log('player1 wins')
}else if(pointPlayer1 == pointPlayer2){
  console.log('draw')
}else{
  console.log('player2 wins')
}}
console.log('pointPlayer1' + pointPlayer1)
console.log('pointPlayer2' + pointPlayer2)
}
