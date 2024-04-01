// Dice Funtion

function randomResult (max) {
    return Math.floor(Math.random() * max) + 1;
}

// Scattegories Dice

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'W'];

function rollScattergories () {
    let letterResult = letters[randomResult(20)];
    console.log(letterResult);
    let indexCard = randomResult(12);
    console.log(indexCard);
}
// rollScattergories();

// Royal Game of Ur

function rollUr () {
    let moves = 0;
    for (let i = 0; i < 4; i++) {
        let result = randomResult(2);
        if (result === 2) {
            moves += 1
        }
    }
    console.log(moves);
}
// rollUr();