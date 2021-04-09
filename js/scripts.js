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

allPlayers.prototype.getCurrentPlayerIndex=function() {
  let player1=this.players[0];
  let player2=this.players[1];
  if(player1.myTurn){
    return 0;
  }
  else {
    return 1;
  }
}

Player.prototype.rollDice=function(){
 let number = Math.floor(Math.random() * 6) + 1; {
  if( number ===1){
    this.scoreThisRound = 0;
    this.scoreArray = [];
    this.myTurn=false;
    return number;
  } else {
    this.myTurn=true;
    return number;
  } 
}
};

Player.prototype.endTurn=function(){
    this.totalScore += this.scoreThisRound;
    this.scoreThisRound = 0;
    this.scoreArray = [];
} 

Player.prototype.storeScore=function(number){
  this.scoreArray.push(number);
  this.scoreThisRound += number;
}

function gameTurn(currentPlayer){ //John's turn starts
  let number = currentPlayer.rollDice(); //get a single dice roll result
  if (currentPlayer.myTurn){
    currentPlayer.storeScore(number);} //store that result in ScoreArray and scoreThisRound
  // while(currentPlayer.myTurn && currentPlayer.hold===false) { //as long as they don't get a 1 and don't decide to hold, keep rolling
  //   number = currentPlayer.rollDice(); //roll again
  //   currentPlayer.storeScore(number); //store that result in ScoreArray and scoreThisRound
  //   currentPlayer.hold=true;  //player choses to hold after second roll
  // }
  currentPlayer.myTurn=false;}
  // currentPlayer.hold=false; //reset hold
  // currentPlayer.endTurn(number) //check if the last number they rolled was a 1. If not, that means you chose 'hold' and the program should add scoreThisRound to your totalScore
//}
  


function playGame(allPlayers) {
  let player1=allPlayers.players[0];
  let player2=allPlayers.players[1];
  if (player1.myTurn){
    gameTurn(player1);
    return player1;
  }
}

let pvp = new allPlayers();
  let player1Object = new Player("", 0, 0);
  let player2Object = new Player("", 0, 0);
  pvp.addPlayer(player1Object);
  pvp.addPlayer(player2Object);

// User interface logic
$(document).ready(function() {
  
  $("#formName").submit(function(event) {
    event.preventDefault();
    const playerName1 = $("input#playerName1").val();
    player1Object.name=playerName1;
    const playerName2 = $("input#playerName2").val();
    player2Object.name=playerName2;
    $("#player1").text(playerName1);
    $("#player2").text(playerName2);
  });
  $("#rollDice").click(function() {
    let currentPlayer=playGame(pvp);
    $("#scoreArray").text(currentPlayer.scoreArray);
    $("#scoreThisRound").text(currentPlayer.scoreThisRound);
  });
  $("#hold").click(function() {
    const index=pvp.getCurrentPlayerIndex();
    const currentPlayer = pvp.players[index];
    let holdDice = currentPlayer.endTurn();
    $("#totalScore").text(holdDice.scoreThisRound);
  })
})


// const rollDice = ("button#rollDice").valueOf()
//   const 







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


// UI logic
// section for each player
// roll and hold button  
// append total score beneath player