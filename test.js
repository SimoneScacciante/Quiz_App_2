
let questionsArray = [{
    "question": "Wer hat HTML erfunden",
    "answer_1": "Robbie Williams",
    "answer_2": "Lady Gaga",
    "answer_3": "Tim Bernsers-Lee",
    "answer_4": "Angela Merkel",
    "right_answer": 3,
},

{
    "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
    "answer_1": "Text fett",
    "answer_2": "Container",
    "answer_3": "Ein Link",
    "answer_4": "Kursiv",
    "right_answer": 3,
},

{
    "question": "Welches Attribut kan man NICHT für Textarea verwenden?",
    "answer_1": "readonly",
    "answer_2": "max",
    "answer_3": "from",
    "answer_4": "spellcheck",
    "right_answer": 1,
},

{
    "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem attribut title aus?",
    "answer_1": "a[title]{...}",
    "answer_2": "a > title {...}",
    "answer_3": "a.title {...}",
    "answer_4": "a=title {...}",
    "right_answer": 1,
},

{
    "question": "wie definiert man in Javascript eine Variable?",
    "answer_1": "let 100 = rate",
    "answer_2": "100 = let rate",
    "answer_3": "rate = 100",
    "answer_4": "let rate = 100",
    "right_answer": 4,
},
];


let currentQuestionJSON_Strings = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questionsArray.length

    showQuestion();
}

function showQuestion() {
    if (currentQuestionJSON_Strings >= questionsArray.length) {

        document.getElementById('endscreen').style = ''; // 2.) Macht Style von ID: endscreen, leer (Display: None, ohne auswirkung)
        document.getElementById('questionBody').style = 'display: none';
    } else {

        let question = questionsArray[currentQuestionJSON_Strings];

        document.getElementById('pageNumber').innerHTML = currentQuestionJSON_Strings + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answerClick_1').innerHTML = question['answer_1'];
        document.getElementById('answerClick_2').innerHTML = question['answer_2'];
        document.getElementById('answerClick_3').innerHTML = question['answer_3'];
        document.getElementById('answerClick_4').innerHTML = question['answer_4'];
    }
}

function answer(answerSelection) {
    let question = questionsArray[currentQuestionJSON_Strings];
    let selectedQuestionNumber = answerSelection.slice(-1);
    let idOfRightAnswer = `answerClick_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(answerSelection).parentNode.classList.add('bg-success');

    } else {
        document.getElementById(answerSelection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('next-button').disabled = false;
}

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

