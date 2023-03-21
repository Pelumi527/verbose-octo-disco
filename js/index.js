const calculateTip = (tip) => {
    let bill = document.getElementById("bill-input").value
    let noOfPerson = document.getElementById("people-input").value
    let totalTip = bill*tip/100;
    let tipPerson = totalTip/noOfPerson

    document.getElementById("tip-amount").innerHTML= "$" + tipPerson.toFixed(2)
    document.getElementById("total-tip").innerHTML = "$" + totalTip.toFixed(2)
}


function reset(){
    document.getElementById("tip-amount").innerHTML= "$" + 0
    document.getElementById("total-tip").innerHTML = "$" + 0
    document.getElementById("bill-input").value = ""
    document.getElementById("people-input").value = ""
}

const customTip = () => {
    let custTip = document.getElementById("custom-tip").value
    calculateTip(custTip)
}




