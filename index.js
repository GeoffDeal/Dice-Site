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

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'W'];

function rollScattergories () {
    let letterResult = letters[randomResult(20) - 1];
    let indexCard = randomResult(12);
    document.getElementById('displayResult').innerHTML = indexCard + ' ' + '"' + letterResult + '"';
}
rollScattergories();

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
// rollUr();