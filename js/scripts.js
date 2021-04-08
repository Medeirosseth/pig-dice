// Business logic
// one constructor for each play (2 players)
function Player(name, score, total){
  this.name = name;
  this.scoreThisRound = score;
  this.totalScore = total;
  this.scoreArray = [];
  this.myTurn = true;


}


function allPlayers() {
  this.players = []
  this.currentId = 0;
}



allPlayers.prototype.assignId=function(){
  this.currentId += 1;
  return this.currentId;
}

allPlayers.prototype.addPlayer=function(player){
 player.id = this.assignId();
 this.players.push(player);
}

Player.prototype.rollDice=function(){
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

Player.prototype.endTurn=function(number){
  if(number===1){
    this.scoreThisRound = 0;
  } else {
    this.totalScore += this.scoreThisRound;
    this.scoreThisRound = 0
  } 
}

Player.prototype.storeScore=function(number){
  this.scoreArray.push(number);
  this.scoreThisRound += number;
}

function gameTurn(currentPlayer){ //John's turn starts
  let number = currentPlayer.rollDice(); //get a single dice roll result
  currentPlayer.storeScore(number); //store that result in ScoreArray and scoreThisRound
  while(currentPlayer.myTurn && currentPlayer.hold===false) { //as long as they don't get a 1 and don't decide to hold, keep rolling
    number = currentPlayer.rollDice(); //roll again
    currentPlayer.storeScore(number); //store that result in ScoreArray and scoreThisRound
    currentPlayer.hold=true;  //player choses to hold after second roll
  }
  player.myTurn=false;
  player.hold=false; //reset hold
  player.endTurn(number) //check if the last number they rolled was a 1. If not, that means you chose 'hold' and the program should add scoreThisRound to your totalScore
}

function playGame(allPlayers) {
  let player1=allPlayers.players[0];
  let player2=allPlayers.players[1];
  if (player1.myTurn){
    gameTurn(player1);
  }
  //let player1 = Object.keys(player1.id)
}
//set other player's turn to true
//if the current player's id=1, set new current player to player with id 2
//if the current player's id=2, set new current player to player with id 1
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

//TEST LOGIC
let pvp = new allPlayers();
let playerJohn = new Player("John", 0, 0);
let playerJane = new Player("Jane", 0, 0);
pvp.addPlayer(playerJohn);
pvp.addPlayer(playerJane);
playGame(pvp);

// UI logic
// section for each player
// roll and hold button  
// append total score beneath player