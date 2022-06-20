// Game States
// "win" - Player robot has defeated all enemy-robots
//    * fight all enemy-robots
//    * defeat each enemy-robot
// "lose" - player robot's health is zero or less
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this.
// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]; 
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName){
    // repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0){
        // Alert players that they are starting the round
        // window.alert("Welcome to Robot Gladiators!")

        // Prompt for player to decide to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


        if (promptFight === "skip" || promptFight === "SKIP"){
        // confirm the player want sto skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip){
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log(playerName + " has " + playerMoney)
            break;
            }
        }

            
            // if player choses to fight, then fight
            // if (promptFight === "fight" || promptFight === "FIGHT" ){
            //     // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log (
            playerName + " attacked " + enemyName + " ." + enemyName + " now has " + enemyHealth + " health remaining.");
            

            // check enemy's health
            if (enemyHealth <= 0){
                window.alert(enemyName + " has died!");
                // award player money for wining
                playerMoney= playerMoney +20;
                console.log (playerName + " has " + playerMoney)
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.")
            }

            // remove player's health by subtracting the amout st in the enemyAttack
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining."
            );

            // check player's health
            if (playerHealth <=0){
                window.alert(playerName + " has died.");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }

            //  if player choses to skip
        // } else if (promptFight === "skip" || promptFight === "SKIP"){
        //     // confirm the player want sto skip
        //     var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //     // if yes (true), leave fight
        //     if (confirmSkip){
        //         window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //         // subtract money from playerMoney for skipping
        //         playerMoney = playerMoney - 10;
        //         console.log(" playerMoney", playerMoney)
        //         break;
        //     }
            // if no (false, ask question again by running fight() again
            // else { 
            //     fight()
            // }
        // turned to comment to remove fight option, skip only option, otherwise fight
        // } else {
        //     window.alert("You need to choose a valid option. Try again!");
            // }
        
    }    
};

// fight() - Single round for function - function below integrates 
var startGame = function(){
    for(var i = 0; i < enemyNames.length; i++){
        // reset player stats
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;

        // Let player know what round it is
        if (playerHealth > 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i +1))
        // }else{
        //     window.alert("Your have lost your robot in battle! Game Over!")
        //     break;

        // pick new emeny to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        // reset enemyHealth before starting new fight
        enemyHealth = 50

        // use deugger to pause script from running and check what's going on at that moment in the code
        // debugger;

        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);

        // if we're not at the last enemy in the array
        if (playerHealth > 0 && i < enemyNames.length -1) {
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")
            if (storeConfirm){
                shop();
            }
        }
        }
        else{
            window.alert("You have lost your robot in battle! Game Over!")
            break;
        }
    }
    endGame();
};


var endGame = function(){
    // window.alert("The game has now ended. Let's see how you did!")
    // if player is still alive, player wins
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + " . ");
    }
    else{
        window.alert("You've lost your robot in battle.");
    }
    
    // ask player if they would like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?")

    if (playAgainConfirm){
        // reset the game
        startGame();
    }else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
};

// shop function
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = 
        window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'Refill', 'UPGRADE', or 'LEAVE' to make a choice");
    switch (shopOptionPrompt){
        case "REFILL":
        case "refill":
            if (playerMoney >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }
            else{
                window.alert("You don't have enought money.")
            }
            break;

        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney -7;
            }
            else{
                window.alert("You don't have enough money.")
            }
            break;

        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    };
};


startGame();
// Notice that the fight() function call was replaced with a for loop that calls the fight() function multiple times using the element in the enemyNames[i] array as the argument.