// Play Game
$("#play-btn").click(function () {
    $("#selection").show().addClass("animation"); 
    $("#main").hide(); 
});

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
/*var e = document.getElementById("category-select");
var categoryID = e.options[e.selectedIndex].value;

var e = document.getElementById("category-select");
var categoryID  = e.options[e.selectedIndex].text;
console.log(categoryID);*/

// Select difficulty level

function GetSelectedDifficulty(){
				var e = document.getElementById("difficulty-select");
				var result = e.options[e.selectedIndex].value;
				
				document.getElementById("result").innerHTML = result;
			}

			function GetSelectedText(){
				var e = document.getElementById("difficulty-select");
				var result = e.options[e.selectedIndex].text;
				
				document.getElementById("result").innerHTML = result;
			}

// Select number of questions

// Config object to store all picked options from selection section

let config = {
    'category' : '',
    'difficulty' : '',
    'questions' : ''
}



// Start game

// Pick answer from four choices and press button submit

// Score and correct and wrong answers

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

function getValues(){
const select = $(".selectSomething");
	select.click(function() {
		console.log($(this).val())
		})
}

*/




