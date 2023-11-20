

//Siehe 21_Quiz_App.js

function updateToNextQuestion() {
    let question = questionsArray[currentQuestionJSON_Strings];

    document.getElementById('pageNumber').innerHTML = currentQuestionJSON_Strings + 1;
    document.getElementById('questiontext').innerHTML = question['question'];

    document.getElementById('answerClick_1').innerHTML = question['answer_1'];
    document.getElementById('answerClick_2').innerHTML = question['answer_2'];
    document.getElementById('answerClick_3').innerHTML = question['answer_3'];
    document.getElementById('answerClick_4').innerHTML = question['answer_4'];

}

// <<<<<<<====== Das hier unten entspricht exact selbe For Schleife wie oben!!! =====>>>>>>>>


//      document.getElementById('answerClick_1').innerHTML = question['answer_1'];
//      document.getElementById('answerClick_2').innerHTML = question['answer_2'];
//      document.getElementById('answerClick_3').innerHTML = question['answer_3'];
//      document.getElementById('answerClick_4').innerHTML = question['answer_4'];

// ODER

//      for (let i = 1; i <= 4; i++) {
//      document.getElementById(`answerClick_${i}`).innerHTML = question[`answer_${i}`];
//      }

// ODER

//     for (let i = 1; i <= 4; i++) {
//     document.getElementById('answerClick_' + i).innerHTML = question['answer_' + i];
//     }

// ODER


//     for (let i = 1; i <= 4; i++) {
//     document.getElementById('answerClick_' + i).innerHTML = question[`answer_${i}`];
//     }



//________________________________________________________________________________________________
//________________________________________________________________________________________________
//________________________________________________________________________________________________
//________________________________________________________________________________________________




function resetAnswerButtons() {
    document.getElementById('answerClick_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answerClick_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answerClick_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answerClick_4').parentNode.classList.remove('bg-danger');

    document.getElementById('answerClick_1').parentNode.classList.remove('bg-success');
    document.getElementById('answerClick_2').parentNode.classList.remove('bg-success');
    document.getElementById('answerClick_3').parentNode.classList.remove('bg-success');
    document.getElementById('answerClick_4').parentNode.classList.remove('bg-success');
}


// <<<<<<<====== Das hier unten entspricht exact selbe For Schleife wie oben!!! =====>>>>>>>>

// function resetAnswerButtons() {
// for (let i = 1; i <= 4; i++) {
// const answerClick = document.getElementById(`answerClick_${i}`);
// answerClick.parentNode.classList.remove('bg-danger');
// answerClick.parentNode.classList.remove('bg-success');
// }
// }



// ODER (in den unteren bsp muss "remove" Ausdruck also "classList.remove" als  Methode,  einen Parameter "deine Variable" übergeben werden)



//function resetAnswerButtons() {
//    for (let i = 1; i <= 4; i++) {
//        const answerClick = document.getElementById(`answerClick_${i}`).parentNode.classList;

//        answerClick.remove('bg-danger');
//        answerClick.remove('bg-success');
//    }
//    }
