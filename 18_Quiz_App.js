// <<<<<<<<<<<< HIER in PROJEKT 18. GEHT ES UM CLEAN CODING >>>>>>>>>>>>

let rightQuestions = 0;
let currentQuestionJSON_Strings = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questionsArray.length
    showQuestion();
}


//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
// =========>>>>>>> showQuestion() <<<<<<========= -->
function showQuestion() {
    if (gameIsOver()) {
        showEndScreen()

    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestionJSON_Strings >= questionsArray.length
    // Diese Funktion gibt nur true oder false aus bei true folgt if "showEndScreen()"  bei false folgt else "updateToNextQuestion()"
}

function showEndScreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('amount-of-questions').innerHTML = questionsArray.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    document.getElementById('header-image').src = 'img/trophy.png';
}

function updateProgressBar() {
    let percent = (currentQuestionJSON_Strings + 1) / questionsArray.length;
    percent = Math.round(percent * 100);

    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function updateToNextQuestion() {
    let question = questionsArray[currentQuestionJSON_Strings];

    document.getElementById('pageNumber').innerHTML = currentQuestionJSON_Strings + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answerClick_1').innerHTML = question['answer_1'];
    document.getElementById('answerClick_2').innerHTML = question['answer_2'];
    document.getElementById('answerClick_3').innerHTML = question['answer_3'];
    document.getElementById('answerClick_4').innerHTML = question['answer_4'];
}
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------



//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
// =========>>>>>>> Answer: right or wrong <<<<<<========= -->
function answer(answerSelection) {
    let question = questionsArray[currentQuestionJSON_Strings];
    let selectedQuestionNumber = answerSelection.slice(-1);
    let idOfRightAnswer = `answerClick_${question['right_answer']}`;

    if (rightAnswerSelected(selectedQuestionNumber, question)) { // du musst deiner Function in Klammern "selectedQ..:" + "question" vergeben damit auf Zeile // 74//76 Zuordnung erfolgen kann d.h. außerhalb dieser Funktion die "let..." beschrieben sind
        document.getElementById(answerSelection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play(); 
        rightQuestions++;

    } else {
        document.getElementById(answerSelection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber, question) { // zuordnung von Zeile 61 erfolgt // in Zeile 74  könntest auch (banana, apfel) und in Zeile 75 auch (banana, apfel) schreiben, die Zuordnung erfolgt dennoch zu Zeile 61 
    return selectedQuestionNumber == question['right_answer']; // diese Funcktion sagt gibt True oder False aus ähnlich wie Zeile 22 vom Prinzip
}
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------



//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
// =========>>>>>>> NextQuestion disabled & reset (green/red) <<<<<<========= -->
function nextQuestion() {
    currentQuestionJSON_Strings++
    document.getElementById('next-button').disabled = true;

    resetAnswerButtons();
    showQuestion()
}

function resetAnswerButtons() {
    document.getElementById('answerClick_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answerClick_1').parentNode.classList.remove('bg-success');

    document.getElementById('answerClick_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answerClick_2').parentNode.classList.remove('bg-success');

    document.getElementById('answerClick_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answerClick_3').parentNode.classList.remove('bg-success');

    document.getElementById('answerClick_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answerClick_4').parentNode.classList.remove('bg-success');
}
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------




//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
// =========>>>>>>> Restart Game (Button)  <<<<<<========= -->
function restartGame() {
    document.getElementById('header-image').src = 'img/backgroundImg.png';
    document.getElementById('questionBody').style = ''
    document.getElementById('endScreen').style = 'display: none'

    rightQuestions = 0;
    currentQuestionJSON_Strings = 0;
    init();
}
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------