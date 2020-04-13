$("#play-btn").click(function () {
    $("#selection").show().addClass("animation"); 
    $("#main").hide(); 
});

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
/*var url = `https://opentdb.com/api.php?amount=20&category=${category}&difficulty=easy`



document.getElementById('category-select').addEventListener
('click', selectCat);
*/
//Step three render questions to page 
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

/*
document.getElementById("category-select").onchange = function() {myFunction()};

function myFunction() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = x;
}


function myFunction() {
  var x = document.getElementById("category-select");
  x.value = x.value.toUpperCase();
}




function GetSelectedItem(el)
{
    var e = document.getElementById(el);
    var strSel = "The Value is: " + e.options[e.selectedIndex].value + " and text is: " + e.options[e.selectedIndex].text;
    alert(strSel);
}

*/





















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




