let currentQuestion = 0; //ordnet der Variablen currentQuestion den Wert 0 zu
let rightQuestion = 0; //ordnet der Variablen rightQuestion den Wert 0 zu
let audio_success = new Audio('audio/sound1.mp3');
let audio_fail = new Audio('audio/lost.mp3');
let audio_endGame = new Audio('audio/win.mp3');
audio_success.volume = 0.1;
audio_fail.volume = 0.1;

function init() {
    document.getElementById('max-questions').innerHTML = questions.length; //sucht die ID im html, ersetzt die Gesamtanzahl an Fragen mit der Länge/Azahl der Elemente des JSON
    showQuestion();
}

function showQuestion() {
    if (gameIsOver()) { //die Bedingung gameIsOver ist ausgelagert als Funktion
        endQuiz();
    } else {
        updateNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length; //Bedingung für den if Teil der shoWQuestion - Funktion; gibt zurück ob aktuelle Frage die Letzte im JSON ist
}

function answer(i) {
    let rightAnswer = questions[currentQuestion]['right_answer'];
    answerIfElse(i, rightAnswer);
    updateProgressBar();
    disabledAnswer()
    document.getElementById('next-button').disabled = false; //solange wie keine Antwort angeklickt ist, erscheint der button grau und kann nicht angeklickt werden
}

function answerIfElse(i, rightAnswer) {
    if (rightAnswerSelected(i)) { //wenn die Variable tatsächlich den gleichen Wert wie die richtigen Antwort hat, dann...
        document.getElementById(`answer_${i}`).parentNode.classList.add('bg-success'); //klickt man die richtige Antwort an, wird sie grün; d.h. sie bekommt einen anderen css style
        audio_success.play();
        rightQuestion++; //erhöt die Variable jeweils um eine Stelle (wie plus 1)
    } else {
        document.getElementById(`answer_${i}`).parentNode.classList.add('bg-danger'); //klickt man die falsche Antwort an, wird sie rot; d.h. sie bekommt einen anderen css style
        audio_fail.play();
        document.getElementById(`answer_${rightAnswer}`).parentNode.classList.add('bg-success');
    }
}

function startQuiz() {
    document.getElementById('quizContainer').classList.remove('d-none'); //erste Seite des Quizzes erscheint, weil die dahinter nicht erscheinen
    document.getElementById('startQuiz').classList.add('d-none'); //die Startseite wird ausgeblendet
}

function endQuiz() {
    document.getElementById('endScreen').style = ''; //die letzte Seite des Quizzes erscheint
    document.getElementById('questionBody').style = 'display: none'; //die davor liegenden werden ausgeblendet
    document.getElementById('amount-of-questions').innerHTML = questions.length; //die Gesamt-Fragenanzahl unten ist gleich der Länge des JSON
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestion; //die Anzahl der richtigen Antworten wird ausgegeben
    audio_endGame.play();
}

function rightAnswerSelected(i) { //zählt die richtigen Antworten mit
    let rightAnswer = questions[currentQuestion]['right_answer'];
    return i == rightAnswer;

}

function updateProgressBar() { //macht den Fortschrittsanzeige
    let percent = Math.round((currentQuestion + 1) / questions.length * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style.width = ` ${percent}%`;
}

function updateNextQuestion() {
    let question = questions[currentQuestion]; // die Variable question wird der richtigen Stelle im JSON questions zugewiesen
    audio_fail.load();
    document.getElementById('question').innerHTML = currentQuestion + 1; // die Stelle im JSON wird hochgezählt
    document.getElementById('questiontext').innerHTML = question['question']; //die nächste Frage wird angezeigt
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`answer_${i}`).innerHTML = question[`answer_${i}`]; //der ID wird die jeweilige Antwortmöglichkeit zugewiesen
        resetButton(i)
    }
    document.getElementById('next-button').disabled = true;
}

function nextQuestion() { //fasst die Funktionen zusammen um die nächste Frage anzuzeigen
    currentQuestion++;
    enableAnswer();
    showQuestion();
}

function resetButton(i) { //Zurücksetzen der buttons
    document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-success');
    document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-danger');
}

function disabledAnswer() { //macht die anderen Antwortmöglichkeiten aus, wenn etwas angeklickt wurde
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`answer_${i}`).parentNode.onclick = null;
        document.getElementById('next-button').style = 'cursor: pointer';
    }
}

function enableAnswer() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`answer_${i}`).parentNode.onclick = function() {
            answer(i)
        };
        document.getElementById('next-button').style = 'cursor: not-allowed !important';
    }
}

function startGame() {
    document.getElementById('startScreen').style = 'display: none';
    document.getElementById('questionBody').style = '';
}


function restartGame() { //um das Spiel neu zu starten
    document.getElementById('endScreen').style = 'display: none';
    document.getElementById('questionBody').style = '';
    document.getElementById('progress-bar').innerHTML = `${0}%`;
    document.getElementById('progress-bar').style.width = ` ${0}%`;
    rightQuestion = 0;
    currentQuestion = 0;
    init();
}