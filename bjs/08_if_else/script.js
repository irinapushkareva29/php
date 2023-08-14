let minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
if (Number.isNaN(maxValue) || Number.isNaN(minValue)) {
    minValue = 0;
    maxValue = 100;
}
minValue = (minValue < -999) ? minValue = -999 : (minValue > 999) ? minValue = 999 : minValue;
maxValue = (maxValue > 999) ? maxValue = 999 : (maxValue < -999) ? maxValue = -999 : maxValue;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;



document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
    if (Number.isNaN(maxValue) || Number.isNaN(minValue)) {
        minValue = 0;
        maxValue = 100;
    }
    minValue = (minValue < -999) ? minValue = -999 : (minValue > 999) ? minValue = 999 : minValue;
    maxValue = (maxValue > 999) ? maxValue = 999 : (maxValue < -999) ? maxValue = -999 : maxValue;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 0;
    orderNumber++;
    orderNumberField.innerText = orderNumber;

    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    gameRun = true;
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || minValue == answerNumber) {
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        const phraseRandom = Math.round(Math.random() * 3);
        switch (phraseRandom) {
            case 0:
                answerPhrase = `Я всегда угадываю\n\u{1F60E}`
                break;

            case 1:
                answerPhrase = `Ты прав! \n\u{1F60E}`
                break;

            case 2:
                answerPhrase = `Молодец!\n\u{1F973}`
                break;

            case 3:
                answerPhrase = `Прими поздравления!\n\u{1F929}`
                break;
        }
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

