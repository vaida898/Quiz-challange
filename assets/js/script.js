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
            console.log(data);
        })
}
           
        
selectCat();


/*
function myFunction() {
  const categorySelect = $('#category-select');
  fetch('https://opentdb.com/api_category.php')
    .then(res => res.json())
    .then(data => {
      data.trivia_categories.forEach(category => {
        categorySelect.append(
          `<option value="${category.id}">${category.name}</option>`,
        );
      });
    });
}



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






/*fetch('https://opentdb.com/api.php?amount=25').then((res) => res.json()).then((data) => {
                               let output = '<h8>Categories</h8>';
for (let i = 0; i < data.results.length; i++) {
    document.getElementById("category-select").innerHTML += `<option>${data.results[i].category}</option>`;
}
});

fetch('https://opentdb.com/api.php?amount=3').then((res) => res.json()).then((data) => {
                                let output = '<h8>Difficulties</h8>';
for (let i = 0; i < data.results.length; i++) {
    document.getElementById("difficulty-select").innerHTML += `<option>${data.results[i].difficulty}</option>`;
}
});


fetch('https://opentdb.com/api.php?amount=25').then((res) => res.json()).then((data) => {
                               let output = '<h8>Questions</h8>';
for (let i = 0; i < data.results.length; i++) {
    document.getElementById("questions-select").innerHTML += `<option>${data.results[i].question}</option>`;
}
});*/