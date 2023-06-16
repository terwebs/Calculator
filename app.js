let btnValue = "";
let operator = "";
let number1 = 0;
let total = 0;

const allbtn = document.querySelectorAll('button')
const displayNum = document.querySelector('#displayNum')
const displayOp = document.querySelector("#displayOp")
const sumBtn = document.querySelector("#sum")
const minBtn = document.querySelector("#minus")
const mulBtn = document.querySelector("#mult")
const divBtn = document.querySelector("#div")
const negativeBtn = document.querySelector("#negative")
const numberButtons = document.querySelectorAll('#number')
const equalBtn = document.querySelector("#result")
const clearButtons = document.querySelectorAll("#clear")
const backBtn = document.querySelector("#back")
const percentBtn = document.querySelector("#percent")

const getValue = (button) =>{
    button.addEventListener('click', ()=> {
        btnValue += button.innerText;   
        displayNum.innerText = btnValue;
        // console.log(btnValue)
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
    console.log('btnvalue',btnValue)
    console.log('displayu', displayNum.innerText)
    console.log('total',total)
    if(total === 0){
        number1 = btnValue
    } else{
        number1 = displayNum.innerText
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
        number1 = displayNum.innerText
    }
    displayOp.innerText = `${number1} - `
    btnValue = ""
    operator = "min"
    return number1, operator
})

mulBtn.addEventListener('click', () => {
    if(total === 0){
        number1 = btnValue
    } else{
        number1 = displayNum.innerText
    }
    displayOp.innerText = `${number1} * `
    btnValue = ""
    operator = "mul"
    return number1, operator
})

divBtn.addEventListener('click', () => {
    if(total === 0){
        number1 = btnValue
    } else{
        number1 = displayNum.innerText
    }
    displayOp.innerText = `${number1} ÷ `
    btnValue = ""
    operator = "div"
    return number1, operator
})


negativeBtn.addEventListener('click', ()=> {
    displayNum.innerText  = parseFloat(btnValue * -(1));
    btnValue = (btnValue * -(1))
})

backBtn.addEventListener('click', ()=> {
    btnValue = btnValue.toString()
    // console.log(btnValue, btnValue.length, typeof(btnValue))
    
    if (btnValue.length > 0){
        btnValue = btnValue.slice(0,btnValue.length-1)
        displayNum.innerText = btnValue
    }  
    if (btnValue === ''){
        displayNum.innerText = 0;
        btnValue = 0;
    }  
    
})

percentBtn.addEventListener('click', () => {
    if(total === 0){
        number1 = btnValue
    } else{
        number1 = displayNum.innerText
    }
    displayOp.innerText = `${number1} % `
    btnValue = ""
    operator = "percent"
    return number1, operator
})

equalBtn.addEventListener('click', () => {
    
    // console.log('number1', number1)
    // // number1 = displayNum.innerText
    // // console.log('number1', number1)

    // console.log(`${displayOp.innerText} ${displayNum.innerText}`)

    if (operator === "sum"){
        total = parseFloat(number1) + parseFloat(btnValue)
        displayOp.innerText = `${number1} + ${btnValue} = `
        
    } 
    else if (operator === "min"){
        total = parseFloat(number1) - parseFloat(btnValue)
        displayOp.innerText = `${number1} - ${btnValue} =`
      
    } else if (operator === "mul"){
        total = parseFloat(number1) * parseFloat(btnValue)
        displayOp.innerText = `${number1} * ${btnValue} =`
        
    }  else if (operator === "div"){
        total = parseFloat(number1) / parseFloat(btnValue)
        displayOp.innerText = `${number1} ÷ ${btnValue} =`
        
    }  else if (operator === "percent"){
        total = ((parseFloat(number1) / 100) * parseFloat(btnValue) )
        displayOp.innerText = `${number1} % ${btnValue} =`
    }
    // console.log('total', total)
    displayNum.innerText = total
    btnValue = total
})


for (button of clearButtons){
    button.addEventListener('click', ()=> {
        btnValue = "";
        number1 = 0
        total = 0
        operator = ''
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