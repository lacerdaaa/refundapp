// select the form inputs
const form = document.querySelector('form')
const amount = document.getElementById('amount');
const expense = document.getElementById('expense')
const category = document.getElementById('category')

//amount input: just-numbers validation 
amount.oninput = () => {
    let value = amount.value.replace(/\D/g, ""); //uses regex to remove all the non numeric characters
    value = Number(value) / 100 // transform the first inputs in cents
    amount.value = formatCurrencyBRL(value) // updates the input field value with the formated value
}

//function to format number to the brazilian currency
function formatCurrencyBRL(value) {
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
    return value
}

//catches the form submit event
form.onsubmit = (event) => {
    event.preventDefault() // prevents default form event behavior
}