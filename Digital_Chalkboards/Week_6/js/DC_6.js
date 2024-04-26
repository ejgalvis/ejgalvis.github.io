function lastItem(array) {
    var originalArray = array.slice();
    var sortedArray = array.sort();

    var selectedElement = document.getElementById('fruit');
    selectedElement.innerText = `The original array is [${originalArray}], and I sorted it alphabetically. The last item of the sorted array is ${sortedArray[sortedArray.length - 1]}.`;
}

function getAndSort() {

    const responses = {};

    while (isNaN(numberOfCategories) || numberOfCategories <2 || numberOfCategories > 4 || !(Number.isInteger(numberOfCategories))){
        var numberOfCategories = Number(prompt("How many categories would you like to enter? Choose between 2 and 4."));
    }

    // Collect object(s) from input
    for (let i = 0; i < numberOfCategories; i++) {
        let catInput = prompt(`Enter category ${i+1} of ${numberOfCategories}.`)
        let catItem = prompt(`Enter your ${catInput}`)
        responses[catInput] = catItem;
      };

    // Sort the objects alphabetically (by keys)
    const responseValues = Object.values(responses).sort();

    for (const value of responseValues) {
        let newDiv = document.createElement("h4");
        newDiv.innerHTML = `Sorted alphabetically by each object, your ${Object.keys(responses).find(key => responses[key] === value).toLowerCase()} is ${value}`
        document.getElementById('outputArray').appendChild(newDiv)
      }
}
