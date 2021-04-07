## Specs

#### Describe: Player constructor
Test: "It should create an object containing two key-value pairs: total:0, scoreThisRound:0"
Code: let player1= new Player();
console.log(player1.scoreThisRound + ", " + player1.total);
Expected Output: 0, 0

#### Describe: Player.prototype.rolldice()
Test: "Return a random number from 1 to 6"
Code: let player1= new Player();
console.log(player1.rolldice(), player1.rolldice(), player1.rolldice(), player1.rolldice(), player1.rolldice())
Expected Output: random numbers from 1 to 6, more than one unique number in results or retest

#### Describe:

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