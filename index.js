// Dice Funtion

function randomResult (max) {
    return Math.floor(Math.random() * max) + 1;
}

// Replace Image

function replaceImage () {
    if (document.getElementById('startImage')) {
        const resultBox = document.getElementById('resultBox');
        const image = document.getElementById('startImage');
        const resultText = document.createElement('p');
        resultText.className = 'resultDisplay';
        resultText.id = 'displayResult';
        resultBox.replaceChild(resultText, image);
    }
}

// Select Dice Pool

const selector = document.getElementById('selectionBox');
selector.addEventListener("change", function (event) {
    let selectedDiv = event.target.value;
    displaySwitch(selectedDiv);
})

function displaySwitch (div) {
    divList = document.getElementsByClassName('displayBox');
    for (let i = 0; i < divList.length; i++) {
        divList[i].style.display = "none";
    }
    document.getElementById(div).style.display = "block";
}

// Scattergories Dice

document.getElementById('scattergoriesLetter').addEventListener("click", rollScattergoriesLetter);
document.getElementById('scattergories12').addEventListener("click", rollScattergories12);
document.getElementById('scattergoriesBoth').addEventListener("click", rollScattergoriesBoth);


const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'W'];

function rollScattergoriesLetter () {
    moveResults();
    let letterResult = letters[randomResult(20) - 1];
    replaceImage();
    document.getElementById('displayResult').innerHTML = letterResult;
}

function rollScattergories12 () {
    moveResults();
    let indexCard = randomResult(12);
    replaceImage();
    document.getElementById('displayResult').innerHTML = indexCard;
}

function rollScattergoriesBoth () {
    moveResults();
    let letterResult = letters[randomResult(20) - 1];
    let indexCard = randomResult(12);
    replaceImage();
    document.getElementById('displayResult').innerHTML = indexCard + '   ' + letterResult;
}

// Royal Game of Ur

document.getElementById('urButton').addEventListener("click", rollUr);

function rollUr () {
    moveResults();
    const results = [];
    let moves = 0;
    for (let i = 0; i < 4; i++) {
        let result = randomResult(2);
        if (result === 2) {
            results.push('\u25CF');
            moves += 1
        } else{
            results.push('\u25CC')
        }
    }
    const resultsList = results.join(' ');
    replaceImage();
    document.getElementById('displayResult').innerHTML = resultsList + '\n' + moves;
}

// Dice pool

document.getElementById('dicePool').addEventListener("click", rollPool);

function rollPool () {
    moveResults();
    let diceNumber = document.getElementById('diceAmount').value;
    let diceSides = document.getElementById('sideAmount').value;
    let sum = 0;
    for (let i = 0; i < diceNumber; i++) {
        let result = randomResult(diceSides);
        sum += result;
    }
    replaceImage();
    document.getElementById('displayResult').innerHTML = sum;

}

// DnD/DCC

document.getElementById('dndAdv').addEventListener("click", rollAdvantage);

const diceButtons = document.getElementsByClassName('polyButton');
for (i = 0; i < diceButtons.length; i++) {
    let sides = diceButtons[i].id
    diceButtons[i].addEventListener("click", () => {
        rollSides(sides);
    })
}

function rollSides (sides) {
    moveResults();
    let result = randomResult(sides)
    replaceImage();
    document.getElementById('displayResult').innerHTML = result;
}

function rollAdvantage () {
    moveResults();
    let resultOne = randomResult(20);
    let resultTwo = randomResult(20);
    let resultDisplay = resultOne + ' | ' + resultTwo;
    replaceImage();
    document.getElementById('displayResult').innerHTML = resultDisplay;
}

// Track past results

function moveResults () {
    if (document.getElementById('displayResult')) {
        result = document.getElementById('displayResult').innerHTML;
        let pastResult = document.createElement('p');
        let pastDisplay = document.getElementById('displayPrevious');
        pastDisplay.prepend(pastResult);
        pastResult.innerHTML = result;
    }
}