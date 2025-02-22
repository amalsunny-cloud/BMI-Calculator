function checkBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100;
    let result = document.getElementById("result");
    const arrow = document.getElementById('arrow');
    let warning = document.getElementById('warning');
    let category = document.getElementById('category');
    

    
    // Check if gender is selected
    if (!document.querySelector('input[name="gender"]:checked')) {
        warning.textContent = "Please select the gender!";
        warning.style.cssText = "color:red;font-weight:bold";
        result.textContent = "";
        category.textContent = "";
        arrow.setAttribute('transform', 'translate(0, 8)');
        return;
    }
    
    warning.textContent = "";
    

    // Validating weight and height
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        result.textContent = "Please enter valid weight and height";
        category.textContent = "";
        arrow.setAttribute('transform', 'translate(0, 8)');
        return;
    }
    


    // Calculate BMI
    const bmi = weight / (height * height);
    const roundedBmi = bmi.toFixed(1);
    result.textContent = `BMI: ${roundedBmi}`;
    


    // Determine BMI category and set arrow position
    let arrowPosition;
    if (bmi < 18.5) {
        category.textContent = "Underweight";
        category.style.cssText = "color: #00bbf0; font-weight: bold;";
        arrowPosition = (bmi / 18.5) * 100;
    } else if (bmi >= 18.5 && bmi < 25) {
        category.textContent = "Normal Weight";
        category.style.cssText = "color: green; font-weight: bold;";
        arrowPosition = 100 + ((bmi - 18.5) / 6.5) * 100;
    } else if (bmi >= 25 && bmi < 30) {
        category.textContent = "Overweight";
        category.style.cssText = "color: #ffc93c; font-weight: bold;";
        arrowPosition = 200 + ((bmi - 25) / 5) * 100;
    } else {
        category.textContent = "Obese";
        category.style.cssText = "color: red; font-weight: bold;";
        arrowPosition = 300 + Math.min(((bmi - 30) / 10) * 100, 100);
    }
    
    // Setting arrow position
    arrow.setAttribute('transform', `translate(${arrowPosition}, 8)`);
}