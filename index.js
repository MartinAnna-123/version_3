const dice = [ 1, 2, 3, 4, 5, 6];
var pointPlayer1 = 0
var pointPlayer2 = 0
play();

function play(){

// var pointPlayer1 = 0
// var pointPlayer2 = 0

diceQuestion1();
function diceQuestion1(){
  console.log('Player1 points ' + pointPlayer1)
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
  // let dice1 = Math.floor(Math.random() * 6 + 1)
 const random = Math.floor(Math.random() * dice.length);
//  console.log(random, dice[random]);
  console.log('you rolled a ' + dice[random])
  if(dice[random] == 2){
    console.log('double points')
     if (pointPlayer1 == 0){
       pointPlayer1 ++
       pointPlayer1 = pointPlayer1 * 2}
    }else{
      pointPlayer1 = pointPlayer1 + dice[random];
      }
    }


diceQuestion2();
function diceQuestion2(){
  console.log('Player2 points ' + pointPlayer2)
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
  // let dice2 = Math.floor(Math.random() * 6 + 1)
  const random = Math.floor(Math.random() * dice.length);
// console.log(random, dice[random]);
  console.log('you rolled a ' + dice[random])
  if(dice[random] == 2){
    console.log('double points')
    if(pointPlayer2 == 0){
    pointPlayer1 ++
    pointPlayer2 = pointPlayer2 * 2}
  }else{
    pointPlayer2 = pointPlayer2 + dice[random];
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
  console.log('thanks for playing')
}else if(pointPlayer1 == pointPlayer2){
  console.log('draw')
  console.log('thanks for playing')
}else{
  console.log('player2 wins')
  console.log('thanks for playing')
}}
}
