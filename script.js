// select the form inputs
const form = document.querySelector('form')
const amount = document.getElementById('amount');
const expense = document.getElementById('expense')
const category = document.getElementById('category')

//select the expense elements
const expensesList = document.querySelector('ul')

//select the expense list header elemtents
const expensesHeader = document.querySelector('header')

// EVENT HANDLERS

//amount input: just-numbers validation 
amount.oninput = () => {
    let value = amount.value.replace(/\D/g, ""); //uses regex to remove all the non numeric characters
    value = Number(value) / 100 // transform the first inputs in cents
    amount.value = formatCurrencyBRL(value) // updates the input field value with the formated value
}

//catches the form submit event
form.onsubmit = (event) => {
    event.preventDefault() // prevents default form event behavior
    
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date()
    } // creates a new expense object using the form fields value
    
    addNewExpense(newExpense) //calls the addNewExpense function 
}
3
// APP LOGIC 

//uses the newExpense object to add a new expense to the list
function addNewExpense(newExpense) {
    try {
        //creates the expense li
        const expenseItem = document.createElement('li');
        expenseItem.classList.add('expense')
        
        //creates the expense icon
        const expenseLogo = document.createElement('img');
        expenseLogo.setAttribute("src", `img/${newExpense.category_id}.svg`) //adds the icon by the expense category
        expenseLogo.setAttribute('alt', `${newExpense.category_name}`)
        
        //creates a div to expense info
        const expenseInfo = document.createElement('div');
        expenseInfo.classList.add('expense-info')
        
        //creates elements into expense info
        const strong = document.createElement('strong');
        strong.innerText = `${newExpense.expense}`
        const span = document.createElement('span');
        span.innerText = `${newExpense.category_name}`
        
        //creates the expense amount element
        const expenseAmount = document.createElement('span');
        expenseAmount.classList.add('expense-amount');
        expenseAmount.innerHTML = `<small>R$ </small> ${newExpense.amount.toUpperCase().replace("R$", "")}`      
        console.log(newExpense.amount)
        
        //creates a remove icon 
        const expenseRemove = document.createElement('img');
        expenseRemove.classList.add('remove-icon');
        expenseRemove.setAttribute('src', 'img/remove.svg')
        expenseRemove.setAttribute('alt', 'remove icon')
        
        //insert the child elements in the father
        expenseInfo.append(strong, span)
        expenseItem.append(expenseLogo, expenseInfo, expenseAmount, expenseRemove);
        expensesList.append(expenseItem);
        
        //updates the total of list elemtents
        updateListTotal()

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

//function to format number to the brazilian currency
function formatCurrencyBRL(value) {
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
    return value
}

function updateListTotal() {
    try { 

        //adquires the total of list elements
        const listElements = expensesList.children
        
    } catch (error) {
        console.log(error);
        alert(error)
    }
}

