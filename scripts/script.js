const btnResult = document.querySelector('.btn-result');

btnResult.addEventListener('click', function getResult() {
    
    const housePrice = parseFloat(document.querySelector('#inp-housePrice').value);
    const deposit = parseFloat(document.querySelector('#inp-deposit').value);
    const interest = parseFloat(document.querySelector('#inp-interest').value)/100;
    const income = parseFloat(document.querySelector('#inp-income').value);
    const opCosts = parseFloat(document.querySelector('#inp-opCosts').value);
    const otherCosts = parseFloat(document.querySelector('#inp-otherCosts').value);
    const amortizationPerYear = parseFloat(document.querySelector('#inp-amortization').value)/100;
    const totalCostResult = document.querySelector('#li-totalCost');
    const moneyLeftResult = document.querySelector('#li-moneyLeft');

    const loanSum = housePrice - deposit;
    const amortizationPerMonth = (amortizationPerYear * loanSum) / 12;
    const interestPerMonth = amortizationPerMonth * interest;
    const totalCostsPerMonth = amortizationPerMonth + interestPerMonth + opCosts + otherCosts;
    const moneyLeft = income - totalCostsPerMonth;

    totalCostResult.textContent = totalCostsPerMonth.toFixed(1) + ' SEK';
    moneyLeftResult.textContent = moneyLeft.toFixed(1) + ' SEK';
});