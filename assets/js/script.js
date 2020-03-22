fetch('https://opentdb.com/api.php?amount=25').then((res) => res.json()).then((data) => {
                               let output = '<h8>Categories</h8>';
for (let i = 0; i < data.results.length; i++) {
    document.getElementById("category-select").innerHTML += `<option>${data.results[i].category}</option>`;
}
});