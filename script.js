const questions=[
    {
        question:"How is having most number of centuries in internation cricket?",
        answers:[
            {text:"Ricky Poinding",correct:false},
            {text:"Sachin Tendulkar",correct:true},
            {text:"Virat Kohli",correct:false},
            {text:"Kumar Sangakara",correct:false}
        ]
    },
    {
        question:"How is having most number of centuries in ODI cricket?",
        answers:[
            {text:"Virat Kohli",correct:true},
            {text:"Sachin Tendulkar",correct:false},
            {text:"Ricky Poinding",correct:false},
            {text:"Kumar Sangakara",correct:false}
        ]
    },
    {
        question:"How is having most number of fifties in international cricket?",
        answers:[
            {text:"Ricky Poinding",correct:false},
            {text:"Virat Kohli",correct:false},
            {text:"Kumar Sangakara",correct:false},{text:"Sachin Tendulkar",correct:true}
        ]
    },
    {
        question:"How is having most Runs in international cricket?",
        answers:[
            {text:"Ricky Poinding",correct:false},
            {text:"Sachin Tendulkar",correct:true},
            {text:"Virat Kohli",correct:false},
            {text:"Kumar Sangakara",correct:false},
        ]
    }
]
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-button");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNumber=currentQuestionIndex+1;
    questionElement.innerHTML=questionNumber+". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
 function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }

 function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    })
    nextButton.style.display="block";
 }
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You have Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
 nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
 })
startQuiz();