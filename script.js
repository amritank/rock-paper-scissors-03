/*
1. Get user input and store in variable userGuess.
1.1 If user cancel - display mesage "Thanks for playing" in html
1.2 Store userGuess in a 'moves' array.
2. Repeat 1 while userGuess not in [r, p, s]. 
2.1 Ignore case
3. Generate computer guess and store in variable computerGuess
3.1 Use Math library to generate a random no between 0 - 2 in order to pick a random guess from array: [r,p,s]
4.Compute game result
5.Alert user about win/loss
5.1 If userGuess === computerGuess ==> Tie++
5.2 If userGuess === r and computerGuess != p ==> Win++ else loss++
5.3 if userGuess === p amd computerGuess != s ==> Win++ else loss++
5.4 if userGuess === s and computerGuess != r ==> Win++ else loss++
5.5 store result in an array.
6. Prompt user on if he wants to play again.
6.1 if yes go back to 1
7. If no,  compute Summary.
7.1 No of wins
7.2 No of loss
7.3 No of ties
7.4 Moves count
7.4.1 Need to write a function for this using the moves array.
*/

// Declare variables
let wins = 0;
let loss = 0;
let ties = 0;
let play = 1;
let allowedMoves = ['r', 'p', 's'];
let userMoves = [];
let userGuess;
let computerGuess;

// prompt user
function promptUser() {
    userGuess = prompt("Choose from 'R', 'P' or 'S'");
    userGuess = userGuess.toLowerCase();
    console.log(`User chose: ${userGuess}`);
}

// validate user guess.
function verifyUserInput() {
    if (!allowedMoves.includes(userGuess)) {
        return false;
    }
    return true;
}

// generate computer guess
function generateComputerGuess() {
    let randomInt = Math.floor(Math.random() * allowedMoves.length);
    console.log("RandomInt generated: " + randomInt);
    computerGuess = allowedMoves[randomInt];
    let msg = `Computer guess is: ${computerGuess}`;
    console.log(msg);
    alert(msg);
}

// calculate move summary
function calculateMoveSummary() {
    let rock = 0;
    let scissors = 0;
    let paper = 0;
    for (const move of userMoves) {
        console.log(`move is: ${move}`);
        if (move === 'r') {
            rock++;
        } else if (move === 'p') {
            paper++;
        } else {
            scissors++;
        }
    }

    let msg = `Move Summary: \n Rock: ${rock} \n Scissors: ${scissors} \n Paper: ${paper}`;
    console.log(msg);
    return msg;
}

// compute game outcome
function computeGameOutcome() {
    if (userGuess === computerGuess) {
        ties++;
        return "Tie";
    }

    if (userGuess === 'r' && !(computerGuess === 'p')) {
        wins++;
        return "Win";
    } else {
        loss++;
        return "Lost";
    }

    if (userGuess === 'p' && !(computerGuess === 's')) {
        wins++;
        return "Win";
    } else {
        loss++;
        return "Lost";
    }

    if (userGuess === 's' && !(computerGuess === 'r')) {
        wins++;
        return "Win";
    } else {
        loss++;
        return "Lost";
    }
}

// ----- MAIN START OF PROGRAM -----
while (play) {
    // get and validate user input
    promptUser();
    if (userGuess === null) {
        console.log("User chose to exit the game!");
    }

    while (!verifyUserInput()) {
        alert("Invalid choice. Please try again!");
        promptUser();
    }

    // record user moves for later
    console.log(`Final User chose: ${userGuess}.`);
    console.log("Record user input.");
    userMoves.push(userGuess);
    console.log("User moves so far: " + userMoves);

    // generate compute guess
    generateComputerGuess();

    // compute game outcome
    let result = computeGameOutcome();
    let msg = `It's a ${result}`;
    console.log(msg);
    alert(msg);

    if (!window.confirm("Do you want to play again?")) {
        play = 0;
    }
}

//Print summary
msg = `You have: \n ${wins} wins, \n ${loss} loss \n ${ties} tie!`
console.log(msg);

msg += "\n\n\n" + calculateMoveSummary();
onload = () => {
    let pDocument = document.getElementById("placeholder");
    pDocument.textContent = msg;
}


// pDocument.innerText = msg;
alert(msg);


