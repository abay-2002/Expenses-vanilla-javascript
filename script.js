// ====== DAY/NIGHT-MODE ======
let darkMode = document.getElementById('ganti');
var body = document.getElementsByTagName('body')[0];

darkMode.addEventListener('click',function(){
    darkMode.classList.toggle('toggle-mode-night');
    body.classList.toggle('dark-mode');
});
// ===== DAY/NIGHT-MODE CLOSE =====






// ===== POPUP-CONFIRM =====
// pop-up-confirm-wrapper
let confirmWrapper = document.createElement('div');
confirmWrapper.setAttribute('class', 'pop-up-confirm-wrapper');

// pop-up-confirm
let confirmPopUp = document.createElement('div');
confirmPopUp.setAttribute('class', 'pop-up-confirm bg-warning');

// p
let pAsk = document.createElement('p');
pAsk.setAttribute('class', 'text-dark');
pAsk.innerHTML = "Yakin ingin hapus?";

// ask-button-ok
let confirmOk = document.createElement('button');
confirmOk.setAttribute('class', 'btn btn-danger');
confirmOk.innerHTML = "Ok";

// ask-button-cancel
let confirmCancel = document.createElement('button');
confirmCancel.setAttribute('class', 'btn btn-danger');
confirmCancel.innerHTML = "Cancel";

confirmPopUp.appendChild(pAsk);
confirmPopUp.appendChild(confirmOk);
confirmPopUp.appendChild(confirmCancel);

confirmWrapper.appendChild(confirmPopUp);
// ===== POPUP-CONFIRM CLOSE =====







// ==== EXPENSE INPUT ====
// title
let titleInput = document.getElementById("title-input");
titleInput.addEventListener('change',function(event){
    valueTitle = event.target.value;
});

// amount
let amountInput = document.getElementById("amount-input");
amountInput.addEventListener('change',function(event){
    valueAmount = parseInt(event.target.value);
});

// date
let dateInput = document.getElementById("date-input");
dateInput.addEventListener('change',function(event){
    valueDate = parseInt(event.target.value);
});
// ==== EXPENSE INPUT CLOSE ====




// ==== MY EXPENSE ====
let ol = document.getElementById('expense-wrapper');





// ==== TOTAL ====
let nilaiAwal = 0;
let total = document.getElementById('total');





// ==== BUTTON SUBMIT ====
let buttonSubmit = document.getElementById("expense-submit");
buttonSubmit.addEventListener("click", function(event){
    event.preventDefault();

    expenseInput = {
        date: new Date(valueDate),
        title: valueTitle,
        amount: valueAmount 
    }

    // ==== MY EXPENSE ELEMENT ====
    // li
    let li = document.createElement('li');
    li.setAttribute('class', 'expense');

    // date
    let divExpenseEntity = document.createElement('div');
    divExpenseEntity.setAttribute('class','date expense-entity');
    let d = expenseInput.date;
    divExpenseEntity.innerHTML = d.toLocaleDateString();

    // title
    let divTitleEntity = document.createElement('div');
    divTitleEntity.setAttribute('class','title expense-entity');
    divTitleEntity.innerHTML = expenseInput.title;

    // amount
    let divAmountEntity = document.createElement('div');
    divAmountEntity.setAttribute('class','amount expense-entity');    
    divAmountEntity.innerHTML = "Rp." + expenseInput.amount;

    // delete button
    let delButton = document.createElement('button');
    delButton.setAttribute('class', 'btn btn-danger');
    delButton.innerHTML = "Delete";

    // my expenses element
    ol.appendChild(li);

    li.appendChild(divExpenseEntity);
    li.appendChild(divTitleEntity);
    li.appendChild(divAmountEntity);
    li.appendChild(delButton);

    console.log(expenseInput);
    
    // ==== TOTAL ====
    let operasiTotal = nilaiAwal += valueAmount;
    total.innerHTML = "Expense total: Rp." + operasiTotal;

    // delete button function
    delButton.addEventListener('click', function(){        
        body.appendChild(confirmWrapper);
        confirmOk.addEventListener('click', function(){
            ol.removeChild(li);
            body.removeChild(confirmWrapper);

            // ==== TOTAL ====
            let operasiTotal = nilaiAwal -= valueAmount;
            total.innerHTML = "Expense total: Rp." + operasiTotal;
        });
        confirmCancel.addEventListener('click', function(){
            body.removeChild(confirmWrapper);
        });
    });

});
// ===== BUTTON SUBMIT CLOSE =====