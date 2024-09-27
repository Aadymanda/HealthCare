var foodOptions = [
    {"name": "Apple", "calories": 95, "protein": 0.5, "carbs": 25, "fat": 0.3},
    {"name": "Egg", "calories": 68, "protein": 5.5, "carbs": 0.6, "fat": 4.8},
    {"name": "Chicken Breast", "calories": 165, "protein": 31, "carbs": 0, "fat": 3.6}
    // Add more foods as necessary.
];

// Load food options into the select element when the page loads.
window.onload = function () {
    var selectFood = document.getElementById('select-food');
    for (var i = 0; i < foodOptions.length; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = foodOptions[i].name;
        selectFood.appendChild(opt);
    }
};

// Initialize nutritional totals to 0.
var totalCalories = 0, totalProtein = 0, totalCarbs = 0, totalFat = 0;

// Function to add selected food's nutrition to overall total.
function addFood() {
    var selectFood = document.getElementById('select-food');
    var selectedFood = foodOptions[selectFood.value];

    totalCalories += selectedFood.calories;
    totalProtein += selectedFood.protein;
    totalCarbs += selectedFood.carbs;
    totalFat += selectedFood.fat;

    document.getElementById('calories').innerHTML = "Calories: " + totalCalories;
    document.getElementById('protein').innerHTML = "Protein: " + totalProtein + "g";
    document.getElementById('carbs').innerHTML = "Carbs: " + totalCarbs + "g";
    document.getElementById('fat').innerHTML = "Fat: " + totalFat + "g";
}