
// window.onload = init;

// let principalField, interestRateField, loanLengthField, answerField

// function init () {
//     document.getElementById("buttonSubmit").addEventListener("click", calculateMortgage)
//     // Get user input 
//     answerField = document.getElementById("answerField");
//     principalField = document.getElementById("principalField");
//     interestRateField = document.getElementById("interestRateField");
//     loanLengthField = document.getElementById("loanLengthField");
// }

// function calculateMortgage(){
//     console.log(principalField, answerField, interestRateField)
// }
// Convert Interest Rate 

// Calculate monthly payment 

// Calculate Total Interest Paid 

// Display result 


window.onload = init;

let principalField, interestRateField, loanLengthField, answerField;

function init() {
    answerField = document.getElementById("answerField");
    principalField = document.getElementById("principalField");
    interestRateField = document.getElementById("interestRateField");
    loanLengthField = document.getElementById("loanLengthField");

    document.getElementById("buttonSubmit").addEventListener("click", calculateMortgage);
}

function calculateMortgage() {
    // Get User Input
    let principal = parseFloat(principalField.value);
    let interestRate = parseFloat(interestRateField.value) / 100; // Convert percentage to decimal
    let loanLength = parseInt(loanLengthField.value);

    // Convert Interest Rate
    let monthlyInterestRate = interestRate / 12;

    // Calculate Monthly Payment
    let numberOfPayments = loanLength * 12;
    let monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    // Calculate Total Interest Paid
    let totalInterestPaid = (monthlyPayment * numberOfPayments) - principal;

    // Display Results
    answerField.value = `Monthly Payment: $${monthlyPayment.toFixed(2)}, Total Interest Paid: $${totalInterestPaid.toFixed(2)}`;
}