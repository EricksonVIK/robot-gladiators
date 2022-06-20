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
                window.alert(playerName + " has been lost! Game Over! ");
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
}

// fight() - Single round for function - function below integrates 
for(var i = 0; i < enemyNames.length; i++){
    // Let player know what round it is
    if (playerHealth > 0){
        window.alert("Welcome to Robot Gladiators! Round " + (i +1))
    // }else{
    //     window.alert("Your have lost your robot in battle! Game Over!")
    //     break;
    }

    // pick new emeny to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50

    // use deugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
}
// Notice that the fight() function call was replaced with a for loop that calls the fight() function multiple times using the element in the enemyNames[i] array as the argument.