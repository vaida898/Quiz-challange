fetch('https://opentdb.com/api.php?amount=10').then((res) => res.json()).then((data) => {
                               let output = '<h8>Categories</h8>';
for (let i = 0; i < data.length; i++) {
    document.getElementById("category-select").innerHTML += `<option>${data[i].category}</option>`;
}

});