// Game States
// "win" - Player robot has defeated all enemy-robots
//    * fight all enemy-robots
//    * defeat each enemy-robot
// "lose" - player robot's health is zero or less

// function to generate a random numeric value
var randomNumber = function (min, max){
    var value = Math.floor(Math.random()* max-min +1) + min;
    return value;
}

// Fight or Skip Function
var fightOrSkip = function(){

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

    // can also use if (!promptFight) ... instead of defining "skip" and "SKIP"

    // conditonal recursive function call
    if (promptFight === "" || promptFight === null){
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    };
    

    // if player picks skip confirm and then stop the loop
    // can also use if (!promptFight) ... instead of defining "skip" and "SKIP"
    promptFight = promptFight.toLowerCase();

    if (promptFight === "skip"){
        // confirm player want to skip
        var confirmSkip = window.confirm("Are you sure you'd lie to quit?");

        // if yes, leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerInfo.playerMoney = playerInfo.money - 10;
            
            return true;
        }  
    }
}
// Fight Function
var fight = function(enemy){
    // repeat and execute as long as the enemy-robot is alive
    while(playerInfo.health > 0 && enemy.health > 0){
        if (fightOrSkip()){
            break;
        };

        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack)
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(damage)
        console.log (
        playerInfo.name + " attacked " + enemy.name + " ." + enemy.name + " now has " + enemy.health + " health remaining.");
            

        // check enemy's health
        if (enemy.health <= 0){
            window.alert(enemy.name + " has died!");
            // award player money for wining
            playerInfo.money= playerInfo.money +20;
            console.log (playerInfo.name + " has " + playerInfo.money)
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.")
        }

        // remove player's health by subtracting the amout st in the enemy.attack
        var damage= randomNumber (enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(damage)
        console.log(
            enemy.name + " attacked " + playerInfo.name + " . " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        // check player's health
        if (playerInfo.health <=0){
            window.alert(playerInfo.name + " has died.");
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }   
    }    
};

// Fight Loop
var startGame = function(){
    for(var i = 0; i < enemyInfo.length; i++){
        // reset player stats
        playerInfo.reset();
        // playerInfo.health = 100;
        // playerInfo.attack = 10;
        // playerInfo.money = 10;

        // Let player know what round it is
        if (playerInfo.health > 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i +1))
        // }else{
        //     window.alert("Your have lost your robot in battle! Game Over!")
        //     break;

        // pick new emeny to fight based on the index of the enemy.names array
        var pickedEnemyObj = enemyInfo[i];

        // reset enemy.health before starting new fight
        pickedEnemyObj.health = randomNumber(40,60);
        // use deugger to pause script from running and check what's going on at that moment in the code
        // debugger;
        
        // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
        fight(pickedEnemyObj);

        // if we're not at the last enemy in the array
        if (playerInfo.health > 0 && i < enemyInfo.length -1) {
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + " . ");
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
            // if (playerInfo.money >= 7){
            // window.alert("Refilling player's health by 20 for 7 dollars.");
            // playerInfo.health = playerInfo.health + 20;
            // playerInfo.money = playerInfo.money - 7;
            // }
            // else{
            //     window.alert("You don't have enought money.")
            // }
            playerInfo.refillHealth();
            break;

        case "UPGRADE":
        case "upgrade":
            // if (playerInfo.money >= 7){
            // window.alert("Upgrading player's attack by 6 for 7 dollars.");
            // playerInfo.attack = playerInfo.attack + 6;
            // playerInfo.money = playerInfo.money -7;
            // }
            // else{
            //     window.alert("You don't have enough money.")
            // }
            playerInfo.upgradeAttack();
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


// null player name function fix
var getPlayerName = function (){
    var name = "";

    while (name === "" || name === null){
        name = prompt("What is your robot's name?")
    }
    console.log("Your robot's name is " + name);
    return name;
};
// Player Variable
var playerInfo = {
    name: getPlayerName (),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        // this.health += 20;
        // this.money -+7;
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else{
            window.alert("You don't have enough money!")
        }
    },
    upgradeAttack: function(){
        // this.attack += 6;
        // this.money -= 7;
        if (this.money >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else{
            window.alert("You don't have enough money!")
        }
    }
};

// Enemy Variable
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack:randomNumber(10, 14)
    }
];


startGame();
// Notice that the fight() function call was replaced with a for loop that calls the fight() function multiple times using the element in the enemy.names[i] array as the argument.