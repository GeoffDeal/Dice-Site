// Dice Funtion

function randomResult (max) {
    return Math.floor(Math.random() * max) + 1;
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
    let letterResult = letters[randomResult(20) - 1];
    document.getElementById('displayResult').innerHTML = letterResult;
}

function rollScattergories12 () {
    let indexCard = randomResult(12);
    document.getElementById('displayResult').innerHTML = indexCard;
}

function rollScattergoriesBoth () {
    let letterResult = letters[randomResult(20) - 1];
    let indexCard = randomResult(12);
    document.getElementById('displayResult').innerHTML = indexCard + '   ' + letterResult;
}

// Royal Game of Ur

function rollUr () {
    let moves = 0;
    for (let i = 0; i < 4; i++) {
        let result = randomResult(2);
        if (result === 2) {
            moves += 1
        }
    }
    document.getElementById('displayResult').innerHTML = moves;
}

// Track past results

function moveResults () {
    
}