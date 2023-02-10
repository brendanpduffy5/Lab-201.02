'use strict';   

let userName = prompt("Hello! What is your name?");

let answer1 = prompt("Welcome to my site, " + userName + "!  Does Brendan live in Colorado?").toLowerCase();

if (answer1 == "yes")
//    console.log("Correct!");
    alert("Correct!");
else if (answer1 == "y")
//    console.log("Correct!");
    alert("Correct!");
else if (answer1 == "no")
//    console.log("That is incorrect.");
    alert("That is incorrect.");
else if (answer1 == "n")
//    console.log("That is incorrect.");
    alert("That is incorrect.");
else {
//    console.log("Please reply Yes or No.")
    alert("Please reply Yes or No.");
}

let answer2 = prompt("Did Brendan attend college in Maine?").toLowerCase();
if (answer2 == "no")
//    console.log("Correct!");
    alert("Correct!");
else if (answer2 == "n")
//    console.log("Correct!");
    alert("Correct!");
else if (answer2 == "yes")
//    console.log("That is incorrect.");
    alert("That is incorrect.");
else if (answer2 == "y")
//    console.log("That is incorrect.");
    alert("That is incorrect.");
else {
//    console.log("Please reply Yes or No.")
    alert("Please reply Yes or No.");
}

let answer3 = prompt("Is Brendan originally from New Hampshire?").toLowerCase();
if (answer3 == "no")
//    console.log("Correct!");
    alert("Correct!");
else if (answer3 == "n")
//    console.log("Correct!");
    alert("Correct!");
else if (answer3 == "yes")
//    console.log("That is incorrect.");
    alert("That is incorrect.");
else if (answer3 == "y")
//    console.log("That is incorrect.");
    alert("That is incorrect.");
else {
//    console.log("Please reply Yes or No.")
    alert("Please reply Yes or No.");
}


let answer4 = prompt("Does Brendan have four kids?").toLowerCase();
if (answer4 == "yes")
//    console.log("Correct!");
    alert("Correct!");
else if (answer4 == "y")
//    console.log("Correct!");
    alert("Correct!");
else if (answer4 == "no")
//    console.log("That is incorrect.");
    alert("That is incorrect.");
else if (answer4 == "n")
//    console.log("That is incorrect.");
    alert("That is incorrect.");
else {
//    console.log("Please reply Yes or No.")
    alert("Please reply Yes or No.");
}

let answer5 = prompt("Is Brendan\’s main goal to become a full stack software developer? ").toLowerCase();
if (answer5 == "yes")
//    console.log("Correct!");
    alert("Correct!");
else if (answer5 == "y")
//    console.log("Correct!");
    alert("Correct!");
else if (answer5 == "no")
//    console.log("That is incorrect.");
    alert("That is incorrect.");
else if (answer5 == "n")
//    console.log("That is incorrect.");
    alert("That is incorrect.");
else {
//    console.log("Please reply Yes or No.")
    alert("Please reply Yes or No.");
}

alert("Thanks for stopping by, " + userName + "!  Please visit again!");
