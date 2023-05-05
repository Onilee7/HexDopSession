const rock = "Камень";
const paper = "Бумага";
const scissors = "Ножницы";
const draw = "Ничья";
const PlayerWin = "Человек";
const ComputerWin = "Компь просто";
const mChoice = manInput;
const pChoice = pcInput; 

function manInput () {
    let result = null;
    const manInput = Math.random();
    if (manInput < 0.34) {
        result = rock;
    }
    else if (manInput < 0.67) {
        result = scissors;
    }
    else result = paper;
    return result;
}


function pcInput () {
    let result = null;
    const manInput = Math.random();
    if (manInput < 0.34) {
        result = rock;
    }
    else if (manInput < 0.67) {
        result = scissors;
    }
    else result = paper;
    return result;
}

function winer (mChoice, pChoice) {

    if (mChoice === pChoice) return draw;
   
    else if (pChoice === rock && mChoice === paper ||
            pChoice === paper && mChoice === scissors ||
            pChoice === scissors && mChoice === rock){

return PlayerWin;}

     else return ComputerWin;
    
    }
    



console.log ('Вы показали: ' + manInput());
console.log ('Компьютер показывает: ' + pcInput());
console.log('Победил: ' + winer (mChoice, pChoice));
