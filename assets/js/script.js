const playButton = document.getElementById('play-btn');
const startButton = document.getElementById('start-btn');
const questionTitle = document.getElementById('questionTitle');
const answerOptions = Array.from(document.getElementsByClassName('qst-btn'));

var questionNum = 0;
var availableQuestions = [];
var showQuestion;
var choice;
var choisen_answer;
var questionCounter = 0;
var correctAnswersLog = [];
var incorrectAnswersLog = [];

let results;

let questionArray = [];
let questionOptions = [];
let questionAnswer = [];

var selectedCategory;
var selectedDifficulty;
var selectedQuestions;

let questions = [];

playButton.addEventListener('click', startGame)
startButton.addEventListener('click', dropdownOptions)
//answerOptions.addEventListener('click', checkAnswer)
/*submitButton.addEventListener('click', () => {
    currentQuestions++
    nextQuestion()
})*/

// Start game
$("#play-btn").click(function startGame() {
    $("#selection").show().addClass("animation");
    $("#main").hide();
});

function startGame() {
    console.log('started');
    questionCounter = 0;
    //setNextQuestion()
}

// Fetch category value from API
function selectCat() {
    const categorySelect = $('#category-select');
    fetch('https://opentdb.com/api_category.php')
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            data.trivia_categories.forEach(category => {
                categorySelect.append(
                    `<option value="${category.id}">${category.name}</option>`,
                );
            });
        })
}
selectCat();

// Getting variable values from dropdown menu items
function dropdownOptions() {
    var dropCat = document.getElementById('category-select');
    selectedCategory = dropCat.options[dropCat.selectedIndex].value;
    var dropDiff = document.getElementById('difficulty-select');
    selectedDifficulty = dropDiff.options[dropDiff.selectedIndex].value;
    var dropQuestions = document.getElementById('questions-select');
    selectedQuestions = dropQuestions.options[dropQuestions.selectedIndex].value;
}
//debugger;
// Generate an URL link to fetch questions from API
function questionID() {
    //debugger;
    dropdownOptions();
    const question = $('#questionTitle');
    fetch(`https://opentdb.com/api.php?amount=${selectedQuestions}&category=${selectedCategory}&difficulty=${selectedDifficulty}`)
        //.then(res => console.log(res))
        .then((res) => res.json())
        // .then((data) => console.log(data))
        .then((data) => {
            //console.log(data);

            results = data;

            // display a question
            data.results.forEach(question => {
                questionArray.push(question.question);
                console.log(question);
                // display answers
                question.incorrect_answers.push(question.correct_answer);
                let allOptions = question.incorrect_answers;
                questionOptions.push(allOptions);
                questionAnswer.push(question.correct_answer);
                console.log(question.question);
                for (let q of question.incorrect_answers) {
                    console.log(q);
                }
                console.log(question.correct_answer);
            });
            // check if answer is correct
            function checkAnswer(correct_answer, choisen_answer) {
                if (correct_answer == coisen_answer) {
                    correctAnswersLog++;

                    console.log(correctAnswersLog);
                } else {
                    incorrectAnswersLog++;
                    console.log(incorrectAnswersLog);
                }
            };

            for (i = 0; i < questionArray.length; i++) {
                let newQuestion = {
                    question: questionArray[i],
                    options: questionOptions[i],
                    answer: questionAnswer[i]
                };
                availableQuestions.push(newQuestion);

                /*let buttons = document.querySelectorAll('.qst-btn')
                buttons.forEach((btn) => {
                    btn.addEventListener("click", (event) => {
                        alert(event.target);
                    });
                });*/
                //console.log(newQuestion);
            };
            displayQuestion();
        });
};
questionID(selectedCategory, selectedDifficulty, selectedQuestions);

function displayQuestion() {
    questionCounter++;
    showQuestion = availableQuestions[questionNum];
    questionTitle.innerHTML = showQuestion.question;
    currentQuestion = showQuestion.question;
    console.log(currentQuestion);

    //debugger;
    answerOptions.forEach(option => {
        const optionsNum = option.dataset["number"];
        option.innerText = showQuestion.options[optionsNum];
        choice = showQuestion.options[optionsNum];
        console.log(choice);
    });


    /*for (let i = 0; i < showQuestion.options.length; i++) {
        answerOptions.append(showQuestion.options);
        console.log(showQuestion.options);
    }
*/

    nextQuestion();
};

function nextQuestion() {
    //questionCounter++;
    questionNum = Math.floor(Math.random() * availableQuestions.length);
};

//availableQuestions.splice(questionNum, 1);

/*
// Select the answer 
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if (randomQuestions > currentQuestion + 1) {
        $("#question").show();
    } else {
        //$("#score").show();
        $("#question").hide();
    };
};*/

// Animations between page's loads
$("#start-btn").click(function () {
    $("#question").show().addClass("animation");
    $("#selection").hide();
});

$("#submit-btn").click(function () {
    $("#score").show().addClass("animation");
    $("#question").hide();
});

/*
// Getting questions displayed from API
let counter = 0;

function getNewQuestion() {
    questionsCounter++;

    //return question = data.results[counter].question;
};

// get next question
function nextQuestion() {
    displayQuestion(randomQuestions[currentQuestion]);
};
*/

/*
// display a question
function displayQuestion(question) {
    questionElement.innerText = data.results.question
    question.answer.forEach((answer) => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (asnwer.correct) {
            button.dataset.innerText = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerELement.appendChild(button)
    });
};
*/

/*
// Display score then game is finished
function displayScore() {

}
*/

/*
// Tutor's help
function getData(difficulty) {

    var url = `https://opentdb.com/api.php?amount=10&difficulty=easy`

    // var url = `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`

    // Create a request
    var xhttp = new XMLHttpRequest();

    // Set the request as we want it
    xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

        // Code to be ran if the request is succesful
        var data_as_string = this.responseText;
        var data_as_object = JSON.parse(this.responseText);
        console.log("*** data_as_string ***");
        console.log(data_as_string);
        console.log("*** data_as_object ***");
        console.log(data_as_object);

        // If we wanted to put the data in the "demo" tag in our html code:
        // document.getElementById("demo").innerHTML = this.responseText;

    } else if (this.readyState == 4 && this.status != 200) {

        // Code to be ran if the request is not successful
        console.log("An error happened.");

    }

  };

  // Send the request
  xhttp.open("GET", url, true);
  xhttp.send();

}

getData("Easy");

// Tutor's help - end
*/





//let questionCounter = 0;
//let acceptingAnswers = true;
//let score = 0;//
//const question = document.getElementById('questionTitle')
//const choice = Array.from(document.getElementByClassName('qst-btn'));
//const questionElement = document.getElementById('question')

//let availableQuestions = [];
//let currentQuestion = {};

// CONSTANTS
//const CORRECT_BONUS = 1;

/*
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [];
    getNewQuestion();
}
startGame();

getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
}
*/

/*
function getValues(){
const select = $(".selectSomething");
	select.click(function() {
		console.log($(this).val())
		})
}
*/

 //var availableQuestions = questionArray.concat(questionOptions, questionAnswer);
            //console.log(availableQuestions);
/*let availableQuestions = [questionArray, questionOptions, questionAnswer];
let question = availableQuestions[0][2];
let options = availableQuestions[1][2];
let answer = availableQuestions[2][2];

let newQuestion = [question, options, answer];
console.log(newQuestion);*/

