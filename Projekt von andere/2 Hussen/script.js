let questions = [{
        "question": "Wer war der erste Bundeskanzler ?",
        "answer1": "Konrad Adenauer",
        "answer2": "Angela Merkel",
        "answer3": "Gerhard Schröder",
        "answer4": "Ludwig Erhard",
        "rightAnswer": 1
    },
    {
        "question": "Wann viel die Berliner Mauer ?",
        "answer1": "1984",
        "answer2": "1989",
        "answer3": "1999",
        "answer4": "1979",
        "rightAnswer": 2
    },
    {
        "question": "Was ist der längste Fluss der Welt ?",
        "answer1": "Donau",
        "answer2": "Rhein",
        "answer3": "Isar",
        "answer4": "Nil",
        "rightAnswer": 4
    },
    {
        "question": "Wie viele Oscars gewann der Film Titanic ?",
        "answer1": "8",
        "answer2": "11",
        "answer3": "6",
        "answer4": "14",
        "rightAnswer": 2
    },
    {
        "question": "Wie lautet das chemische Symbol für Stickstoff ?",
        "answer1": "H",
        "answer2": "O",
        "answer3": "N",
        "answer4": "Au",
        "rightAnswer": 3
    },
    {
        "question": "Wie viele Kontinente gibt es ?",
        "answer1": "6",
        "answer2": "8",
        "answer3": "5",
        "answer4": "7",
        "rightAnswer": 4
    },
    {
        "question": "Wer hat das Gemälde von Mona Lisa gemalt ?",
        "answer1": "Leonardo da Vinci",
        "answer2": "Mozart",
        "answer3": "Fuad Hussen",
        "answer4": "Barack Obama",
        "rightAnswer": 1
    },
    {
        "question": "Was ist das flächenmäßig kleinste Bundesland ?",
        "answer1": "NRW",
        "answer2": "Rheinland Pfalz",
        "answer3": "Hessen",
        "answer4": "Bremen",
        "rightAnswer": 4
    },
    {
        "question": "Wie viele Chromosomen hat ein Mensch ?",
        "answer1": "52",
        "answer2": "42",
        "answer3": "46",
        "answer4": "33",
        "rightAnswer": 3
    },
    {
        "question": "Wer war der erste Mensch auf dem Mond ?",
        "answer1": "Neil Armstrong	",
        "answer2": "Charles Conrad	",
        "answer3": "Alan Bean",
        "answer4": "Buzz Aldrin",
        "rightAnswer": 1
    }
];

let currentQuestion = 0;
let correctAnswers = 0;
let AUDIO_SUCCESS = new Audio('correct.mp3');
let AUDIO_FAIL = new Audio('false.mp3');
let answerSelected = false;
let questionBar = false;

function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {

    if (gameIsOver()) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none'
        document.getElementById('imgTop').src = 'img/trophy.png';
        score();
    } else {
        updateProgressBar();
        showNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length
}

function showNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length * 100;

    if (!questionBar) {
        questionBar = true
    } else {
        document.getElementById('progressBar').style.width = `${percent}%`
        document.getElementById('progressBar').innerHTML = `${percent} %`
    }
}

function answer(selection) {
    if (!answerSelected) {
        answerSelected = true;

        let question = questions[currentQuestion];
        let selectedQuestionNumber = selection.slice(-1);
        let idOfRightAnswer = `answer${question['rightAnswer']}`;

        if (rightAnswerSelected(selectedQuestionNumber, question)) {
            document.getElementById(selection).parentNode.classList.add('bg-success');
            correctAnswers++
            AUDIO_SUCCESS.play();
        } else {
            document.getElementById(selection).parentNode.classList.add('bg-danger');
            document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
            AUDIO_FAIL.play();
        }
        document.getElementById('nextQuestion').disabled = false;
        updateProgressBar();
    }
}

function rightAnswerSelected(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question['rightAnswer'];
}


function nextQuestion() {
    answerSelected = false; // Antwortauswahl zurücksetzen
    questionBar = false
    currentQuestion++;
    document.getElementById('nextQuestion').disabled = true;
    resetAnswerButton();
    showQuestion();
}



function resetAnswerButton() {
    document.getElementById('answer1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer1').parentNode.classList.remove('bg-success');
    document.getElementById('answer2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer2').parentNode.classList.remove('bg-success');
    document.getElementById('answer3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer3').parentNode.classList.remove('bg-success');
    document.getElementById('answer4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer4').parentNode.classList.remove('bg-success');
}


function score() {
    document.getElementById('reachedPoints').innerHTML = correctAnswers;
}


function restartGame() {
    document.getElementById('imgTop').src = 'img/5jw5uzxo.bmp';
    document.getElementById('questionBody').style = ''; //questionbody anzeigen
    document.getElementById('endScreen').style = 'display: none'; //endscreen ausblenden
    document.getElementById('progressBar').style.width = '0%'; // Setze die Breite auf 0% beim ersten Aufruf

    correctAnswers = 0; // Zurücksetzen der korrekten Antworten
    currentQuestion = 0;
    showQuestion(); // Die erste Frage anzeigen
}