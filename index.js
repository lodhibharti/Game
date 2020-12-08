var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("whats your name? ");

console.log("welcome " + userName);

function play(question,answer)
{
var userAnswer = readlineSync.question(question)

if(userAnswer === answer)
{
  console.log("Right!")
  score = score+1;
}
else
{
  console.log("wrong!")
  
}

console.log("your current score is: ", score)
console.log("------------")
}


play("do you know about programming? ", "yes");
play("do you about C, C++, JavaScript, nodejs.? ","yes");
play("your favorite programming language is? ","JavaScript");

console.log("yahh!! YOUR FINAL SCORE IS ",score)


