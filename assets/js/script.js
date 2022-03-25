const questionsArray = [
  {
    question: "Inside which HTML element do we link the JavaScript file?",
    answer1: "1. <javascript>",
    answer2: "2. <script>",
    answer3: "3. <js>",
    answer4: "4. <sripting>",
    correct: "2. <script>"
  },
  {
    question: "What must the conditional statement of and if/else be enclosed within?",
    answer1: "1. quotes",
    answer2: "2. curly brackets",
    answer3: "3. parentheses",
    answer4: "4. square brackets",
    correct: "3. parentheses"
},
  {
    question: "How do you write 'Hello World' in an alert box?",
    answer1: "1. alert('Hello World')",
    answer2: "2. msg('Hello World')",
    answer3: "3. msgBox('Hello World')",
    answer4: "4. alertBox('HelloWorld')",
    correct: "1. alert('Hello World')"
  },
  {
    question: "What is the correct syntax for creating a function in JavaScript?",
    answer1: "1. function = myFunction()",
    answer2: "2. function myFunction()",
    answer3: "3. function:myFunction()",
    answer4: "4. var myFunction()",
    correct: "2. function myFunction()"
  },
  {
    question: "What is the correct way to call a function in JavaScript?",
    answer1: "1. call myFunction()",
    answer2: "2. call function myFunction()",
    answer3: "3. myFunction()",
    answer4: "4. use myFunction()",
    correct: "3. myFunction()"
  }
]

var a1 = $('#a1')
var a2 = $('#a2')
var a3 = $('#a3')
var a4 = $('#a4')

var timeCount

var startingTime = 75

var timerEl = $('#timer')

var answerBtn = $('.answerBtn')

var complete = false

var questionIndex = 0

var randomQuestion = questionsArray[Math.floor(Math.random() * Array.length)];



$('.startBtn').on("click", function() {
  quizStart();
  console.log('the quiz has begun')
})

function quizStart() {
  showQuestion();
  startTimer();
}

function showQuestion() {

  $('.question').textContent = questionsArray[questionIndex].question;
  a1.textContent = questionsArray[questionIndex].answer1;
  a2.textContent = questionsArray[questionIndex].answer2;
  a3.textContent = questionsArray[questionIndex].answer3;
  a4.textContent = questionsArray[questionIndex].answer4;
}

function checkAnswer(choice) {
  if(choice !== questionsArray[questionIndex].correct) {
    timeCount-=10;
    alert("Incorrect, try again")
  }else{
    alert("Correct!")
  }

  questionIndex++;
  if (questionIndex >= questionsArray.length) {
    finishQuiz();
  } else {
    showQuestion();
  }
}

function finishQuiz() {

}

function startTimer() {
    timeCount = startingTime
    timerEl.textContent = timerFunction(timeCount)
    
    timer = setInterval(function() {
        timeCount--
    
        if (timeCount <= 0) {
            clearInterval(timer)
            scorePage()
        } else {
            timerEl.textContent = timerFunction(timeCount)
        }
    
    }, 1000)
}

function timerFunction(seconds) {
  let m = Math.floor(seconds / 60).toString().padStart(2, 1)
  let s = (seconds % 60).toString().padStart(2, '0')
    return `${m}:${s}` 
}

for(i of answerBtn) {

  i.addEventListener('click', function() {
      checkAnswer(this.innerHTML);
    });
}

function scorePage() {
  alert('Your score is' + timeCount);
}