const quizForm = document.querySelector(".quiz-form");
const scoreButton = document.querySelector("#score-button");
const outputDiv = document.querySelector("#output");

const correctAnswers = ["right angled triangle", "90 degree"];

function calculateScore(){
    var score = 0;
    var i = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[i]){
            score = score + 1;
        }
        i = i + 1;
    }
    outputDiv.innerText = "Your Score is " + score;
}

scoreButton.addEventListener("click", calculateScore)