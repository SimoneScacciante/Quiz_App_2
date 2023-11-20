let rightQuestions = 0;
let currentQuestionJSON_Strings = 0;
let answerSelected = false;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questionsArray.length
    showQuestion();
}

function showQuestion() {
    if (gameIsOver()) {
        showEndScreen()
    } else {
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestionJSON_Strings >= questionsArray.length
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
    console.log('let percent', percent);
    console.log('let string', currentQuestionJSON_Strings);
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

function answer(answerSelection) {
    updateProgressBar(); // Bei jedem Klick wird ProgressBar aktiviert!!!
    if (!answerSelected) {      //WARUM ??????  LOGICAL NOT
        answerSelected = true;  //WARUM ??????
        let question = questionsArray[currentQuestionJSON_Strings];
        let selectedQuestionNumber = answerSelection.slice(-1);
        let idOfRightAnswer = `answerClick_${question['right_answer']}`;
        if (rightAnswerSelected(selectedQuestionNumber, question)) {
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
}

function rightAnswerSelected(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question['right_answer'];
}

// =========>>>>>>> NextQuestion disabled & reset (green/red) <<<<<<========= -->
function nextQuestion() {
    answerSelected = false; // WARUM ??????
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

function restartGame() {
    document.getElementById('header-image').src = 'img/backgroundImg.png';
    document.getElementById('questionBody').style = ''
    document.getElementById('endScreen').style = 'display: none'

    rightQuestions = 0;
    currentQuestionJSON_Strings = 0;
    init();
}
