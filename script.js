const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");

const description = document.getElementById("description");
const amount = document.getElementById("amount");
const type = document.getElementById("type");

const addBtn = document.getElementById("add-btn");
const transactionList = document.getElementById("transaction-list");

let balanceAmount = 0;
let incomeAmount = 0;
let expenseAmount = 0;

addBtn.addEventListener("click", function () {

    const text = description.value.trim();
    const value = Number(amount.value);

    if (text === "" || value <= 0) {
        alert("Please enter description and amount");
        return;
    }

    const li = document.createElement("li");

    if (type.value === "income") {

        balanceAmount += value;
        incomeAmount += value;

        li.innerHTML =
            text +
            " + ₹" +
            value +
            ' <button class="delete-btn">Delete</button>';

    } else {

        balanceAmount -= value;
        expenseAmount += value;

        li.innerHTML =
            text +
            " - ₹" +
            value +
            ' <button class="delete-btn">Delete</button>';
    }

    const deleteBtn = li.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function () {

        if (li.innerHTML.includes("+ ₹")) {

            balanceAmount -= value;
            incomeAmount -= value;

        } else {

            balanceAmount += value;
            expenseAmount -= value;
        }

        balance.textContent = "₹" + balanceAmount;
        income.textContent = "₹" + incomeAmount;
        expense.textContent = "₹" + expenseAmount;

        li.remove();
    });

    transactionList.appendChild(li);

    balance.textContent = "₹" + balanceAmount;
    income.textContent = "₹" + incomeAmount;
    expense.textContent = "₹" + expenseAmount;

    description.value = "";
    amount.value = "";
    type.value = "income";

});