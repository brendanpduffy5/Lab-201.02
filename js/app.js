'use strict';   
let userName = prompt("Hello! What is your name?");
let score = 0;
let answer1 = prompt("Welcome to my site, " + userName + "!  Do I live in Colorado?").toLowerCase();

function question1(){
if (answer1 == "yes" || answer1 == "y") {
    alert("Correct!");
    score++;
} else if (answer1 == "no" || answer1 == "n" ) {
alert("That is incorrect.");
} else {
    alert("Please reply Yes or No.");
}
}
question1();

function question2(){
let answer2 = prompt("Did I attend college in Maine?").toLowerCase();
if (answer2 == "no" || answer2 == "n" ) {
    alert("Correct!");
    score++;
}else if (answer2 == "yes" || answer2 == "y"){
alert("That is incorrect.");
}else {
    alert("Please reply Yes or No.");
}
}
question2();

function question3(){
let answer3 = prompt("Am I originally from New Hampshire?").toLowerCase();
if (answer3 == "no" || answer3 == "n" ) {
    alert("Correct!");
    score++;
}else if (answer3 == "yes" || answer3 == "y"){
alert("That is incorrect.");
}else {
    alert("Please reply Yes or No.");
}
}
question3();

function question4(){
let answer4 = prompt("Do I have four kids?").toLowerCase();
if (answer4 == "yes" || answer4 == "y") {
        alert("Correct!");
        score++;
    } else if (answer4 == "no" || answer4 == "n") {
    alert("That is incorrect.");
    } else {
        alert("Please reply Yes or No.");
    }
}
question4();

function question5(){
let answer5 = prompt("Is my main goal to become a full stack software developer? ").toLowerCase();
if (answer5 == "yes" || answer5 == "y") {
        alert("Correct!");
        score++;
    } else if (answer5 == "no" || answer5 =="n" ) {
    alert("That is incorrect.");
    } else {
        alert("Please reply Yes or No.");
    }
}
question5();

function question6(){
    for(let i = 0; i < 4; i++) {

        let answer6 = prompt("How many dogs do you think I have?"); 
            if(answer6 > 2){
            alert("That's too high!  Try again...");
        } else if(answer6 < 2) {
            alert("That is too low.  Try again!");
        } else{
            alert("Yes! I have two dogs!")
            score++;
            break;
        }
    }
}
question6();

let userAttempts = 6;

let myDogs = ['german shepherd dog', 'siberian husky', 'husky'];
function question7(){
    while(userAttempts > 0) {

        let answer7 = prompt('What type of dogs do I have?').toLowerCase();
        userAttempts--;
    
        for(let j = 0; j < myDogs.length; j++){
            if (myDogs[j] === answer7) {
                alert('Yes! That\'s right! I have a German Shepherd Dog and a Siberian Husky.');
                score++;
                break;
            }
        }
    } alert('Sorry you are out of guesses.  I have a German Shepherd Dog and a Siberian Husky.');
}
question7();

alert("Thanks for playing! You got " + score + " out of 7 questions correct.");

alert("Goodbye, " + userName + "!  Please visit again!");
