// script.js
function predictHeartDisease() {
    const age = parseInt(document.getElementById('age').value);
    const sex = document.getElementById('sex').value;
    const cholesterol = parseInt(document.getElementById('cholesterol').value);
    const bloodPressure = parseInt(document.getElementById('blood-pressure').value);
    const smoking = document.getElementById('smoking').value;

    let riskScore = 0;

    // Simplified risk calculation (This is just a placeholder logic)
    riskScore += age > 45 ? 1 : 0;
    riskScore += sex === 'male' ? 1 : 0;
    riskScore += cholesterol > 200 ? 1 : 0;
    riskScore += bloodPressure > 120 ? 1 : 0;
    riskScore += smoking === 'yes' ? 1 : 0;

    let result = 'Low risk of heart disease.';
    if (riskScore >= 3) {
        result = 'High risk of heart disease. Please consult a doctor.';
    }

    document.getElementById('result').innerText = result;
}
