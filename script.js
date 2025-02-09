// select the form inputs
const form = document.querySelector('form')
const amount = document.getElementById('amount');
const expense = document.getElementById('expense')
const category = document.getElementById('category')



// EVENT HANDLERS


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


    addNewExpense(newExpense) //calls the addNewExpense function 
}






// LOGIC 

//uses the newExpense object to add a new expense to the list
function addNewExpense(newExpense) {
    try {
        //creates the expense li
        const expenseItem = document.createElement('li');
        expenseItem.classList.add('expense')
        //creates the expense icon
        const expenseLogo = document.createElement('img')
        expenseLogo.setAttribute("src", `img/${newExpense.category_id}.svg`) //adds the icon by the expense category
        
    } catch (error) {
        alert(`Erro ao adiconar despesa: ${error}`)
    }
}

//function to format number to the brazilian currency
function formatCurrencyBRL(value) {
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
    return value
}


