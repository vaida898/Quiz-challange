
fetch('https://opentdb.com/api.php?amount=25').then((res) => res.json()).then((data) => {
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
});