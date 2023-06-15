let btnValue = "";
let operator = "";
let number1 = 0;
let total = 0;
const allbtn = document.querySelectorAll('button')
const displayNum = document.querySelector('#displayNum')
const displayOp = document.querySelector("#displayOp")
const sumBtn = document.querySelector("#sum")

const minBtn = document.querySelector("#minus")

const numberButtons = document.querySelectorAll('#number')
const equalBtn = document.querySelector("#result")
const clearButtons = document.querySelectorAll("#clear")

//getting the value of all buttons
const getValue = (button) =>{
    button.addEventListener('click', ()=> {
        btnValue += button.innerText;   
        displayNum.innerText = btnValue;
        console.log(btnValue)
        if (displayNum.innerText.length > 6){
            displayOp.innerText = `You reached the limit - press C`
            disableCalc()
        } 
    })
   
    return btnValue
} 

for (button of numberButtons){
    getValue(button)
}

sumBtn.addEventListener('click', () => {
    if(total === 0){
        number1 = btnValue
    } else{
        number1 = total
    }
    displayOp.innerText = `${number1} + `
    btnValue = ""
    operator = "sum"
    return number1, operator
})

minBtn.addEventListener('click', () => {
    if(total === 0){
        number1 = btnValue
    } else{
        number1 = total
    }
    displayOp.innerText = `${number1} - `
    btnValue = ""
    operator = "min"
    return number1, operator
})


equalBtn.addEventListener('click', () => {
    if (operator === "sum"){
        total = parseInt(number1) + parseInt(btnValue)
        displayOp.innerText = `${number1} + ${btnValue}`
        displayNum.innerText = total
    } 
    else if (operator === "min"){
        total = parseInt(number1) - parseInt(btnValue)
        displayOp.innerText = `${number1} - ${btnValue}`
        displayNum.innerText = total
    }  
})


for (button of clearButtons){
    button.addEventListener('click', ()=> {
        btnValue = "";
        number1 = 0
        total = 0
        displayOp.innerText = ``
        displayNum.innerText = 0
        for (button of allbtn){
            button.disabled = false;
        }
    })
}

const disableCalc = function(){
    for (button of allbtn){
        button.disabled = true;
    }
    for (button of clearButtons){
        button.disabled = false;
    }
}
// if(displayNum.innerText.length)

// // display number when a number is press

// // save number when operator is press

// // operate when = is press