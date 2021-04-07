// Business logic
// one constructor for each play (2 players)
function Players(name, score, total){
  this.name = name;
  this.scoreThisRound = score;
  this.totalScore = total;
  this.scoreArray = [];
  this.myTurn = true;


}

function allPlayers() {
  this.players = {}
  this.currentId = 0;
}


allPlayers.prototype.assignId=function(){
  this.currentId += 1;
  return this.currentId;
}

allPlayers.prototype.addPlayer=function(player){
 player.id = this.assignId();
 this.players[player.id] = player;
}

Players.prototype.rollDice=function(){
 let number = Math.floor(Math.random() * 6) + 1; {
  if( number ===1){
    this.myTurn=false;
    return number;
  } else {
    this.myTurn=true;
    return number;
  } 
}
};

Players.prototype.endTurn=function(number){
  if(number===1){
    this.scoreThisRound = 0;
  } else {
    this.totalScore += this.scoreThisRound;
    this.scoreThisRound = 0
  } 
}

Players.prototype.storeScore=function(number){
  this.scoreArray.push(number);
  this.scoreThisRound += number;
}

let pvp = new allPlayers();
let player1 = new Players("John", 0, 0);
let player2 = new Players("Jane", 0, 0);
pvp.addPlayer(player1);
pvp.addPlayer(player2);
// //John's turn starts
// let number = player.rollDice(); //get a single dice roll result
// player.storeScore(number); //store that result in ScoreArray and scoreThisRound
// while(player.myTurn && player.hold===false) { //as long as they don't get a 1 and don't decide to hold, keep rolling
//   number = player.rollDice();
//   player.storeScore(number);
//   player.hold=true;  //player choses to hold after second roll
// }
// player.hold=false; //reset hold
// player.endTurn(number) //check if the last number they rolled was a 1. If not, that means you chose 'hold' and the program should add scoreThisRound to your totalScore
// //set other player's turn to true

// create a prototype to update scoreThisRound during a turn, adding to score or changing it to zero
// create a prototype to end turn
// create a add score protoype (UI logic hold button)
// create prototype method that randomly generates what player goes first 
// 
// 
// 
// player1
// Score: score 
// total: total 
// conditional when total score of 100 is met, player is declared as winner 


// UI logic
// section for each player
// roll and hold button  
// append total score beneath player