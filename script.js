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

    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amout: amount.value, 
        created_at: new Date()
    } // creates a new expense object using the form fields value

    

}

