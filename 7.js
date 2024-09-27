function getDietPlan() {
    const bmi = parseFloat(document.getElementById('bmiInput').value);
    let dietPlan = '';

    if (isNaN(bmi)) {
        dietPlan = 'Please enter a valid BMI.';
    } else if (bmi < 18.5) {
        dietPlan = 'To gain weight healthily, focus on nutrient-dense foods like nuts, seeds, avocados, and lean proteins. Incorporate whole grains, dairy, and healthy fats into meals. Eat frequent, balanced snacks, and consider high-calorie smoothies. Strength training can help build muscle mass. Stay hydrated and consult a nutritionist for personalized advice.' ;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        dietPlan = 'To gain weight healthily, focus on nutrient-dense foods like nuts, seeds, avocados, and lean proteins. Incorporate whole grains, dairy, and healthy fats into meals. Eat frequent, balanced snacks, and consider high-calorie smoothies. Strength training can help build muscle mass. Stay hydrated and consult a nutritionist for personalized advice.';
    } else if (bmi >= 25 && bmi < 29.9) {
        dietPlan = 'Focus on balanced meals with plenty of vegetables, lean proteins, and whole grains. Limit processed foods, sugars, and unhealthy fats. Stay hydrated and practice portion control. Regular physical activity, like walking or swimming, can help. Consult a healthcare professional for personalized advice and support.';
    } else {
        dietPlan = 'Focus on whole foods like vegetables, fruits, lean proteins, and whole grains. Avoid processed foods and sugary drinks. Control portion sizes and eat mindfully. Incorporate regular physical activity, even light exercises. Stay hydrated and get adequate sleep. Consult a healthcare provider for personalized advice.';
    }

    document.getElementById('dietPlan').textContent = dietPlan;
}
