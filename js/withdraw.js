
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const newWithdraw = getInputValue('withdraw-input')
    // console.log(newWithdraw)


    const previousWithdraw = getElementValue('withdraw-total')
    console.log(previousWithdraw)


    const currentWithdraw = newWithdraw + previousWithdraw
    setElementById('withdraw-total', currentWithdraw)


    const previousBalance = getElementValue('total-balance')
    const currentBalance = previousBalance - newWithdraw
    setElementById('total-balance', currentBalance)


    // console.log(previousBalance)



    // const total = getElementById('total-balance')


    // setElementById('total-balance', total)
    // console.log(currentWithdraw) 

})