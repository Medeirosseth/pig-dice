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

#### Describe: Player.prototype.endTurn()
Test: "It should end the player turn if player chooses to hold or rolls a 1. If player rolls 1 or holds, it will return "
Code: let player1= new Player();
player1.endTurn(1)
player1.endTurn()
console.log(player1.endTurn(1));
console.log(player1.endturn())
Expected Output: "Pass turn to next player" * 2

#### Describe: Player.prototype.addScore(button)
Test: "

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