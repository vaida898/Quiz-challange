const playButton = document.getElementById('play-btn')
const startButton = document.getElementById('start-btn')

playButton.addEventListener('click', startGame)
startButton.addEventListener('click', dropdownOptions)


// Start game
$("#play-btn").click(function startGame() {
    $("#selection").show().addClass("animation"); 
    $("#main").hide(); 
});

function startGame() {
    console.log('started');
    setNextQuestion()
}

// Get another question 
function setNextQuestion() {

}

// Select the answer 
function selectAnswer() {

}

// Select Category and save variable
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

// Options from dropdown menu are saved to URL

function dropdownOptions () {
    let dropCat = document.getElementById("category-select").value;
    let dropDiff = document.getElementById("difficulty-select").value;    
    let dropQuestions = document.getElementById("questions-select").value;
    console.log(dropCat, dropDiff, dropQuestions);
}
dropdownOptions();

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



// Select difficulty level

function selectDiff(difficulty, questions) {
    const difficultySelect = $('#difficulty-select');
    const numberOfQuestions = $('#questions-select');
    fetch(`https://opentdb.com/api.php?difficulty=${difficulty}`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            data.results.forEach(difficulty => {
                difficultySelect.append(
                    `<option value="${difficulty}"></option>`,
                );
            });
        })
}
selectDiff('Easy');

//var selectedDifficulty = document.getElementById("difficulty-select");
//var newDifficulty = selectedDifficulty.options[selectedDifficulty.selectedIndex].value;
            
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

// Animations between page's loads
*/
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


function getValues(){
const select = $(".selectSomething");
	select.click(function() {
		console.log($(this).val())
		})
}

*/




