document.getElementById('deposit-btn').addEventListener('click', function () {
    // step-1
    // i.get element by id name
    // ii.take const and put the element in this const
    // iii.convert the string value to number 


    // step-2
    // clear the input value



    const newDeposit = getInputValue('deposit-input')
    // console.log(newDeposit)


    // step-3
    const previousDeposit = getElementValue('deposit-total')
    // console.log(previousDeposit)


    //step-4 set the new Value

    const currentDeposit = newDeposit + previousDeposit

    setElementById('deposit-total', currentDeposit)



    // find the balance
    const balanceElement = getElementValue('total-balance')

    // caculate the balance
    const total = newDeposit + balanceElement

    // set the new balance
    setElementById('total-balance', total)
    console.log(total)









})