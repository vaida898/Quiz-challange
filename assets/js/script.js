document.getElementById('category-select').addEventListener
('click', selectCat);


function selectCat() {
    const categorySelect = $('#category-select');
    fetch('https://opentdb.com/api_category.php')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            data.trivia_categories.forEach(category => {
                categorySelect.append(
                    `<option value="${category.id}">${category.name}</option>`,
                );
            });
        })
}
                   
selectCat();


document.getElementById("category-select").onchange = function() {myFunction()};

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




