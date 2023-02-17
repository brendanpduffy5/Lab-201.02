'use strict';   

let userName = prompt("Hello! What is your name?");

function question1(){
    let answer1 = prompt("Welcome to my site, " + userName + "!  Do I live in Colorado?").toLowerCase();

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
}
question1();

function question2(){
    let answer2 = prompt("Did I attend college in Maine?").toLowerCase();
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
}
question2();


function question3(){
    let answer3 = prompt("Am I originally from New Hampshire?").toLowerCase();
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
}
question3();


function question4 (){
    let answer4 = prompt("Do I have four kids?").toLowerCase();
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
}
question4 ();


// let answer5 = prompt("Is my main goal to become a full stack software developer? ").toLowerCase();
// if (answer5 == "yes")
// //    console.log("Correct!");
//     alert("Correct!");
// else if (answer5 == "y")
// //    console.log("Correct!");
//     alert("Correct!");
// else if (answer5 == "no")
// //    console.log("That is incorrect.");
//     alert("That is incorrect.");
// else if (answer5 == "n")
// //    console.log("That is incorrect.");
//     alert("That is incorrect.");
// else {
// //    console.log("Please reply Yes or No.")
//     alert("Please reply Yes or No.");
// }



// for(let i = 0; i < 4; i++) {

//     let answer6 = prompt("How many dogs do you think I have?"); 
//         if(answer6 > 2){
//         alert("That's too high!  Try again...");
//     } else if(answer6 < 2) {
//         alert("That is too low.  Try again!");
//     } else{
//         alert("Yes! I have two dogs!")
//         break;
//     }
// }

// for(let i=1; i < 6; i++); {
//     let answer7 = prompt("What type of dogs do I have?").toLowerCase();
    
//     if (answer7 == 'german shepherd dog' || 'german shepherd'){
//         alert ('Yes! I have one German Shepherd Dog named Charlie. He is so smart!');
//     } else if (answer7 == "siberian husky" || 'husky') {
//         alert('Yes! I have a Siberian Husky named Mia. She gets in a lot of trouble!');
//     } else {
//         alert("No.  Cool dog though.  Try again?");
//     }
// }

// alert("Thanks for stopping by, " + userName + "!  Please visit again!");

