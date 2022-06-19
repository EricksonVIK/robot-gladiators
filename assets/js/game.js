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

var fight = function(){
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!")
    // Subtract the value of 'playerAttack' from the value of 'enemyHealth'and use that result to
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + ". " +  enemyName + " now has " + enemyHealth + " health remaining."
        );
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert (enemyName + " still has " + enemyHealth + " health left.");
    }
    
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth and use that result to
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the consoleso we know that it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    )
    if (playerHealth <= 0){
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has "  + playerHealth + " health left.");
    }
};


fight();
