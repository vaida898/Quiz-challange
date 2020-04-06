/*document.getElementById('category-select').addEventListener
('click', selectCat);*/


function selectCat() {
    const categorySelect = $('#category-select');
    fetch('https://opentdb.com/api_category.php')
        .then((res) => res.json())
        .then((data) => {
            data.trivia_categories.forEach(category => {
                categorySelect.append(
                    `<option value="${category.id}">${category.name}</option>`,
                );
            });
        })
}
                   
selectCat();





















/*
function getQuestions(categoryID, difficulty){
	const questionDiv = $("#questions");
	fetch(`https://opentdb.com/api.php?amount=10&category=${categoryID}&difficulty=${difficulty}`)
	.then(res => res.json())
	.then(data => {
		data.results.forEach(question => {
			questionDiv.append(`
			<h1>${question.question}<h1>`)
		})
	}) 
}
function getValues(){
const select = $(".selectSomething");
	select.click(function() {
		console.log($(this).val())
		})
}






