// window.alert("This is an alert! Java Script is running")

// this creates a function named "fight"
// declared function
// function fight() {
//     window.alert("The fight has begun!");
// }
// // called function
// fight();

// var playerName = window.prompt("What is your robot's name?");

// console.log(playerName);

// console.log("This logs a string, goof for leaving yourself a message");

// console.log(10+10);

// console.log("Our robot's name is "+playerName)

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this.
// console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// player money variable
var playerMoney = 10;

var fight = function(){
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!")

    // Prompt for player to decide to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT" ){
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log (
            playerName + " attacked " + enemyName + " ." + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0){
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + "health left.")
        }

        // remove player's health by subtracting the amout st in the enemyAttack
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + "health remaining."
        );

        // check player's health
        if (playerHealth <=0){
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        //  if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP"){
        // confirm the player want sto skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip){
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
            console.log(playerName + " has $ " + playerMoney + " remaining.")
        }
        // if no (false, ask question again by running fight() again
        else { 
            fight()
        }
        
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
}    

    



fight();
