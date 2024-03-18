let correctAnswer = 0;
let incorrectAnswer = 0;
let vopros1 = prompt('Какие браузеры поддерживают html 5')
if(vopros1 == 'фактический все'){
    alert('правильно')
    correctAnswer ++
} else {
    alert('не правильно')
    incorrectAnswer ++
}

let vopros2 = prompt('Элемент div является блочным тегом?')
if(vopros2 == 'да'){
    alert('правильно')
    correctAnswer ++
} else {
    alert('не правильно')
    incorrectAnswer ++
}

let vopros3 = prompt('Семантический html это?')
if(vopros3 == 'стиль программирование'){
    alert('правильно')
    correctAnswer ++
} else {
    alert('не правильно')
    incorrectAnswer ++
}

let vopros4 = prompt('Что такое CSS?')
if(vopros4 == 'сокращенная форма каскадных таблиц стилей'){
    alert('правильно')
    correctAnswer ++
} else {
    alert('не правильно')
    incorrectAnswer ++
}

let vopros5 = prompt('Что такое канва в html 5?')
if(vopros5 == 'это область html документа, в которой вы можете рисовать'){
    alert('правильно')
    correctAnswer ++
} else {
    alert('не правильно')
    incorrectAnswer ++
}

let vopros6 = prompt('id и class отвечают на одну функцию?')
if(vopros6 == 'да'){
    alert('правильно')
    correctAnswer ++
} else {
    alert('не правильно')
    incorrectAnswer ++
}

let vopros7 = prompt('правильное написание линк css?')
if(vopros7 == ' <link rel="stylesheet" href="style.css">'){
    alert('правильно')
    correctAnswer ++
} else {
    alert('не правильно')
    incorrectAnswer ++
}

alert(`у тебя правильный ответы ${correctAnswer} не правильный ответы ${incorrectAnswer}`)
