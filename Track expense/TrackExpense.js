const usernameInput = document.getElementById('username');
const greeting = document.getElementById('greeting');
const expenseDesc = document.getElementById('expense-desc');
const expenseAmount = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');

// Load saved username
const savedUsername = localStorage.getItem('username');
if (savedUsername) {
    greeting.textContent = `Hello, ${savedUsername}!`;
    usernameInput.value = savedUsername;
}

// Save username
function saveUsername() {
    const username = usernameInput.value;
    if (username) {
        localStorage.setItem('username', username);
        greeting.textContent = `Hello, ${username}!`;
    }
}

// Add expense
function addExpense() {
    const desc = expenseDesc.value;
    const amount = expenseAmount.value;

    if (desc && amount) {
        const li = document.createElement('li');
        li.innerHTML = `${desc} - ₹${amount} <button onclick="deleteExpense(this)">Delete</button>`;
        expenseList.appendChild(li);

        // Clear inputs
        expenseDesc.value = '';
        expenseAmount.value = '';
    }
}

// Delete expense
function deleteExpense(button) {
    button.parentElement.remove();
}
