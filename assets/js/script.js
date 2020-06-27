const playButton = document.getElementById('play-btn')
const startButton = document.getElementById('start-btn')
//const gameContainer = document.getElementById('question')
//const scoreContainer = document.getElementById('score')
//const submitButtton = document.getElementById('submit-btn')

const questionElement = document.getElementById('questionTitle')
//const answerELement = document.getElementsByClassName('qst-btn')

var selectedCategory;
var selectedDifficulty;
let currentQuestions, randomQuestions;


playButton.addEventListener('click', startGame)
startButton.addEventListener('click', dropdownOptions)
/*submitButton.addEventListener('click', () => {
    currentQuestions++
    nextQuestion()
})*/

// Start game
$("#play-btn").click(function startGame() {
    $("#selection").show().addClass("animation"); 
    $("#main").hide(); 
});

// Building quiz game
/*function quizGame() {
    const outputHTML = [];

}*/


function startGame() {
    console.log('started');
    //randomQuestions = question.sort(() => Math.random() - .5) 
    currentQuestions = 0
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


// Generate an URL link to fetch questions from API
function questionID() {
    dropdownOptions();
    //randomQuestions = question.sort(() => Math.random() - .5);
    const questionTitle = $('#questionTitle');
    fetch(`https://opentdb.com/api.php?amount=${selectedQuestions}&category=${selectedCategory}&difficulty=${selectedDifficulty}`)
        //.then(res => console.log(res))
        .then((res) => res.json())
        //.then((data) => console.log(data))
        .then((data) =>  {
            data.results.forEach(question => {
                questionTitle.append(
                    `<h1>${question.question}<h1>`,
                );
               //nextQuestion();
               //console.log(nextQuestion);
            });
        })
}
//questionID(selectedCategory, selectedDifficulty, selectedQuestions);


// Getting questions displayed from API
let counter = 0;

function getQuestion(data) {
    return question = data.results[counter].question;
}

// get next question
function nextQuestion() {
    displayQuestion(randomQuestions[currentQuestions])
}

// display a question
function displayQuestion(question) {
    questionElement.innerText = data.results.question
    question.answer.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text 
    button.classList.add('btn')
    if (asnwer.correct) {
        button.dataset.innerText = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerELement.appendChild(button)   
    })
}

// Select the answer 
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if(randomQuestions > currentQuestions + 1) {
        $("#question").show();
    } else {
        $("#score").show();
        $("#question").hide();
    }
}

// Display score then game is finished
function displayScore() {

}

            
// Select number of questions
/*
function getQuestions(categoryID, difficulty){
	const questionDiv = $("#questions-select");
	fetch(`https://opentdb.com/api.php?amount=10&category=${categoryID}&difficulty=${difficulty}`)
	.then(res => res.json())
	.then(data => {
		data.results.forEach(question => {
			questionDiv.append(`
			<h1>${question.question}<h1>`)
        })
        console.log(data);
	}) 
}
getQuestions();

// Start game

// Pick answer from four choices and press button submit

// Score and correct and wrong answers
*/


// Animations between page's loads
$("#start-btn").click(function () {
    $("#question").show().addClass("animation"); 
    $("#selection").hide(); 
});

$("#submit-btn").click(function () {
    $("#score").show().addClass("animation"); 
    $("#question").hide(); 
});

// Step one get the values from dropdowns 

// var category = ''

// Page loads shows only the start button 

// Click the start button

// Select a category 
// when a user selects a category
// save that to the category variable 
// example : https://stackoverflow.com/questions/11991007/jquery-get-the-selected-dropdown-value-on-change
// console.log(category)
// console.log(typeOf(category))
// use template literals to add category into url

// Select difficulty 

// Select number of q's 

// We knnow the URL will always look like this: 
// https://opentdb.com/api.php?amount=20&category=11&difficulty=easy

// Step two make a call to the API with user choices 
// var url = `https://opentdb.com/api.php?amount=20&category=${category}&difficulty=easy`



//Step three render questions to page 



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
function dropdownOptions() {
    let dropCat = document.getElementById("category-select").value;
    let dropDiff = document.getElementById("difficulty-select").value;    
    let dropQuestions = document.getElementById("questions-select").value;
    console.log(dropCat, dropDiff, dropQuestions);
}
dropdownOptions();
*/










/*


function getValues(){
const select = $(".selectSomething");
	select.click(function() {
		console.log($(this).val())
		})
}

*/




