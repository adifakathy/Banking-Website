document.getElementById('deposit-btn').addEventListener(
    'click', function () {
        const depositInput = document.getElementById('deposit-input');
        const depositAmountText = depositInput.value;
        depositAmount = parseFloat(depositAmountText);

        //get current deposit

        const depositTotal = document.getElementById('deposit-total');
        const depositTotaltext = depositTotal.innerText;
        previousdepositTotal = parseFloat(depositTotaltext);
        depositTotal.innerText = previousdepositTotal + depositAmount;
        
        //update balance
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        previousbalanceTotal = parseFloat(balanceTotalText);

        balanceTotal.innerText = previousbalanceTotal + depositAmount;

        //clear input field
        depositInput.value = '';

});
    
//handle withdraw button

document.getElementById('withdaw-btn').addEventListener(
    'click', function () {
        const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmountText = withdrawInput.value;
        withdrawAmount = parseFloat(withdrawAmountText);

        //update withdraw total
        const withdrawTotal = document.getElementById('withdraw-total');
        withdrawTotalText = withdrawTotal.innerText;
        previouswithdrawTotal = parseFloat(withdrawTotalText);
        withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount;

        //update balance after total

        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        previousbalanceTotal = parseFloat(balanceTotalText);

        balanceTotal.innerText = previousbalanceTotal - withdrawAmount;

        //clear input field
        withdrawInput.value = '';

    })