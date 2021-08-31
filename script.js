// DAY/NIGHT-MODE
let darkMode = document.getElementById('ganti');
let body = document.getElementsByTagName('body')[0];

darkMode.addEventListener('click',function(){
    darkMode.classList.toggle('toggle-mode-night');
    body.classList.toggle('dark-mode');
});

// ==== EXPENSE INPUT ====
// title
let titleInput = document.getElementById("title-input");
titleInput.addEventListener('change',function(event){
    valueTitle = event.target.value;
});

// amount
let amountInput = document.getElementById("amount-input");
amountInput.addEventListener('change',function(event){
    valueAmount = event.target.value;
});

// date
let dateInput = document.getElementById("date-input");
dateInput.addEventListener('change',function(event){
    valueDate = event.target.value;
});
// ==== EXPENSE INPUT CLOSE ====


// ==== MY EXPENSE ====
let ol = document.getElementById('expense-wrapper');

// ==== BUTTON SUBMIT ====
let buttonSubmit = document.getElementById("expense-submit");
buttonSubmit.addEventListener("click", function(event){
    event.preventDefault();

    let expenseInput = {
        date: new Date(valueDate),
        title: valueTitle,
        amount: valueAmount
    }

    // ==== MY EXPENSE ====
    let li = document.createElement('li');
    li.setAttribute('class', 'expense');

    // date
    let divExpenseEntity = document.createElement('div');
    divExpenseEntity.setAttribute('class','date expense-entity');
    let d = expenseInput.date;
    divExpenseEntity.innerHTML = d.toDateString();

    // title
    let divTitleEntity = document.createElement('div');
    divTitleEntity.setAttribute('class','title expense-entity');
    divTitleEntity.innerHTML = expenseInput.title;

    // amount
    let divAmountEntity = document.createElement('div');
    divAmountEntity.setAttribute('class','amount expense-entity');
    divAmountEntity.innerHTML = "Rp." + expenseInput.amount;

    ol.appendChild(li);

    li.appendChild(divExpenseEntity);
    li.appendChild(divTitleEntity);
    li.appendChild(divAmountEntity);

    console.log(expenseInput); 
});










