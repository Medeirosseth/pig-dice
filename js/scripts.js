// Business logic
// one constructor for each play (2 players)
function Players(name, score, total){
  this.name = name;
  this.score = score;
  this.total = total;
}


Players.prototype.rollDice=function(){
 return Math.floor(Math.random() * 6) + 1
};

let player = new Players("John", 0, 0 );
console.log("I'm a log!");
for(i=0; i<10; i++){
  let result=player.rollDice();
  console.log(result);
}

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