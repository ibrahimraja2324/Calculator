//add
function addition() {
    
}
//subtract
//multiply
//divide

//operate

const buttons = document.querySelectorAll('button')
const display = document.querySelector('#display')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.innerText;
        if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
            display.value += ' ' + buttonValue + ' ';
        }
        else if (buttonValue === 'Clear') {
            display.value = " "
        }
        else if (buttonValue === 'Delete') {
            let displayValue = display.value.trim();
            display.value = displayValue.slice(0, -1);
        }
        else if (buttonValue === '=') {
            console.log(display.value.trim().toString())
            display.value = eval(display.value.trim());
            console.log(eval(display.value))
        } else {
            display.value += buttonValue
        }

    } )
})