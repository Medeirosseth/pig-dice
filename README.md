## Specs

#### Describe: Player constructor PASSED
Test: "It should create an object containing two key-value pairs: total:0, scoreThisRound:0"
Code: let player1= new Player();
console.log(player1.scoreThisRound + ", " + player1.total);
Expected Output: 0, 0

#### Describe: Player.prototype.rolldice() PASSED
Test: "Return a random number from 1 to 6"
Code: let player1= new Player();
console.log(player1.rolldice(), player1.rolldice(), player1.rolldice(), player1.rolldice(), player1.rolldice())
Expected Output: random numbers from 1 to 6, more than one unique number in results or retest

Test: "For numbers 2-6, should NOT add scoreThisRound to total, and should return "Roll or Hold?""
Code: let player = new Players("John", 4, 2 );
player.rollDice(4);
console.log(player.rollDice);
Expected Output: "Roll or Hold?

#### Describe: Player.prototype.endTurn() PASSED
Test: "It should end the player turn if player chooses to hold or rolls a 1. If player rolls 1 or holds, it will return "Pass turn to next player""
Code: let player1= new Player();
player1.endTurn(1)
player1.endTurn()
console.log(player1.endTurn(1));
console.log(player1.endturn())
Expected Output: "Pass turn to next player" * 2



Test: "For number 1 or undefined it should NOT add scoreThisRound to total"
Code: let player = new Players("John", 4, 2 );
player.endTurn(4);
console.log(player.endTurn(4));
Expected Output: 2

Test: "For all inputs, it should changed scoreThisRound to zero."


#### Describe: Player.prototype.storeScores() PASSED
Test: "It should store each score of a player during a round"
Code: let player = new Players("John", 0, 0 );
player.storeScore(2);
player.storeScore(4);
player.storeScore(6);
console.log(player.scoreArray);
Expected Output: [2, 4, 6]

Test: "It add the last rolled score to scoreThisRound total"
Code: let player = new Players("John", 0, 0 );
player.storeScore(5);
player.storeScore(2);
console.log(player.scoreThisRound);
Expected Output: 7

#### Describe: Player.prototype.addScore(button)
Test: "It should add the Player's scoreThisRound to their totalScore"
Code: let player = new Players("John", 0, 0 );
console.log(player.addScore());

#### Describe: Player.prototype.updateScoreThisRound(value)
Test: "It should take a non-1 value and add it to the player's score when the score is zero"
Code: let player1= new Player();
player1.updateScoreThisRound(5);
console.log(player1.scoreThisRound);
Expected Output: 5

Test: "It should correctly add a non-1 value to the score when the score is above zero"
Code: let player1= new Player();
player1.updateScoreThisRound(5);
player1.updateScoreThisRound(3);
console.log(player1.scoreThisRound);
Expected Output: 8;

#### Describe: allPlayer constructor
Test: "It should return back an unique id for each added player"
Code: let pvp = new allPlayers();
let player1 = new Players("John", 0, 0);
let player2 = new Players("Jane", 0, 0);
pvp.addPlayer(player1);
pvp.addPlayer(player2);
console.log(player1.id);
console.log(player2.id);
Expected Output: 1, 2