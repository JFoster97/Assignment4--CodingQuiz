const questionsArray = [question1, question2, question3, question4, question5];

var question1 = "<h2>Inside which HTML element do we link the JavaScript file?</h2> <ul> <li><p>javascript</p><button type='button' class = 'btn btn-primary btn-sm answerBtn'></button>Select</li> <li><p>js</p><<button type='button' class = 'btn btn-primary btn-sm answerBtn'>>Select</button></li> <li><p>script</p><button type='button' class = 'btn btn-primary btn-sm answerBtn' id='correct'>Select</button></li> <li><p>scripting</p><button type='button' class = 'btn btn-primary btn-sm answerBtn'>Select</button></li> </ul>";

var question2 = "<h2>Where in the DOM is the correct place to insert a JavaScript link</h2> <ul> <li><p>The head section</p><button type='button' class = 'btn btn-primary btn-sm answerBtn' id='correct'></button></li> <li><p>The body section</p><button type='button' class = 'btn btn-primary btn-sm answerBtn' id='correct'></button></li> <li><p>Both the head and the body section</p><button type='button' class = 'btn btn-primary btn-sm answerBtn' id='correct'></button></li> </ul>"

var question3 = "<h2>How do you write 'Hello World' in an alert box?</h2> <ul> <li><p>alert('Hello World');</p><button type='button' class = 'btn btn-primary btn-sm answerBtn' id='correct'></button></li> <li><p> msg('Hello World');</p><button type='button' class = 'btn btn-primary btn-sm answerBtn' ></button></li> <li><p>msgBox('Hello World');<button type='button' class = 'btn btn-primary btn-sm answerBtn'></button></li> <li><p>alertBox('HelloWorld');<button type='button' class = 'btn btn-primary btn-sm answerBtn'></button></li> </ul>"

var question4 = "<h2>What is the correct syntax for creating a function in JavaScript?</h2> <ul> <li><p>function = myFunction()</p><button type='button' class = 'btn btn-primary btn-sm answerBtn'></button></li> <li><p>function myFunction()</p><button type='button' class = 'btn btn-primary btn-sm answerBtn' id = 'correct'></button></li> <li><p>function:myFunction()</p><button type='button' class = 'btn btn-primary btn-sm answerBtn' ></button></li> </ul>"

var question5 = "<h2>What is the correct way to call a function in JavaScript?</h2> <ul> <li><p>call myFunction()</p><button></button></li> <li><p> call function myFunction()</p><button></button></li> <li><p>myFunction()</p><button></button></li> </ul>"

var timeLoss = 10

var score =

const randomQuestion = questionsArray[Math.floor(Math.random() * Array.length)];

$('.startBtn').on("click", function() {
  quizStart();
})

function quizStart() {
  $('.questionsBox').append(randomQuestion);
  $('.answerBtn').on('click', function() {
    if (id==='correct') {
      alert('Correct');
      $('.questionsBox').clear();
      $('.questionsBox').append(randomQuestion);
    } else {
      alert("Incorrect, try again")

    }
  })
}