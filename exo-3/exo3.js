console.log(' Bienvenue dans ce petit jeu : ');
const choices = ['rock', 'paper', 'scissors'];
for (let i = 0; i < choices.length; i++) {
    console.log(i + ' : ' + choices[i]);
}
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    //console.log(userInput);
    switch (userInput) {
        case 'bomb':
            console.log('Vous avez fait le choix bomb');
            break;
        case 'rock':
            console.log('Vous avez fait le choix rock');
            break;
        case 'paper':
            console.log('Vous avez fait le choix paper');
            break;
        case 'scissors':
            console.log('Vous avez fait le choix scissors');
            break;
        default:
            console.log(userInput + ' n\'est pas un choix disponible');

    }
    return userInput;
}
function getComputerChoice() {
    let computerChoiceNumber = Math.round(Math.random() * 2);// assigne nombre entier entre 0 et 2
    //console.log(computerChoiceNumber);
    let computerChoice = choices[computerChoiceNumber];// assigne rock pour 0, paper pour 1, scissor pour 2

    console.log('l\'ordinateur a fait le choix ' + computerChoice);
    return computerChoice;

}
function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return console.log('you win');
    }
    if (userChoice === computerChoice) {
        return console.log('Tied : égalité');
    }
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        return console.log('userchoice is rock, computerChoice is scissors. You won ');

    }
    else if (userChoice === 'paper' && computerChoice === 'rock') {
        return console.log('userchoice is paper, computerChoice is rock. You won ');
    }
    else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return console.log('userchoice is paper, computerChoice is rock. You won ');
    }
    else {
        return console.log('you lost');
    }
}
function playGame() {
    var choiceCleared = false;// signifie validation du choix
    do {
        var uChoice = getUserChoice(prompt("faites votre choix"));
        if (uChoice === 'rock' || uChoice === 'paper' || uChoice === 'scissors' || uChoice === 'bomb') {
            choiceCleared = true;
        }
    } while (choiceCleared != true);


    var computerChoice = getComputerChoice();
    determineWinner(uChoice, computerChoice);

}
playGame();
console.log('exo-3');