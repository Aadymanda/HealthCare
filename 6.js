function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const resultElement = document.getElementById('result');
        
        let resultText = `Your BMI is ${bmi.toFixed(2)}.`;
        
        if (bmi < 18.5) {
            resultText += ' You are underweight.';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            resultText += ' You are normal weight.';
        } else if (bmi >= 25 && bmi < 29.9) {
            resultText += ' You are overweight.';
        } else {
            resultText += ' You are obese.';
        }
        
        resultElement.textContent = resultText;
    } else {
        alert('Please enter valid values.');
    }
}
