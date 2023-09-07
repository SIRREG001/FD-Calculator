function calculateMaturityAmount() {
    //Get input values from the form elements

    const principle = parseFloat(document.getElementById('principle').value)
    const interestRate = parseFloat(document.getElementById('interestRate').value)
    const tenure = parseFloat(document.getElementById('tenure').value)


    //perform the calculation

    const maturityAmount = principle + (principle * interestRate * tenure) / 100;

    //display the result;

    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}

//Attach event listener to the calculator button

document.getElementById('calculatorBtn').addEventListener('click', calculateMaturityAmount);