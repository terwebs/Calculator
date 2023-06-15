let btnValue = 0;
let btnValue2 = 0;
let number1 = 0;
let total = 0;

const displayNum = document.querySelector('#displayNum')
const displayOp = document.querySelector("#displayOp")
const sumBtn = document.querySelector("#sum")
const numberButtons = document.querySelectorAll('#number')
const equalBtn = document.querySelector("#result")
const clearButtons = document.querySelectorAll("#clear")

//getting the value of all buttons
const getValue = (button) =>{
    button.addEventListener('click', ()=> {
        btnValue = button.innerText;    
        displayNum.innerText = btnValue;
        // console.log(btnValue, typeof(btnValue))
        btnValue
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
    return number1
})

equalBtn.addEventListener('click', () => {
    total = parseInt(number1) + parseInt(btnValue)
    displayOp.innerText = `${number1} + ${btnValue}`
    displayNum.innerText = total
})

for (button of clearButtons){
    button.addEventListener('click', ()=> {
        btnValue = 0
        number1 = 0
        total = 0
        displayOp.innerText = ``
        displayNum.innerText = 0
    })
}

// display number when a number is press

// save number when operator is press

// operate when = is press