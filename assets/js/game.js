
var playername = window.prompt ("What is your robot's name?");
var playerhealth = 100;
var playerattack = 10;
var playerMoney = 10;

console.log(playername,playerattack,playerhealth);
var enemyName= "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight=function() {
  // alert players that they are starting the round  
    window.alert("Welcome to Robot Gladiators!");
    
    // subtract the value of a 'playerattack' from the value of 'enemyhealth' and use that result to update the value in the 'enemyhealth' variable
    enemyHealth = enemyHealth - playerattack;
    // log a resulting message to the console so we know that it worked.
    consolelog(
        playername + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining."
    );
    // Subtract the value of 'enemyattack' from the value of 'playerhealth' and use that result to update the value in the 'playerhealth' variable. 
        playerhealth = playerhealth - enemyAttack;
    // log a resulting message to the console so we know that it worked.\
    
    
    console.log(

            enemyName + "attacked" + playername + "."+playername + "now has" + playerhealth + "health remaining."
     );
};

// check enemy's health

if (enemyHealth <= 0){
window.alert(enemyName+ "has died!");

}

else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

// put new code under this

console.log (enemyName + " attacked " +playername + "." + playername + " now has "+ playerhealth + " health remaining.");

// check player's health
if (playerhealth <= 0){
    window.alert(playername + "has died!");

} else{ 
    window.alert (playername + " still has " + playerhealth + " health left.");
}

var promptFight = window.prompt ("Would you like to Fight or Skip this battle? Enter 'Fight' or 'Skip' to choose.");


// if player chooses to fight, then fight
if (promptFight == "fight" || promptFight == "FIGHT") {
// remove enemy's health by subtracting the amount set in the playerAttack variable

enemyHealth = enemyHealth - playerattack;
console.log (
    playername + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining."
);


// check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");


} else {
    window.alert (enemyName + " has died!");
}

// remove player's health by subtracting the amount set in the enemyAttack variable

playerhealth = playerhealth - enemyAttack;
console.log (
    enemyName + " attacked " + playername + "." + playername + " now has "+ playerhealth + " health remaining."
);

// check player's health 
if(playerhealth <= 0) {
    window.alert(playername + " has died!");

} else {

    window.alert(playername + " still has " + playerhealth + " health left.");

} 
// if player chooses to skip

} else if (promptFight === "skip" || promptFight === "SKIP"){
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playername + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
  }
     // if no (false), ask question again by running fight() again
  else {
    fight();
  }
}


