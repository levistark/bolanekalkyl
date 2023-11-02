function getResult() {
    
    const housePrice = parseFloat(document.querySelector('#inp-housePrice').value)
    const deposit = parseFloat(document.querySelector('#inp-deposit').value)
    const interest = parseFloat(document.querySelector('#inp-interest').value)/100
    const income = parseFloat(document.querySelector('#inp-income').value)*0.66
    const opCosts = parseFloat(document.querySelector('#inp-opCosts').value)
    const otherCosts = parseFloat(document.querySelector('#inp-otherCosts').value)
    const amortizationPerYear = parseFloat(document.querySelector('#inp-amortization').value)/100
    const totalCostResult = document.querySelector('#li-totalCost')
    const moneyLeftResult = document.querySelector('#li-moneyLeft')

    const loanSum = housePrice - deposit;
    const amortizationPerMonth = (amortizationPerYear * loanSum) / 12
    const interestPerMonth = amortizationPerMonth * interest
    const totalCostsPerMonth = amortizationPerMonth + interestPerMonth + opCosts + otherCosts
    const moneyLeft = income - totalCostsPerMonth

    totalCostResult.textContent = totalCostsPerMonth.toFixed(1) + ' SEK'
    moneyLeftResult.textContent = moneyLeft.toFixed(1) + ' SEK'
}



function validateInputFields() {
    const errorMessage = "Du måste fylla i ett värde"
    const inputFields = document.querySelectorAll('input[type=\'number\']')
    const checkBoxes = document.querySelectorAll('input[type=\'checkbox\']');
    
    let results = []
    let checkBoxArray = []
    

    for (checkBox of checkBoxes) {
        if (checkBox.checked) {
            checkBox = true
            checkBoxArray.push(checkBox)

        } else {
            checkBox = false
            checkBoxArray.push(checkBox)
        }
    }
    
    const areAllFalse = checkBoxArray.every(element => element === false);

    if (areAllFalse) {
        document.querySelector('.radio-text').textContent = errorMessage
    } else {
        document.querySelector('.radio-text').textContent = ''
    }



    for (input of inputFields) {
        if (input.value === '') {
            input.classList.add('warning')
            input.previousElementSibling.textContent = errorMessage
            input = false
            results.push(input)
            
        } else {
            input.classList.remove('warning')
            input.previousElementSibling.textContent = ''
        }
    }

    if (!results.includes(false) && checkBoxArray.includes(true)) {
        getResult()
    }
}

